import Swiper from "swiper";
import Vue from "vue";

$(function () {
  if ($("#leaderboardEl").length) {
    let token = sessionStorage.getItem("game_token");
    const leaderboard = new Vue({
      el: "#leaderboardEl",
      data: {
        item_1: [],
        item_2: [],
        item_3: [],
        id: -1,
      },
      mounted: function () {
        this.fetchLeaderboard();
      },
      methods: {
        fetchLeaderboard() {
          $.ajax({
            type: "GET",
            url: process.env.API_BASEURL + "/user-leaderboard",
            headers: {
              Authorization: `Bearer ${token.replaceAll('"', "")}`,
            },
            contentType: "application/json",
          })
            .done((res) => {
              this.item_1 = res.data.leaderboard["item-1"];
              this.item_2 = res.data.leaderboard["item-2"];
              this.item_3 = res.data.leaderboard["item-3"];
            })
            .fail(function (res) {
              console.log("error", res);
            });
        },
      },
    });
  }
});

$(function () {
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
      ? true
      : false;
  const $leaderboardSlidesEl = $("#swiper-leaderboard").find(".swiper-slide");
  const $leaderboardSlidesItemEl = $("#swiper-leaderboard").find(
    ".swiper-leaderboard-item"
  );
  const $leaderboardSlidesWrapper = $("#swiper-leaderboard").find(
    ".swiper-wrapper"
  );

  function initLeaderboardSwiper() {
    if (isMobile) {
      $leaderboardSlidesItemEl.addClass("swiper-slide");
      $leaderboardSlidesWrapper.removeClass("row");
    } else {
      $leaderboardSlidesEl.removeClass("swiper-slide");
      $leaderboardSlidesWrapper.addClass("row");
    }
  }
  initLeaderboardSwiper();

  if ($("#leader-collapsible").length) {
    $("#leader-collapsible").on("show.bs.collapse", function () {
      setTimeout(function () {
        const leaderSwiper = new Swiper("#swiper-leaderboard", {
          loop: false,
          slidesPerView: 1,
          spaceBetween: 30,
          autoHeight: false,
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
