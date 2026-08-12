/* =======================================
   JEE GUIDE - EXPLORE PAGE INTERACTION & JS
======================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* -----------------------------------
       1. HERO INTRO ANIMATION
    ----------------------------------- */
    const heroContent = document.querySelector(".hero-content");

    if (heroContent) {
        heroContent.style.opacity = "0";
        heroContent.style.transform = "translateY(40px)";

        requestAnimationFrame(() => {
            setTimeout(() => {
                heroContent.style.transition = "opacity 1s ease, transform 1s ease";
                heroContent.style.opacity = "1";
                heroContent.style.transform = "translateY(0)";
            }, 100);
        });
    }

    /* -----------------------------------
       2. NAVBAR SCROLL EFFECT
    ----------------------------------- */
    const nav = document.querySelector("nav");

    if (nav) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                nav.style.background = "rgba(8, 28, 61, 0.92)";
                nav.style.backdropFilter = "blur(15px)";
                nav.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.35)";
            } else {
                nav.style.background = "rgba(0, 0, 0, 0.15)";
                nav.style.boxShadow = "none";
            }
        });
    }

    /* -----------------------------------
       3. SCROLL REVEAL ANIMATIONS
    ----------------------------------- */
    const revealItems = document.querySelectorAll(".card, .quote-section, .stat, .journey");

    revealItems.forEach(item => {
        item.style.opacity = "0";
        item.style.transform = "translateY(40px)";
        item.style.transition = "opacity 0.7s ease, transform 0.7s ease";
    });

    function revealOnScroll() {
        revealItems.forEach(item => {
            const top = item.getBoundingClientRect().top;
            if (top < window.innerHeight - 80) {
                item.style.opacity = "1";
                item.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Initial check

    /* -----------------------------------
       4. COUNT-UP STATS ANIMATION
    ----------------------------------- */
    function animateCounter(element, target, suffix) {
        let value = 0;
        const increment = Math.ceil(target / 60);

        const timer = setInterval(() => {
            value += increment;
            if (value >= target) {
                value = target;
                clearInterval(timer);
            }
            element.textContent = value + suffix;
        }, 30);
    }

    const stats = document.querySelectorAll(".stat h2");
    let counted = false;

    if (stats.length >= 4) {
        window.addEventListener("scroll", () => {
            const statsSection = document.querySelector(".stats");
            if (statsSection && !counted && statsSection.getBoundingClientRect().top < window.innerHeight - 100) {
                counted = true;
                animateCounter(stats[0], 15, "L+");
                animateCounter(stats[1], 17, "K+");
                animateCounter(stats[2], 31, "+");
                animateCounter(stats[3], 26, "+");
            }
        });
    }

    /* -----------------------------------
       5. SMOOTH SCROLL ARROW
    ----------------------------------- */
    const arrow = document.querySelector(".scroll-down");
    if (arrow) {
        arrow.addEventListener("click", () => {
            const cardsSection = document.querySelector("#cards");
            if (cardsSection) {
                cardsSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    }

    /* -----------------------------------
       6. ACTIVE NAV HIGHLIGHT
    ----------------------------------- */
    const currentPath = window.location.pathname.split("/").pop() || "explore.html";
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.style.color = "#ffd43b";
            link.style.fontWeight = "700";
            link.setAttribute("aria-current", "page");
        }
    });
});