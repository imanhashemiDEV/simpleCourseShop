$(document).ready(function() {

  $(".open-cart").click(function() {
    $(".cart").fadeToggle();
  });


  
  $(".owl-carousel").owlCarousel({
    rtl: true,
    loop: true,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });

  
});
