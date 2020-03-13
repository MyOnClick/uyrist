

$(document).ready(function () {
	$(function () {
		var list = $('.js-dropdown-list');
		var link = $('.js-link');
		link.click(function (e) {
			e.preventDefault();
			list.slideToggle(200);
		});
		list.find('li').click(function () {
			var text = $(this).html();
			var icon = '<i class="fa fa-chevron-down"></i>';
			link.html(text + icon);
			list.slideToggle(200);
			if (text === '* Reset') {
				link.html('Select one option' + icon);
			}
		});
	});
});

jQuery.noConflict();
jQuery(document).ready(function ($) {

	/*Dropdown Menu*/
	$('.dropdown').click(function () {
		$(this).attr('tabindex', 1).focus();
		$(this).toggleClass('active');
		$(this).find('.dropdown-menu').slideToggle(300);
	});
	$('.dropdown').focusout(function () {
		$(this).removeClass('active');
		$(this).find('.dropdown-menu').slideUp(300);
	});
	$('.dropdown .dropdown-menu li').click(function () {
		$(this).parents('.dropdown').find('span').text($(this).text());
		$(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
	});


	var d = jQuery(document);
	var $navBar = jQuery(".boo-navbar");
	var $navBarToggle = jQuery(".boo-nav-toggle");
	var $navBarCollapse = jQuery(".boo-nav-collapse");
	var $Btn = jQuery(".nav_btn");
	var $Main = jQuery(".main");

	$navBarToggle.click(function () {
		$navBarCollapse.slideToggle("fast");
	});
	$Btn.click(function () {
		if ($(document).width() < 770) {
			$navBarCollapse.slideToggle("fast");
		}
	});

	filterTogglePos = 0;
	d.scroll(function () {
		if (d.scrollTop() > $navBar.offset().top && !$navBar.hasClass("fixed")) {
			filterTogglePos = $navBar.offset().top;

			$navBar.addClass("fixed");
		} else {
			if (d.scrollTop() < 1 && $navBar.hasClass("fixed")) {
				$navBar.removeClass("fixed");
			}
		}
	});

	// jQuery("a").click(function () {
	// 	d.animate(
	// 		{
	// 			scrollTop: jQuery(jQuery.attr(this, "href")).offset().top
	// 		},
	// 		500
	// 	);
	// 	return false;
	// });

	// hamburger
	$(".hamburger").click(function () {
		$(".hamburger").toggleClass("active");
	});


	if ($(document).width() < 770) {
		$(".nav_btn").click(function () {
			$(".hamburger").toggleClass("active");
		});
	}


	$(".spoiler").click(function () {
		$(".spoilerpanel").slideToggle("normal");
	});
	$(".all").click(function () {
		$(".db").css({ "display": "block" });
		$(".all").css({ "display": "none" });
		
	});

	// Model link
	$('.model_link').click(function () {
		$('#mask').fadeIn(300);
		$('.model').delay(10).animate({
			top: ($(window).height() +20% - $('.model').outerHeight()) / 4
		}, 400);
	});
	// Popup
	$('#mask, .close ').click(function () {
		$('.model').animate({ top: -($('.model').outerHeight()) - 50 });
		$('#mask').fadeOut(200);
	});
	$(window).resize(function () {
		$('.model').css({
			left: ($(window).width() - $('.model').outerWidth()) / 2
		});
	});
	$(window).resize();

	$('.model_link2').click(function () {
		$('#mask').fadeIn(300);
		$('.model2').delay(10).animate({
			top: ($(window).height() + 20 % - $('.model2').outerHeight()) / 4
		}, 400);
	});
	// Popup
	$('#mask, .close ').click(function () {
		$('.model2').animate({ top: -($('.model2').outerHeight()) - 50 });
		$('#mask').fadeOut(200);
	});
	$(window).resize(function () {
		$('.model2').css({
			left: ($(window).width() - $('.model2').outerWidth()) / 2
		});
	});
	$(window).resize();




	$('.similar_slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					prevArrow: '<button class="prev arrow"></button>',
					nextArrow: '<button class="next arrow"></button>',
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					prevArrow: '<button class="prev arrow"></button>',
					nextArrow: '<button class="next arrow"></button>',
					slidesToScroll: 1
				}
			}
		]
	});



});


	



  // var $elFather = $navBar.parent();
  // var docWidth = jQuery(document).width();
  // if ($elFather.width() >= 960) {
  //   if ( docWidth > 1200) {
  //     var leftWalk = ((($elFather.width() - 1200) / 2) + $elFather.scrollLeft());
  //     $elFather.css({
  //       'width': '100%',
  //       'margin-left': leftWalk + "px"
  //     });
  //   }
  // }






