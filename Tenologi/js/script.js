$(function () {
	$('.header__slider-inner').slick({
		dots: false,
		infinite: true,
		speed: 1200,
		slidesToShow: 1,
		appendArrows: $('.slider__arrow'),
		prevArrow: '<button type="button" class="slick-prev"><img src="img/sliderarrow/arrowprev.svg"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="img/sliderarrow/arrownext.svg"></button>',
		responsive: [{
			breakpoint: 750,
			settings: {
				dots: true,
				arrows: false
			}
		}]
	});
});

$(function () {
	$('.direction-slider__wrapper').slick({
		dots: false,
		infinite: true,
		speed: 1200,
		slidesToShow: 1,
		prevArrow: '<button type="button" class="slick-prev"><img src="img/sliderarrow/arrowprev2.svg"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="img/sliderarrow/arrownext2.svg"></button>'
	});
});

$(function () {
	$('.comment-slider__wrapper').slick({
		dots: true,
		infinite: true,
		speed: 1200,
		slidesToShow: 2,
		prevArrow: '<button type="button" class="slick-prev"><img src="img/sliderarrow/arrowprev.svg"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="img/sliderarrow/arrownext.svg"></button>',
		responsive: [{
			breakpoint: 600,
			settings: {
				slidesToShow: 1
			}
		}, {
			breakpoint: 520,
			settings: {
				arrows: false,
				slidesToShow: 1
			}
		}]
	});
});

$(function () {
	$(window).scroll(function () {
		let top = $(document).scrollTop();
		if (top < 50) $(".header__navigation").removeClass('fixed');
		else $(".header__navigation").addClass('fixed');
	});
});





window.addEventListener('DOMContentLoaded', () => {
	"use strict";

	const input = document.querySelector('.dropdown__button'),
		dropdownList = document.querySelector('.dropdown__button-list'),
		dropdownItem = document.querySelectorAll('.dropdown__button-item'),
		dropdownInputHide = document.querySelector('.dropdown__button-hidden');


	function inputDropdownShow() {
		input.addEventListener('click', () => {
			dropdownList.classList.toggle('show');
		});
	}

	function changeInputText() {
		dropdownItem.forEach(item => {
			item.addEventListener('click', (e) => {
				e.stopPropagation();
				input.innerText = item.innerText;
				dropdownList.classList.remove('show');
				dropdownInputHide.value = item.dataset.value;
			});
		});
	}

	document.addEventListener('click', (e) => {
		if (e.target !== input) {
			dropdownList.classList.remove('show');
		}
	});

	document.addEventListener('keydown', (e) => {
		if (e.key === "Escape") {
			dropdownList.classList.remove('show');
		}
	});
	inputDropdownShow();
	changeInputText();

	const darkmode = document.querySelector('.header__eyemode button'),
		headerbg = document.querySelector('.heaader__topdark'),
		searchBtn = document.querySelector('.search__button'),
		searchShow = document.querySelector('.header__search .input-wrapper'),
		burgerBtn = document.querySelector('.header__burger'),
		showMenu = document.querySelector('.header__menu');

	darkmode.addEventListener('click', () => {
		headerbg.classList.toggle('darkmode');
	});

	// searchBtn.addEventListener('click', () => {
	// 	searchShow.classList.toggle('show');
	// 	searchShow.classList.add('fade');
	// });

	burgerBtn.addEventListener('click', () => {
		burgerBtn.classList.toggle('active');
		showMenu.classList.toggle('active');
		headerbg.classList.remove('darkmode');
		document.body.classList.toggle('lock');
	});
});


