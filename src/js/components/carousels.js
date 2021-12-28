import Swiper from "swiper";

var fraction = document.getElementById("fraction");
var slides = document.querySelectorAll(".swiper-slide");
var slideCount = slides.length;
fraction.textContent = `1 / ${slideCount}`;
$(function () {
  $(".modal").on("show.bs.modal", function () {
    setTimeout(function () {
      const steosCarousel = new Swiper(".carousel.steps-to-play", {
        slidesPerView: 1,
        pagination: {
          el: ".carousel-controls .swiper-pagination",
          // type: "fraction",
          // clickable: true,
        },
        navigation: {
          nextEl: ".carousel-controls .swiper-button-next",
          prevEl: ".carousel-controls .swiper-button-prev",
        },
        on: {
          slideChange: () => {
            fraction.textContent = `${steosCarousel.realIndex + 1}/${slideCount}`;
          },
        },
        loop: false,
      });
    }, 500);
  });
});
