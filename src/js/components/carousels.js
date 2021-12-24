import Swiper from 'swiper';

const variant1 = new Swiper('.carousel.variant-hero', {
    pagination: {
        el: '.carousel-controls .swiper-pagination',
        type: 'fraction'
    },
    navigation: {
        nextEl: '.carousel-controls .swiper-button-next',
        prevEl: '.carousel-controls .swiper-button-prev'
    },
    loop: true,
    autoplay: {
        delay: 5000
    }
})

const variant2 = new Swiper('.carousel.variant-products', {
    slidesPerView: 'auto',
    spaceBetween: 60,
    slidesOffsetBefore: 16,
    pagination: {
        el: '.carousel-controls .swiper-pagination',
        type: 'fraction'
    },
    navigation: {
        nextEl: '.carousel-controls .swiper-button-next',
        prevEl: '.carousel-controls .swiper-button-prev'
    },
    breakpoints: {
        768: {
            slidesOffsetBefore: 48
        }
    }
})

const variant3 = new Swiper('.carousel.variant-timeline', {
    slidesPerView: 1,
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
    },
    breakpoints: {
        768: {
            slidesPerView: 3
        }
    }
})

const variant4 = new Swiper('.carousel.variant-media', {
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction'
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    loop: true,
    autoplay: {
        delay: 5000
    }
})

const variant5 = new Swiper('.carousel.variant-group-structure', {
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction'
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    loop: true,
    loopedSlides: 3,
    slidesPerView: 'auto',
    autoplay: {
        delay: 50000
    },
    breakpoints: {
        480: {
            slidesOffsetBefore: 48
        }
    }
})

const variantClientLogos = new Swiper('.carousel.variant-client-logos', {
    slidesPerView: 3,
    slidesPerColumn: 3,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 3000
    }
})