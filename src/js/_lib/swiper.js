

/**
 * @name initSwiper
 *
 * @description initialize Swiper
 */
const initSwiper = () => {

  const testimonialsSwiper = new Swiper('.testimonialsSlider', {
    grabCursor: true,
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 30,
      slideShadows: false,
    },
    speed: 750,
    slidesPerView: 1,
    spaceBetween: 50,
    pagination: {
      el: '.testimonials__pagination',
      type: 'fraction',
      clickable: true,
      renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' +
          '/' +
          '<span class="' + totalClass + '"></span>';
      }
    },
    navigation: {
      nextEl: '.testimonials__arrow--next',
      prevEl: '.testimonials__arrow--prev',
    }
  });
};
