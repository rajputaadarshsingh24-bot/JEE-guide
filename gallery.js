/* =======================================
   JEE GUIDE - GALLERY PAGE INTERACTION
======================================= */

document.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelectorAll(".card img");
    const viewer = document.getElementById("viewer");
    const largeImage = document.getElementById("largeImage");
    const closeBtn = document.getElementById("close");

    /* -----------------------------------
       1. OPEN IMAGE MODAL
    ----------------------------------- */
    images.forEach(image => {
        image.addEventListener("click", () => {
            if (viewer && largeImage) {
                viewer.style.display = "flex";
                largeImage.src = image.src;
                largeImage.alt = image.alt || "Full screen image view";
                document.body.style.overflow = "hidden"; // Prevent background scroll
            }
        });
    });

    /* -----------------------------------
       2. CLOSE IMAGE MODAL FUNCTIONS
    ----------------------------------- */
    function closeViewer() {
        if (viewer) {
            viewer.style.display = "none";
            document.body.style.overflow = "auto"; // Restore scroll
        }
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", closeViewer);
    }

    if (viewer) {
        viewer.addEventListener("click", (e) => {
            if (e.target === viewer) {
                closeViewer();
            }
        });
    }

    // Close Modal on 'Escape' Keypress
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && viewer && viewer.style.display === "flex") {
            closeViewer();
        }
    });

    /* -----------------------------------
       3. STAGGERED FADE-IN CARD ANIMATION
    ----------------------------------- */
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, index) => {
        card.style.animationDelay = `${(index * 0.05).toFixed(2)}s`;
    });

    /* -----------------------------------
       4. ACTIVE NAV LINK HIGHLIGHT
    ----------------------------------- */
    const currentPath = window.location.pathname.split("/").pop() || "gallery.html";
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.style.color = "#ffd43b";
            link.style.fontWeight = "700";
            link.setAttribute("aria-current", "page");
        }
    });
});