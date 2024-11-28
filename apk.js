let images = document.querySelectorAll('.carousel-item');
let currentIndex = 0;


function showNextImage() {
    images[currentIndex].classList.remove('opacity-40');
    images[currentIndex].classList.add('opacity-40');

    let oldIndex = currentIndex;
    setTimeout(() => {
        images[oldIndex].classList.add('hidden');
    }, 500);

    currentIndex = (currentIndex + 1) % images.length;

    setTimeout(() => {
        images[currentIndex].classList.remove('hidden');
        setTimeout(() => {
            images[currentIndex].classList.add('opacity-40');
            images[currentIndex].classList.remove('opacity-0');
        }, 10);
    }, 500);

}

setInterval(showNextImage, 2000);

let cardts=document.querySelector(".cardts")
let hojom=document.querySelector(".atac")
let milieu=document.querySelector(".milieu")
let defense=document.querySelector(".défense")
let garde=document.querySelector(".garde")
let defense1=document.querySelector(".défense1")

function showatac(){
    
    cardts.innerHTML=hojom.innerHTML;
}
function sowmilieu(){
    cardts.innerHTML=milieu.innerHTML;
}
function sowdéfense(){
    cardts.innerHTML=defense.innerHTML;
    cardts.innerHTML+=defense1.innerHTML;
    
}
function sowgarde(){
    cardts.innerHTML=garde.innerHTML;
}