(function ($) {
"use strict";

	// meanmenu
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "992"
	});


	// data - background
	$("[data-background]").each(function () {
		$(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
	})

	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 245) {
			$(".header-sticky").removeClass("sticky");
		} else {
			$(".header-sticky").addClass("sticky");
		}
	});


	//datepicker js active
	$('[data-toggle="datepicker"]').datepicker({
	  	format: 'dd-mm-yyyy'
	});

	//nice select js active
	$(".booking-wraper select").niceSelect();


	// mainSlider
	function mainSlider() {
		var BasicSlider = $('.slider-active');
		BasicSlider.on('init', function (e, slick) {
			var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
			doAnimations($firstAnimatingElements);
		});
		BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
			var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
			doAnimations($animatingElements);
		});
		BasicSlider.slick({
			autoplay: true,
			autoplaySpeed: 10000,
			dots: false,
			fade: true,
			prevArrow:'<button type="button" class="slick-prev"><i class="flaticon-left-arrow"></i></button>',
			nextArrow:'<button type="button" class="slick-next"><i class="flaticon-next-1"></i></button>',
			arrows: true,
			responsive: [
				{ breakpoint: 767, settings: { dots: false, arrows: false } }
			]
	});

	function doAnimations(elements) {
			var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			elements.each(function () {
				var $this = $(this);
				var $animationDelay = $this.data('delay');
				var $animationType = 'animated ' + $this.data('animation');
				$this.css({
					'animation-delay': $animationDelay,
					'-webkit-animation-delay': $animationDelay
				});
				$this.addClass($animationType).one(animationEndEvents, function () {
					$this.removeClass($animationType);
				});
			});
		}
	}
	mainSlider();


	// owlCarousel
	$('.team-carousel').owlCarousel({
	    loop:true,
	    autoplay:false,
	    margin:30,
	    autoplaySpeed: 1000,
		items:3,
		dots:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        767:{
	            items:3
	        },
	        992:{
	            items:3
	        }
	    }
	})


	$('.testimonia-item-active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.testimonial-nav'
    });
    $('.testimonial-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.testimonia-item-active',
        dots: false,
        prevArrow:'',
        nextArrow:'',
        centerMode: true,
        focusOnSelect: true,
        centerPadding:0,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                }
            }
        ]
    });

    $('.brand-active').owlCarousel({
	        lazyLoad:true,
	        loop:true,
	        autoplay:true,
	        autoplayTimeout:5000,
	        margin:120,
	        dots:false,
	        nav:false,
	        autoplayHoverPause:true,
	        responsive:{
	        0:{
	            items:2,
	            nav:false,
	            margin:30
	        },
	       575:{
	            items:3,
	            nav:false
	        },
	        911:{
	            items:4,
	            nav:false
	        },
	        1200:{
	            items:6
	        }
	    }
    });

	/* magnificPopup img view */
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
		  enabled: true
		}
	});

	/* magnificPopup video view */
	$('.popup-video').magnificPopup({
		type: 'iframe'
	});

	// filter items on button click
	$('.portfolio-menu').on( 'click', 'button', function() {
	  var filterValue = $(this).attr('data-filter');
	  $grid.isotope({ filter: filterValue });
	});

	//for menu active class
	$('.portfolio-menu button').on('click', function(event) {
		$(this).siblings('.active').removeClass('active');
		$(this).addClass('active');
		event.preventDefault();
	});

    //counterUp
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });


	// scrollToTop
	$.scrollUp({
		scrollName: 'scrollUp', // Element ID
		topDistance: '300', // Distance from top before showing element (px)
		topSpeed: 300, // Speed back to top (ms)
		animation: 'fade', // Fade, slide, none
		animationInSpeed: 200, // Animation in speed (ms)
		animationOutSpeed: 200, // Animation out speed (ms)
		scrollText: '<i class="fas fa-arrow-up"></i>', // Text for element
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	});

	// WOW active
	new WOW().init();


})(jQuery);