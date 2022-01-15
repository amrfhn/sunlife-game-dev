import Swiper from "swiper";

$(function () {
  var fraction = document.getElementById("fraction");
  var slides = document.querySelectorAll(".swiper-slide");
  var slideCount = slides.length;
  if (fraction) {
    fraction.textContent = `1 / ${slideCount}`;
  }
  var stepsCarousel;

  $(".howtoplay-modal").on("show.bs.modal", function () {
    setTimeout(function () {
      stepsCarousel = new Swiper(".carousel.steps-to-play", {
        effect: "coverflow",
        coverflowEffect: {
          rotate: 70,
          slideShadows: false,
        },
        slidesPerView: 1,
        pagination: {
          el: ".carousel-controls .swiper-pagination",
          // clickable: true,
        },
        navigation: {
          nextEl: ".carousel-controls .swiper-button-next",
          prevEl: ".carousel-controls .swiper-button-prev",
        },
        on: {
          slideChange: () => {
            if (fraction) {
              fraction.textContent = `${
                stepsCarousel.realIndex + 1
              }/${slideCount}`;
            }
            if (stepsCarousel.realIndex == slideCount - 1) {
              $(".carousel-controls .swiper-button-next").hide();
              $(".carousel-controls .swiper-button-start").show();
            } else {
              $(".carousel-controls .swiper-button-start").hide();
              $(".carousel-controls .swiper-button-next").show();
            }
          },
        },
        loop: false,
      });
    }, 500);
  });

  //reset swiper on modal close - to it's default config
  $(".howtoplay-modal").on("hidden.bs.modal", function () {
    $(".carousel-controls .swiper-button-next").show();
    $(".carousel-controls .swiper-button-start").hide();
    if (fraction) {
      fraction.textContent = `1 / ${slideCount}`;
    }
  });

  var isStartPage = $(".start-page-container").length ? true : false;
  var isGamePage = $(".game-page-container").length ? true : false;

  $(".carousel-controls .swiper-button-start").on("click", function () {
    if (isStartPage || isGamePage) {
      console.log("ada");
      $("#howToPlayModal").modal("hide");
    } else {
      console.log("tak ada");
      window.location.href = "/game.html";
    }
  });
});
