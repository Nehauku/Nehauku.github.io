
$(function () {

	$('.product-slider__wrapper').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		dots: true,
		arrows: false
	});

	$(".js-range-slider").ionRangeSlider({
		type: "double",
		min: 0,
		max: 1000,
		from: 0,
		to: 600,
		drag_interval: true,
		min_interval: null,
		max_interval: null,
		prefix: "$"
	});

	$(".rate-star").rateYo({
		rating: 5,
		starWidth: "13px"
	});

	$('.icon-th-list').click(function () {
		$('.product-page__items .card').addClass('filter-row');
		$('.icon-th-list').addClass('active');
		$('.icon-th-large').removeClass('active')
	});


	$('.icon-th-large').click(function () {
		$('.product-page__items .card').removeClass('filter-row');
		$('.icon-th-large').addClass('active');
		$('.icon-th-list').removeClass('active')
	});

	$('.burger').click(function (event) {
		$('.burger,.menu').toggleClass('active');
		$('body').toggleClass('block');
	});

	//tabs
	$(".tabs-item li").on("click", function () {
		let idx = $(this).index();

		$(".tabs-item li").removeClass("active");
		$(this).addClass("active");

		$(".tab-content-item,.tab-settings-item").hide();

		$(".tab-content-item,.tab-settings-item").eq(idx).fadeIn();

	});
	//tabs

	//form-styler
	$('input[type="file"], select').styler();
	//form-styler


});


$(function () {
	let mixer = mixitup('.products__inner-cards');
});







// $(function () {

// });

