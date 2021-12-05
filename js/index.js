/*if (window.innerWidth <= 1024) {
  $('.slider').slick();
 }
*/

$(document).ready(function () {
  $(".slider").slick({
      arrows:true,
      dots:true,
      autoplay:true,
      infinity: true,
      autoplaySpeed:500,
      slidesToShow: 1,
      centerMode: false,
      draggable: true,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1250,
          settings: {
            slidesToShow: 3,
            arrows:true,
            centerMode: false,
            variableWidth: true,
          }
        },
        {
          breakpoint: 701,
          settings: {
            slidesToShow: 1,
            arrows:true,
            centerMode: false,
            variableWidth: true,
          }
        }
      ]
  });
});


