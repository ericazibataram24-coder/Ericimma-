document.addEventListener("DOMContentLoaded", () => {
    // 1. HAMBURGER MENU FUNCTIONALITY
    const mobileMenuBtn = document.getElementById("mobileMenu");
    const navMenu = document.getElementById("navMenu");

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            navMenu.classList.toggle("active");
            if (navMenu.classList.contains("active")) {
                navMenu.style.display = "flex"; 
            } else {
                navMenu.style.display = "none";
            }
        });

        // Close menu if clicking anywhere else on the screen
        document.addEventListener("click", () => {
            navMenu.classList.remove("active");
            if (window.innerWidth <= 768) {
                navMenu.style.display = "none";
            }
        });
    }

    // 2. FETCH AND DISPLAY PUBLISHED POSTS FOR VIEWERS
    const postsContainer = document.getElementById("posts-container");

    async function fetchPosts() {
        if (!postsContainer) return;
        try {
            const res = await fetch('/api/posts');
            const posts = await res.json();
            
            if (posts.length === 0) {
                postsContainer.innerHTML = `<p style="text-align: center; color: #7f8c8d;">No courses or updates posted yet.</p>`;
                return;
            }

            postsContainer.innerHTML = posts.map(post => `
                <div class="post-card">
                    <h3 style="margin-top: 0; color: #2c3e50;">${post.title}</h3>
                    <p style="font-size: 14px; color: #95a5a6; margin-bottom: 10px;">Published on: ${post.date}</p>
                    <p style="white-space: pre-wrap; line-height: 1.6; color: #34495e;">${post.content}</p>
                </div>
            `).join('');
        } catch (err) {
            console.error("Error fetching posts:", err);
            postsContainer.innerHTML = `<p style="text-align: center; color: red;">Failed to load updates. Try reloading.</p>`;
        }
    }

    fetchPosts();
});
