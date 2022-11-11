$(document).ready(function(){
  $('.testimonials__slider').slick({
    draggable: false,
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    variableWidth: true,
  });
});