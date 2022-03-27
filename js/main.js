$(function(){
	$('.about__video, .popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});
	$('.photo__columns').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: $('.photo__prev'),
		nextArrow: $('.photo__next'),
		infinite: false
	});
	var galleries = $('.photo__columns');
		galleries.each(function() {
		var gallery = $(this);
		gallery.find(':not(.slick-cloned)').children('a').magnificPopup({
			type: 'image',
			gallery: { enabled:true }
		});
	});

	$('.top__btn').click(function() {
		$('html, body').animate({
			scrollTop: $('.form').offset().top
		}, 1000)
	})
	$('.top__arrow').click(function() {
		$('html, body').animate({
			scrollTop: $('.country').offset().top
		}, 500)
	})

	$('.header__burger').click(function() {
		$('.header__burger').toggleClass('header__burger--active');
		$('.menu').toggleClass('menu--active');
		$('body').toggleClass('lock');
	})
});