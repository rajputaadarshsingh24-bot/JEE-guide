/* =======================================
   JEE GUIDE - IIITS PAGE INTERACTION
======================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* -----------------------------------
       1. NAVBAR SCROLL EFFECT & ENTRANCE
    ----------------------------------- */
    const nav = document.querySelector("nav");

    if (nav) {
        nav.style.opacity = "0";
        nav.style.transform = "translateY(-30px)";

        setTimeout(() => {
            nav.style.transition = "opacity 0.8s ease, transform 0.8s ease";
            nav.style.opacity = "1";
            nav.style.transform = "translateY(0)";
        }, 150);

        window.addEventListener("scroll", () => {
            if (window.scrollY > 60) {
                nav.style.background = "rgba(5, 25, 55, 0.9)";
                nav.style.boxShadow = "0 6px 18px rgba(0, 0, 0, 0.35)";
            } else {
                nav.style.background = "rgba(5, 25, 55, 0.65)";
                nav.style.boxShadow = "none";
            }
        });
    }

    /* -----------------------------------
       2. HERO ENTRANCE & GLOW ANIMATION
    ----------------------------------- */
    const hero = document.querySelector(".hero");

    if (hero) {
        hero.style.opacity = "0";
        hero.style.transform = "translateY(30px)";

        setTimeout(() => {
            hero.style.transition = "opacity 0.8s ease, transform 0.8s ease";
            hero.style.opacity = "1";
            hero.style.transform = "translateY(0)";
        }, 300);
    }

    const title = document.querySelector(".hero h1");
    if (title) {
        setInterval(() => {
            title.style.textShadow = "0 0 10px #00e5ff, 0 0 20px #00e5ff";
            setTimeout(() => {
                title.style.textShadow = "0 0 4px #00e5ff";
            }, 800);
        }, 2200);
    }

    /* -----------------------------------
       3. SCROLL REVEAL ANIMATIONS
    ----------------------------------- */
    const elements = document.querySelectorAll(
        ".stat-card, .about, .event, .rank, .step, .branch, .fact"
    );

    elements.forEach(element => {
        element.style.opacity = "0";
        element.style.transform = "translateY(40px)";
        element.style.transition = "opacity 0.7s ease, transform 0.7s ease";
    });

    function revealOnScroll() {
        elements.forEach(element => {
            const top = element.getBoundingClientRect().top;
            if (top < window.innerHeight - 80) {
                element.style.opacity = "1";
                element.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Trigger initial view check

    /* -----------------------------------
       4. ACTIVE NAVIGATION LINK HIGHLIGHT
    ----------------------------------- */
    const currentPath = window.location.pathname.split("/").pop() || "iiits.html";
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.style.color = "#00e5ff";
            link.style.fontWeight = "700";
            link.setAttribute("aria-current", "page");
        }
    });
});