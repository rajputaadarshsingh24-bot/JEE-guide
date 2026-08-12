/* =======================================
   JEE GUIDE - GFTIS PAGE INTERACTION
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
                nav.style.background = "rgba(0, 0, 0, 0.75)";
                nav.style.boxShadow = "0 6px 18px rgba(0, 0, 0, 0.3)";
            } else {
                nav.style.background = "rgba(0, 0, 0, 0.45)";
                nav.style.boxShadow = "none";
            }
        });
    }

    /* -----------------------------------
       2. HERO ENTRANCE ANIMATION
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

    /* -----------------------------------
       3. SCROLL REVEAL ANIMATIONS
    ----------------------------------- */
    const items = document.querySelectorAll(
        ".stat-card, .about, .event, .rank, .step, .branch, .fact"
    );

    items.forEach(item => {
        item.style.opacity = "0";
        item.style.transform = "translateY(40px)";
        item.style.transition = "opacity 0.7s ease, transform 0.7s ease";
    });

    function revealOnScroll() {
        items.forEach(item => {
            const top = item.getBoundingClientRect().top;
            if (top < window.innerHeight - 80) {
                item.style.opacity = "1";
                item.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Trigger initial view check

    /* -----------------------------------
       4. ACTIVE NAVIGATION LINK HIGHLIGHT
    ----------------------------------- */
    const currentPath = window.location.pathname.split("/").pop() || "gftis.html";
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.style.color = "#7CFC98";
            link.style.fontWeight = "700";
            link.setAttribute("aria-current", "page");
        }
    });
});