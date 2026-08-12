/* =======================================
   JEE GUIDE - DIFFICULTY PAGE INTERACTION
======================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* -----------------------------------
       1. HERO ENTRANCE ANIMATION
    ----------------------------------- */
    const hero = document.querySelector(".hero");

    if (hero) {
        hero.style.opacity = "0";
        hero.style.transform = "translateY(30px)";

        requestAnimationFrame(() => {
            setTimeout(() => {
                hero.style.transition = "opacity 0.9s ease, transform 0.9s ease";
                hero.style.opacity = "1";
                hero.style.transform = "translateY(0)";
            }, 150);
        });
    }

    /* -----------------------------------
       2. NAVBAR SCROLL EFFECT
    ----------------------------------- */
    const navbar = document.querySelector("nav");

    if (navbar) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 60) {
                navbar.style.background = "rgba(0, 0, 0, 0.75)";
                navbar.style.boxShadow = "0 6px 18px rgba(0, 0, 0, 0.3)";
            } else {
                navbar.style.background = "rgba(0, 0, 0, 0.45)";
                navbar.style.boxShadow = "none";
            }
        });
    }

    /* -----------------------------------
       3. PROGRESS BAR ANIMATION
    ----------------------------------- */
    function animateBar(selector, width) {
        const bar = document.querySelector(selector);
        if (!bar) return;

        let progress = 0;
        const animation = setInterval(() => {
            progress++;
            bar.style.width = progress + "%";

            if (progress >= width) {
                clearInterval(animation);
            }
        }, 18);
    }

    setTimeout(() => {
        animateBar(".physics", 80);
        animateBar(".chemistry", 60);
        animateBar(".maths", 90);
    }, 600);

    /* -----------------------------------
       4. COUNTING NUMBERS FOR STATS
    ----------------------------------- */
    function counter(id, target, suffix, speed) {
        let count = 0;
        const element = document.getElementById(id);
        if (!element) return;

        const increment = Math.ceil(target / 80);

        const timer = setInterval(() => {
            count += increment;

            if (count >= target) {
                count = target;
                clearInterval(timer);
            }

            element.innerHTML = count + suffix;
        }, speed);
    }

    setTimeout(() => {
        counter("students", 15, "L+", 60);
        counter("seats", 43, "K+", 50);
    }, 800);

    /* -----------------------------------
       5. SCROLL REVEAL ANIMATIONS
    ----------------------------------- */
    const hiddenElements = document.querySelectorAll(
        ".overall-card, .reason, .stat, .tip, .compare, .quote, .bar-box, .info-bar"
    );

    hiddenElements.forEach(item => {
        item.style.opacity = "0";
        item.style.transform = "translateY(40px)";
        item.style.transition = "opacity 0.7s ease, transform 0.7s ease";
    });

    function revealOnScroll() {
        hiddenElements.forEach(item => {
            const top = item.getBoundingClientRect().top;
            if (top < window.innerHeight - 80) {
                item.style.opacity = "1";
                item.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Initial check on page render

    /* -----------------------------------
       6. HERO BUTTON GLOW
    ----------------------------------- */
    const button = document.querySelector(".hero-btn");

    if (button) {
        button.addEventListener("mouseenter", () => {
            button.style.boxShadow = "0 0 25px #ffd166";
        });

        button.addEventListener("mouseleave", () => {
            button.style.boxShadow = "none";
        });
    }

    /* -----------------------------------
       7. QUOTE GLOW PULSE
    ----------------------------------- */
    const quote = document.querySelector(".quote");

    if (quote) {
        setInterval(() => {
            quote.style.boxShadow = "0 0 20px rgba(255, 209, 102, 0.6)";

            setTimeout(() => {
                quote.style.boxShadow = "none";
            }, 900);
        }, 2800);
    }

    /* -----------------------------------
       8. ACTIVE NAVIGATION LINK HIGHLIGHT
    ----------------------------------- */
    const currentPath = window.location.pathname.split("/").pop() || "difficulty.html";
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.style.color = "#ffd166";
            link.style.fontWeight = "700";
            link.setAttribute("aria-current", "page");
        }
    });
});