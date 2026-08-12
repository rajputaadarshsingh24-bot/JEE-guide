/* =======================================
   JEE GUIDE - ANIMATED SYLLABUS CONTROLLER
======================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* -----------------------------------
       1. INTERSECTION OBSERVER FOR SCROLL CARDS
    ----------------------------------- */
    const cards = document.querySelectorAll(".animate-card");

    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const cardObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Staggered delay for cards in view
                setTimeout(() => {
                    entry.target.classList.add("visible");
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    cards.forEach(card => cardObserver.observe(card));

    /* -----------------------------------
       2. CLASS FILTER TAB SWITCHER
    ----------------------------------- */
    const tabBtns = document.querySelectorAll(".tab-btn");
    const classSections = document.querySelectorAll(".syllabus-block");

    tabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            // Update Tab UI
            tabBtns.forEach(b => {
                b.classList.remove("active");
                b.setAttribute("aria-selected", "false");
            });
            btn.classList.add("active");
            btn.setAttribute("aria-selected", "true");

            const targetClass = btn.getAttribute("data-target");

            // Filter Sections with Smooth Fade
            classSections.forEach(section => {
                if (targetClass === "all" || section.id === targetClass) {
                    section.style.display = "block";
                    setTimeout(() => {
                        section.style.opacity = "1";
                        section.style.transform = "translateY(0)";
                    }, 50);
                } else {
                    section.style.opacity = "0";
                    section.style.transform = "translateY(20px)";
                    setTimeout(() => {
                        section.style.display = "none";
                    }, 300);
                }
            });
        });
    });

    /* -----------------------------------
       3. INTERACTIVE CHAPTER HIGHLIGHTING
    ----------------------------------- */
    const chapterItems = document.querySelectorAll(".chapter-list li:not(.sub-heading)");

    chapterItems.forEach(item => {
        item.addEventListener("click", () => {
            item.classList.toggle("completed");
            if (item.classList.contains("completed")) {
                item.style.textDecoration = "line-through";
                item.style.opacity = "0.5";
            } else {
                item.style.textDecoration = "none";
                item.style.opacity = "1";
            }
        });
    });
});