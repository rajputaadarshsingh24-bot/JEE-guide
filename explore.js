// ===============================
// HERO INTRO ANIMATION
// ===============================

const heroContent = document.querySelector(".hero-content");

heroContent.style.opacity = "0";
heroContent.style.transform = "translateY(60px)";

window.addEventListener("load", () => {

    heroContent.style.transition = "1.2s ease";

    heroContent.style.opacity = "1";

    heroContent.style.transform = "translateY(0)";

});


// ===============================
// NAVBAR SCROLL EFFECT
// ===============================

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        nav.style.background = "rgba(8,28,61,.85)";
        nav.style.backdropFilter = "blur(15px)";
        nav.style.boxShadow = "0 8px 20px rgba(0,0,0,.35)";

    }

    else{

        nav.style.background = "rgba(0,0,0,.15)";
        nav.style.boxShadow = "none";

    }

});


// ===============================
// HERO PARALLAX
// ===============================

window.addEventListener("scroll", () => {

    const offset = window.pageYOffset;

    document.querySelector(".hero").style.backgroundPosition =
    `center ${offset * 0.4}px`;

});


// ===============================
// BUTTON PULSE
// ===============================

const button = document.querySelector(".explore-btn");

setInterval(() => {

    button.animate([

        { transform:"scale(1)" },

        { transform:"scale(1.07)" },

        { transform:"scale(1)" }

    ],{

        duration:1800

    });

},2500);


// ===============================
// SCROLL REVEAL
// ===============================

const revealItems = document.querySelectorAll(

".card,.quote-section,.stat,.journey"

);

revealItems.forEach(item=>{

    item.style.opacity="0";

    item.style.transform="translateY(80px)";

    item.style.transition=".8s ease";

});

function reveal(){

    revealItems.forEach(item=>{

        const top = item.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            item.style.opacity="1";

            item.style.transform="translateY(0)";

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();


// ===============================
// STAGGER CARD ANIMATION
// ===============================

const cards = document.querySelectorAll(".card");

cards.forEach((card,index)=>{

    card.style.opacity="0";

    card.style.transform="translateY(80px)";

    setTimeout(()=>{

        card.style.transition=".8s ease";

        card.style.opacity="1";

        card.style.transform="translateY(0)";

    },index*180+500);

});


// ===============================
// CARD HOVER EFFECT
// ===============================

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-12px) scale(1.04) rotate(.3deg)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0) scale(1)";

    });

});


// ===============================
// COUNT-UP STATS
// ===============================

function animateCounter(element,target,suffix){

    let value = 0;

    const increment = Math.ceil(target/80);

    const timer = setInterval(()=>{

        value += increment;

        if(value >= target){

            value = target;

            clearInterval(timer);

        }

        element.textContent = value + suffix;

    },20);

}

const stats = document.querySelectorAll(".stat h2");

let counted = false;

window.addEventListener("scroll",()=>{

    const statsSection = document.querySelector(".stats");

    if(!counted && statsSection.getBoundingClientRect().top < window.innerHeight-150){

        counted = true;

        animateCounter(stats[0],15,"L+");

        animateCounter(stats[1],17,"K+");

        animateCounter(stats[2],31,"+");

        animateCounter(stats[3],26,"+");

    }

});


// ===============================
// QUOTE GLOW
// ===============================

const quote = document.querySelector(".quote-section");

setInterval(()=>{

    quote.style.boxShadow="0 0 35px rgba(255,212,59,.35)";

    setTimeout(()=>{

        quote.style.boxShadow="none";

    },1200);

},3000);


// ===============================
// SCROLL ARROW
// ===============================

const arrow = document.querySelector(".scroll-down");

arrow.addEventListener("click",()=>{

    document.querySelector("#cards").scrollIntoView({

        behavior:"smooth"

    });

});


// ===============================
// JOURNEY BUTTON GLOW
// ===============================

const journeyBtn = document.querySelector(".journey-btn");

journeyBtn.addEventListener("mouseenter",()=>{

    journeyBtn.style.boxShadow="0 0 25px rgba(255,212,59,.7)";

});

journeyBtn.addEventListener("mouseleave",()=>{

    journeyBtn.style.boxShadow="none";

});


// ===============================
// FLOATING ICONS
// ===============================

const icons = document.querySelectorAll(".icon");

icons.forEach((icon,index)=>{

    setInterval(()=>{

        icon.animate([

            {transform:"translateY(0px)"},

            {transform:"translateY(-8px)"},

            {transform:"translateY(0px)"}

        ],{

            duration:2000,

            delay:index*250

        });

    },2600);

});