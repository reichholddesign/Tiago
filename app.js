function homeStart() {


  if (window.innerWidth < 800) {
  
    const tlBg = new TimelineMax({delay: 0.1});
    tlBg.fromTo(homeBg[0], 0.9, {opacity: 0}, {opacity: 1});
    
  
    const tlBgOne = new TimelineMax({delay: 0.1});
    tlBgOne.fromTo(freelnaceTxt, 0.9, {opacity: 0}, {opacity: 1});
  
    const tlArrow = new TimelineMax({delay: 0.1});
    tlArrow.fromTo(arrowDown, 0.9, {y: 100, opacity: 0}, {y: 0, opacity: 1});
  
  }
  
  else if (window.innerWidth > 800) {
    const tlBg = new TimelineMax({delay: 0.1});
    tlBg.fromTo(homeBg[0], 0.9, {opacity: 0}, {opacity: 1});
    
  
  
    const tlArrow = new TimelineMax({delay: 0.1});
    tlArrow.fromTo(arrowDown, 0.9, {y: 100, opacity: 0}, {y: 0, opacity: 1});
  
    backgroundSlide();
  
  
  
  }
  
  
  }



let scrollKey = 0;


window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;
  let docHeight = document.body.offsetHeight;
  let winHeight = window.innerHeight;
  let scrollPercent = scrollTop / (docHeight - winHeight);
  let scrollPercentRounded = Math.round(scrollPercent * 100);

  if(scrollPercentRounded === 100 && scrollKey === 0) {
   setTimeout(() => {
    scrollKey = 1;


   }, 500)
 
  }


  if(scrollPercentRounded === 100 && scrollKey === 1) {
    scrollKey = 2;
    contactDisplay();
  }  

  
});

/* Main Sections */


const homeMain = document.querySelector(".main-ctn");
const getHeroSection = document.getElementsByClassName("hero-section");
const getAboutCtn = document.querySelector('.about-ctn');
const getClientSection = document.querySelector('.client-section');
const getAboutContactSec = document.querySelector('.about-contact-section');
const selfQuote = document.querySelector(".self-qoute-section");
const fadeInOverTxt = document.querySelectorAll(".fade-in-over-txt");


/* Page elements */


const homeBg = document.getElementsByClassName("home-img-overlay");
const getAboutText = document.querySelector('.about--txt-ctn')
const getAboutImg = document.querySelector('.about-main-img');
const getTiagoQuote = document.querySelector('.tiago-quote-ctn');
const getGirlOnTrainImg = document.querySelector('.girl-on-train-img');
const getAboutRadial = document.querySelector('.about-radial');
const getAboutTxtCtn = document.querySelector('.contact-content-ctn');
const freelnaceTxt = document.querySelector(".freelance-ctn");
const selfQuoteTxt = document.querySelector(".self-quote-txt");
const arrowDown = document.querySelector(".arrow-down");  
const tiagoPic = document.querySelector(".about-bg");
const redText = document.querySelector(".red-text");
const getHeroControls = document.querySelector(".hero-controls-ctn");
const getHeroControlsTxt = document.querySelector(".hero-controls-txt");
const getQuoteTwo = document.querySelector(".quote-2");
const getTiagoChallenges = document.querySelector(".tiago-challenges");
const getSketchingDiv = document.querySelector(".sketching");
const getAdobeDiv = document.querySelector(".adobe");
const getGraphicDiv = document.querySelector(".graphic");
const getFluencyDiv = document.querySelector(".fluency");
const getWorkTogTxt = document.querySelector(".work-tog-txt");
const getTiagoContactImg = document.querySelector(".contact-tiago-img");
const getForm = document.querySelector(".form-wrp");
const selfQuoteImg = document.querySelector(".self-img");




// Set Nav

const navLinks = document.querySelectorAll("li");
navLinks[0].classList.add("nav-active");
const aLinks = document.querySelectorAll(".nav-hover");
aLinks[0].classList.remove("nav-hover");

/* Hero Slider */

let newPosition = 50;
let comicPage = 1;


const FRAME_DURATION = 1000 / 60;
const getTime = typeof performance === 'function' ? performance.now : Date.now;
let lastUpdate = getTime();

let heroOpacity = getHeroSection[0].style.opacity;


function backgroundSlide() {
  const now = getTime();
  const delta = (now - lastUpdate) / FRAME_DURATION;


  newPosition += -0.5 * delta;
   homeBg[0].style.transform = "translate(0," + newPosition + "px)";

 lastUpdate = now;



window.requestAnimationFrame(backgroundSlide);  


  if (newPosition < -2000) {

    window.cancelAnimationFrame(backgroundSlide);
    homeBg[0].style.transform = "translate(0, 0)";

  
  
  }


  
};


















const controller = new ScrollMagic.Controller();


//Scenes

const heroFade = TweenMax.fromTo(getHeroSection[0], 3, { opacity: 1}, { opacity: 0.0});


let scene = new ScrollMagic.Scene({
  duration: '100%', 
  triggerElemnt: getHeroSection[0], 
  triggerHook: 0
}) 

.setTween(heroFade)
.addTo(controller);



const controllerTwo = new ScrollMagic.Controller();

const aboutFade = TweenMax.fromTo(getAboutCtn, 3, { opacity: 1}, { opacity: 0});



let sceneTwo = new ScrollMagic.Scene({
  duration: '80%', 
  triggerElement: ".client-section", 
  triggerHook: 1
}) 


.setTween(aboutFade)
.addTo(controllerTwo);


let opacityControl = 0;
let homeOpacityControl = 0;

let lastSecActive = 0;

window.addEventListener('scroll', function() {

  let aboutImgCompStyle = window.getComputedStyle(getAboutCtn);
  let aboutCtnOpacity = aboutImgCompStyle.opacity;
 
 
if (aboutCtnOpacity < 0.1 && opacityControl < 0.1) {
  
  const tl = new TimelineMax({delay: 0.75});
tl.fromTo(getGirlOnTrainImg, 0.4, {opacity: 1}, {opacity: 0.2});
tl.fromTo(getTiagoQuote, 0.6, {opacity: 0, x: -100}, {opacity: 1, x: 0});



opacityControl = 1; 


setTimeout(function(){

  

 
  addLastHomeSecitons()
 

}, 1500);

 




  }

});







function addLastHomeSecitons() {


  selfQuote.style.display = "flex";
  getAboutContactSec.style.display = "flex";


  


/* set duration variable */





    let clientFade = TweenMax.fromTo(getClientSection, 3, {opacity: 1}, {opacity: 0.2});
    
    
    
    let sceneThree = new ScrollMagic.Scene({
      duration: "80%", 
      triggerElement: ".self-qoute-section", 
      triggerHook: 0.8
    }) 
    
    
    .setTween(clientFade)
    .addTo(controller);



    


    
    
    let quoteAppear = TweenMax.fromTo(selfQuote, 2, {opacity: 0}, {opacity: 1});
    let quoteImgAppear = TweenMax.fromTo(selfQuoteImg, 2, {opacity: 0}, {opacity: 1});


    
    
    let sceneFour = new ScrollMagic.Scene({
      duration: "100%", 
      triggerElement: ".self-qoute-section", 
      triggerHook: 1,
      reverse: false
    }) 
    
    .setTween(quoteAppear, quoteImgAppear)
    .addTo(controller);



    let quoteSecFace = TweenMax.fromTo(selfQuote, 1, {opacity: 1, scale: 1}, {opacity: 0, scale: 0.3});
    
    
    
    let sceneFive = new ScrollMagic.Scene({
      duration: "100%", 
      triggerElement: getAboutContactSec, 
      triggerHook: 1
    }) 
    
    
    .setTween(quoteSecFace)
    .addTo(controller);


    
    

};










let showSkills = 0;

 window.addEventListener("scroll", function(){
  quoteStyle = window.getComputedStyle(selfQuoteImg);
  quoteOpacity = quoteStyle.opacity;
  if(quoteOpacity > 0.45 && showSkills === 0) {
    const tlSkills = new TimelineMax({delay: 0.75});
    tlSkills.fromTo(fadeInOverTxt, 0.8, {opacity: 0, scale: 0.8}, {opacity: 1, scale: 1});
    showSkills = 1;

    getSketchingDiv.classList.add("ske-per");
     getAdobeDiv.classList.add("ado-per");
     getGraphicDiv.classList.add("gra-per");
     getFluencyDiv.classList.add("lan-per");

  }

 })   


function contactDisplay() {
let checkLanguage = sessionStorage.getItem('language');

const tlContact = new TimelineMax({delay: 0.25});
tlContact.fromTo(getTiagoContactImg, 0.6, {opacity: 0, scale: 0.8}, {opacity: 1, scale: 1});
tlContact.fromTo(getWorkTogTxt, 0.6, {opacity: 0}, {opacity: 1});
tlContact.fromTo(getForm, 0.6, {opacity: 0}, {opacity: 1});
arrowDown.style.display = "none";


setTimeout( () => {
getWorkTogTxt.style.transition = "opacity 0.5s ease-in-out";
}, 3000);

setTimeout( () => {
  getWorkTogTxt.style.opacity = "0";
  }, 3500);

  setTimeout( () => {
    if(!checkLanguage || checkLanguage == 'english'){
    getWorkTogTxt.innerHTML = "Tiago is available for new projects and commisions";
  } else if(checkLanguage == "japanese"){
    getWorkTogTxt.innerHTML = "お仕事のご依頼は、メールにてお気楽によろしくお願いいたします";

  }
    }, 4000);

    setTimeout( () => {
      getWorkTogTxt.style.opacity = "1";
      }, 4500);



}

 







