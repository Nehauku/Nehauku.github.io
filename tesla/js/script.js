$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass("active");
		$('body').toggleClass('lock');
	});

	$('.slider__top').slick({
 		dots: true,
 		arrows: false,
  		infinite: true,
  		speed: 1500,
  		autoplay:6000,
  		slidesToShow: 1,
  		fade: true
	});

	$(window).scroll(function() {
  		if ($(this).scrollTop() > 1600) {
  			 $('.pageup').fadeIn();
  		} else {
  			 $('.pageup').fadeOut();
  		}
  	});

	$("a[href='#up']").click(function(){
   	const _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
   });
})