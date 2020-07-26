

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


  if (newPosition < -1000) {


  nextPage();
  
  }


  
};















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
  tlArrow.fromTo(arrowDown, 0.9, {y: 100, opacity: 0,}, {y: 0, opacity: 1});

  backgroundSlide();



}


}


const controller = new ScrollMagic.Controller();


//Scenes

const heroFade = TweenMax.fromTo(getHeroSection[0], 3, { opacity: 1}, { opacity: 0});


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
 
 
if (aboutCtnOpacity == 0 && opacityControl == 0) {
  
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


  if (window.innerHeight > 499) {
    selfQuotePos = selfQuote.getBoundingClientRect().y + window.pageYOffset;



  } else if (window.innerHeight < 499) {
    selfQuotePos = selfQuote.getBoundingClientRect().y + window.pageYOffset;


  }




/* set duration variable */





    let clientFade = TweenMax.fromTo(getClientSection, 3, {opacity: 1}, {opacity: 0.2});
    
    
    
    let sceneThree = new ScrollMagic.Scene({
      duration: "80%", 
      triggerElement: ".self-qoute-section", 
      triggerHook: 0.8
    }) 
    
    
    .setTween(clientFade)
    .addTo(controller);



    
      window.addEventListener('scroll', function(){
        aboutSelfTextPos = selfQuoteTxt.getBoundingClientRect().y;
        if (window.innerWidth < 800) {

        if(aboutSelfTextPos < 95) {
          selfQuoteTxt.innerHTML = `"If you have a project you’d like to bring to life, let’s work together!"`;
        
          

        } else if (aboutSelfTextPos > 95) {
          selfQuoteTxt.innerHTML = `"I’m a hard worker and I enjoy taking on different challenges."`;
        }

      }

      if (window.innerWidth > 800) {

        if(aboutSelfTextPos < 137) {
          selfQuoteTxt.innerHTML = `"If you have a project you’d like to bring to life, let’s work together!"`;

          

        } else if (aboutSelfTextPos > 137) {  
          selfQuoteTxt.innerHTML = `"I’m a hard worker and I enjoy taking on different challenges."`;
      
        }

      }





      })
      


    
    
    let quoteAppear = TweenMax.fromTo(selfQuote, 2, {opacity: 0}, {opacity: 1});


    
    
    let sceneFour = new ScrollMagic.Scene({
      duration: "100%", 
      triggerElement: ".self-qoute-section", 
      triggerHook: 1,
      reverse: false 
    }) 
    
    .setTween(quoteAppear)
    .addTo(controller);


    

};






let showSkills = 0;

 window.addEventListener("scroll", function(){
  quoteStyle= window.getComputedStyle(selfQuote);
  quoteOpacity = quoteStyle.opacity;
  if(quoteOpacity > 0.7 && showSkills === 0) {
    const tlSkills = new TimelineMax({delay: 0.75});
    tlSkills.fromTo(fadeInOverTxt, 0.8, {opacity: 0, scale: 0.8}, {opacity: 1, scale: 1});
    showSkills = 1;

    getSketchingDiv.classList.add("ske-per");
     getAdobeDiv.classList.add("ado-per");
     getGraphicDiv.classList.add("gra-per");
     getFluencyDiv.classList.add("lan-per");


    setTimeout(function(){
      addWorkTogText()

    }, 100)


  }


 })   













 
// contact form pop-up

const getContactFormSec = document.querySelector(".contact-form-section");

function getContactForm(){
  getContactFormSec.style.display = 'block';
  const tlForm = new TimelineMax({delay: 0});
  tlForm.fromTo(getContactFormSec, 0.25, {opacity: 0}, {opacity: 1});
}

