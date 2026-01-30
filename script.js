document.addEventListener('DOMContentLoaded', () => {
    
    /* --- 1. MOBILE MENU TOGGLE (HAMBURGER) --- */
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-links");

    // Only run this if the elements actually exist (prevents errors)
    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        // Close menu automatically when a link is clicked
        document.querySelectorAll(".nav-links a").forEach(n => n.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }));
    }

    /* --- 2. FAQ ACCORDION LOGIC --- */
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            const answer = item.querySelector('.faq-answer');

            // Toggle the 'active' class
            item.classList.toggle('active');

            // Control the smooth opening/closing
            if (item.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                answer.style.maxHeight = null;
            }
        });
    });

    /* --- 3. SMOOTH SCROLLING FOR NAVIGATION --- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === "#") return; // Skip if it's just a placeholder

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});