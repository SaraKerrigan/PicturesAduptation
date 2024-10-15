const swip = new Swiper(".swiper__pictures", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 3,
  loop: true,
  spaceBetween: 30,
//   centeredSlides: true,

  // Navigation arrows
  navigation: {
    nextEl: ".arrow__rigth",
    prevEl: ".arrow__left",
  },

  breakpoints: {
    // 1440: {
    //   slidesPerView: 3,
    // },

    1141: {
      slidesPerView: 3,
    },

    900: {
      slidesPerView: 2,
    },

    625: {
      slidesPerView: 2,
    },

    0: {
      slidesPerView: 1,
    },
  },


});
