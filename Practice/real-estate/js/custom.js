jQuery(document).ready(function($) {

  	/* Banner Slider */  
  	new Swiper('.homeswiper-container', {
      loop: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      slidesPerView: 1,
      effect: "fade",
      paginationClickable: true,
      spaceBetween: 0,
      autoplay: {
        delay: 5000,
      },
  	});

  	/* Gallery Slider */  
  	new Swiper('.galleryswiper', {
      loop: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      slidesPerView: 2,
      paginationClickable: true,
      spaceBetween: 30,
      autoplay: {
        delay: 5000,
      },
      breakpoints: {
          1920: {
              slidesPerView: 2,
              spaceBetween: 30
          },
          1028: {
              slidesPerView: 2,
              spaceBetween: 30
          },
          700: {
              slidesPerView: 1,
              spaceBetween: 0
          }
      }
  	});

  	/* Gallery Slider */  
  	new Swiper('.testimonialswiper', {
		loop: true,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		slidesPerView: "auto",
		paginationClickable: true,
		spaceBetween: 0,
		autoplay: {
		  delay: 5000,
		},
	});
	
	/* Features Slider */  
  	new Swiper('.featureswiper', {
		loop: true,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		slidesPerView: 1,
		paginationClickable: true,
		spaceBetween: 0,
		autoplay: {
		  delay: 5000,
		},
	});
	
	/* Floorplan Slider */  
  	new Swiper('.floorplanswiper', {
		loop: true,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		slidesPerView: 1,
		paginationClickable: true,
		spaceBetween: 0,
		autoplay: {
		  delay: 5000,
		},
	});
	
   /* Hamburger Menu Js */
	
   $(".hamburgerMenu .menuBars").click(function(){
      $(".header-navigation-wrapper").slideToggle();
     $(this).toggleClass('open')
  });

  
  /* Accordion Js */
	
  function close_accordion_section() {
        $('.accordion .accordion-section-title').removeClass('active');
        $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
    }
    $('.accordion-section-title').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('href');
 
        if($(e.target).is('.active')) {
            close_accordion_section();
        }else {
            close_accordion_section();
 
            // Add active class to section title
            $(this).addClass('active');
            // Open up the hidden content panel
            $('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
        }
 
        e.preventDefault();
    });
	
});

jQuery("a.headerBtn[href^='#']").on('click', function (event) {
    event.preventDefault();
    var $anchor = jQuery(this);
    jQuery('html, body').stop().animate({
      scrollTop: jQuery($anchor.attr('href')).offset().top - 80
    }, 800);
});

/* Home Counter */  

jQuery('.fixedCounter li > span').each(function() {
  jQuery(this).prop('Counter', 0).animate({
    Counter: jQuery(this).text()
  }, {
    duration: 3500,
    easing: 'swing',
    step: function(now) {
    jQuery(this).text(Math.ceil(now));
    }
  });
});

/* About Us Counter */ 

if(jQuery('.scrollCounter').length) {
	jQuery(window).scroll(function() {
		var top_of_element = jQuery('.scrollCounter').offset().top;
		var bottom_of_element = jQuery('.scrollCounter').offset().top + jQuery('.scrollCounter').outerHeight();
		var bottom_of_screen = jQuery(window).scrollTop() + jQuery(window).innerHeight();
		var top_of_screen = jQuery(window).scrollTop();
		if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element) && !jQuery('.serviceCounter').hasClass('animation-stopped')){
			jQuery('.scrollCounter li > span').each(function() {
				jQuery(this).prop('Counter', 0).animate({
					Counter: jQuery(this).text()
				}, {
					duration: 3500,
					easing: 'swing',
					step: function(now) {
						jQuery(this).text(Math.ceil(now));
					}
				});
			});
			jQuery('.scrollCounter').addClass('animation-stopped')
		}
	});
}

/* Add Sticky Class in Sticky */ 

jQuery(window).scroll(function () {
  if (jQuery(this).scrollTop() > 1) {
    jQuery('.header-main').addClass("sticky");
  } else {
    jQuery('.header-main').removeClass("sticky");
  }
});