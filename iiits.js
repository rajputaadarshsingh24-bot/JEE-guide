// ===============================
// IIITs Page Animations
// ===============================

// Navbar Animation

const nav = document.querySelector("nav");

nav.style.opacity = "0";
nav.style.transform = "translateY(-30px)";

setTimeout(() => {
    nav.style.transition = "0.8s ease";
    nav.style.opacity = "1";
    nav.style.transform = "translateY(0)";
}, 200);


// Hero Animation

const hero = document.querySelector(".hero");

hero.style.opacity = "0";
hero.style.transform = "translateY(40px)";

setTimeout(() => {
    hero.style.transition = "0.8s ease";
    hero.style.opacity = "1";
    hero.style.transform = "translateY(0)";
}, 400);


// Animate Every Card/Section

const elements = document.querySelectorAll(
".stat-card, .about, .event, .rank, .step, .branch, .fact"
);

elements.forEach((element, index) => {

    element.style.opacity = "0";
    element.style.transform = "translateY(60px)";

    setTimeout(() => {

        element.style.transition = "0.8s ease";

        element.style.opacity = "1";

        element.style.transform = "translateY(0)";

    }, 700 + index * 120);

});


// Back Button Hover Animation

const backButton = document.querySelector(".back a");

backButton.addEventListener("mouseenter", () => {

    backButton.style.transform = "scale(1.08)";
    backButton.style.boxShadow = "0 0 20px cyan";

});

backButton.addEventListener("mouseleave", () => {

    backButton.style.transform = "scale(1)";
    backButton.style.boxShadow = "none";

});


// Smooth Scrolling

document.documentElement.style.scrollBehavior = "smooth";


// Glowing Hero Title

const title = document.querySelector(".hero h1");

setInterval(() => {

    title.style.textShadow = "0 0 10px cyan, 0 0 20px cyan";

    setTimeout(() => {

        title.style.textShadow = "0 0 5px cyan";

    }, 800);

}, 1800);