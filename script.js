/* =========================
   JEE GUIDE - HOME PAGE JS
========================= */

document.addEventListener("DOMContentLoaded", () => {

    /* -------------------------
       Hero entrance animation
    ------------------------- */

    const heroContent = document.querySelector(".hero-content");

    if (heroContent) {
        heroContent.style.opacity = "0";
        heroContent.style.transform = "translateY(25px)";

        setTimeout(() => {

            heroContent.style.transition =
                "opacity 1s ease, transform 1s ease";

            heroContent.style.opacity = "1";
            heroContent.style.transform = "translateY(0)";

        }, 150);
    }


    /* -------------------------
       Floating JEE logo
    ------------------------- */

    const logo = document.querySelector(".floating-jee-logo");

    if (logo) {

        let position = 0;
        let direction = 1;

        function animateLogo() {

            position += 0.015 * direction;

            if (position > 1) {
                direction = -1;
            }

            if (position < -1) {
                direction = 1;
            }

            logo.style.setProperty(
                "--logo-move",
                `${position}px`
            );

            requestAnimationFrame(animateLogo);
        }

        animateLogo();
    }


    /* -------------------------
       Navigation link effect
    ------------------------- */

    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            link.style.transform = "scale(0.95)";

            setTimeout(() => {
                link.style.transform = "";
            }, 120);

        });

    });


    /* -------------------------
       Explore button effect
    ------------------------- */

    const exploreButton =
        document.querySelector(".explore-btn");

    if (exploreButton) {

        exploreButton.addEventListener("click", () => {

            exploreButton.style.transform =
                "scale(0.96)";

        });

    }

});