const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// In-memory databases (will reset when server restarts, perfect for testing!)
let subscribers = [];
let appointments = [];
let posts = [
    {
        id: 1,
        title: "Welcome to our Learning Hub!",
        content: "This is where I will be posting updates, course materials, and study guides. Stay tuned!",
        date: new Date().toLocaleDateString()
    }
];

// --- VIEWER API ENDPOINTS ---

// Get all posts to display on the homepage
app.get('/api/posts', (req, res) => {
    res.json(posts);
});

// Book an appointment
app.post('/api/book', (req, res) => {
    const { name, email, details } = req.body;
    if (!name || !email || !details) {
        return res.status(400).json({ error: "All booking fields are required." });
    }
    appointments.push({ name, email, details, date: new Date().toLocaleString() });
    return res.status(200).json({ success: true, message: "Appointment registered successfully!" });
});

// Subscribe to updates
app.post('/api/subscribe', (req, res) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ error: "Email is required" });
    }
    subscribers.push({ email, date: new Date().toLocaleString() });
    return res.status(200).json({ success: true, message: "Subscription saved successfully!" });
});


// --- ADMIN API ENDPOINTS (For Your Eyes Only) ---

// Get all database info for your admin panel
app.get('/api/admin/data', (req, res) => {
    res.json({ subscribers, appointments });
});

// Create a new post/course update
app.post('/api/admin/posts', (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({ error: "Title and content are required." });
    }
    const newPost = {
        id: posts.length + 1,
        title,
        content,
        date: new Date().toLocaleDateString()
    };
    posts.unshift(newPost); // Adds newest post to the top
    res.status(201).json({ success: true, post: newPost });
});


// Express 5 compatible catch-all route
app.get('*any', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`>>> Server online and running on http://localhost:${PORT}`);
});
