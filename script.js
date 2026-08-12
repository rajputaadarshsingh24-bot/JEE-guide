/* =======================================
   JEE GUIDE - HOME PAGE & SEO ENHANCEMENTS
======================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* -----------------------------------
       Highlight Active Navigation Link
    ----------------------------------- */
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        const linkPath = link.getAttribute("href");
        if (linkPath === currentPath) {
            link.style.color = "#ffd43b";
            link.style.fontWeight = "700";
            link.setAttribute("aria-current", "page");
        }

        // Active state tactile animation
        link.addEventListener("click", () => {
            link.style.transform = "scale(0.95)";
            setTimeout(() => {
                link.style.transform = "";
            }, 120);
        });
    });

    /* -----------------------------------
       Hero Section Entrance Dynamic Softening
    ----------------------------------- */
    const heroContent = document.querySelector(".hero-content");

    if (heroContent) {
        heroContent.style.opacity = "0";
        heroContent.style.transform = "translateY(20px)";

        requestAnimationFrame(() => {
            setTimeout(() => {
                heroContent.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
                heroContent.style.opacity = "1";
                heroContent.style.transform = "translateY(0)";
            }, 100);
        });
    }

    /* -----------------------------------
       Explore Button Interaction
    ----------------------------------- */
    const exploreButton = document.querySelector(".explore-btn");

    if (exploreButton) {
        exploreButton.addEventListener("click", () => {
            exploreButton.style.transform = "scale(0.96)";
        });
    }
});