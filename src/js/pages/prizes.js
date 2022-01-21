import Vue from "vue";
import Swiper from "swiper";

$(function () {
  let token = sessionStorage.getItem("game_token");

  if ($("#swiper-prizes").length) {
    const prizes = new Vue({
      el: "#swiper-prizes",
      data: {
        item_1: "",
      },
      mounted: function () {
        this.fetchPrizes();
      },
      methods: {
        fetchPrizes() {
          let self = this;
          $.ajax({
            type: "GET",
            url: process.env.API_BASEURL + "/user-prizes",
            headers: {
              Authorization: `Bearer ${token.replaceAll('"', "")}`,
            },
            contentType: "application/json",
          })
            .done((res) => {
              this.item_1 = res.data.prize["1"];
            })
            .fail(function (res) {
              console.log(`error {res}`);
            });
        },
      },
    });
  }

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? true : false;
  const $collectionsSlidesEl = $("#swiper-prizes").find(".swiper-slide");
  const $collectionsSlidesItemEl = $("#swiper-prizes").find(
    ".prizes-winner-container"
  );
  const $prizesWrapperContainer = $("#swiper-prizes").find(
    ".prizes-wrapper-container"
  );
  const prizesSwiper = new Swiper("#swiper-prizes", {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 30,
    autoHeight: true,
    navigation: {
      nextEl:
        ".collections-carousel-controls.carousel-controls .swiper-button-next",
      prevEl:
        ".collections-carousel-controls.carousel-controls .swiper-button-prev",
    },
  });

  function initCollectionSwiper() {
    if (isMobile) {
      $collectionsSlidesItemEl.addClass("swiper-slide");
      prizesSwiper.init();
    } else {
      $collectionsSlidesEl.removeClass("swiper-slide");
      prizesSwiper.destroy();
    }
  }
  initCollectionSwiper();
});
