
import $ from 'jquery';
window.jQuery = $
window.$ = $
import '~/app/libs/jquery.maskedinput.min.js';
import '~/app/libs/fancybox/jquery.fancybox.min.js';
import '~/app/libs/swiper-bundle.min.js'

document.addEventListener('DOMContentLoaded', () => {

	$.fancybox.defaults.hideScrollbar = true;
  	$.fancybox.defaults.autoFocus = false;
  	$.fancybox.defaults.backFocus = false;
  	$.fancybox.defaults.trapFocus = false;
  	$.fancybox.defaults.touch = false;

	$('.modal__close').on('click', function(e) {
		e.preventDefault();
		$.fancybox.close(true);
	});

	$('.js-modal').on('click', function(e) {
		e.preventDefault();
		var id = $(this).data('modal');
		$.fancybox.open({
			src: '#' + id,
			type: 'inline',
		})
	});

	$('.register').on('click', function(e) {
		e.preventDefault();
		$.fancybox.close(true);
		$.fancybox.open({
			src: '#register',
			type: 'inline',
		})
	});

	$('.js-btn-close').on('click', function(e) {
		e.preventDefault();
		$.fancybox.close(true);
	});

	$('.js-btn-change-city').on('click', function(e) {
		e.preventDefault();
		$.fancybox.close(true);
		$.fancybox.open({
			src: '#cities',
			type: 'inline',
		})
	});

	$(".form").submit(function(e) { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$.fancybox.close(true);
			$.fancybox.open(thanks);
			setTimeout(function() {
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	$('.js-scroll').click(function () {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
	
		$('body,html').animate({ scrollTop: top }, 1500);
	});

	$('.menu-btn').click(function(e) {
		$('.nav').toggleClass('nav--active');
	});

	$('.nav .menu__link').click(function(e) {
		$('.header .menu-btn').removeClass('menu-btn--active');
		$('.nav').removeClass('nav--active');
	});


	const industrySlider = new Swiper('.industry__slider', {
		slidesPerView: 1,
		navigation: {
			nextEl: '.industry__nav-btn--next',
			prevEl: '.industry__nav-btn--prev',
		},
	});

	industrySlider.on('slideChange', function (e) {
		var index = industrySlider.activeIndex;
		var tab = $('[data-industry-tab=' + index + ']');
		var item = $('#industry' + index);
		console.log(item)
		$('.industry__tab--active').removeClass('industry__tab--active');
		$('.industry__item--active').removeClass('industry__item--active');
		tab.addClass('industry__tab--active');
		item.addClass('industry__item--active');
	});

	$('.industry__tab').on('click', function(e) {
		e.preventDefault();
		var href = $(this).attr('href');
		var id = $(this).data('industry-tab');
		$('.industry__tab--active').removeClass('industry__tab--active');
		$('.industry__item--active').removeClass('industry__item--active');
		$(this).addClass('industry__tab--active');		
		$(href).addClass('industry__item--active');
		industrySlider.slideTo(id);
	});



	const popularSlider = new Swiper('.popular__slider', {
		slidesPerView: 'auto',
		loop: true,
		navigation: {
			nextEl: '.popular__nav-btn--next',
			prevEl: '.popular__nav-btn--prev',
		},
	});

	$('.products__tab').each(function(index) {
		var id = $(this).attr('href');
		const productsSlider = new Swiper(id + ' .products__slider', {
			slidesPerView: 'auto',
			loop: true,
			navigation: {
				nextEl: id + ' .products__nav-btn--next',
				prevEl: id + ' .products__nav-btn--prev',
			},
			pagination: {
				el: id + ' .products__dots',
				type: 'bullets',
				clickable: true,
			},
		});
	});

	$('.products__tab').on('click', function(e) {
		e.preventDefault();
		var href = $(this).attr('href');
		$('.products__tab--active').removeClass('products__tab--active');
		$('.products__box--active').removeClass('products__box--active');
		$(this).addClass('products__tab--active');
		$(href).addClass('products__box--active');
	});

	$('.popular__tab').on('click', function(e) {
		e.preventDefault();
		var href = $(this).attr('href');
		$('.popular__tab--active').removeClass('popular__tab--active');
		$('.popular__item--active').removeClass('popular__item--active');
		$(this).addClass('popular__tab--active');
		$(href).addClass('popular__item--active');
	});

	$('.header__catalog-btn').on('click', function() {
		$(this).toggleClass('header__catalog-btn--active');
		$('.header__catalog').toggleClass('header__catalog--active');
	});

	$('.header__catalog--active').on('mouseleave', function() {
		$('.header__catalog-btn').toggleClass('header__catalog-btn--active');
		$('.header__catalog').removeClass('header__catalog--active');
	});

	$('.products__counter-btn--plus').on('click', function(e) {
		e.preventDefault();
		var parent = $(this).parent().find('input');
		var value = parseInt(parent.val());
		parent.val(value + 1);
	});

	$('.products__counter-btn--minus').on('click', function(e) {
		e.preventDefault();
		var parent = $(this).parent().find('input');
		var value = parseInt(parent.val());
		parent.val(value == 0 ? 0 : value - 1);
	});

})