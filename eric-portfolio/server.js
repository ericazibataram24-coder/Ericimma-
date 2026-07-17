const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

let subscribers = [];
let appointments = [];

app.post('/api/subscribe', (req, res) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ error: "Email is required" });
    }
    subscribers.push({ email, date: new Date() });
    console.log(`[Database Alert] New Subscriber: ${email}`);
    return res.status(200).json({ success: true, message: "Subscription saved successfully!" });
});

app.post('/api/book', (req, res) => {
    const { name, email, details } = req.body;
    if (!name || !email || !details) {
        return res.status(400).json({ error: "All booking fields are required." });
    }
    appointments.push({ name, email, details, date: new Date() });
    console.log(`[Database Alert] New Appointment Booked: ${name} (${email})`);
    return res.status(200).json({ success: true, message: "Appointment registered successfully!" });
});

// Express 5 compatible catch-all route
app.get('*any', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`>>> Server online and running on http://localhost:${PORT}`);
});
