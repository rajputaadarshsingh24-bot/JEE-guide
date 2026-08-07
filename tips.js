// ===============================
// HERO FADE-IN
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
// NAVBAR SCROLL EFFECT
// ===============================

const navbar = document.querySelector("nav");

window.addEventListener("scroll",()=>{

    if(window.scrollY>60){

        navbar.style.background="rgba(0,0,0,.65)";
        navbar.style.boxShadow="0 6px 18px rgba(0,0,0,.3)";

    }

    else{

        navbar.style.background="rgba(0,0,0,.2)";
        navbar.style.boxShadow="none";

    }

});


// ===============================
// SCROLL REVEAL
// ===============================

const elements=document.querySelectorAll(

".rule,.time,.activity,.box,.success,.mistake,.check,.quote"

);

elements.forEach(item=>{

    item.style.opacity="0";
    item.style.transform="translateY(60px)";
    item.style.transition=".8s ease";

});

function reveal(){

    elements.forEach(item=>{

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

    button.style.boxShadow="0 0 25px #90ee90";

});

button.addEventListener("mouseleave",()=>{

    button.style.boxShadow="none";

});


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


// ===============================
// CARD HOVER EFFECT
// ===============================

const cards=document.querySelectorAll(

".rule,.mistake,.check,.box,.success"

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

    quote.style.boxShadow="0 0 25px rgba(144,238,144,.7)";

    setTimeout(()=>{

        quote.style.boxShadow="none";

    },1000);

},2500);


// ===============================
// FORMULA ANIMATION
// ===============================

const formula=document.querySelectorAll(".box,.plus,.equal,.success");

formula.forEach((item,index)=>{

    item.style.opacity="0";
    item.style.transform="scale(.5)";

    setTimeout(()=>{

        item.style.transition=".6s ease";

        item.style.opacity="1";

        item.style.transform="scale(1)";

    },index*180+1000);

});


// ===============================
// CHECKLIST CLICK EFFECT
// ===============================

const checks=document.querySelectorAll(".check");

checks.forEach(check=>{

    check.addEventListener("click",()=>{

        if(check.innerHTML.includes("☐")){

            check.innerHTML=check.innerHTML.replace("☐","☑");

            check.style.background="#90ee90";
            check.style.color="#0f4c75";

        }

        else{

            check.innerHTML=check.innerHTML.replace("☑","☐");

            check.style.background="rgba(255,255,255,.12)";
            check.style.color="white";

        }

    });

});