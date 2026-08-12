/* =======================================
   JEE GUIDE - TIPS PAGE INTERACTION
======================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* -----------------------------------
       1. HERO FADE-IN
    ----------------------------------- */
    const hero = document.querySelector(".hero");

    if (hero) {
        hero.style.opacity = "0";
        hero.style.transform = "translateY(40px)";

        setTimeout(() => {
            hero.style.transition = "opacity 1s ease, transform 1s ease";
            hero.style.opacity = "1";
            hero.style.transform = "translateY(0)";
        }, 300);
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
                navbar.style.background = "rgba(0, 0, 0, 0.35)";
                navbar.style.boxShadow = "none";
            }
        });
    }

    /* -----------------------------------
       3. SCROLL REVEAL ANIMATIONS
    ----------------------------------- */
    const elements = document.querySelectorAll(
        ".rule, .time, .activity, .box, .success, .mistake, .check, .quote"
    );

    elements.forEach(item => {
        item.style.opacity = "0";
        item.style.transform = "translateY(50px)";
        item.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    });

    function reveal() {
        elements.forEach(item => {
            const top = item.getBoundingClientRect().top;
            if (top < window.innerHeight - 80) {
                item.style.opacity = "1";
                item.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", reveal);
    reveal(); // Trigger initial view check

    /* -----------------------------------
       4. HERO BUTTON EFFECTS
    ----------------------------------- */
    const button = document.querySelector(".hero-btn");

    if (button) {
        button.addEventListener("mouseenter", () => {
            button.style.boxShadow = "0 0 25px #90ee90";
        });

        button.addEventListener("mouseleave", () => {
            button.style.boxShadow = "none";
        });

        setInterval(() => {
            button.animate([
                { transform: "scale(1)" },
                { transform: "scale(1.06)" },
                { transform: "scale(1)" }
            ], {
                duration: 1800
            });
        }, 3500);
    }

    /* -----------------------------------
       5. CARD HOVER EFFECTS
    ----------------------------------- */
    const cards = document.querySelectorAll(
        ".rule, .mistake, .box, .success"
    );

    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-8px) scale(1.02)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0) scale(1)";
        });
    });

    /* -----------------------------------
       6. QUOTE GLOW EFFECT
    ----------------------------------- */
    const quote = document.querySelector(".quote");

    if (quote) {
        setInterval(() => {
            quote.style.boxShadow = "0 0 25px rgba(144, 238, 144, 0.7)";
            setTimeout(() => {
                quote.style.boxShadow = "none";
            }, 1000);
        }, 3000);
    }

    /* -----------------------------------
       7. FORMULA ANIMATION
    ----------------------------------- */
    const formulaItems = document.querySelectorAll(".box, .plus, .equal, .success");

    formulaItems.forEach((item, index) => {
        item.style.opacity = "0";
        item.style.transform = "scale(0.5)";

        setTimeout(() => {
            item.style.transition = "opacity 0.6s ease, transform 0.6s ease";
            item.style.opacity = "1";
            item.style.transform = "scale(1)";
        }, index * 150 + 800);
    });

    /* -----------------------------------
       8. INTERACTIVE CHECKLIST ACCESSIBILITY & CLICK
    ----------------------------------- */
    const checks = document.querySelectorAll(".check");

    checks.forEach(check => {
        function toggleCheck() {
            const isChecked = check.getAttribute("aria-checked") === "true";
            
            if (!isChecked) {
                check.innerHTML = check.innerHTML.replace("☐", "☑");
                check.style.background = "#90ee90";
                check.style.color = "#0f4c75";
                check.setAttribute("aria-checked", "true");
            } else {
                check.innerHTML = check.innerHTML.replace("☑", "☐");
                check.style.background = "rgba(255, 255, 255, 0.12)";
                check.style.color = "#ffffff";
                check.setAttribute("aria-checked", "false");
            }
        }

        check.addEventListener("click", toggleCheck);

        // Keyboard navigation (Enter / Space)
        check.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggleCheck();
            }
        });
    });

    /* -----------------------------------
       9. ACTIVE NAVIGATION LINK HIGHLIGHT
    ----------------------------------- */
    const currentPath = window.location.pathname.split("/").pop() || "tips.html";
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.style.color = "#90ee90";
            link.style.fontWeight = "700";
            link.setAttribute("aria-current", "page");
        }
    });
});