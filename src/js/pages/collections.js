import Vue from "vue";
import Swiper from "swiper";

$(function () {
  let token = sessionStorage.getItem("game_token");
  if ($("#collections").length) {
    const reward = new Vue({
      el: "#collections",
      data: {
        collection_items_1: [],
        collection_items_2: [],
        collection_items_3: [],
        collection_items_4: [],
        modal: {
          image: "",
          name: "",
          description: "",
        },
        user_image: "",
        isMobile:  /Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? true : false
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
            .done((res) => {
              this.user_image = res.data.user.profile_image;
              if (res.data.collection["1"] !== undefined) {
                this.collection_items_1 = res.data.collection["1"];
              }
              if (res.data.collection["2"] !== undefined) {
                this.collection_items_2 = res.data.collection["2"];
              }
              if (res.data.collection["3"] !== undefined) {
                this.collection_items_3 = res.data.collection["3"];
              }
              if (res.data.collection["4"] !== undefined) {
                this.collection_items_4 = res.data.collection["4"];
              }
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
  var isMobile =  /Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? true : false

  if ($("#swiper-collections").length && isMobile) {
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
