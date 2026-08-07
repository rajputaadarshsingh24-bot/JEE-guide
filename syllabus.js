const cards = document.querySelectorAll(".card");

cards.forEach((card,index)=>{

card.style.opacity="0";
card.style.transform="translateY(60px)";

setTimeout(()=>{

card.style.transition="0.8s";

card.style.opacity="1";

card.style.transform="translateY(0px)";

},index*300);

});