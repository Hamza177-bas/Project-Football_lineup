let images = document.querySelectorAll('.carousel-item');
let currentIndex = 0;


    function showNextImage() {
        images[currentIndex].classList.remove('opacity-40');
        images[currentIndex].classList.add('opacity-40');

        let oldIndex = currentIndex;
        setTimeout(function () {
            images[oldIndex].classList.add('hidden');
        }, 500);

        currentIndex = (currentIndex + 1) % images.length;

        setTimeout(function () {
            images[currentIndex].classList.remove('hidden');
            setTimeout(function () {
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

function buttongk2(){
    if(c===2){
        car.innerHTML=a[2].innerHTML
        a[2].style.display="none"
        a[1].style.display="block"
        a[0].style.display="block"
    }else if(c===1){
        car1.innerHTML=a[2].innerHTML
        a[2].style.display="none"
        a[1].style.display="block"
        a[0].style.display="block"
    }
}
let milie=document.querySelectorAll(".micm");
let mil1=document.querySelector(".mil1");
let mil2=document.querySelector(".mil2");
let mil3=document.querySelector(".mil3");
let mil4=document.querySelector(".mil4");
let mil5=document.querySelector(".mil5");
let mil6=document.querySelector(".mil6");
let arrymil=[mil1,mil2,mil3,mil4,mil5,mil6];
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
                for(let j=0;j<5;j++){
                                if(milie[j].innerHTML===arrymil[0].innerHTML){
                                    messje.classList.remove("hidden");
                                    return;
                                }
                                
                            }
                milie[i].innerHTML=arrymil[0].innerHTML;
            }

        }
        }
    function milieu2(){
        for(let i=0;i<5;i++){
            if(ml==i+1){
                for(let j=0;j<5;j++){
                    if(milie[j].innerHTML===arrymil[1].innerHTML){
                        messje.classList.remove("hidden");
                        return;
                    }
                    
                }
                milie[i].innerHTML=arrymil[1].innerHTML;
            }
        }
    }
    function milieu3(){
        for(let i=0;i<5;i++){
            if(ml==i+1){
                for(let j=0;j<5;j++){
                    if(milie[j].innerHTML===arrymil[2].innerHTML){
                        messje.classList.remove("hidden");
                        return;
                    }
                    
                }
                milie[i].innerHTML=arrymil[2].innerHTML;
            }
        }
        
    }
    function milieu4(){
        for(let i=0;i<5;i++){
            if(ml==i+1){
                for(let j=0;j<5;j++){
                    if(milie[j].innerHTML===arrymil[3].innerHTML){
                        messje.classList.remove("hidden");
                        return;
                    }
                    
                }
                milie[i].innerHTML=arrymil[3].innerHTML;
            }
        }
        
    }
    function milieu5(){
        for(let i=0;i<5;i++){
            if(ml==i+1){
                for(let j=0;j<5;j++){
                    if(milie[j].innerHTML===arrymil[4].innerHTML){
                        messje.classList.remove("hidden");
                        return;
                    }
                    
                }
                milie[i].innerHTML=arrymil[4].innerHTML;
            }
        }
    }
    function milieu6(){
        for(let i=0;i<5;i++){
            if(ml==i+1){
                for(let j=0;j<5;j++){
                    if(milie[j].innerHTML===arrymil[5].innerHTML){
                        messje.classList.remove("hidden");
                        return;
                    }
                    
                }
                milie[i].innerHTML=arrymil[5].innerHTML;
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
let messje=document.querySelector(".messje");
let vardef1=document.querySelectorAll(".def")
let vardefen=document.querySelectorAll(".defen");

    function defen1(){
        for(let i=0;i<6;i++){
            if(def==i+1){
                for(let j=0;j<6;j++){
                    if(vardefen[j].innerHTML===vardef1[0].innerHTML){
                        messje.classList.remove("hidden");
                        return;
                    }

                    
                    
                }
                vardefen[i].innerHTML=vardef1[0].innerHTML;

            }
        }
    }
    function defen2(){
        for(let i=0;i<6;i++){
            if(def==i+1){
                for(let j=0;j<6;j++){
                    if(vardefen[j].innerHTML===vardef1[1].innerHTML){
                        messje.classList.remove("hidden");
                        return;
                    }
                    
                }
                vardefen[i].innerHTML=vardef1[1].innerHTML;
        }
    }
}
    function defen3(){
        for(let i=0;i<6;i++){
            if(def==i+1){
                for(let j=0;j<6;j++){
                    if(vardefen[j].innerHTML===vardef1[2].innerHTML){
                        messje.classList.remove("hidden");
                        return;
                    }
                    
                }
                vardefen[i].innerHTML=vardef1[2].innerHTML;
            
        }
    }
}
    function defen4(){
        for(let i=0;i<6;i++){
            if(def==i+1){

                for(let j=0;j<6;j++){
                    if(vardefen[j].innerHTML===vardef1[3].innerHTML){
                        messje.classList.remove("hidden");
                        return;
                    }
                
                }
                vardefen[i].innerHTML=vardef1[3].innerHTML;
            }
            
        }
    }
    function defen5(){
        for(let i=0;i<6;i++){
            if(def==i+1){
                for(let j=0;j<6;j++){
                    if(vardefen[j].innerHTML===vardef1[4].innerHTML){
                        messje.classList.remove("hidden");
                        return;
                    }
                    
                }
                vardefen[i].innerHTML=vardef1[4].innerHTML;
            }
        }

    }
    function defen6(){
        for(let i=0;i<6;i++){
            if(def==i+1){
                for(let j=0;j<6;j++){
                    if(vardefen[j].innerHTML===vardef1[5].innerHTML){
                        messje.classList.remove("hidden");
                        return;
                    }
                    
                }
                vardefen[i].innerHTML=vardef1[5].innerHTML;
            }
        }
        
    }
    function defen7(){
        for(let i=0;i<6;i++){
            if(def==i+1){
                for(let j=0;j<6;j++){
                    if(vardefen[j].innerHTML===vardef1[6].innerHTML){
                        messje.classList.remove("hidden");
                        return;
                    }
                    
                }
                vardefen[i].innerHTML=vardef1[6].innerHTML;
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
let copycarte=[atccart[0].innerHTML,atccart[1].innerHTML,atccart[2].innerHTML,atccart[3].innerHTML];

    function atac1(){
        for(let i=0;i<4;i++){
            if(atc==i+1){
                for(let j=0;j<4;j++){
                    if(atccart[j].innerHTML===atco[0].innerHTML){
                        messje.classList.remove("hidden");
                        return;
                    }
                    
                }
                
                atccart[i].innerHTML=atco[0].innerHTML;
                }
        }
    }
   
// let copycarteatac2;
// let r;
    function atac2(){
        for(let i=0;i<4;i++){
            if(atc==i+1){
                for(let j=0;j<4;j++){
                    if((atccart[j].innerHTML)===atco[1].innerHTML){
                        messje.classList.remove("hidden");
                        return;
                    }
                }
                atccart[i].innerHTML=atco[1].innerHTML;
                r=i;
            }
        }
    }
    function copycart(){
        atccart[r].innerHTML= copycarte[r];
    }
    function atac3(){
        
        for(let i=0;i<4;i++){
            if(atc==i+1){
                for(let j=0;j<4;j++){
                    if(atccart[j].innerHTML===atco[2].innerHTML){
                        messje.classList.remove("hidden");
                        return;
                    }
                    
                }
                atccart[i].innerHTML=atco[2].innerHTML;
            }
        }
    }
    function atac4(){
        for(let i=0;i<4;i++){
            if(atc==i+1){
                for(let j=0;j<4;j++){
                    if(atccart[j].innerHTML===atco[3].innerHTML){
                        messje.classList.remove("hidden");
                        return;
                    }
                    
                }
                atccart[i].innerHTML=atco[3].innerHTML;
            }
        }
    }
    function atac5(){
        for(let i=0;i<5;i++){
            if(atc==i+1){
                for(let j=0;j<5;j++){
                    if(atccart[j].innerHTML===atco[4].innerHTML){
                        messje.classList.remove("hidden");
                        return;
                    }
                    
                }
                atccart[i].innerHTML=atco[4].innerHTML;
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
let rating=document.getElementById("ime");
let pas=document.getElementById("pas");
let dri=document.getElementById("dri");
let defplayer=document.getElementById("def");
let phy=document.getElementById("phy");
let pac=document.getElementById("pac");
let sho=document.getElementById("sho");
let haris=document.querySelector(".haris");
let hojo=document.querySelector(".hojo");
let wasat=document.querySelector(".wasat");
let difenc=document.querySelector(".defense");
let i=2;
let h=5;
let w=6;
let d=7;
let dev;
let blockajout=document.querySelector(".block-ajout");
    function creatplayer(){
        if(position.value==="GK"){
            if(i>2){
                blockajout.classList.remove('hidden')
                return;
            }
            haris.innerHTML=` <div class="item w-[5rem] relative " onclick="buttongk${i}()">
                                            <div class="absolute left-[0.7rem] top-[1.3rem]">
                                                <h2 class="text-[#fff] text-[7px] ml-[4px] font-bold opacity-80 ">${rating.value}</h2>
                                                <img src="img-fotball/drabo-card-removebg-preview.png" alt="" class="w-[1rem] opacity-80 ">
                                                <img src="img-fotball/logo-AS-Roma-removebg-preview.png" alt="" class="w-[0.7rem]  opacity-60 ml-[2px]">
                                            </div>
                                             <img src="img-fotball/img-create-player-removebg-preview (2).png" alt="" class="w-[4rem]  absolute bottom-[2.5rem] left-[0.6rem]">
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
        }else if(position.value==="ST"||position.value==="LW"||position.value==="RW"){
            if(h>5){
                blockajout.classList.remove('hidden')
                return;
            }
            hojo.innerHTML=` <div class="item w-[5rem] relative " onclick="atac${h}()">
            <div class="absolute left-[0.7rem] top-[1.3rem]">
                <h2 class="text-[#fff] text-[7px] ml-[4px] font-bold opacity-80 ">${rating.value}</h2>
                <img src="img-fotball/drabo-card-removebg-preview.png" alt="" class="w-[1rem] opacity-80 ">
                <img src="img-fotball/logo-AS-Roma-removebg-preview.png" alt="" class="w-[0.7rem]  opacity-60 ml-[2px]">
            </div>
            <img src="img-fotball/img-create-player-removebg-preview (2).png" alt="" class="w-[4rem]  absolute bottom-[2.5rem] left-[0.6rem]">
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
            h++;
        }else if(position.value==="CM"){
            if(w>6){
                blockajout.classList.remove('hidden')
                return;
            }
            wasat.innerHTML=` <div class="item w-[5rem] relative " onclick="milieu${w}()">
            <div class="absolute left-[0.7rem] top-[1.3rem]">
                <h2 class="text-[#fff] text-[7px] ml-[4px] font-bold opacity-80 ">${rating.value}</h2>
                <img src="img-fotball/drabo-card-removebg-preview.png" alt="" class="w-[1rem] opacity-80 ">
                <img src="img-fotball/logo-AS-Roma-removebg-preview.png" alt="" class="w-[0.7rem]  opacity-60 ml-[2px]">
            </div>
            <img src="img-fotball/img-create-player-removebg-preview (2).png" alt="" class="w-[4rem]  absolute bottom-[2.5rem] left-[0.6rem]">
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
            w++;
        }else if(position.value==="CB"||position.value==="LB"||position.value==="RB"){
            if(d>7){
                blockajout.classList.remove('hidden')
                return;
            }
            difenc.innerHTML=` <div class="item w-[5rem] relative " onclick="defen${d}()">
            <div class="absolute left-[0.7rem] top-[1.3rem]">
                <h2 class="text-[#fff] text-[7px] ml-[4px] font-bold opacity-80 ">${rating.value}</h2>
                <img src="img-fotball/drabo-card-removebg-preview.png" alt="" class="w-[1rem] opacity-80 ">
                <img src="img-fotball/logo-AS-Roma-removebg-preview.png" alt="" class="w-[0.7rem]  opacity-60 ml-[2px]">
            </div>
             <img src="img-fotball/img-create-player-removebg-preview (2).png" alt="" class="w-[3.8rem]  absolute bottom-[2.5rem] left-[0.6rem]">
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
            d++;
        }

        
        }

    function hiddentomessaje(){
        messje.classList.add("hidden");
    }
    function hiddenblockajout(){
        blockajout.classList.add('hidden')
    }



