// Navbar

const nav=document.querySelector("nav");

nav.style.opacity="0";
nav.style.transform="translateY(-30px)";

setTimeout(()=>{

nav.style.transition=".8s";

nav.style.opacity="1";

nav.style.transform="translateY(0)";

},200);


// Hero

const hero=document.querySelector(".hero");

hero.style.opacity="0";
hero.style.transform="translateY(40px)";

setTimeout(()=>{

hero.style.transition=".8s";

hero.style.opacity="1";

hero.style.transform="translateY(0)";

},400);


// Animate Sections

const items=document.querySelectorAll(".stat-card,.about,.event,.rank,.step,.branch,.fact");

items.forEach((item,index)=>{

item.style.opacity="0";
item.style.transform="translateY(60px)";

setTimeout(()=>{

item.style.transition=".8s";

item.style.opacity="1";

item.style.transform="translateY(0)";

},700+index*120);

});


// Back Button

const btn=document.querySelector(".back a");

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.08)";
btn.style.boxShadow="0 0 20px #7CFC98";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";
btn.style.boxShadow="none";

});