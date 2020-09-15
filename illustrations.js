  


// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let workVh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${workVh}px`);



    // We listen to the resize event
    window.addEventListener('resize', () => {
        // We execute the same script as before
        let workVh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${workVh}px`);
      });
    
  



function homeStart(){
    placeFooter()
};





// Set Nav

const navLinks = document.querySelectorAll("a");
navLinks[4].classList.add("nav-active");
const aLinks = document.querySelectorAll(".nav-hover");
aLinks[1].classList.remove("nav-hover");


const moreIllustration = ['1-01', '1', '2_1', '2', '3_1', '3', '7copy', '29', '30', '32', '33', '36', '39', '40', '45', 'BandWlast', 'boyznthehood3-01', 'CHARACTER1-01', 'CHARACTER2-01', 'Colour1', 'Colour2', 'doughboi-01', 'doughboi3-01', 'edit2', 'eelhead-01', 'img20180619_19045377', 'img20180619_185442801', 'img20181128_12451240', 'img20181130_15254563', 'img20181226_15185836', 'img20181228_13422950', 'img20190718_23554989', 'img20190807_13124388-01', 'img20190807_131243882-01', 'img20200318_19171093', 'Khalid2-01-01', 'Kungfu-01', 'LOVE-01', 'main-image', 'Teacher4', 'teacher5', 'TESTdoughboi-01', 'Untitled-2-01'];



// linking new divs to this

const gallerySection = document.querySelector(".illustrations-gallery-img-section");
const workGalleryCtn = document.querySelector(".work-main-ctn");
const workTxtCtn = document.querySelector(".work-txt-ctn");
const pageFooter = document.querySelector(".page-footer-ctn");
const sunIcon = document.querySelector(".fa-sun");
const moonIcon = document.querySelector(".fa-moon");
const workImgSec = document.querySelector(".work-img-section");


// Nxt/prev 

const nxtPageChevron = document.querySelector(".nxt-gallery-img");
const prvPageChevron = document.querySelector(".prv-gallery-img");




let galleryClassName = 'gallery-img';
let titleNum = 0;

function loadMoreIllustrations() {


    moreIllustration.forEach(function(title) {

        titleNum += 1;
        let newClasstitle = galleryClassName + titleNum;
    
        let createDiv = document.createElement("div");
        gallerySection.appendChild(createDiv);
        createDiv.classList.add(newClasstitle);
        createDiv.classList.add(galleryClassName);

        let garlleryImg = document.querySelector("." + newClasstitle);

        Modernizr.on('webp', function (result) {
            if (result) {
                garlleryImg.style.backgroundImage = 'url(img/illustrations/MoreIllustration/webp/mobile/' + title + '.webp)';
                createDiv.addEventListener("click", function(){
                    viewImg(newClasstitle);
                } );
            }
            else {
                garlleryImg.style.backgroundImage = 'url(img/illustrations/MoreIllustration/jpg/mobile/' + title + '.jpg)';
                createDiv.addEventListener("click", function(){
                    viewImg(newClasstitle);
                } );
            }
          });
        
    })

    let controller = new ScrollMagic.Controller; 

  


}

loadMoreIllustrations()


let darkToggle = 0;

function viewImg(newClasstitle) {


    getLang.style.display = "none";
    getSocialsCtn.style.display = "none";
    socialLangToggle = 1;


    scrollTop = window.pageYOffset;



let galleryImgBgDiv = document.createElement("div");
let galleryImgDiv = document.createElement("div");
let galleryImgClose = document.createElement("div");


galleryImgBgDiv.classList.add("clicked-gallery-img-bg");
galleryImgDiv.classList.add("clicked-gallery-img"); 
galleryImgClose.classList.add("close-gallery-img");

workGalleryCtn.appendChild(galleryImgBgDiv);
galleryImgBgDiv.appendChild(galleryImgDiv);
galleryImgBgDiv.appendChild(galleryImgClose);


let clickedImgElement = document.querySelector("." + newClasstitle);
let seperateGalleryNumber = newClasstitle.split("img");
    
let convertGalStrToNum = Number(seperateGalleryNumber[1]) - 1;


if(window.innerWidth < 800) {


    let swipeTxt = document.createElement("p");
    swipeTxt.innerHTML = "<<< Swipe >>>";
    swipeTxt.classList.add("swipe-txt");
    galleryImgBgDiv.appendChild(swipeTxt);


    galleryImgDiv.addEventListener("touchstart", function() {
        comicTouchStart(event);
    });

    galleryImgDiv.addEventListener("touchmove", function() {
        comicTouchMove(event);
    });

    galleryImgDiv.addEventListener("touchend", function() {
        comicTouchStop(event);
    });




    function comicTouchStart(evt) {

        startingX = evt.touches[0].clientX;
    };
    
    
    
    
    
    function comicTouchMove(evt) {
    
        let touch = evt.touches[0];
        let change = startingX - touch.clientX;
        
    };
    
    
    function comicTouchStop(evt) {
        let change = startingX - evt.changedTouches[0].clientX;
        if(change > 0 && convertGalStrToNum < 42) {
            swipeTxt.style.opacity = "0";
            convertGalStrToNum += 1;
        let getCurrentGalleryImg = document.querySelector(".clicked-gallery-img")
    
    
        Modernizr.on('webp', function (result) {
            if (result) {
                getCurrentGalleryImg.style.backgroundImage = 'url(img/illustrations/MoreIllustration/webp/mobile/' + moreIllustration[convertGalStrToNum] + '.webp)';
               
            }
            else {
                getCurrentGalleryImg.style.backgroundImage = 'url(img/illustrations/MoreIllustration/jpg/mobile/' + moreIllustration[getCurrentGalleryImg] + '.jpg)';
              
            }
          });
    
    
          if(convertGalStrToNum === 42) {
              nxtPageChevron.style.opacity = "0";
          }
    
      
        }
        else if(change < 0 && convertGalStrToNum > 0) {
            convertGalStrToNum -= 1;
    
            let getCurrentGalleryImg = document.querySelector(".clicked-gallery-img")
        
        
            Modernizr.on('webp', function (result) {
                if (result) {
                    getCurrentGalleryImg.style.backgroundImage = 'url(img/illustrations/MoreIllustration/webp/mobile/' + moreIllustration[convertGalStrToNum] + '.webp)';
                   
                }
                else {
                    getCurrentGalleryImg.style.backgroundImage = 'url(img/illustrations/MoreIllustration/jpg/mobile/' + moreIllustration[getCurrentGalleryImg] + '.jpg)';
                  
                }
              });
        
              if(convertGalStrToNum === 0) {
               prvPageChevron.style.opacity = "0";
           }
            
        }
    
    } 


} else if (window.innerWidth > 800) {
    nxtPageChevron.style.display = "flex";
    prvPageChevron.style.display = "flex";
    

    if (convertGalStrToNum === 0) {
        prvPageChevron.style.opacity = "0";
    } else if (convertGalStrToNum > 0) {
        prvPageChevron.style.opacity = "1";
    }
    
    if (convertGalStrToNum === 42) {
        nxtPageChevron.style.opacity = "0";
    } else if (convertGalStrToNum < 42) {
        nxtPageChevron.style.opacity = "1";
    }
    
    
    
    
    console.log(convertGalStrToNum);
    
    nxtPageChevron.addEventListener("click", () =>{
    
        prvPageChevron.style.opacity = "1";
    
        if(convertGalStrToNum < 42) {
            convertGalStrToNum += 1;
        let getCurrentGalleryImg = document.querySelector(".clicked-gallery-img")
    
    
        Modernizr.on('webp', function (result) {
            if (result) {
                getCurrentGalleryImg.style.backgroundImage = 'url(img/illustrations/MoreIllustration/webp/mobile/' + moreIllustration[convertGalStrToNum] + '.webp)';
               
            }
            else {
                getCurrentGalleryImg.style.backgroundImage = 'url(img/illustrations/MoreIllustration/jpg/mobile/' + moreIllustration[getCurrentGalleryImg] + '.jpg)';
              
            }
          });
    
    
          if(convertGalStrToNum === 42) {
              nxtPageChevron.style.opacity = "0";
          }
    
      
        }
    
    
    })
    
    prvPageChevron.addEventListener("click", () =>{
    
        nxtPageChevron.style.opacity = "1";
     
         if(convertGalStrToNum > 0) {
            convertGalStrToNum -= 1;
    
         let getCurrentGalleryImg = document.querySelector(".clicked-gallery-img")
     
     
         Modernizr.on('webp', function (result) {
             if (result) {
                 getCurrentGalleryImg.style.backgroundImage = 'url(img/illustrations/MoreIllustration/webp/mobile/' + moreIllustration[convertGalStrToNum] + '.webp)';
                
             }
             else {
                 getCurrentGalleryImg.style.backgroundImage = 'url(img/illustrations/MoreIllustration/jpg/mobile/' + moreIllustration[getCurrentGalleryImg] + '.jpg)';
               
             }
           });
     
           if(convertGalStrToNum === 0) {
            prvPageChevron.style.opacity = "0";
        }
    
    
    
         }
     
     
     })
    
    


}








let clickedImgElementUrl = clickedImgElement.style.backgroundImage;




let clickImgSelected = document.querySelector(".clicked-gallery-img");

clickImgSelected.style.backgroundImage = clickedImgElementUrl;

if (darkToggle === 0) {
    const tlBgTxt = new TimelineMax({delay: 0});
    tlBgTxt.fromTo(workTxtCtn, 0.3, {opacity: 1}, {opacity: 0});
    tlBgTxt.fromTo(galleryImgBgDiv, 0.6, {opacity: 0}, {opacity: 1});
    
    const tlBgDiv = new TimelineMax({delay: 0});
    tlBgDiv.fromTo(workImgSec, 0.3, {opacity: 1}, {opacity: 0});
    
    const tlMoon = new TimelineMax({delay: 0});
    tlMoon.fromTo(moonIcon, 0.4, {opacity: 0, x : 200}, {opacity: 1, x: 0});
} else if (darkToggle === 1) {
    darkToggle = 0;
    darkmode();
    const tlBgTxt = new TimelineMax({delay: 0});
    tlBgTxt.fromTo(workTxtCtn, 0.3, {opacity: 1}, {opacity: 0});
    tlBgTxt.fromTo(galleryImgBgDiv, 0.6, {opacity: 0}, {opacity: 1});
    
    const tlBgDiv = new TimelineMax({delay: 0});
    tlBgDiv.fromTo(workImgSec, 0.3, {opacity: 1}, {opacity: 0});
    
    const tlSun = new TimelineMax({delay: 0});
    tlSun.fromTo(sunIcon, 0.4, {opacity: 0, x : 200}, {opacity: 1, x: 0});
}

setTimeout(function() {

    gallerySection.style.position = 'fixed';


}, 250);
   
let getGalleryImgBG = document.querySelector(".clicked-gallery-img-bg");




setTimeout(function(){

getGalleryImgBG.addEventListener('click', function() {
    
    closeGallery(scrollTop);
    
 });




}, 250)



function closeGallery(scrollTop) {

    
nxtPageChevron.style.display = "none";
prvPageChevron.style.display = "none";

if(window.innerHeight > 800) {
    resetSocialLangToggle();

}

   
    const tlBgTxt = new TimelineMax({delay: 0.1});
    tlBgTxt.fromTo(workImgSec, 0.4, {opacity: 0}, {opacity: 1});
    tlBgTxt.fromTo(workTxtCtn, 0.1, {opacity: 0}, {opacity: 1});
    
    const tlBgDiv = new TimelineMax({delay: 0});
    tlBgDiv.fromTo(galleryImgBgDiv, 0.4, {opacity: 1}, {opacity: 0});

    gallerySection.style.position = 'relative';
    galleryImgBgDiv.remove();
    sunIcon.style.opacity ="0";
    moonIcon.style.opacity = "0";
    window.scrollTo(0, scrollTop);

}


}


window.addEventListener('resize', placeFooter);


function placeFooter() {

 
let galleryHeight = gallerySection.getBoundingClientRect()




let galleyBottomPos = galleryHeight.bottom + window.pageYOffset;

pageFooter.style.top = galleyBottomPos + 20 + "px";

pageFooter.style.opacity = "1";


}



function darkmode() {
    const galleryImgBg = document.querySelector(".clicked-gallery-img-bg");
    const nxtPageChevron = document.querySelector(".nxt-gallery-img");
    const prvPageChevron = document.querySelector(".prv-gallery-img");
    const swipeTxt = document.querySelector(".swipe-txt");

   // body.classList.toggle("darkmode-background");

    if(darkToggle == 0) {
        sunIcon.style.opacity ="1";
        moonIcon.style.opacity = "0";
        galleryImgBg.classList.add("darkmode-background");
        darkToggle = 1;

        if(window.innerWidth > 800) {
         
            nxtPageChevron.style.color = "white";
            prvPageChevron.style.color = "white";
    } else if(window.innerWidth < 800) {
        swipeTxt.style.color = "white";

    }


    } else if (darkToggle == 1) {
        sunIcon.style.opacity ="0";
        moonIcon.style.opacity = "1";
        galleryImgBg.classList.remove("darkmode-background");
        darkToggle = 0;

        if(window.innerWidth > 800) {
            nxtPageChevron.style.color = "black";
            prvPageChevron.style.color = "black";
         } else if(window.innerWidth < 800) {
            const swipeTxt = document.querySelector(".swipe-txt");
            swipeTxt.style.color = "black";
       }


    }

}


