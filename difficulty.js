// ===============================
// HERO ANIMATION
// ===============================

const hero = document.querySelector(".hero");

hero.style.opacity = "0";
hero.style.transform = "translateY(40px)";

setTimeout(() => {

    hero.style.transition = "1s ease";

    hero.style.opacity = "1";

    hero.style.transform = "translateY(0)";

},300);


// ===============================
// NAVBAR EFFECT
// ===============================

const navbar = document.querySelector("nav");

window.addEventListener("scroll",()=>{

    if(window.scrollY>60){

        navbar.style.background="rgba(0,0,0,.65)";
        navbar.style.boxShadow="0 6px 18px rgba(0,0,0,.3)";

    }

    else{

        navbar.style.background="rgba(0,0,0,.25)";
        navbar.style.boxShadow="none";

    }

});


// ===============================
// PROGRESS BAR ANIMATION
// ===============================

function animateBar(selector,width){

    const bar=document.querySelector(selector);

    let progress=0;

    const animation=setInterval(()=>{

        progress++;

        bar.style.width=progress+"%";

        if(progress>=width){

            clearInterval(animation);

        }

    },18);

}

setTimeout(()=>{

    animateBar(".physics",80);

    animateBar(".chemistry",60);

    animateBar(".maths",90);

},700);


// ===============================
// COUNTING NUMBERS
// ===============================

function counter(id,target,suffix,speed){

    let count=0;

    const element=document.getElementById(id);

    const increment=Math.ceil(target/80);

    const timer=setInterval(()=>{

        count+=increment;

        if(count>=target){

            count=target;

            clearInterval(timer);

        }

        element.innerHTML=count+suffix;

    },speed);

}

setTimeout(()=>{

    counter("students",15,"L+",80);

    counter("seats",43,"K+",60);

},1000);


// ===============================
// SCROLL REVEAL
// ===============================

const hidden=document.querySelectorAll(

".overall-card,.reason,.stat,.tip,.compare,.quote,.bar-box"

);

hidden.forEach(item=>{

    item.style.opacity="0";

    item.style.transform="translateY(60px)";

    item.style.transition=".8s ease";

});

function reveal(){

    hidden.forEach(item=>{

        const top=item.getBoundingClientRect().top;

        if(top<window.innerHeight-100){

            item.style.opacity="1";

            item.style.transform="translateY(0)";

        }

    });

}

window.addEventListener("scroll",reveal);

reveal();


// ===============================
// HERO BUTTON GLOW
// ===============================

const button=document.querySelector(".hero-btn");

button.addEventListener("mouseenter",()=>{

    button.style.boxShadow="0 0 25px #ffd166";

});

button.addEventListener("mouseleave",()=>{

    button.style.boxShadow="none";

});


// ===============================
// CARD HOVER EFFECT
// ===============================

const cards=document.querySelectorAll(

".reason,.stat,.tip,.compare"

);

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0) scale(1)";

    });

});


// ===============================
// QUOTE GLOW
// ===============================

const quote=document.querySelector(".quote");

setInterval(()=>{

    quote.style.boxShadow="0 0 20px rgba(255,209,102,.6)";

    setTimeout(()=>{

        quote.style.boxShadow="none";

    },900);

},2500);


// ===============================
// HERO BUTTON PULSE
// ===============================

setInterval(()=>{

    button.animate([

        {transform:"scale(1)"},

        {transform:"scale(1.06)"},

        {transform:"scale(1)"}

    ],{

        duration:1800

    });

},2500);