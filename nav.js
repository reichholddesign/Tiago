
/* menu */


//We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});




// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);





const menuIcon = document.getElementsByClassName('menu--icon');
const header = document.getElementsByTagName('header');
const nav = document.getElementsByTagName('nav');
const lang = document.getElementsByClassName('language--ctn')
const aside = document.getElementsByTagName('aside');
const p = document.getElementsByTagName('p');
const getLang = document.querySelector(".lang");
const getSocialsCtn = document.querySelector(".socials-ctn");


let navToggle = 0;


menuIcon[0].addEventListener("click", function(){
header[0].classList.toggle("menu-activated");



if(navToggle === 0) {

setTimeout(function(){
    nav[0].classList.toggle("nav--active");
    aside[0].classList.toggle("social-menu-ctn");
    p[0].classList.toggle("lang-active");
    navToggle = 1;


}, 600);

} else if (navToggle === 1) {

  nav[0].classList.toggle("nav--active");
  aside[0].classList.toggle("social-menu-ctn");
  p[0].classList.toggle("lang-active");
  navToggle = 0;
  
}




});

function resetSocialLangToggle() {
  socialLangToggle = 0;
  getLang.style.display = "flex";
  getSocialsCtn.style.display = "flex";
}


let socialLangToggle = 0;




window.addEventListener('scroll', function(){



  if(window.innerWidth > 800 && window.pageYOffset > 20 && socialLangToggle === 0) {
  

      getLang.style.opacity = "0";
      getSocialsCtn.style.opacity = "1";
      getSocialsCtn.style.transform = "translate(0, 0)"
  }


  else if (window.innerHeight > 800 && window.pageYOffset < 20 && socialLangToggle === 0) {

    getLang.style.opacity = "1";
    getSocialsCtn.style.opacity = "0";
    getSocialsCtn.style.transform = "translate(0, -50px)"
  }
})



function navHover() {


}