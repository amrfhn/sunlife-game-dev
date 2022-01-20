import Vue from "vue";
import Swiper from "swiper";

const prizesSwiper = new Swiper("#swiper-prizes", {
  loop: false,
  slidesPerView: 1,
  spaceBetween: 30,
  // width: 340,
  autoHeight: true,
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

$(function () {
  const $collectionsSlidesEl = $("#swiper-prizes").find(".swiper-slide");
  const $collectionsSlidesItemEl = $("#swiper-prizes").find(
    ".prizes-winner-container"
  );
  const $prizesWrapperContainer = $("#swiper-prizes").find(
    ".prizes-wrapper-container"
  );
  let token = sessionStorage.getItem("game_token");

  if ($("#swiper-prizes").length) {
    const leaderboard = new Vue({
      el: "#swiper-prizes",
      data: {
        itemArray: [],
        item_1: "",
        item_2: "",
        item_3: "",
        id: -1,
        name: "",
        item_as: [],
      },
      mounted: function () {
        console.log("prizes listing mounted");
        this.fetchLeaderboard();
        // this.$nextTick(this.initCollectionSwiper)


        // $(window).on("resize", initCollectionSwiper);
        // initCollectionSwiper();
      },
      methods: {
        initCollectionSwiper: () => {
          if ($(window).width() < 768) {
            $collectionsSlidesItemEl.addClass("swiper-slide");
            // $prizesWrapperContainer.removeClass('row')
            prizesSwiper.init();
          } else {
            $collectionsSlidesEl.removeClass("swiper-slide");
            // $prizesWrapperContainer.addClass('row')
            prizesSwiper.destroy();
          }
        },
        fetchLeaderboard: () => {
          let self = this;
          $.ajax({
            method: "GET",
            url: process.env.API_BASEURL + "/user-prizes",
            headers: {
              Authorization: `Bearer ${token.replaceAll('"', "")}`,
            },
          })
            .done(function (res) {
              if (res.success) {
                let data = res.data;
                let arr = [];
                console.log("Prizes Data", data.prize);

                self.item_1 = data.prize["item-1"];
                self.item_2 = data.prize["item-2"];
                self.item_3 = data.prize["item-3"];
                arr.push(data.prize["item-1"]);
                arr.push(data.prize["item-2"]);
                arr.push(data.prize["item-3"]);
                this.itemArray = arr;

                console.log(arr);
                console.log("a", this.itemArray);

                // $(window).on("resize", this.initCollectionSwiper);

              }
            })
            .fail(function (res) {
              console.log(`error {res}`);
            });
        },
      },
    });
  }

  // const $collectionsSlidesEl = $("#swiper-prizes").find(".swiper-slide");
  // const $collectionsSlidesItemEl = $("#swiper-prizes").find(
  //   ".prizes-winner-container"
  // );
  // const $prizesWrapperContainer = $("#swiper-prizes").find(
  //   ".prizes-wrapper-container"
  // );

  // function initCollectionSwiper() {
  //   if ($(window).width() < 768) {
  //     $collectionsSlidesItemEl.addClass("swiper-slide");
  //     // $prizesWrapperContainer.removeClass('row')
  //     prizesSwiper.init();
  //   } else {
  //     $collectionsSlidesEl.removeClass("swiper-slide");
  //     // $prizesWrapperContainer.addClass('row')
  //     prizesSwiper.destroy();
  //   }
  // }
  // $(window).on("resize", initCollectionSwiper);
  // initCollectionSwiper();
});
