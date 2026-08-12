/* =======================================
   JEE GUIDE - NITS PAGE INTERACTION
======================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* -----------------------------------
       1. NAVBAR ANIMATION
    ----------------------------------- */
    const nav = document.querySelector("nav");

    if (nav) {
        nav.style.opacity = "0";
        nav.style.transform = "translateY(-30px)";

        setTimeout(() => {
            nav.style.transition = "opacity 0.8s ease, transform 0.8s ease";
            nav.style.opacity = "1";
            nav.style.transform = "translateY(0)";
        }, 200);

        // Dynamic Navbar Background on Scroll
        window.addEventListener("scroll", () => {
            if (window.scrollY > 60) {
                nav.style.background = "rgba(0, 0, 0, 0.75)";
                nav.style.boxShadow = "0 6px 18px rgba(0, 0, 0, 0.3)";
            } else {
                nav.style.background = "rgba(255, 255, 255, 0.08)";
                nav.style.boxShadow = "none";
            }
        });
    }

    /* -----------------------------------
       2. HERO ANIMATION
    ----------------------------------- */
    const hero = document.querySelector(".hero");

    if (hero) {
        hero.style.opacity = "0";
        hero.style.transform = "translateY(40px)";

        setTimeout(() => {
            hero.style.transition = "opacity 0.8s ease, transform 0.8s ease";
            hero.style.opacity = "1";
            hero.style.transform = "translateY(0)";
        }, 400);
    }

    /* -----------------------------------
       3. SCROLL REVEAL FOR SECTIONS & CARDS
    ----------------------------------- */
    const sections = document.querySelectorAll(
        ".stat-card, .about, .info-bar, .event, .rank, .step, .branch, .fact"
    );

    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(50px)";
        section.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    });

    function revealSections() {
        sections.forEach(section => {
            const top = section.getBoundingClientRect().top;
            if (top < window.innerHeight - 80) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections(); // Trigger initial view check

    /* -----------------------------------
       4. BACK BUTTON HOVER ANIMATION
    ----------------------------------- */
    const backBtn = document.querySelector(".back a");

    if (backBtn) {
        backBtn.addEventListener("mouseenter", () => {
            backBtn.style.transform = "scale(1.08)";
        });

        backBtn.addEventListener("mouseleave", () => {
            backBtn.style.transform = "scale(1)";
        });
    }

    /* -----------------------------------
       5. ACTIVE NAV LINK HIGHLIGHT
    ----------------------------------- */
    const currentPath = window.location.pathname.split("/").pop() || "nits.html";
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.style.color = "#ffd54a";
            link.style.fontWeight = "700";
            link.setAttribute("aria-current", "page");
        }
    });
});