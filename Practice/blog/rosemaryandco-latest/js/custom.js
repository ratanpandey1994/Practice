jQuery(document).ready(function($) {
      
    /* Featured Slider */  
    $('.featured-slider').owlCarousel({
      loop:true,
      dots:false,
      nav:true,
      margin:25,
      autoplay:true,
      responsiveClass:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2            
          },
          1000:{
              items:3          
          },
          1600:{
            items:3          
        }
      }
  }); 
	
	
  $(".hamburgerMenu .menuBars").click(function(){
    $(".header-navigation-wrapper").slideToggle();
	$(this).toggleClass('open')
  });
      
  });

window.onscroll = function() {myFunction()};

var header = document.getElementById("site-header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// FAQ 
jQuery(document).ready(function() {
    function close_accordion_section() {
        jQuery('.faqWrapper .accordion .accordion-section-title').removeClass('active');
        jQuery('.faqWrapper .accordion .accordion-section-content').slideUp(300).removeClass('open');
    }
 
    jQuery('.accordion-section-title').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = jQuery(this).attr('href');
 
        if(jQuery(e.target).is('.active')) {
            close_accordion_section();
        }else {
            close_accordion_section();
 
            // Add active class to section title
            jQuery(this).addClass('active');
            // Open up the hidden content panel
            jQuery('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
        }
 
        e.preventDefault();
    });
});

