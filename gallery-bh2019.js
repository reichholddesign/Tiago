


// Set Nav

const navLinks = document.querySelectorAll("li");
navLinks[1].classList.add("nav-active");

function homeStart(){

};

const blackHeroTitles19 = ['AngelaDavis', 'AvaDuvernay', 'ColinKaepernick', 'EdwardEarlJohnson', 'EmmettTill', 'FannieLouHamer', 'FrederickDouglass', 'FredHampton', 'HarrietTubman', 'HueyPNewton', 'KaliefBrowder', 'MalcomX', 'MarcusGarvey', 'MartinLutherKing', 'MayaAngelou', 'MuhammadAli', 'NelsonMandela', 'NinaSimone', 'RodneyKing', 'RosaParks', 'SamuelColeridge-Taylor', 'SpikeLee', 'TheRockNine', 'TommieSmithandJohnCarlos', 'TrayvonMartin', 'WalterFrancis', 'WangariMaathai', 'WhitneyYoung'];




const gallerySection = document.querySelector(".gallery-img-section"); 
const workGalleryCtn = document.querySelector(".work-main-ctn");
const workTxtHdr = document.querySelector(".work-txt-header");
const sunIcon = document.querySelector(".fa-sun");
const moonIcon = document.querySelector(".fa-moon");

let galleryClassName = 'gallery-img';
let titleNum = 0;

function loadBlackHero2019Gallery() {


    blackHeroTitles19.forEach(function(title) {

        titleNum += 1;
        let newClasstitle = galleryClassName + titleNum;
    
        let createDiv = document.createElement("div");
        gallerySection.appendChild(createDiv);
        createDiv.classList.add(newClasstitle);
        createDiv.classList.add(galleryClassName);
    
        let garlleryImg = document.querySelector("." + newClasstitle);

    
Modernizr.on('webp', function (result) {
    if (result) {
        garlleryImg.style.backgroundImage = 'url(img/illustrations/DailyBlackHero_19/webp/mobile/' + title + '.webp)';
        createDiv.addEventListener("click", function(){
            viewImg(newClasstitle, title);
        } );
    }
    else {
        garlleryImg.style.backgroundImage = 'url(img/illustrations/DailyBlackHero_19/jpg/mobile/' + title + '.jpg)';
        createDiv.addEventListener("click", function(){
            viewImg(newClasstitle, title);
        } );
    }
  });



    })

}

loadBlackHero2019Gallery()
let = darkToggle = 0;


function viewImg(newClasstitle, title) {


    getLang.style.display = "none";
    getSocialsCtn.style.display = "none";
    socialLangToggle = 1;

    scrollTop = window.pageYOffset;



let galleryImgBgDiv = document.createElement("div");
let galleryImgDiv = document.createElement("div");
let galleryImgClose = document.createElement("div");
let imageTitle = document.createElement("p");

galleryImgBgDiv.classList.add("clicked-gallery-img-bg");
galleryImgDiv.classList.add("clicked-gallery-img");
galleryImgClose.classList.add("close-gallery-img");
imageTitle.classList.add("gallery-img-title");

workGalleryCtn.appendChild(galleryImgBgDiv);
galleryImgBgDiv.appendChild(galleryImgDiv);
galleryImgBgDiv.appendChild(galleryImgClose);
galleryImgBgDiv.appendChild(imageTitle);
bottomImagePos = galleryImgDiv.getBoundingClientRect().bottom;
imageTitle.style.top = bottomImagePos + "px";
imageTitle.style.opacity = "1";
let titleSplit = title.split(/(?=[A-Z])/); 
console.log(bottomImagePos);

imageTitle.innerHTML = titleSplit[0] + " " + titleSplit[1];
let clickedImgElement = document.querySelector("." + newClasstitle);

let clickedImgElementUrl = clickedImgElement.style.backgroundImage;

let clickImgSelected = document.querySelector(".clicked-gallery-img");

clickImgSelected.style.backgroundImage = clickedImgElementUrl;

   
let getGalleryImgBG = document.querySelector(".clicked-gallery-img-bg");

if (darkToggle === 0) {
    const tlBgTxt = new TimelineMax({delay: 0});
    tlBgTxt.fromTo(workTxtHdr, 0.3, {opacity: 1}, {opacity: 0});
    tlBgTxt.fromTo(galleryImgBgDiv, 0.6, {opacity: 0}, {opacity: 1});
    
    const tlBgDiv = new TimelineMax({delay: 0});
    tlBgDiv.fromTo(gallerySection, 0.3, {opacity: 1}, {opacity: 0});
    
    const tlMoon = new TimelineMax({delay: 0});
    tlMoon.fromTo(moonIcon, 0.4, {opacity: 0, x : 200}, {opacity: 1, x: 0});
    
    }else if (darkToggle === 1) {
        darkToggle = 0;
        darkmode();
        const tlBgTxt = new TimelineMax({delay: 0});
        tlBgTxt.fromTo(workTxtHdr, 0.3, {opacity: 1}, {opacity: 0});
        tlBgTxt.fromTo(galleryImgBgDiv, 0.6, {opacity: 0}, {opacity: 1});
        
        const tlBgDiv = new TimelineMax({delay: 0});
        tlBgDiv.fromTo(gallerySection, 0.3, {opacity: 1}, {opacity: 0});
        
        const tlSun = new TimelineMax({delay: 0});
        tlSun.fromTo(sunIcon, 0.4, {opacity: 0, x : 200}, {opacity: 1, x: 0});
    
    }    


    setTimeout(function() {

        gallerySection.style.position = 'fixed';
    
    
    }, 250);

setTimeout(function(){

    getGalleryImgBG.addEventListener('click', function() {
    
        closeGallery(scrollTop);
        
     });

}, 250)

function closeGallery(scrollTop) {


    resetSocialLangToggle();
    const tlBgGetTxt = new TimelineMax({delay: 0.1});
    tlBgGetTxt.fromTo(gallerySection, 0.4, {opacity: 0}, {opacity: 1});
    tlBgGetTxt.fromTo(workTxtHdr, 0.1, {opacity: 0}, {opacity: 1});

    const tlGetBgDiv = new TimelineMax({delay: 0});
    tlGetBgDiv.fromTo(galleryImgBgDiv, 0.4, {opacity: 1}, {opacity: 0});


    gallerySection.style.position = 'absolute';
    galleryImgBgDiv.remove();
    sunIcon.style.opacity ="0";
    moonIcon.style.opacity = "0";
    window.scrollTo(0, scrollTop);
    imageTitle.style.opacity = "0";


}


}







function darkmode() {
    const galleryImgBg = document.querySelector(".clicked-gallery-img-bg");
    const getGalleryImgTitle = document.querySelector(".gallery-img-title"); 
    if(darkToggle == 0) {
        sunIcon.style.opacity ="1";
        moonIcon.style.opacity = "0";
        galleryImgBg.classList.add("darkmode-background");
        getGalleryImgTitle.style.color = "white";
        darkToggle = 1;

    } else if (darkToggle == 1) {
        sunIcon.style.opacity ="0";
        moonIcon.style.opacity = "1";
        galleryImgBg.classList.remove("darkmode-background");
        getGalleryImgTitle.style.color = "black";
        darkToggle = 0;

    }

}










