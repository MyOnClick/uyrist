function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}


jQuery.noConflict();
jQuery(document).ready(function ($) {

	// Model link
	$('.model_link').click(function () {
		$('#mask').fadeIn(300);
		$('.model').delay(10).animate({
			top: ($(window).height() - $('.model').outerHeight()) /100
		}, 400);
	});

	// Popup
	$('#mask, .close').click(function () {
		$('.model').animate({ top: -($('.model').outerHeight()) - 50 });
		$('#mask').fadeOut(200);
	});
	$(window).resize(function () {
		$('.model').css({
			left: ($(window).width() - $('.model').outerWidth()) / 2
		});
	});
	$(window).resize();

});

