jQuery(document).ready(function($) {
	/* Header */

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            $('.header-main').addClass("sticky");
        } else {
            $('.header-main').removeClass("sticky");
        }
    });
	
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
    
    $('ul.tablinkSec li a').click(function(){
	    var t = $(this).attr('data-rel');
	    $('ul.tablinkSec li a').removeClass('active');
	    $(this).addClass('active');
	    $('.tabcontentSec').hide(); 
	    $('#'+t).show();
	});
	
	$('.navigation-wrapper a, .btn').on('click', function(e) {
		if (this.hash != "") {
			e.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top - 70
			}, 1000);
			if ($(window).width() < 767) {
				$('html, body').animate({
					scrollTop: $(hash).offset().top - 70
				}, 1000);
			}
		}
	});
	
	
    if($(window).width() < 768) {
    	$(".navigation-wrapper .hamburger").click(function(){
            $(".navigation-wrapper .menu-main-menu-container").slideToggle();
        	$(this).toggleClass('close');
        });
        
        $(".navigation-wrapper li a").click(function(){
            $(".navigation-wrapper .menu-main-menu-container").slideUp();
        	$('.navigation-wrapper .hamburger').removeClass('close');
        });
    }
	
});


jQuery(document).ready(function($) {
      
    /* Customer Stories Slider */  
    $('.customer-Stories').owlCarousel({
      loop:true,
      dots:true,
      nav:false,
      margin:0,
      autoplay:true,
      autoplayTimeout:5000,
      items:1
  }); 
      
});

$(".hamburgerMenu .menuBars i").click(function(){
    $(".header-navigation-wrapper").slideToggle();
	$(this).toggleClass('open')
  });