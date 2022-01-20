import Swiper from "swiper";
import Vue from "vue";

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

$(function () {
  const $leaderboardSlidesEl = $("#swiper-leaderboard").find(".swiper-slide");
  const $leaderboardSlidesItemEl = $("#swiper-leaderboard").find(
    ".swiper-leaderboard-item"
  );
  const $leaderboardSlidesWrapper = $("#swiper-leaderboard").find(
    ".swiper-wrapper"
  );

  function initLeaderboardSwiper() {
    if ($(window).width() < 992) {
      $leaderboardSlidesItemEl.addClass("swiper-slide");
      $leaderboardSlidesWrapper.removeClass("row");
      // leaderSwiper.init()
    } else {
      $leaderboardSlidesEl.removeClass("swiper-slide");
      $leaderboardSlidesWrapper.addClass("row");
      // leaderSwiper.destroy()
    }
  }
  $(window).on("resize", initLeaderboardSwiper);
  initLeaderboardSwiper();

  $("#leader-collapsible").on("show.bs.collapse", function () {
    console.log("Show");
    setTimeout(function () {
      leaderSwiper = new Swiper("#swiper-leaderboard", {
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
          nextEl:
            ".collections-carousel-controls.carousel-controls .swiper-button-next",
          prevEl:
            ".collections-carousel-controls.carousel-controls .swiper-button-prev",
        },
      });
    }, 500);
  });

  let token = sessionStorage.getItem("game_token");
  if ($("#leader-collapsible").length) {
    const leaderboard = new Vue({
      el: "#leader-collapsible",
      data: {
        item_1: [],
        item_2: [],
        item_3: [],
        id: -1,
        name: "",
        week_no: -1,
        week_start_date: "",
        week_end_date: "",
        item_as: [],
      },
      mounted: function () {
        console.log("leaderboard listing mounted");
        this.fetchLeaderboard();
      },
      methods: {
        fetchLeaderboard: () => {
          let self = this;
          $.ajax({
            method: "GET",
            url: process.env.API_BASEURL + "/user-leaderboard",
            headers: {
              Authorization: `Bearer ${token.replaceAll('"', "")}`,
            },
          })
            .done(function (res) {
              if (res.success) {
                let data = res.data;

                console.log(`Data -> ${data}`);

                self.item_1 = data.leaderboard["item-1"];
                self.item_2 = data.leaderboard["item-2"];
                self.item_3 = data.leaderboard["item-3"];

                self.id = data.week.id;
                self.name = data.week.name;
                self.week_start_date = data.week.week_start_date;
                self.week_end_date = data.week.week_end_date;
                self.item_as = data.week.item_as;
              }
            })
            .fail(function (res) {
              console.log(`error {res}`);
            });
        },
      },
    });
  }
});

// $('#leader-collapsible').on('hidden.bs.collapse', function() {
//   console.log("leaderboard hidden")
//   swiper.destroy()
// })
