


// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let comicVh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${comicVh}px`);



    // We listen to the resize event
    window.addEventListener('resize', () => {
        // We execute the same script as before
        let comicVh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${comicVh}px`);
      });
    



// Set Nav

const navLinks = document.querySelectorAll("li");
navLinks[2].classList.add("nav-active");
const aLinks = document.querySelectorAll(".nav-hover");
aLinks[2].classList.remove("nav-hover");



function homeStart() {
   placeFooter()
}




const body = document.querySelector("body");
const comicMainImg = document.querySelector(".comic-img");
const comicMainImgText = document.querySelector(".view-comics-txt");
const workCtn = document.querySelector(".work-txt-ctn");
const comicImgCtn = document.querySelector(".comic-img-section");
const comicMain = document.querySelector(".comic-reader-img");
const loader = document.querySelector(".loader-wrapper");
const comicReader = document.querySelector(".comic-reader-ctn")
const comicTitle = document.querySelector(".comic-reader-title");
const comicHeader = document.querySelector(".comic-reader-header");
const pageCounter = document.querySelector(".page-counter");
const moonIcon = document.querySelector(".fa-moon");
const sunIcon = document.querySelector(".fa-sun");
const pageFooter = document.querySelector(".page-footer-ctn");
const swipeTxt = document.querySelector(".swipe-txt");
const controlLeft = document.querySelector(".comic-controls-ctn-left");



// loop to fade comics in 

let x = 2;

for(x; x < 6; x++) {

    let controller = new ScrollMagic.Controller; 

    // build a scene
    
    let ourScene = new ScrollMagic.Scene({
        triggerElement: ".comic-wrapper-" + x,
        triggerHook: 0.8,
        reverse: false
    })
    
    .setClassToggle('.comic-wrapper-' + x, 'fade-in')
    .addTo(controller);
    

}

// Comics pages 



let imageChanger = 0;

let finalPageNum = imageChanger + 1;



/* start comics */

function startComics(obj,comic) {

    getLang.style.display = "none";
    getSocialsCtn.style.display = "none";
    workCtn.style.display = "none";
    comicImgCtn.style.display = "none";
    pageFooter.style.display = "none";
    loader.style.display = "flex";
    loader.style.opacity = "1";
    moonIcon.style.opacity = "1";

let choosenComic = obj.className.split(" ");


switch(choosenComic[1]){

case 'comic-wrapper-1':

if(window.innerWidth < 1000) {
    var i = 0;

    // create object
    imageObjs = new Array();

    // set image list
    images = new Array();
    let page;
    
    for(page = 0; page < 9; page++) {
    let newNum = page + 1;
    images[page]="img/comics/RushHour/jpg/mobile/RushHour_" + newNum + ".jpg";
    }



    // start preloading
    for(i=0; i<=8; i++) 
    {
       imageObjs[i] = new Image();
       imageObjs[i].src=images[i];
       }
         
    }
    else {
        var i = 0;

        // create object
        imageObjs = new Array();
    
        // set image list
        images = new Array();
        let page;
    
        for(page = 0; page < 9; page++) {
        let newNum = page + 1;
        images[page]="img/comics/RushHour/jpg/desktop/RushHour_" + newNum + ".jpg";
        }
     
    
        // start preloading
        for(i=0; i<=8; i++) 
        {
           imageObjs[i] = new Image();
           imageObjs[i].src=images[i];
           }
    
      
    }



    imageObjs[8].onload = function() {
    pageCounter.innerHTML = "\(" + finalPageNum + "/" + images.length + "\)";
       loader.style.opacity = 0;
       loader.style.display = 'none';
       comicReader.style.display = "flex";
       comicMain.style.backgroundImage =  "url(" + images[0] + ")";
       comicTitle.innerHTML = "Rush Hour";


       comicMain.addEventListener("touchstart", function() {
        comicTouchStart(event);
    });

    comicMain.addEventListener("touchmove", function() {
        comicTouchMove(event);
    });

    comicMain.addEventListener("touchend", function() {
        comicTouchStop(event);
    });


}




    break;  




    case 'comic-wrapper-2':
       
if(window.innerWidth < 1000) {
    var i = 0;

    // create object
    imageObjs = new Array();

    // set image list
    images = new Array();
    let page;
    
    for(page = 0; page < 16; page++) {
    let newNum = page + 1;
    images[page]="img/comics/Teamwork/jpg/mobile/Teamwork_" + newNum + ".jpg";
    }


    // start preloading
    for(i=0; i<=15; i++) 
    {
       imageObjs[i] = new Image();
       imageObjs[i].src=images[i];
       }
         
    }
    else {
        var i = 0;

        // create object
        imageObjs = new Array();
    
        // set image list
        images = new Array();
        let page;
    
        for(page = 0; page < 16; page++) {
        let newNum = page + 1;
        images[page]="img/comics/Teamwork/jpg/desktop/Teamwork_" + newNum + ".jpg";
        }
    
    
        // start preloading
        for(i=0; i<=15; i++) 
        {
           imageObjs[i] = new Image();
           imageObjs[i].src=images[i];
           }
             
      
    }

    imageObjs[8].onload = function() {
       loader.style.opacity = 0;
       loader.style.display = 'none';
       comicReader.style.display = "flex";
       comicMain.style.backgroundImage =  "url(" + images[0] + ")";
       comicTitle.innerHTML = "Team Work";
       pageCounter.innerHTML = "\(" + finalPageNum + "/" + images.length + "\)";


       comicMain.addEventListener("touchstart", function() {
        comicTouchStart(event);
    });

    comicMain.addEventListener("touchmove", function() {
        comicTouchMove(event);
    });

    comicMain.addEventListener("touchend", function() {
        comicTouchStop(event);
    });


}

    break;  

    case 'comic-wrapper-3':
       
        if(window.innerWidth < 1000) {
            var i = 0;
        
            // create object
            imageObjs = new Array();
        
            // set image list
            images = new Array();
            let page;
            
            for(page = 0; page < 31; page++) {
            let newNum = page + 1;
            images[page]="img/comics/TheGiftofLight/jpg/mobile/TheGiftofLight_" + newNum + ".jpg";
            }
        
        
            // start preloading
            for(i=0; i<=30; i++) 
            {
               imageObjs[i] = new Image();
               imageObjs[i].src=images[i];
               }
                 
            }
            else {
                var i = 0;
        
                // create object
                imageObjs = new Array();
            
                // set image list
                images = new Array();
                let page;
            
                for(page = 0; page < 31; page++) {
                let newNum = page + 1;
                images[page]="img/comics/TheGiftofLight/jpg/desktop/TheGiftofLight_" + newNum + ".jpg";
                }
            
            
                // start preloading
                for(i=0; i<=30; i++) 
                {
                   imageObjs[i] = new Image();
                   imageObjs[i].src=images[i];
                   }
                     
              
            }
        
            imageObjs[30].onload = function() {
               loader.style.opacity = 0;
               loader.style.display = 'none';
               comicReader.style.display = "flex";
               comicMain.style.backgroundImage =  "url(" + images[0] + ")";
               comicTitle.innerHTML = "The Gift of Light";
               pageCounter.innerHTML = "\(" + finalPageNum + "/" + images.length + "\)";
        
        
               comicMain.addEventListener("touchstart", function() {
                comicTouchStart(event);
            });
        
            comicMain.addEventListener("touchmove", function() {
                comicTouchMove(event);
            });
        
            comicMain.addEventListener("touchend", function() {
                comicTouchStop(event);
            });
        
        
        }
        
            break;  
    
            case 'comic-wrapper-4':
       
                if(window.innerWidth < 1000) {
                    var i = 0;
                
                    // create object
                    imageObjs = new Array();
                
                    // set image list
                    images = new Array();
                    let page;
                    
                    for(page = 0; page < 17; page++) {
                    let newNum = page + 1;
                    images[page]="img/comics/SingleMother/jpg/mobile/SingleMother_" + newNum + ".jpg";
                    }
                
                
                    // start preloading
                    for(i=0; i<=16; i++) 
                    {
                       imageObjs[i] = new Image();
                       imageObjs[i].src=images[i];
                       }
                         
                    }
                    else {
                        var i = 0;
                
                        // create object
                        imageObjs = new Array();
                    
                        // set image list
                        images = new Array();
                        let page;
                    
                        for(page = 0; page < 17; page++) {
                        let newNum = page + 1;
                        images[page]="img/comics/SingleMother/jpg/desktop/SingleMother_" + newNum + ".jpg";
                        }
                    
                    
                        // start preloading
                        for(i=0; i<=16; i++) 
                        {
                           imageObjs[i] = new Image();
                           imageObjs[i].src=images[i];
                           }
                             
                      
                    }
                
                    imageObjs[16].onload = function() {
                       loader.style.opacity = 0;
                       loader.style.display = 'none';
                       comicReader.style.display = "flex";
                       comicMain.style.backgroundImage =  "url(" + images[0] + ")";
                       comicTitle.innerHTML = "Single Mother";
                       pageCounter.innerHTML = "\(" + finalPageNum + "/" + images.length + "\)";
                
                
                       comicMain.addEventListener("touchstart", function() {
                        comicTouchStart(event);
                    });
                
                    comicMain.addEventListener("touchmove", function() {
                        comicTouchMove(event);
                    });
                
                    comicMain.addEventListener("touchend", function() {
                        comicTouchStop(event);
                    });
                
                
                }
                
                    break;  
              
                    case 'comic-wrapper-5':
       
                        if(window.innerWidth < 1000) {
                            var i = 0;
                        
                            // create object
                            imageObjs = new Array();
                        
                            // set image list
                            images = new Array();
                            let page;
                            
                            for(page = 0; page < 17; page++) {
                            let newNum = page + 1;
                            images[page]="img/comics/HourlyComicDay/jpg/mobile/HourlyComicDay_" + newNum + ".jpg";
                            }
                                                
                            // start preloading
                            for(i=0; i<=16; i++) 
                            {
                               imageObjs[i] = new Image();
                               imageObjs[i].src=images[i];
                               }
                                 
                            }
                            else {
                                var i = 0;
                        
                                // create object
                                imageObjs = new Array();
                            
                                // set image list
                                images = new Array();
                                let page;
                            
                                for(page = 0; page < 17; page++) {
                                let newNum = page + 1;
                                images[page]="img/comics/HourlyComicDay/jpg/desktop/HourlyComicDay_" + newNum + ".jpg";
                                }
                            
                            
                                // start preloading
                                for(i=0; i<=16; i++) 
                                {
                                   imageObjs[i] = new Image();
                                   imageObjs[i].src=images[i];
                                   }
                                     
                              
                            }
                        
                            imageObjs[16].onload = function() {
                               loader.style.opacity = 0;
                               loader.style.display = 'none';
                               comicReader.style.display = "flex";
                               comicMain.style.backgroundImage =  "url(" + images[0] + ")";
                               comicTitle.innerHTML = "Hourly Comic Day";
                               pageCounter.innerHTML = "\(" + finalPageNum + "/" + images.length + "\)";
                        
                               comicMain.addEventListener("touchstart", function() {
                                comicTouchStart(event);
                            });
                        
                            comicMain.addEventListener("touchmove", function() {
                                comicTouchMove(event);
                            });
                        
                            comicMain.addEventListener("touchend", function() {
                                comicTouchStop(event);
                            });
                        
                        
                        }
                        
                            break;  

}

}




let startingX;

function comicTouchStart(evt) {

    startingX = evt.touches[0].clientX;
};





function comicTouchMove(evt) {

    let touch = evt.touches[0];
    let change = startingX - touch.clientX;
    
};


function comicTouchStop(evt) {
    let change = startingX - evt.changedTouches[0].clientX;

    if(change > 0 && imageChanger < images.length - 1) {
   
        
        imageChanger += 1;
        let finalNextPageNum = imageChanger + 1;
        comicMain.style.backgroundImage =  "url(" + images[imageChanger] + ")";
        pageCounter.innerHTML = "\(" + finalNextPageNum + "/" + images.length + "\)";   
        swipeTxt.style.display = "none";
    
    }

    else if(change < 0 && imageChanger > 0) {
        imageChanger -= 1;
        let finalPrevPageNum = imageChanger + 1;

        comicMain.style.backgroundImage = "url(" + images[imageChanger] + ")";
        pageCounter.innerHTML = "\(" + finalPrevPageNum + "/" + images.length + "\)";   
        }



 };


console.log(imageChanger);

if(window.innerWidth > 1000 && imageChanger == 0) {
    controlLeft.style.display = "none";
}  




function comicPrevPage() {
    if(imageChanger > 0) {
        imageChanger -= 1;
        let finalPrevPageNum = imageChanger + 1;
        comicMain.style.backgroundImage = "url(" + images[imageChanger] + ")";
        pageCounter.innerHTML = "\(" + finalPrevPageNum + "/" + images.length + "\)";    
        if(imageChanger === 0) {
            controlLeft.style.display = "none";
        }
    } 
    


}



function comicNextPage() {

 
    if(imageChanger < images.length - 1) {
        imageChanger += 1;
            let finalNextPageNum = imageChanger + 1;
            comicMain.style.backgroundImage =  "url(" + images[imageChanger] + ")";
            pageCounter.innerHTML = "\(" + finalNextPageNum + "/" + images.length + "\)";   
            controlLeft.style.display = "flex";
    }  
 
    }
    









darkToggle = 0

function darkmode() {
    body.classList.toggle("darkmode-background");
    pageCounter.classList.toggle("darkmode-font");
    moonIcon.classList.toggle("darkmode-font");
    comicHeader.classList.toggle("darkmode-font");
    swipeTxt.classList.toggle("darkmode-font");
    pageCounter.classList.toggle("darkmode-font");
    if(darkToggle == 0) {
        sunIcon.style.opacity ="1";
        moonIcon.style.opacity = "0";
        darkToggle = 1;
    } else if (darkToggle = 1) {
        sunIcon.style.opacity ="0";
        moonIcon.style.opacity = "1";
        darkToggle = 0;
    }

}


// Footer 

window.addEventListener('resize', placeFooter);

function placeFooter() {

 
    let galleryHeight = comicImgCtn.getBoundingClientRect()
    
    
    
    
    let galleyBottomPos = galleryHeight.bottom + window.pageYOffset;
    
    pageFooter.style.top = galleyBottomPos + 20 + "px";
    
    pageFooter.style.opacity = "1";
    
    
    
    }

