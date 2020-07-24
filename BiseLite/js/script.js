$(document).ready(function () {
	$('.slider-header__body').slick({
		dots: true,
		arrows: false,
		infinite: true,
		speed: 1500,
		autoplay: false,
		slidesToShow: 1,
	});

	$('.works__slider-inner').slick({
		dots: false,
		arrows: true,
		infinite: true,
		speed: 1500,
		autoplay: false,
		slidesToScroll: 1,
		slidesToShow: 4,
		prevArrow: '<button type="button" class="slick-arrow slick-next"><img src="img/svg/slideright.svg" alt=""></button>',
		nextArrow: '<button type="button" class="slick-arrow slick-prev"><img src="img/svg/slideleft.svg" alt=""></button>',
		responsive: [
			{
				breakpoint: 971,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 701,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 481,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});

	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
})