var swiper = new Swiper(".generative-art", {
    loop: false,

    autoplay: {
        delay: 6000, 
        disableOnInteraction: false, 
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        1024: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
    },
});