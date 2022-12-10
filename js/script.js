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
})

const popularSubSlider = new Swiper('.popular-slider-tabs', {
    spaceBetween: 45,
    slidesPerView: 1,
    navigation: {
        nextEl: '.popular__nav-sub-btn--next',
        prevEl: '.popular__nav-sub-btn--prev',
    },
});