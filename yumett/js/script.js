
$(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('block');
	});

	$('[data-fancybox="gallery"]').fancybox({
		animationEffect: "circular",
		animationDuration: 566,
		transitionEffect: "slide",
		loop: true,
		buttons: [
			"zoom",
			//"share",
			"slideShow",
			//"fullScreen",
			//"download",
			"thumbs",
			"close"
		]
	})

	$(window).scroll(function () {
		if ($(this).scrollTop() > 1600) {
			$('.pageup').fadeIn();
		} else {
			$('.pageup').fadeOut();
		}
	});

	$("a[href='#up']").click(function () {
		const _href = $(this).attr("href");
		$("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
		return false;
	});


	$('.header__list').find('> li').click(function () {
		// if (window.matchMedia("(max-width: 1165px)").matches) {
		$('.header__list > li').not(this).find('ul').slideUp();
		$(this).find('ul').stop(true, true).slideToggle(600);
		return false;
		// }
	});
});


const header = document.querySelector
	('.header__top');



window.addEventListener('scroll', () => {
	const scrollPos = window.scrollY;
	if (scrollPos > 10) {
		header.classList.add('scrolled');
	} else {
		header.classList.remove('scrolled');
	}
});