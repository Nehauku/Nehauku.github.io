$(document).ready(function(){
  $('.carousel__wrapper').slick({
  			speed: 1200,
  			// adaptiveHeight: true,
  			prevArrow: '<button type="button" class="slick-prev"><img src="img/prew-arrow.png"></button>',
  			nextArrow: '<button type="button" class="slick-next"><img src="img/next-arrow.png"></button>',
  			responsive: [
  			  {
  			  		breakpoint: 767,
      			settings: {
        				dots: true,
        				arrows: false,
  			  		}
  			  	}
  			]
  });

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    	$(this)
      	.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      	.closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });

  function toggleClide(item) {
  		$(item).each(function(i){
  			$(this).on('click', function(e){
  				e.preventDefault();
  				$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
  				$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
  			})
  		});
  };

  toggleClide('.catalog-item__link');
  toggleClide('.catalog-item__back');

  //Modal

  $('[data-modal=consultation]').on('click', function(){
  		$('.overlay, #consultation').fadeIn();
  });

  $('.modal__close').on('click', function(){
  		$('.overlay, #consultation, #order, #thanks').fadeOut();
  });

  $('.button_mini').each(function(i) {
  		$(this).on('click', function() {
  			$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
  			$('.overlay, #order').fadeIn();
  		})
  });

  function validetForms(form){
  		$(form).validate({
  			rules:{
  				username: {
      			required: true,
      			minlength: 2
    		},
  				tel: "required",
  				email: {
  					required: true,
  					email: true
  				}
  			},
  			messages: {
    			username: {
    				required: "Пожалуйста, введите своё имя",
      			minlength: jQuery.validator.format("Введите {0} символа!")
    			},
    		
    			tel: "Пожалуйста, введите свой номер телефона",
   			email: {
      			required: "Пожалуйста, введите свою почту",
     				 email: "Неправильно введен адрес почты"
   			}
  			}
  		});
  	};

  	validetForms('#consultation-form');
  	validetForms('#consultation form');
  	validetForms('#order form');

  	$('input[name=tel]').mask("+7 (999) 999-99-99");


  	//Scrol and pageup


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

   new WOW().init();
});
