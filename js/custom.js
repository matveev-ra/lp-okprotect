
$(document).ready(function () {
    $('.Slider1').owlCarousel({
        // center: true,
        items:4,
        loop:true,
        margin:10,
        nav:true,
        dots: false,
      // margin:10,
        responsive:{
          0:{
            items:1,
            nav:false,
            dots: true
          },
          540:{
            nav:true,
            dots: false,
            items:2
          },
          768:{
            nav:true,
            dots: false,
            items:2
          },
          992:{
            nav:true,
            dots: false,
            items:3
          }
        }
      });
$('.Slider2').owlCarousel({
        // center: true,
        items:3,
        loop:true,
        margin:10,
        nav:true,
		lazyLoad:true,
        dots: false,
      // margin:10,
        responsive:{
          0:{
            items:1,
            nav:false,
            dots: true
          },
          768:{
            nav:true,
            dots: false,
            items:2
          }
        }
      });	



});
//$(document).ready