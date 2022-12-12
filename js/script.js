
window.addEventListener('click', function(event) {
	if (event.target.closest('.header__btn-search')) {
		let search = document.querySelector('.search');
		search.classList.toggle('header-form-search')

	}
    if (event.target.closest('.header-catalog-none')) {
        let headerCatalog = document.querySelector('.header__catalog-nav');

        headerCatalog.classList.toggle('header__catalog-nav-active')
    }
    if (event.target.closest('.header__catalog-item-open')) {
        let headerRucav = document.querySelector('.header__catalog-content');

        headerRucav.classList.toggle('header__catalog-nav-active')
    }
    let footerList = document.querySelector('.footer__catalog');
    if (event.target.closest('.footer__catalog-title')) {
        footerList.classList.toggle('footer__list-open')
    }
    if (event.target.closest('.header-navigation-box-cart')) {
        let cart = document.querySelector('.header-cart__list');
        let catalogBtn = document.querySelector('.header__catalog-btn');
        let catalog = document.querySelector('.header__catalog ');

        catalogBtn.classList.remove('header__catalog-btn--active');
        cart.classList.toggle('header-cart-open');
        catalog.classList.remove('header__catalog--active');
    }
    let searchSub = document.querySelector('.search__list');
    if (event.target.closest('.search-open')) {

        searchSub.classList.toggle('search__list-active');
    } else if (!event.target.closest('.search-open') && searchSub.closest('.search__list-active')) {
        searchSub.classList.remove('search__list-active');
    }

})

const popularSubSlider = new Swiper('.popular-slider-tabs', {
    spaceBetween: 45,
    slidesPerView: 1,
    navigation: {
        nextEl: '.popular__nav-sub-btn--next',
        prevEl: '.popular__nav-sub-btn--prev',
    },
});
const promoSlider = new Swiper('.promo__slider', {
    slidesPerView: 1,
    navigation: {
        nextEl: '.promo__nav-btn--next',
        prevEl: '.promo__nav-btn--prev',
    },
    autoplay: {
        delay: 15000,
        disableOnInteraction: false,  
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
});

const catalogSubSlider = new Swiper('.catalog-slider', {
    spaceBetween: 6,
    slidesPerView: 1,
    pagination: {
        el: '.catalog-pagination',
        type: 'bullets',
        clickable: true
      },
});
const goodsSubSlider = new Swiper('.goods-slider', {
    spaceBetween: 13,
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: '.goods-pagination',
        type: 'bullets',
        clickable: true
      },
});