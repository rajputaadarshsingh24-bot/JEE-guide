const images = document.querySelectorAll(".card img");

const viewer = document.getElementById("viewer");
const largeImage = document.getElementById("largeImage");
const close = document.getElementById("close");



images.forEach(image=>{

    image.addEventListener("click",()=>{

        viewer.style.display="flex";

        largeImage.src=image.src;

    });

});



close.onclick=function(){

    viewer.style.display="none";

};



viewer.onclick=function(e){

    if(e.target===viewer){

        viewer.style.display="none";

    }

};



// loading animation

window.onload=function(){

    document.querySelectorAll(".card").forEach((card,index)=>{

        setTimeout(()=>{

            card.style.opacity="1";

        },index*80);

    });

};