<?php

include 'header.php';

?>



<main>

<section class="work-txt-ctn">   
                <h3 class="comic-page-hdr">Comics</h3>
                <p class="desktop-indent comic-intro-txt">Born from a love of cinema, photography and good story telling; Tiago has a passion for comics. He strives to create dynamic and visually interesting stories that anyone can relate to. Explore his collection of “silent comics” created around different themes. 
</p>        


            </section>


            <section  class="comic-img-section">

            <div onclick="startComics(this, 'one')" class="comic-img-wrapper comic-wrapper-1">
                  <div class="comic-img comic-one"></div>
                  <p class="comic-title">Bogmonster and the Fairies</p>
               </div> 


            <div onclick="startComics(this, 'two')" class="comic-img-wrapper comic-wrapper-2">
                  <div class="comic-img comic-two"></div>
                  <p class="comic-title">Single Mother</p>
               </div> 

               <div onclick="startComics(this, 'three')" class="comic-img-wrapper comic-wrapper-3">
                  <div class="comic-img comic-three"></div>
                  <p class="comic-title">The Gift of Light</p>
               </div> 

               <div onclick="startComics(this, 'four')" class="comic-img-wrapper comic-wrapper-4">
                  <div class="comic-img comic-four"></div>
                  <p class="comic-title">Rush Hour</p>
               </div> 

               <div onclick="startComics(this, 'five')" class="comic-img-wrapper comic-wrapper-5">
                  <div class="comic-img comic-five"></div>
                  <p class="comic-title">Teamwork</p>
               </div> 
             

               <div onclick="startComics(this, 'six')" class="comic-img-wrapper comic-wrapper-6">
                  <div class="comic-img comic-six"></div>
                  <p class="hourly-comic-txt">Hourly Comic Day</p>
               </div> 


            </section>



            <div class="loader-wrapper">
    <span class="loader"><span class="loader-inner"></span></span>
</div>


          
<section class="comic-reader-ctn">


   <div class="comic-reader-header">
      <p class="comic-return-title"><a class="comic-return-link" href="comics">Comics</a></p><p>/</p><p class="comic-reader-title"></p><p class="page-counter"></p>
   </div>
   <div onclick="comicPrevPage()" class="comic-controls-ctn-left">     
   <i class="fas fa-chevron-left"></i>
        </div>
        
   <div class="comic-reader-img-wrapper">

   <div onclick="comicNextPage()" class="comic-controls-ctn-right">     
   <i class="fas fa-chevron-right"></i>
        </div>

   <div class="desktop-read-info"><p><i class="fas fa-info-circle"></i> Read comic from right to left</strong></p></div>

      <p class="swipe-txt"><strong><i class="fas fa-info-circle"></i> Read comic from right to left</strong><br>> Swipe to change page</p>
      <div class="comic-reader-img"></div>
     
   </div>

 



</section>        

   
</main>

<aside class="page-footer-ctn">
        <div class="page-socials-ctn">
        <div><a href="mailto:tiagomattis@hotmail.co.uk" target="_blank"><i class="far fa-envelope page-social"></i></a></div>
        <div><a href="https://www.instagram.com/teamattis" target="_blank"><i class="fab fa-instagram page-social"></i></a></div>
        <div><a href="https://twitter.com/tiagomattis" target="_blank"><i class="fab fa-twitter page-social"></i></a></div>
        <div><a href="https://www.pixiv.net/en/users/27312251" target="_blank"><img class="page-pixiv" src="img/social/pixiv.png" alt="pixiv logo"></a></div>
        </div>   
        <p class="tiago-txt-footer">© Tiago Mattis</p>
        </aside>





<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js" integrity="sha256-lPE3wjN2a7ABWHbGz7+MKBJaykyzqCbU96BJWjio86U=" crossorigin="anonymous"></script>    
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js" integrity="sha256-2p2tRZlPowp3P/04Pw2rqVCSbhyV/IB7ZEVUglrDS/c=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/animation.gsap.js" integrity="sha256-peenofh8a9TIqKdPKIeQE7mJvuwh+J0To7nslvpj1jI=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.js" integrity="sha256-31FC/OT6XpfjAhj9FuXjw5/wPXXawCAjJQ29E23/XPk=" crossorigin="anonymous"></script>
<script src="./nav.js"></script>
<script src="./comics.js"></script>
<script src="./modernizr-custom.js"></script>
</body>
</html>