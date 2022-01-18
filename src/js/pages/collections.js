import Swiper from 'swiper';

const swiper = new Swiper('#swiper-collections', {
  loop: false,
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    },
    1366: {
      slidesPerView: 4
    }
  },
  navigation: {
    nextEl: ".collections-carousel-controls.carousel-controls .swiper-button-next",
    prevEl: ".collections-carousel-controls.carousel-controls .swiper-button-prev",
  }
})

$(function() {
  const $collectionsSlidesEl = $('#swiper-collections').find('.swiper-slide')
  const $collectionsSlidesItemEl = $('#swiper-collections').find('.collections-weekly__item-container')

  function initCollectionSwiper() {
    if ($(window).width() < 1366) {
      $collectionsSlidesItemEl.addClass('swiper-slide')
      swiper.init()
    } else {
      $collectionsSlidesEl.removeClass('swiper-slide')
      swiper.destroy()
    }
  }
  $(window).on('resize', initCollectionSwiper)
  initCollectionSwiper()
})