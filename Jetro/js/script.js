$(document).ready(function() {
	 $('.slider-big').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      asNavFor: '.slider',
      responsive: [
        {
          breakpoint: 551,
          settings: {
            arrows: false,
            infinite: true
          }
        },
      ]
    });
    $('.slider').slick({
      arrows: false,
      slidesToShow: 5.3,
      slidesToScroll: 1,
      asNavFor: '.slider-big',
      dots: false,
      centerMode: true,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 901,
          settings: {
            slidesToShow: 4.3,
            arrows: false,
            infinite: true
          }
        },
        {
          breakpoint: 761,
          settings: {
            slidesToShow: 3.3,
            arrows: false,
            infinite: true
          }
        },
        {
          breakpoint: 601,
          settings: {
            slidesToShow: 2.3,
            arrows: false,
            infinite: true
          }
        },
        {
          breakpoint: 471,
          settings: {
            slidesToShow: 1.3,
            arrows: false,
            infinite: true
          }
        },
        {
          breakpoint: 318,
          settings: {
            slidesToShow: 1,
            arrows: false,
            infinite: true
          }
        },
      ]
    });

    $('.burger').click(function(event) {
        $('.burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
})