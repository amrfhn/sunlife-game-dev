import Vue from "vue";
import Swiper from "swiper";

$(function () {
  let token = sessionStorage.getItem("game_token");

  if ($("#swiper-prizes").length) {
    const prizes = new Vue({
      el: "#swiper-prizes",
      data: {
        item_1: "",
        item_2: "",
        item_3: ""
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
              // this.item_2 = res.data.prize["2"];
              // this.item_2 = res.data.prize["3"];
              // console.log(this.item_2)
            })
            .fail(function (res) {
              console.log(`error {res}`);
            });
        },
      },
    });
  }

  const isMobile = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? true : false;
  const isIPad = /iPad/i.test(navigator.userAgent) ? true : false;

  const $collectionsSlidesEl = $("#swiper-prizes").find(".swiper-slide");
  const $collectionsSlidesItemEl = $("#swiper-prizes").find(
    ".prizes-winner-container"
  );
  const $prizesWrapperContainer = $("#swiper-prizes").find(
    ".prizes-wrapper-container"
  );
  // const isIPad = ($(window).width > 390 && $(window).width < 1040) ? true : false;
  const prizesSwiper = new Swiper("#swiper-prizes", {
    loop: false,
    slidesPerView: isIPad ? 3 : 1,
    spaceBetween: 30,
    autoHeight: false,
    navigation: {
      nextEl:
        ".collections-carousel-controls.carousel-controls .swiper-button-next",
      prevEl:
        ".collections-carousel-controls.carousel-controls .swiper-button-prev",
    },
  });

  function initCollectionSwiper() {
    if (isMobile || isIPad) {
      $collectionsSlidesItemEl.addClass("swiper-slide");
      prizesSwiper.init();
    } else {
      $collectionsSlidesEl.removeClass("swiper-slide");
      prizesSwiper.destroy();
    }
  }
  initCollectionSwiper();
});
