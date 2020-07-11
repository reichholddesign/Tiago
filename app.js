

/* Main Sections */


const homeMain = document.querySelector(".main-ctn");
const getHeroSection = document.getElementsByClassName("hero-section");
const getAboutCtn = document.querySelector('.about-ctn');
const getClientSection = document.querySelector('.client-section');
const getAboutContactSec = document.querySelector('.about-contact-section');
const selfQuote = document.querySelector(".self-qoute-section");


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


// Set Nav

const navLinks = document.querySelectorAll("li");
navLinks[0].classList.add("nav-active");
const aLinks = document.querySelectorAll(".nav-hover");
aLinks[0].classList.remove("nav-hover");

/* Hero Slider */

let newPosition = 50;
let comicPage = 1;


function backgroundSlide() {


  newPosition += -0.5;
 homeBg[0].style.transform = "translate(0," + newPosition + "px)";
 requestAnimationFrame(backgroundSlide);

  if (newPosition === -1000) {


  nextPage();
  
  }

};


function nextPage(){

  if (comicPage < 17) {
comicPage += 1;
homeBg[0].style.opacity = 0;

setTimeout(function(){
  newPosition = 50;
  Modernizr.on('webp', function (result) {
    if (result) {
  homeBg[0].style.backgroundImage = "url(img/comics/SingleMother/webp/desktop/SingleMother_" + comicPage + ".webp)"
    }
    else {
      homeBg[0].style.backgroundImage = "url(img/comics/SingleMother/jpg/desktop/SingleMother_" + comicPage + ".jpg)"

    }
  });

 
  setTimeout(function() {
    homeBg[0].style.backgroundPosition = "0px 0px";
    homeBg[0].style.opacity = 1;

    setTimeout(function(){
      homeBg[0].style.backgroundPosition = "0px " + newPosition + "px";

    }, 50)



  }, 250)


}, 250)

  }
}

function prevPage(){

if (comicPage > 1) {

  comicPage -= 1;
  homeBg[0].style.opacity = 0;
  
  setTimeout(function(){
    newPosition = 50;
    homeBg[0].style.backgroundImage = "url(img/comics/SingleMother/webp/mobile/SingleMother_" + comicPage + ".webp)"
  
   
    setTimeout(function() {
      homeBg[0].style.backgroundPosition = "0px 0px";
      homeBg[0].style.opacity = 1;
      
      setTimeout(function(){
        homeBg[0].style.backgroundPosition = "0px " + newPosition + "px";
  
      }, 50)
  
  
  
    }, 250)
  
  
  }, 250)
} 
  
  }
  
  window.addEventListener('scroll', function(){

    
    
      if(window.innerWidth > 800 && window.pageYOffset > 20) {
      
          getHeroControls.style.opacity = "0";
      }
    
    
      else if (window.innerHeight > 800 && window.pageYOffset < 20) {
        getHeroControls.style.opacity = "1";
       
      }
    })










function showInfoTxt() {
  getHeroControlsTxt.style.opacity = "1";
  getHeroControlsTxt.style.right = "0";
}

function hideInfoTxt() {
  getHeroControlsTxt.style.opacity = "0";
  getHeroControlsTxt.style.right = "-50px";
}



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
  duration: '70%', 
  triggerElemnt: getHeroSection[0], 
  triggerHook: 0
}) 

.setTween(heroFade)
.addTo(controller);



const controllerTwo = new ScrollMagic.Controller();

const aboutFade = TweenMax.fromTo(getAboutCtn, 3, { opacity: 1}, { opacity: 0});



let sceneTwo = new ScrollMagic.Scene({
  duration: '70%', 
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

if(window.innerWidth > 1000) {
  getQuoteTwo.style.display = "flex";
  const tlTwo = new TimelineMax({delay: 1.15});
  tlTwo.fromTo(getQuoteTwo, 0.6, {opacity: 0, x: 100}, {opacity: 1, x: 0});


}

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

    selfQuoteImg.style.top = selfQuotePos + 30 + "px";


  } else if (window.innerHeight < 499) {
    selfQuotePos = selfQuote.getBoundingClientRect().y + window.pageYOffset;

    selfQuoteImg.style.top = selfQuotePos - 50 + "px";

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
      //    getTiagoChallenges.style.display = "none";
      getTiagoChallenges.style.opacity = "0";
          

        } else if (aboutSelfTextPos > 137) {  
          selfQuoteTxt.innerHTML = `"I’m a hard worker and I enjoy taking on different challenges."`;
          //getTiagoChallenges.style.display = "flex";
          getTiagoChallenges.style.opacity = "1";
        }

      }





      })
      


    
    
    let quoteAppear = TweenMax.fromTo(selfQuote, 3, { x: -500,  opacity: 0}, { x: 0, opacity: 1});
    
    
    
    let sceneFour = new ScrollMagic.Scene({
      duration: "70%", 
      triggerElement: ".self-qoute-section", 
      triggerHook: 1
    }) 
    
    .setTween(quoteAppear)
    .addTo(controller);


    
 
  

    
       

};







