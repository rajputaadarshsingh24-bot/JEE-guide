// =========================
// HERO FADE
// =========================

const hero = document.querySelector(".hero-content");

hero.style.opacity = "0";
hero.style.transform = "translateY(40px)";

window.addEventListener("load", () => {

    hero.style.transition = "1s ease";

    hero.style.opacity = "1";

    hero.style.transform = "translateY(0)";

});


// =========================
// NAVBAR EFFECT
// =========================

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        nav.style.background = "rgba(0,33,71,.9)";
        nav.style.backdropFilter = "blur(10px)";
        nav.style.boxShadow = "0 5px 20px rgba(0,0,0,.3)";

    }

    else{

        nav.style.background = "transparent";
        nav.style.boxShadow = "none";

    }

});


// =========================
// BUTTON PULSE
// =========================

const button = document.querySelector(".hero-content a");

setInterval(() => {

    button.animate([

        {transform:"scale(1)"},

        {transform:"scale(1.05)"},

        {transform:"scale(1)"}

    ],{

        duration:1800

    });

},2500);