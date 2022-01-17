import Swiper from 'swiper';

const swiper = new Swiper('#swiper-prizes', {
  loop: false,
  slidesPerView: 1,
  spaceBetween: 30,
  // width: 340,
  autoHeight: true,
  // centeredSlides: true,
  breakpoints: {
    992: {
      slidesPerView: 4
    }
  },
  navigation: {
    nextEl: ".collections-carousel-controls.carousel-controls .swiper-button-next",
    prevEl: ".collections-carousel-controls.carousel-controls .swiper-button-prev",
  }
})

$(function() {
  const $collectionsSlidesEl = $('#swiper-prizes').find('.swiper-slide')
  const $collectionsSlidesItemEl = $('#swiper-prizes').find('.prizes-winner-container')
  const $prizesWrapperContainer = $('#swiper-prizes').find('.prizes-wrapper-container')

  function initCollectionSwiper() {
    if ($(window).width() < 768) {
      $collectionsSlidesItemEl.addClass('swiper-slide')
      // $prizesWrapperContainer.removeClass('row')
      swiper.init()
    } else {
      $collectionsSlidesEl.removeClass('swiper-slide')
      // $prizesWrapperContainer.addClass('row')
      swiper.destroy()
    }
  }
  $(window).on('resize', initCollectionSwiper)
  initCollectionSwiper()
})