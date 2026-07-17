document.addEventListener("DOMContentLoaded", () => {
    const mobileMenu = document.getElementById("mobile-menu");
    const navMenu = document.getElementById("nav-menu");

    mobileMenu.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    const dropdownTrigger = document.getElementById("dropdown-trigger");
    const dropdownContent = dropdownTrigger.nextElementSibling;

    dropdownTrigger.addEventListener("click", (e) => {
        e.stopPropagation();
        dropdownContent.classList.toggle("show-dropdown");
    });

    document.addEventListener("click", () => {
        dropdownContent.classList.remove("show-dropdown");
    });

    const promoModal = document.getElementById("promo-modal");
    const closeModal = document.getElementById("close-modal");

    setTimeout(() => {
        promoModal.style.display = "flex";
    }, 4000);

    closeModal.addEventListener("click", () => {
        promoModal.style.display = "none";
    });

    const bookingModal = document.getElementById("booking-modal");
    const openBookingBtn = document.getElementById("open-booking");
    const closeBookingModal = document.getElementById("close-booking-modal");

    openBookingBtn.addEventListener("click", () => {
        bookingModal.style.display = "flex";
    });

    closeBookingModal.addEventListener("click", () => {
        bookingModal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === promoModal) promoModal.style.display = "none";
        if (e.target === bookingModal) bookingModal.style.display = "none";
    });

    const subscribeForm = document.getElementById("subscribe-form");
    const subscribeFeedback = document.getElementById("subscribe-feedback");

    subscribeForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const email = document.getElementById("subscriber-email").value;

        try {
            const response = await fetch("/api/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email })
            });
            const data = await response.json();
            if (response.ok) {
                subscribeFeedback.innerText = "Awesome! Your submission was successful.";
                subscribeFeedback.style.color = "green";
                subscribeForm.reset();
            } else {
                subscribeFeedback.innerText = data.error || "Something went wrong.";
                subscribeFeedback.style.color = "red";
            }
        } catch (err) {
            subscribeFeedback.innerText = "Server connection error.";
            subscribeFeedback.style.color = "red";
        }
    });

    const appointmentForm = document.getElementById("appointment-form");
    const bookingFeedback = document.getElementById("booking-feedback");

    appointmentForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const name = document.getElementById("booking-name").value;
        const email = document.getElementById("booking-email").value;
        const details = document.getElementById("booking-details").value;

        try {
            const response = await fetch("/api/book", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, details })
            });
            const data = await response.json();
            if (response.ok) {
                bookingFeedback.innerText = "Appointment booked successfully!";
                bookingFeedback.style.color = "green";
                appointmentForm.reset();
            } else {
                bookingFeedback.innerText = data.error || "Failed to book appointment.";
                bookingFeedback.style.color = "red";
            }
        } catch (err) {
            bookingFeedback.innerText = "Server connection error.";
            bookingFeedback.style.color = "red";
        }
    });
});
