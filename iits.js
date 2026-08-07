// =======================
// NAVBAR SCROLL EFFECT
// =======================

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.style.background = "#001731";
        navbar.style.boxShadow = "0 8px 20px rgba(0,0,0,.25)";

    }

    else {

        navbar.style.background = "#002147";
        navbar.style.boxShadow = "0 3px 15px rgba(0,0,0,.15)";

    }

});


// =======================
// HERO ANIMATION
// =======================

const hero = document.querySelector(".hero");

hero.style.opacity = "0";
hero.style.transform = "translateY(40px)";

setTimeout(() => {

    hero.style.transition = "1s ease";

    hero.style.opacity = "1";

    hero.style.transform = "translateY(0)";

},300);


// =======================
// COUNT UP ANIMATION
// =======================

function counter(id,target,speed){

    let count = 0;

    const element = document.getElementById(id);

    const increment = Math.ceil(target/60);

    const interval = setInterval(()=>{

        count += increment;

        if(count>=target){

            count=target;

            clearInterval(interval);

        }

        element.innerHTML=count;

    },speed);

}

setTimeout(()=>{

counter("iitCount",23,30);

counter("yearCount",1951,2);

},800);


// =======================
// SCROLL REVEAL
// =======================

const reveals = document.querySelectorAll(

".stat-card,.about,.value-card,.time-box,.rank,.step,.program,.fact"

);

function reveal(){

    reveals.forEach(item=>{

        const top = item.getBoundingClientRect().top;

        const visible = window.innerHeight-100;

        if(top<visible){

            item.style.opacity="1";

            item.style.transform="translateY(0)";

        }

    });

}

reveals.forEach(item=>{

    item.style.opacity="0";

    item.style.transform="translateY(50px)";

    item.style.transition=".8s ease";

});

window.addEventListener("scroll",reveal);

reveal();


// =======================
// HERO BUTTON GLOW
// =======================

const heroBtn = document.querySelector(".hero-btn");

heroBtn.addEventListener("mouseenter",()=>{

    heroBtn.style.boxShadow="0 0 25px #FFD700";

});

heroBtn.addEventListener("mouseleave",()=>{

    heroBtn.style.boxShadow="none";

});


// =======================
// CARD HOVER EFFECT
// =======================

const cards = document.querySelectorAll(

".stat-card,.value-card,.program,.fact"

);

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0) scale(1)";

    });

});


// =======================
// RANK HOVER
// =======================

const ranks = document.querySelectorAll(".rank");

ranks.forEach(rank=>{

    rank.addEventListener("mouseenter",()=>{

        rank.style.paddingLeft="35px";

    });

    rank.addEventListener("mouseleave",()=>{

        rank.style.paddingLeft="25px";

    });

});


// =======================
// BUTTON PULSE
// =======================

setInterval(()=>{

    heroBtn.animate([

        {transform:"scale(1)"},

        {transform:"scale(1.05)"},

        {transform:"scale(1)"}

    ],{

        duration:1800

    });

},2200);