(function (window, document, undefined) {
	'use strict';

	/*==============================
	Header
	==============================*/
	if (document.querySelector('.header')) {
		const headerBtn = document.querySelector('.header__btn');
		const headerNav = document.querySelector('.header__menu');
		const header = document.querySelector('.header');

		function toggleHeaderMenu() {
			headerBtn.classList.toggle('header__btn--active');
			headerNav.classList.toggle('header__menu--active');
		}

		function toggleHeaderActive() {
			header.classList.toggle('header--active', window.scrollY > 0);
		}

		headerBtn.addEventListener('click', toggleHeaderMenu);
		window.addEventListener('scroll', toggleHeaderActive);
		toggleHeaderActive();
	}

	/*==============================
	Carousel
	==============================*/
	if (document.querySelector('.car__slider')) {
		var elms = document.getElementsByClassName('car__slider');

		for ( var i = 0; i < elms.length; i++ ) {
			new Splide(elms[ i ], {
				type: 'loop',
				drag: true,
				pagination: true,
				speed: 800,
				gap: 10,
				arrows: false,
				focus: 0,
			}).mount();
		}
	}

	if (document.querySelector('.main__carousel')) {
		var elms = document.getElementsByClassName('main__carousel');

		for ( var i = 0; i < elms.length; i++ ) {
			new Splide(elms[ i ], {
				type: 'loop',
				perPage: 1,
				drag: true,
				pagination: false,
				autoWidth: true,
				autoHeight: false,
				speed: 800,
				gap: 24,
				focus: 'center',
				arrows: false,
				breakpoints: {
					767: {
						gap: 20,
						focus: 1,
						autoHeight: true,
						pagination: true,
						arrows: false,
					},
					1199: {
						focus: 1,
						autoHeight: true,
						pagination: true,
						arrows: false,
					},
				}
			}).mount();
		}
	}

	if (document.querySelector('.details__slider')) {
		var details = new Splide('.details__slider', {
				type: 'loop',
				drag: true,
				pagination: false,
				speed: 800,
				gap: 15,
				arrows: false,
				focus: 0,
		});

		var thumbnails = document.getElementsByClassName("thumbnail");
		var current;

		for (var i = 0; i < thumbnails.length; i++) {
			initThumbnail(thumbnails[i], i);
		}

		function initThumbnail(thumbnail, index) {
			thumbnail.addEventListener("click", function () {
				details.go(index);
			});
		}

		details.on("mounted move", function () {
			var thumbnail = thumbnails[details.index];

			if (thumbnail) {
				if (current) {
					current.classList.remove("is-active");
				}

				thumbnail.classList.add("is-active");
				current = thumbnail;
			}
		});

		details.mount();
	}

	if (document.querySelector('#partners-slider')) {
		var partners = new Splide('#partners-slider', {
			type: 'loop',
			perPage: 6,
			drag: true,
			pagination: false,
			speed: 800,
			gap: 30,
			focus: 1,
			arrows: false,
			autoplay: true,
			interval: 4000,
			breakpoints: {
				575: {
					gap: 20,
					perPage: 2,
				},
				767: {
					gap: 20,
					perPage: 3,
				},
				991: {
					perPage: 4,
				},
				1199: {
					perPage: 5,
				},
			}
		});
		partners.mount();
	}

	/*==============================
	Filter
	==============================*/
	if (document.querySelector('.mfilter')) {
		var mfilterBtn = document.querySelector('.main__filter-menu');
		var mfilterClose = document.querySelector('.mfilter__close');
		var mfilter = document.querySelector('.mfilter');

		function toggleMfilter() {
			mfilter.classList.toggle('mfilter--active');
		}

		mfilterBtn.addEventListener('click', toggleMfilter);
		mfilterClose.addEventListener('click', toggleMfilter);
	}

	/*==============================
	Select
	==============================*/
	if (document.querySelector('#filter__status')) {
		new SlimSelect({
			select: '#filter__status',
			settings: {
				showSearch: false,
			}
		});
	}

	if (document.querySelector('#filter__category')) {
		new SlimSelect({
			select: '#filter__category'
		});
	}

	if (document.querySelector('#mfilter__status')) {
		new SlimSelect({
			select: '#mfilter__status',
			settings: {
				showSearch: false,
			}
		});
	}

	if (document.querySelector('#mfilter__category')) {
		new SlimSelect({
			select: '#mfilter__category'
		});
	}

	/*==============================
	Favorite
	==============================*/
	document.querySelectorAll('.car__favorite').forEach(function (element) {
		element.addEventListener('click', function () {
			element.classList.toggle('car__favorite--active');
		});
	});

	document.querySelectorAll('.offer__favorite').forEach(function (element) {
		element.addEventListener('click', function () {
			element.classList.toggle('offer__favorite--active');
		});
	});

	/*==============================
	Scrollbar
	==============================*/
	var Scrollbar = window.Scrollbar;

	if (document.querySelector('.cart__table-scroll')) {
		Scrollbar.init(document.querySelector('.cart__table-scroll'), {
			damping: 0.1,
			renderByPixels: true,
			alwaysShowTracks: true,
			continuousScrolling: true
		});
	}

	/*==============================
	Section bg
	==============================*/
	if (document.querySelector('.main--sign')) {
		var mainBg = document.querySelector('.main--sign');

		if (mainBg.getAttribute('data-bg')) {
			mainBg.style.background = `url(${mainBg.getAttribute('data-bg')})`;
			mainBg.style.backgroundPosition = 'center center';
			mainBg.style.backgroundRepeat = 'no-repeat';
			mainBg.style.backgroundSize = 'cover';
		}
	}

	/*==============================
	Modal
	==============================*/
	if (document.querySelector('#plan-modal')) {
		const myModalEl = document.getElementById('plan-modal');

		myModalEl.addEventListener('show.bs.modal', event => {
			if (window.innerWidth > 1200) {
				var header = document.querySelector('.header');
				var scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
				header.style.paddingRight = scrollBarWidth + "px";
			}
		});

		myModalEl.addEventListener('hidden.bs.modal', event => {
			if (window.innerWidth > 1200) {
				var header = document.querySelector('.header');
				header.style.paddingRight = '';
			}
		});
	}

	if (document.querySelector('#rent-modal')) {
		const myModalEl = document.getElementById('rent-modal');

		myModalEl.addEventListener('show.bs.modal', event => {
			if (window.innerWidth > 1200) {
				var header = document.querySelector('.header');
				var scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
				header.style.paddingRight = scrollBarWidth + "px";
			}
		});

		myModalEl.addEventListener('hidden.bs.modal', event => {
			if (window.innerWidth > 1200) {
				var header = document.querySelector('.header');
				header.style.paddingRight = '';
			}
		});
	}

})(window, document);