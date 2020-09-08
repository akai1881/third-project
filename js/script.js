$(document).ready(function(){
    $('.carousel__inner').slick({
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        adaptiveHeight: false,
        // prevArrow: '<button type="button" class="slick-prev"><img src="icons/left_arrow.svg"></button>',
        // nextArrow: '<button type="button" class="slick-next"><img src="icons/right_arrow.svg"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                  dots: true,
                  arrows: false
                }
            }
        ]
    });
  });
