// FLEXSLIDER
$(window).load(function(){
  $('.flexslider').flexslider({
    animation: "slide",
    start: function(slider){
      $('body').removeClass('loading');
    }
  });
});

// STICKY HEADER
$(window).scroll(function() {
    if ($(this).scrollTop() > 81){  
        $('header').addClass("sticky");
    }
    else{
        $('header').removeClass("sticky");
    }
});

// BACK TO TOP
$(document).ready(function(){

	// hide #back-top first
	$(".back-to-top").hide();
	
	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 400) {
				$('.back-to-top').fadeIn();
			} else {
				$('.back-to-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('.back-to-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});

});