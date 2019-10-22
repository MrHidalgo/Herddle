"use strict";

/*
*
* ============================
* ============================
*
* Include lib:
*
* - webFontLoader.js;
* - preventBehavior.js;
* - svg4everybody.js;
*
* ============================
* ============================
* */

/**
 * @name initPreventBehavior
 *
 * @description
 */
var initPreventBehavior = function initPreventBehavior() {

  var link = document.querySelectorAll("a");

  link.forEach(function (val, idx) {

    val.addEventListener("click", function (e) {
      if (val.getAttribute("href") === "#") {
        e.preventDefault();
      }
    });
  });
};

/**
 * @name initSwiper
 *
 * @description initialize Swiper
 */
var initSwiper = function initSwiper() {

  var testimonialsSwiper = new Swiper('.testimonialsSlider', {
    grabCursor: true,
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 30,
      slideShadows: false
    },
    speed: 750,
    slidesPerView: 1,
    spaceBetween: 50,
    pagination: {
      el: '.testimonials__pagination',
      type: 'fraction',
      clickable: true,
      renderFraction: function renderFraction(currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' + '/' + '<span class="' + totalClass + '"></span>';
      }
    },
    navigation: {
      nextEl: '.testimonials__arrow--next',
      prevEl: '.testimonials__arrow--prev'
    }
  });
};

/**
 * @description Document DOM ready.
 */
$(document).ready(function (ev) {
  /**
   *
   * @type {*|jQuery|HTMLElement}
   * @private
   */
  var _document = $(document),
      _window = $(window);

  /*
  * =============================================
  * CALLBACK :: start
  * ============================================= */

  /*
  * CALLBACK :: end
  * ============================================= */

  /**
   * @description Init all method
   */
  var initJquery = function initJquery() {
    // default
    initPreventBehavior();
    // ==========================================

    // lib
    initSwiper();
    // ==========================================

    // callback
    // ==========================================
  };
  initJquery();
});