import Swiper from 'swiper'

// const leaderswiper = new Swiper('#swiper-leaderboard', {
//   loop: false,
//   slidesPerView: 1,
//   spaceBetween: 30,
//   breakpoints: {
//     992: {
//       slidesPerView: 4
//     }
//   },
//   navigation: {
//     nextEl: ".collections-carousel-controls.carousel-controls .swiper-button-next",
//     prevEl: ".collections-carousel-controls.carousel-controls .swiper-button-prev",
//   }
// })
// let leaderSwiper

$(function() {
  const $leaderboardSlidesEl = $('#swiper-leaderboard').find('.swiper-slide')
  const $leaderboardSlidesItemEl = $('#swiper-leaderboard').find('.swiper-leaderboard-item')
  const $leaderboardSlidesWrapper = $('#swiper-leaderboard').find('.swiper-wrapper')

  function initLeaderboardSwiper() {
    if ($(window).width() < 992) {
      $leaderboardSlidesItemEl.addClass('swiper-slide')
      $leaderboardSlidesWrapper.removeClass("row")
      // leaderSwiper.init()
    } else {
      $leaderboardSlidesEl.removeClass('swiper-slide')
      $leaderboardSlidesWrapper.addClass("row")
      // leaderSwiper.destroy()
    }
  }
  $(window).on('resize', initLeaderboardSwiper)
  initLeaderboardSwiper()


  $('#leader-collapsible').on('show.bs.collapse', function() {
    console.log("Show")
    setTimeout(function() {
      leaderSwiper = new Swiper('#swiper-leaderboard', {
        loop: false,
        slidesPerView: 1,
        spaceBetween: 30,
        // width: 340,
        autoHeight: false,
        // centeredSlides: true,
        // breakpoints: {
        //   992: {
        //     slidesPerView: 4
        //   }
        // },
        navigation: {
          nextEl: ".collections-carousel-controls.carousel-controls .swiper-button-next",
          prevEl: ".collections-carousel-controls.carousel-controls .swiper-button-prev",
        }
      })
    }, 500)
  })
})

// $('#leader-collapsible').on('hidden.bs.collapse', function() {
//   console.log("leaderboard hidden")
//   swiper.destroy()
// })