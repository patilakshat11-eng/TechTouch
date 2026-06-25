/*==========================================
TECHTOUCH PROJECTS LLP
VERSION 2
==========================================*/

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

/*==========================================
LOADER
==========================================*/

const tl = gsap.timeline();

tl.to(".loader-line",{
    width:250,
    duration:1.2,
    ease:"power4.out"
})

.from("#loader h1",{
    y:40,
    opacity:0,
    duration:1
},"-=0.6")

.from("#loader p",{
    opacity:0,
    y:20,
    duration:.8
},"-=0.6")

.to("#loader",{
    opacity:0,
    duration:.8,
    delay:.6
})

.set("#loader",{
    display:"none"
});

/*==========================================
HERO ANIMATION
==========================================*/

gsap.from(".hero-topline",{

    y:30,
    opacity:0,
    duration:1,
    delay:3

});

gsap.from(".hero-content h1",{

    y:80,
    opacity:0,
    duration:1.3,
    delay:3.2

});

gsap.from(".hero-content p",{

    y:30,
    opacity:0,
    duration:1,
    delay:3.5

});

gsap.from(".hero-buttons",{

    y:30,
    opacity:0,
    duration:1,
    delay:3.8

});

/*==========================================
NAVBAR
==========================================*/

const header = document.getElementById("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

});

/*==========================================
CURSOR
==========================================*/

const cursor=document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX-9+"px";
cursor.style.top=e.clientY-9+"px";

});

document.querySelectorAll("a").forEach(link=>{

link.addEventListener("mouseenter",()=>{

cursor.style.width="45px";
cursor.style.height="45px";
cursor.style.background="rgba(182,138,68,.18)";

});

link.addEventListener("mouseleave",()=>{

cursor.style.width="18px";
cursor.style.height="18px";
cursor.style.background="transparent";

});

});

/*==========================================
PARALLAX IMAGE
==========================================*/

window.addEventListener("mousemove",(e)=>{

const img=document.querySelector(".hero-image img");

let x=(window.innerWidth/2-e.pageX)/80;
let y=(window.innerHeight/2-e.pageY)/80;

img.style.transform=`scale(1.08) translate(${x}px,${y}px)`;

});

/*==========================================
ABOUT REVEAL
==========================================*/

gsap.to(".about",{

opacity:1,

y:0,

duration:1.2,

scrollTrigger:{

trigger:".about",

start:"top 80%"

}

});

/*==========================================
PLACEHOLDER REVEAL
==========================================*/

gsap.utils.toArray(".placeholder").forEach((section)=>{

gsap.to(section,{

opacity:1,

y:0,

duration:1,

scrollTrigger:{

trigger:section,

start:"top 85%"

}

});

});

/*==========================================
SMOOTH HERO IMAGE
==========================================*/

gsap.to(".hero-image img",{

scale:1.12,

duration:12,

repeat:-1,

yoyo:true,

ease:"sine.inOut"

});