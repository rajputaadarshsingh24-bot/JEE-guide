// Navbar Animation

const nav = document.querySelector("nav");

nav.style.opacity = "0";
nav.style.transform = "translateY(-30px)";

setTimeout(() => {
    nav.style.transition = "0.8s";
    nav.style.opacity = "1";
    nav.style.transform = "translateY(0)";
}, 200);


// Hero Animation

const hero = document.querySelector(".hero");

hero.style.opacity = "0";
hero.style.transform = "translateY(40px)";

setTimeout(() => {
    hero.style.transition = "0.8s";
    hero.style.opacity = "1";
    hero.style.transform = "translateY(0)";
}, 400);


// Animate All Sections

const sections = document.querySelectorAll(
".stat-card, .about, .event, .rank, .step, .branch, .fact"
);

sections.forEach((section, index) => {

    section.style.opacity = "0";
    section.style.transform = "translateY(60px)";

    setTimeout(() => {

        section.style.transition = "0.8s ease";

        section.style.opacity = "1";

        section.style.transform = "translateY(0)";

    }, 700 + index * 120);

});


// Back Button Animation

const backBtn = document.querySelector(".back a");

backBtn.addEventListener("mouseenter", () => {

    backBtn.style.transform = "scale(1.08)";

});

backBtn.addEventListener("mouseleave", () => {

    backBtn.style.transform = "scale(1)";

});