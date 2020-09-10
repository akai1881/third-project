// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         infinite: true,
//         speed: 800,
//         slidesToShow: 1,
//         adaptiveHeight: false,
//         prevArrow: '<button type="button" class="slick-prev"><img src="icons/left_arrow.svg"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="icons/right_arrow.svg"></button>',
//         responsive: [
//             {
//                 breakpoint: 991,
//                 settings: {
//                   dots: true,
//                   arrows: false
//                 }
//             }
//         ]
//     });
//   });
const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false,
    speed: 500
  });

  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  });

  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  });

