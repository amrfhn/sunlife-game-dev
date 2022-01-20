import Swiper from "swiper";
import Vue from "vue";

$(function () {
  let token = sessionStorage.getItem("game_token");
  if ($("#leader-collapsible").length) {
    const leaderboard = new Vue({
      el: "#leader-collapsible",
      delimiters: ['${', '}'],
      data: {
        item_1: [],
        item_2: [],
        item_3: [],
        id: -1,
        name: "",
        week_no: -1,
        week_start_date: "",
        week_end_date: "",
        item_ass: [],
      },
      mounted: function () {
        console.log("leaderboard listing mounted");
        this.fetchLeaderboard();
      },
      methods: {
        fetchLeaderboard: () => {
          $.ajax({
            method: "GET",
            url: process.env.API_BASEURL + "/user-leaderboard",
            // headers: {
            //   Authorization: `Bearer ${token.replaceAll('"', "")}`,
            // },
          })
            .then((res) => {
              if (res.success) {
                let data = res.data;

                this.item_1 = data.leaderboard["item-1"];
                this.item_2 = data.leaderboard["item-2"];
                this.item_3 = data.leaderboard["item-3"];

                this.id = data.week.id;
                this.name = data.week.name;
                this.week_start_date = data.week.week_start_date;
                this.week_end_date = data.week.week_end_date;
                this.item_ass = data.week.item_as;
              }
            })
            .fail(function (res) {
              console.log('error', res);
            });
        },
      },
    });
  }
});

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

  if ($('#leader-collapsible"').length) {
    $(window).on("resize", initLeaderboardSwiper);
    initLeaderboardSwiper();

    $("#leader-collapsible").on("show.bs.collapse", function () {
      console.log("Show");
      setTimeout(function () {
        var leaderSwiper = new Swiper("#swiper-leaderboard", {
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
  }
});

// $('#leader-collapsible').on('hidden.bs.collapse', function() {
//   console.log("leaderboard hidden")
//   swiper.destroy()
// })
