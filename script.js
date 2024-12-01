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
let a=document.querySelectorAll(".gk");
let car=document.querySelector('.car');
let car1=document.querySelector('.car1');
let c=0;
    function chek(){
        c=2;
}
    function chek1(){
        c=1;
}
    function buttongk(){
        if(c===2){
            car.innerHTML=a[0].innerHTML;
            a[0].style.display="none"
            a[1].style.display="block"
            a[2].style.display="block"
        }else if(c===1){
            car1.innerHTML=a[0].innerHTML;
            a[0].style.display="none"
            a[1].style.display="block"
            a[2].style.display="block"
        }
}
    function buttongk1(){
        if(c===2){
            car.innerHTML=a[1].innerHTML
            a[1].style.display="none"
            a[0].style.display="block"
            a[2].style.display="block"
        }else if(c===1){
            car1.innerHTML=a[1].innerHTML
            a[1].style.display="none"
            a[0].style.display="block"
            a[2].style.display="block"
        }
}
// let kg=document.querySelectorAll(".kg")
function buttongk2(){
    if(c===2){
        car.innerHTML=a[2].innerHTML
        a[2].style.display="none"
        a[1].style.display="block"
        a[0].style.display="block"
    }else if(c===1){
        car1.innerHTML=a[2].innerHTML
        a[2][0].style.display="none"
        a[1].style.display="block"
        a[0].style.display="block"
    }
}
// function buttongk3(){
//     if(c===2){
//         car.innerHTML=a[1].innerHTML
//         a[1].style.display="none"
//         a[0].style.display="block"
//     }else if(c===1){
//         car1.innerHTML=a[1].innerHTML
//         a[1].style.display="none"
//         a[0].style.display="block"
//     }
// }
let milie=document.querySelectorAll(".micm");
let mil1=document.querySelector(".mil1");
let mil2=document.querySelector(".mil2");
let mil3=document.querySelector(".mil3");
let mil4=document.querySelector(".mil4");
let mil5=document.querySelector(".mil5");
let arrymil=[mil1,mil2,mil3,mil4,mil5];
let ml=0;
    function cheksowmil1(){
        ml=1;
    }
    function cheksowmil2(){
        ml=2;
    }
    function cheksowmil3(){
        ml=3;
    }
    function cheksowmil4(){
        ml=4;
    }
    function cheksowmil5(){
        ml=5;
    }
    function milieu1(){
        
        for(let i=0;i<5;i++){
            if(ml==i+1){
                milie[i].innerHTML=arrymil[0].innerHTML;
            }

        }
        }
    function milieu2(){
        for(let i=0;i<5;i++){
            if(ml==i+1){
                milie[i].innerHTML=arrymil[1].innerHTML;
            }
        }
    }
    function milieu3(){
        for(let i=0;i<5;i++){
            if(ml==i+1){
                milie[i].innerHTML=arrymil[2].innerHTML;
            }
        }
        
    }
    function milieu4(){
        for(let i=0;i<5;i++){
            if(ml==i+1){
                milie[i].innerHTML=arrymil[3].innerHTML;
            }
        }
        
    }
    function milieu5(){
        for(let i=0;i<5;i++){
            if(ml==i+1){
                milie[i].innerHTML=arrymil[4].innerHTML;
            }
        }
    }
    let def=0;
    function cheksowdefen1(){
        def=1;
    }
    function cheksowdefen2(){
        def=2;
    }
    function cheksowdefen3(){
        def=3;
    }
    function cheksowdefen4(){
        def=4;
    }
    function cheksowdefen5(){
        def=5;
    }
    function cheksowdefen6(){
        def=6;
    }
let vardef1=document.querySelectorAll(".def")
let vardefen=document.querySelectorAll(".defen");
    function defen1(){
        for(let i=0;i<6;i++){
            if(def==i+1){
                vardefen[i].innerHTML=vardef1[0].innerHTML;
            }
        }
    }
    function defen2(){
        for(let i=0;i<6;i++){
            if(def==i+1){
                vardefen[i].innerHTML=vardef1[1].innerHTML;
            }
        }
    }
    function defen3(){
        for(let i=0;i<6;i++){
            if(def==i+1){
                vardefen[i].innerHTML=vardef1[2].innerHTML;
            }
        }
    }
    function defen4(){
        for(let i=0;i<6;i++){
            if(def==i+1){
                vardefen[i].innerHTML=vardef1[3].innerHTML;
            }
        }
    }
    function defen5(){
        for(let i=0;i<6;i++){
            if(def==i+1){
                vardefen[i].innerHTML=vardef1[4].innerHTML;
            }
        }
    }
    function defen6(){
        for(let i=0;i<6;i++){
            if(def==i+1){
                vardefen[i].innerHTML=vardef1[5].innerHTML;
            }
        }
    }

let atc=0;

    function chekonclickatac1(){
            atc=1;
    }
    function chekonclickatac2(){
        atc=2;
    }
    function chekonclickatac3(){
        atc=3;
    }
    function chekonclickatac4(){
        atc=4;
    }

let atco=document.querySelectorAll(".atc")
let atccart=document.querySelectorAll(".atccart");

    function atac1(){
        for(let i=0;i<4;i++){
            if(atc==i+1){
                atccart[i].innerHTML=atco[0].innerHTML;
            }
        }
    }
    function atac2(){
        for(let i=0;i<4;i++){
            if(atc==i+1){
                atccart[i].innerHTML=atco[1].innerHTML;
            }
        }
    }
    function atac3(){
        for(let i=0;i<4;i++){
            if(atc==i+1){
                atccart[i].innerHTML=atco[2].innerHTML;
            }
        }
    }
    function atac4(){
        for(let i=0;i<4;i++){
            if(atc==i+1){
                atccart[i].innerHTML=atco[3].innerHTML;
            }
        }
    }

let backgajout=document.querySelector(".ajout");
let dabab=document.querySelector(".dabab");
    function btnajout(){
        backgajout.classList.remove('hidden')
        dabab.classList.add('blur-sm')

    }
    function btnhidden(){
        backgajout.classList.add('hidden')
        dabab.classList.remove('blur-sm')
    }

let name=document.getElementById("nam");
let position=document.getElementById("pos");
let club=document.getElementById("clu");
let image=document.getElementById("ime");
let pas=document.getElementById("pas");
let dri=document.getElementById("dri");
let defplayer=document.getElementById("def");
let phy=document.getElementById("phy");
let pac=document.getElementById("pac");
let sho=document.getElementById("sho");
let haris=document.querySelector(".haris");
let i=2;
let dev;
    function creatplayer(){
        if(i>2){
            alert("hamza");
            return;
        }
        haris.innerHTML+=` <div class="item w-[5rem] relative " onclick="buttongk${i}()">
                                        <div class="absolute left-[0.7rem] top-[1.3rem]">
                                            <h2 class="text-[#fff] text-[7px] ml-[4px] font-bold opacity-80 "></h2>
                                            <img src="img-fotball/drabo-card-removebg-preview.png" alt="" class="w-[1rem] opacity-80 ">
                                            <img src="img-fotball/logo-AS-Roma-removebg-preview.png" alt="" class="w-[0.7rem]  opacity-60 ml-[2px]">
                                        </div>
                                        <img src="img-fotball/${image.value}" alt="" class="w-[5rem]  absolute bottom-[2.8rem] imgPlayer">
                                        <h2 class="text-[#fff] text-[7px] font-bold absolute left-[1.6rem] top-[0.6rem] opacity-80 NamePlayer">${name.value}</h2>
                                        <p class="positionPlayer">${position.value}</p>
                                        <div class="flex text-[#fff] text-[5px] absolute bottom-5 right-4 gap-[0.5rem] opacity-80">
                                            <div>
                                                <h3>Pac :<span class="pasPlayer">${pac.value}</span></h3>
                                                <h3>Sho : <span class="ShoPlayer">${sho.value}</span></h3>
                                                <h3>Pas : <span class="PasPlayer">${pas.value}</span></h3>
                                            </div>
                                            <div>
                                                <h3>Dri : <span class="DriPlayer">${dri.value}</span></h3>
                                                <h3>Def : <span class="DefPlayer">${defplayer.value}</span></h3>
                                                <h3>Phy : <span class="PhyPlayer">${phy.value}</span></h3>
                                            </div>
                                            </div>
                                        </div>`
                                        backgajout.classList.add('hidden')
                                        dabab.classList.remove('blur-sm')
                                        i++;
                                    }
                                    
                                    