/* =======================================
   JEE GUIDE - IITS PAGE INTERACTION & JS
======================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* -----------------------------------
       1. NAVBAR SCROLL EFFECT
    ----------------------------------- */
    const navbar = document.querySelector("nav");

    if (navbar) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 80) {
                navbar.style.background = "#001731";
                navbar.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.25)";
            } else {
                navbar.style.background = "#002147";
                navbar.style.boxShadow = "0 3px 15px rgba(0, 0, 0, 0.15)";
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

        requestAnimationFrame(() => {
            setTimeout(() => {
                hero.style.transition = "opacity 0.9s ease, transform 0.9s ease";
                hero.style.opacity = "1";
                hero.style.transform = "translateY(0)";
            }, 150);
        });
    }

    /* -----------------------------------
       3. COUNT UP ANIMATION FOR STATS
    ----------------------------------- */
    function counter(id, target, speed) {
        let count = 0;
        const element = document.getElementById(id);
        if (!element) return;

        const increment = Math.ceil(target / 60);

        const interval = setInterval(() => {
            count += increment;

            if (count >= target) {
                count = target;
                clearInterval(interval);
            }

            element.innerHTML = count;
        }, speed);
    }

    setTimeout(() => {
        counter("iitCount", 23, 30);
        counter("yearCount", 1951, 20);
    }, 600);

    /* -----------------------------------
       4. SCROLL REVEAL ANIMATIONS
    ----------------------------------- */
    const reveals = document.querySelectorAll(
        ".stat-card, .about, .value-card, .time-box, .rank, .step, .program, .fact"
    );

    reveals.forEach(item => {
        item.style.opacity = "0";
        item.style.transform = "translateY(40px)";
        item.style.transition = "opacity 0.7s ease, transform 0.7s ease";
    });

    function revealOnScroll() {
        reveals.forEach(item => {
            const top = item.getBoundingClientRect().top;
            const visible = window.innerHeight - 80;

            if (top < visible) {
                item.style.opacity = "1";
                item.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Initial check on load

    /* -----------------------------------
       5. HERO BUTTON GLOW & HOVER
    ----------------------------------- */
    const heroBtn = document.querySelector(".hero-btn");

    if (heroBtn) {
        heroBtn.addEventListener("mouseenter", () => {
            heroBtn.style.boxShadow = "0 0 25px #FFD700";
        });

        heroBtn.addEventListener("mouseleave", () => {
            heroBtn.style.boxShadow = "none";
        });
    }

    /* -----------------------------------
       6. ACTIVE NAVIGATION LINK HIGHLIGHT
    ----------------------------------- */
    const currentPath = window.location.pathname.split("/").pop() || "iits.html";
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.style.color = "#FFD700";
            link.style.fontWeight = "700";
            link.setAttribute("aria-current", "page");
        }
    });
});