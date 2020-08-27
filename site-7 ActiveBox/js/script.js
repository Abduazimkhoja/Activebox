function testWebP(callback) {
   var webP = new Image();
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
   };
   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

   if (support == true) {
      document.querySelector('body').classList.add('webp');
   } else {
      document.querySelector('body').classList.add('no-webp');
   }
});




// scroll fixed фиксайия меню при скроле
$(function () {
   let header = $("#header");
   let intro = $("#fullscreen");
   let introH = intro.innerHeight();
   let scrollPos = $(window).scrollTop();
   // burger (Nav toggle)
   let nav = $("#nav");
   let navToggle = $("#navToggle");
   checkScroll(scrollPos, introH);

   $(window).on("scroll resize", function () {
      introH = intro.innerHeight();
      scrollPos = $(this).scrollTop();
      checkScroll(scrollPos, introH);
   });

   function checkScroll(scrollPos, introH) {
      if (scrollPos > introH) {
         header.addClass("fixed");
      } else {
         header.removeClass("fixed");
      }
   }

   // плавный скролл Smooth scroll
   $("[data-scroll").on("click", function (event) {
      event.preventDefault();
      let elementId = $(this).data("scroll");
      let elementOffset = $(elementId).offset().top;
      console.log(elementOffset);
      // убирает меню при скроле
      nav.removeClass("show");

      $("html,body").animate({
         scrollTop: elementOffset - 70
      }, 1200/*указывается скорость прокрутки*/);
   });


   // burger (Nav toggle)
   navToggle.on("click", function (event) {
      event.preventDefault();
      nav.toggleClass("show")
   });


   // slick slider(reviews)
   let slider = $("#reviewsSlider");
   slider.slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      arrows: false,
      dots: true,
   });
});




// owl carousel
$(document).ready(function () {
   $(".owl-carousel").owlCarousel({
      items: 1,
      loop: true,
      nav: true,
      dots: false,
      autoHeight: true,
      margin: 2,
      smartSpeed: 1000,
      /* остановка autoplay при наведении */
      autoplay: true,
      autoplayTimeout: 7000,
      autoplayHoverPause: true,
      autoplaySpeed: 3000,
      // pagination : true
      // navText: ["<img src='img/prev.png'>", "<img src='img/next.png'>"],
      // navText: ["&lang;", "&rang;"],
      // navText : ['<','>'],
      /* mergeFit:true,*/
      responsive: {
         0: {
            items: 1,
         },
         768: {
            items: 1,
         },
         992: {
            items: 1.5,
         },
         1200: {
            items: 1.5,
         },
      },
   });
});


















































































































































































































































































