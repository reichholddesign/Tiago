
/* menu */
//sessionStorage.clear();

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



//getSocialsCtn.style.display = "flex";

if(navToggle === 0) {

setTimeout(function(){
    nav[0].classList.toggle("nav--active");
    aside[0].classList.toggle("social-menu-ctn");
    p[0].classList.toggle("lang-active");
    navToggle = 1;
    menuIcon[0].src = "img/icons/times-solid.svg"
    menuIcon[0].style.filter = "invert(100%)"
}, 600);

} else if (navToggle === 1) {

  nav[0].classList.toggle("nav--active");
  aside[0].classList.toggle("social-menu-ctn");
  p[0].classList.toggle("lang-active");
  navToggle = 0;
  menuIcon[0].src = "img/icons/menu-icon.svg"
  menuIcon[0].style.filter = "invert(0%)";
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
      getSocialsCtn.style.transform = "translate(0, 0)";

  }


  else if (window.innerHeight > 800 && window.pageYOffset < 20 && socialLangToggle === 0) {

    getLang.style.opacity = "1";
    getSocialsCtn.style.opacity = "0";
    getSocialsCtn.style.transform = "translate(0, -50px)"
  }
})



// Langauge





// get elements

const english = document.querySelector(".english");
const japanese = document.querySelector(".japanese");


//get header elements 

const navHome = document.querySelector(".nav-home");
const navWork = document.querySelector(".nav-work");
const navComics = document.querySelector(".nav-comics");


//get Homepage elements
const homeFreelanceTxt = document.querySelector(".freelance-txt");
const homeAboutHdr = document.querySelector(".about-hdr");
const homeAboutTxt = document.querySelector("#about");
const clientHdr = document.querySelector(".client-hdr");
const skillsHdr = document.querySelector(".skills-hdr");
const sketchingSkill = document.querySelector(".sketching-skill");
const graphicSkill = document.querySelector(".graphic-skill");
const langSkill = document.querySelector(".lang-skill");
const photogIntrest = document.querySelector(".photog-interest");
const musicIntrest = document.querySelector(".music-interest");
const travelIntrest = document.querySelector(".travel-interest");
const awardTxt = document.querySelector(".award-text");
const getSelfQuoteTxt = document.querySelector(".self-quote-txt");
const inputName = document.querySelector(".input-name");
const inputEmail = document.querySelector(".input-email");
const inputMsg = document.querySelector(".input-msg");
const contactHdr = document.querySelector(".contact-hdr");
const workTogTxt = document.querySelector(".work-tog-txt");

// get work elements
const workHdr = document.querySelector(".work-page-hdr");
const workIntroTxt = document.querySelector(".work-intro-txt");


// get comic elements

const comicHdr = document.querySelector(".comic-page-hdr");
const comicIntroTxt = document.querySelector(".comic-intro-txt");
const comicReturnTitle = document.querySelector(".comic-return-link");




let selectedLang = sessionStorage.getItem('language');
if(!selectedLang) {
 
} else if(selectedLang == 'japanese') {
  selectJapanese();
} else if (selectedLang == 'english') {
  selectEnglish();
}

/* checking language on page change 

window.addEventListener("load", () => {
  if(!selectedLang) {
 
  } else if(selectedLang == 'japanese') {
    selectJapanese();
  } else if (selectedLang == 'english') {
    selectEnglish();
  }

})

*/

// event listeners

english.addEventListener("click", function(){
    selectEnglish()
});
japanese.addEventListener("click", function(){
    selectJapanese()
});




// English  

function selectEnglish() {



  
  sessionStorage.setItem("language", "english");


    // mark selected language
    japanese.style.textDecoration = "none";
    english.style.textDecoration = "underline";


    // change header lang
    navHome.innerHTML = "Home";
    navWork.innerHTML = "Work";
    navComics.innerHTML = "Comics";


    if (homeFreelanceTxt) {


     // change home hero  
    homeFreelanceTxt.innerHTML = "Freelance Illustrator";

    // change home about
    homeAboutHdr.innerHTML = "About";
    homeAboutTxt.innerHTML = "Tiago is a bilingual freelance Illustrator and comic artist currently based in Kumamoto, Japan. His passion for Illustration, comics and design stems from an interest in people and the desire to capture the beauty of life on a blank page.";

    // change home clients 
    clientHdr.innerHTML = "clients";


    // change home selfquote 
    skillsHdr.innerHTML = "Skills";
    sketchingSkill.innerHTML = "Sketching / Storyboarding";
    graphicSkill.innerHTML = "Graphic Design";
    langSkill.innerHTML = "Fluent in English and Japanese";
    photogIntrest.innerHTML = "Photography & Film"; 
    musicIntrest.innerHTML = "Music"; 
    travelIntrest.innerHTML = "Travel"; 
    awardTxt.innerHTML = "Qualifications and Awards";
    getSelfQuoteTxt.innerHTML = `"I’m a hard worker and I enjoy taking on different challenges."`;
    


       // change home form
       contactHdr.innerHTML = "Contact"
       inputName.placeholder = "Name";
       inputEmail.placeholder = "Email"; 
       inputMsg.placeholder = "Message"; 
      } 

      else if (workHdr) {
        workHdr.innerHTML = "Work";
        workIntroTxt.innerHTML = "Tiago usually works in pen and ink; however, he is also adept at using digital editing software to enhance illustration when necessary. His works are lively and impactful and range from character design, to portraits, to in-depth scenery illustration."
      }
  
      else if (comicHdr) {
        comicHdr.innerHTML = "Comics";
        comicIntroTxt.innerHTML = "Born from a love of cinema, photography and good story telling; Tiago has a passion for comics. He strives to create dynamic and visually interesting stories that anyone can relate to. Explore his collection of “silent comics” created around different themes.";
        comicReturnTitle.innerHTML = "Comics";
      }

}




function selectJapanese(){

sessionStorage.setItem("language", "japanese");

   

  // mark selected language
  japanese.style.textDecoration = "underline";
  english.style.textDecoration = "none";


    // change header lang
    navHome.innerHTML = "ホーム";
    navWork.innerHTML = "イラスト";
    navComics.innerHTML = "漫画";


   if (homeFreelanceTxt) {


    // change home hero    
    homeFreelanceTxt.innerHTML = "フリーランスイラストレーター";
    

    // change home about
    homeAboutHdr.innerHTML = "自己紹介";
    homeAboutTxt.innerHTML = "5年にわたってフリーランスイラストレーターとデザイナーとして働いた経験があります。漫画家になる希望を抱き、今も一所懸命に漫画を描いております。イラストと漫画への情熱は、人々の愛と美しさを捉えたいという想いから生まれました。";

    // change home clients 
    clientHdr.innerHTML = "クライアント";

    // change home selfquote 
    skillsHdr.innerHTML = "スキル";
    sketchingSkill.innerHTML = "スケッチ / ストーリーボード";
    graphicSkill.innerHTML = "デザイン";
    langSkill.innerHTML = "日本語の能力";
    photogIntrest.innerHTML = "写真撮影 そして 映画"; 
    musicIntrest.innerHTML = "音楽"; 
    travelIntrest.innerHTML = "トラベル"; 
    awardTxt.innerHTML = "資格と賞";
    getSelfQuoteTxt.innerHTML = `"次から次へと新たなチャレンジに挑む頑張り屋さんです。ポロジェクトを鮮やかに生かさせたいならどうぞご連絡をお持ちしております。"`;
    workTogTxt.innerHTML = "『次から次へと新たなチャレンジに挑む頑張り屋さんです。ポロジェクトを鮮やかに生かさせたいならどうぞご連絡をお持ちしております。"
    // change home form
    contactHdr.innerHTML = "連絡先"
    inputName.placeholder = "名前";
    inputEmail.placeholder = "Eメール"; 
    inputMsg.placeholder = "メッセージ";
    } 

    else if (workHdr) {
      workHdr.innerHTML = "イラスト";
      workIntroTxt.innerHTML = "たいてい筆やペンで絵を描きますが、デジタルソフトで編集することもあります。ティエゴのはいきいきと迫力がある画を作っていて、キャラクターデザインや細かい背景絵、似顔絵など様々な絵を描くことができます。"
    }

    else if (comicHdr) {
      comicHdr.innerHTML = "漫画";
      comicIntroTxt.innerHTML = "サイレント漫画の短編集です。映画や撮影への関心から、漫画への情熱が生まれました。迫力がある絵で読者を感動させる漫画を作ることを目標にしています。";
      comicReturnTitle.innerHTML = "漫画";
    }

 
}


