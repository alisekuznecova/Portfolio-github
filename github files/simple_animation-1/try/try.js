let bear = document.querySelector("#bear");
let moveBtn = document.querySelector("#moveBtn");
let stopBnt = document.querySelector("#stopBtn");
let pulsBtn = document.querySelector("#pulsBtn");
let spinlBtn = document.querySelector("#spinlBtn");
let move30Btn = document.querySelector("#move30Btn");
let jumpBtn = document.querySelector("#jumpBtn");
let jumpfBtn = document.querySelector("#jumpfBtn");
let dissBtn = document.querySelector("#dissBtn");
let flipBtn = document.querySelector("#flipBtn");
let fatBtn = document.querySelector("#fatBtn");
let shakeBtn = document.querySelector("#shakeBtn");


moveBtn.addEventListener("click", move);
stopBtn.addEventListener("click", stop);
pulsBtn.addEventListener("click",pulsate);
spinlBtn.addEventListener("click",spinleft);
move30Btn.addEventListener("click",move30);
jumpBtn.addEventListener("click",jump);
jumpfBtn.addEventListener("click",jumpf);
dissBtn.addEventListener("click",dissapear);
flipBtn.addEventListener("click",flip);
fatBtn.addEventListener("click",fat);
shakeBtn.addEventListener("click",shake);

function move(){
    bear.classList.toggle("move");
    bear.style.animationPlayState="running"
    console.log(bear);
}
function stop(move){
    bear.style.animationPlayState="paused"
}

function pulsate(){
    bear.classList.toggle("pulsate");
    bear.style.animationPlayState="running";
    console.log(bear);
}
function spinleft(){
     bear.classList.toggle("spinleft");
    bear.style.animationPlayState="running";
    console.log(bear);
}
function move30(){
     bear.classList.toggle("move30");
    bear.style.animationPlayState="running";
    console.log(bear);
}
function jump(){
     bear.classList.toggle("jump");
    bear.style.animationPlayState="running";
    console.log(bear);
}

function jumpf(){
    bear.classList.toggle("jumpf");
    bear.style.animationPlayState="running"
    console.log(bear);
}
function dissapear(){
     bear.classList.toggle("dissapear");
    bear.style.animationPlayState="running";
    console.log(bear);
}

function flip(){
     bear.classList.toggle("flip");
    bear.style.animationPlayState="running";
    console.log(bear);
}
function fat(){
     bear.classList.toggle("fat");
    bear.style.animationPlayState="running";
    console.log(bear);
}
function shake(){
    bear.classList.toggle("shake");
    bear.style.animationPlayState="running"
    console.log(bear);
}