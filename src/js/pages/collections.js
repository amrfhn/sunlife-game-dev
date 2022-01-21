import Vue from "vue";
import Swiper from "swiper";

$(function () {
  let token = sessionStorage.getItem("game_token");
  if ($("#collections").length) {
    const reward = new Vue({
      el: "#collections",
      data: {
        collection_items: [],
        modal: {
          image: "",
          name: "",
          description: "",
        },
      },
      mounted: function () {
        this.getUserCollection();
      },
      methods: {
        getUserCollection() {
          let self = this;
          $.ajax({
            type: "GET",
            url: process.env.API_BASEURL + "/user-collection",
            headers: {
              Authorization: `Bearer ${token.replaceAll('"', "")}`,
            },
            contentType: "application/json",
          })
            .done(function (res) {
              self.collection_items = res.data.collection["1"];
            })
            .fail(function (res) {
              console.log(`error {res}`);
            });
        },
        setModalInformation(item) {
          this.modal.image = item.item_as.image;
          this.modal.name = item.item_as.name;
          this.modal.description = item.item_as.description;
        },
        closeModal() {
          $("#itemDetailsModal").modal("hide");
        },
      },
    });
  }
});

$(function () {
  const $collectionsSlidesEl = $("#swiper-collections").find(".swiper-slide");
  const $collectionsSlidesItemEl = $("#swiper-collections").find(
    ".collections-weekly__item-container"
  );

  function initCollectionSwiper() {
    if ($(window).width() < 962) {
      $collectionsSlidesItemEl.addClass("swiper-slide");
      // swiper.init();
    } else {
      $collectionsSlidesEl.removeClass("swiper-slide");
      // swiper.destroy();
    }
  }
  $(window).on("resize", initCollectionSwiper);
  initCollectionSwiper();
  if ($("#swiper-collections").length && $(window).width() < 962) {
    const swiper = new Swiper("#swiper-collections", {
      loop: false,
      slidesPerView: 1,
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1366: {
          slidesPerView: 5,
        },
      },
      navigation: {
        nextEl:
          ".collections-carousel-controls.carousel-controls .swiper-button-next",
        prevEl:
          ".collections-carousel-controls.carousel-controls .swiper-button-prev",
      },
    });
  }
});
