let images = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

// function Special for slaider

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

// functions Transferring date players to interfase

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
let copycartegard=[car.innerHTML,car1.innerHTML];

    function chek(){
       c=0;
    }
    function chek1(){
        c=1;
    }
    function buttongk(){
        if(c===0){
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
        if(c===0){
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
        if(c===0){
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
    // function copycartgard(){
    //     if(c===1){
    //         car1.innerHTML=copycartegard[1];
    //     }else if(c===0){
    //         car.innerHTML=copycartegard[0];
    //     }
    // }
 
    
let milie=document.querySelectorAll(".micm");
let mil1=document.querySelector(".mil1");
let mil2=document.querySelector(".mil2");
let mil3=document.querySelector(".mil3");
let mil4=document.querySelector(".mil4");
let mil5=document.querySelector(".mil5");
let mil6=document.querySelector(".mil6");
let arrymil=[mil1,mil2,mil3,mil4,mil5,mil6];
let ml=0;
let copycartemile=[milie[0].innerHTML,milie[1].innerHTML,milie[2].innerHTML,milie[3].innerHTML,milie[4].innerHTML];

// // function chek position 

    function cheksowmil(mil){
        ml=mil;
    }
let rmil=[];
    function milieus(num){
        for(let i=0;i<6;i++){
            if(ml==i+1){
                for(let j=0;j<5;j++){
                                if(milie[j].innerHTML===arrymil[num].innerHTML){
                                    messje.classList.remove("hidden");
                                    return;
                                }
                                
                            }
                milie[i].innerHTML=arrymil[num].innerHTML;
                rmil[num]=i
            }

        }
    }
    function copycartmil(num){
        milie[rmil[num]].innerHTML = copycartemile[rmil[num]];
    }
   let def;
    function cheksowdefen(dev){
        def=dev;
    }

let messje=document.querySelector(".messje");
let vardef1=document.querySelectorAll(".def")
let vardefen=document.querySelectorAll(".defen");
let copycartedefen=[vardefen[0].innerHTML,vardefen[1].innerHTML,vardefen[2].innerHTML,vardefen[3].innerHTML,vardefen[4].innerHTML,vardefen[5].innerHTML];
let rdef=[];

    function defen(num){
        for(let i=0;i<6;i++){
            if(def==i+1){
                for(let j=0;j<6;j++){
                    if(vardefen[j].innerHTML===vardef1[num].innerHTML){
                        messje.classList.remove("hidden");
                        return;
                    }

                    
                    
                }
                vardefen[i].innerHTML=vardef1[num].innerHTML;
                rdef[num]=i;
            }
        }
    }

function copycartdefen(num){
    vardefen[rdef[num]].innerHTML= copycartedefen[rdef[num]];
}
let atc;

    function chekonclickatac(atco){
            atc=atco;
    }

let atco=document.querySelectorAll(".atc")
let atccart=document.querySelectorAll(".atccart");
let copycarteatac=[atccart[0].innerHTML,atccart[1].innerHTML,atccart[2].innerHTML,atccart[3].innerHTML];
let r=[];

// Transferring attacker data to the pitch

    function atac(num){
        for(let i=0;i<4;i++){
            if(atc==i+1){
                for(let j=0;j<4;j++){
                    if(atccart[j].innerHTML===atco[num].innerHTML){
                        messje.classList.remove("hidden");
                        return;
                    }
                
                }
                
                atccart[i].innerHTML=atco[num].innerHTML;
                r[num]=i;
                }
        }
    }

// My Blank Cards Attackers :

    function copycart(num){
            atccart[r[num]].innerHTML= copycarteatac[r[num]];
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
let playerGard=document.querySelector(".playerGard");
let playerNoGard=document.querySelector(".playerNoGard");

function chengestatistike(){
    if(position.value==='GK'){
        playerGard.classList.remove('hidden');
        playerNoGard.classList.add('hidden');
    }else{
        playerGard.classList.add('hidden');
        playerNoGard.classList.remove('hidden');
    }d
}
let i=2;
let h=5;
let w=6;
let d=7;
let dev;
let blockajout=document.querySelector(".block-ajout");
let ched=0;
function regex(){
    
    if(/^\d{1,2}$/.test(rating.value)!= true){
        alert("NUMBER 1 TO 99  ");
        backgajout.classList.remove('hidden')
        ched=1
        return;
    }
    if(/^\d{1,2}$/.test(pas.value) != true){
        alert("NUMBER 1 TO 99 ")
        backgajout.classList.remove('hidden')
        ched=1
        return;
    }
    if(/^\d{1,2}$/.test(dri.value) != true){
        alert("NUMBER 1 TO 99 ")
        backgajout.classList.remove('hidden')
        ched=1
        return;
    }
    if(/^\d{1,2}$/.test(phy.value) != true){
        alert("NUMBER 1 TO 99 ")
        backgajout.classList.remove('hidden')
        ched=1
        return;
    }
    if(/^\d{1,2}$/.test(pac.value) != true){
        alert("NUMBER 1 TO 99 ")
        backgajout.classList.remove('hidden')
        ched=1
        return;
    }
    if(/^\d{1,2}$/.test(sho.value) != true){
        alert("NUMBER 1 TO 99 ")
        backgajout.classList.remove('hidden')
        ched=1
        return;
    }
    if(/^\d{1,2}$/.test(defplayer.value) != true){
        alert("NUMBER 1 TO 99 ")
        backgajout.classList.remove('hidden')
        ched=1
        return;
    }
    backgajout.classList.add('hidden')
}
    function creatplayer(){
        if(ched!==1){
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
                                                        <h3>Div :<span class="pasPlayer">${pac.value}</span></h3>
                                                        <h3>Han : <span class="ShoPlayer">${sho.value}</span></h3>
                                                        <h3>Kic : <span class="PasPlayer">${pas.value}</span></h3>
                                                    </div>
                                                    <div>
                                                        <h3>Ref : <span class="DriPlayer">${dri.value}</span></h3>
                                                        <h3>Spo : <span class="DefPlayer">${defplayer.value}</span></h3>
                                                        <h3>Pos : <span class="PhyPlayer">${phy.value}</span></h3>
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
                hojo.innerHTML=` <div class="item w-[5rem] relative " onclick="atac('5')">
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
                wasat.innerHTML=` <div class="item w-[5rem] relative " onclick="milieus('5')">
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
                difenc.innerHTML=` <div class="item w-[5rem] relative " onclick="defen('6')">
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
        }
    function hiddentomessaje(){
        messje.classList.add("hidden");
    }
    function hiddblockajout(){
        blockajout.classList.add('hidden')
    }
