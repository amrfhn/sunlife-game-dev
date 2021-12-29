import Swiper from "swiper";

var fraction = document.getElementById("fraction");
var slides = document.querySelectorAll(".swiper-slide");
var slideCount = slides.length;
if (fraction) {
  fraction.textContent = `1 / ${slideCount}`;
}
$(function () {
  $(".modal").on("show.bs.modal", function () {
    setTimeout(function () {
      const stepsCarousel = new Swiper(".carousel.steps-to-play", {
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
            debugger;
            if (fraction) {
              fraction.textContent = `${
                stepsCarousel.realIndex + 1
              }/${slideCount}`;
            }
          },
        },
        loop: false,
      });
    }, 500);
  });
});
