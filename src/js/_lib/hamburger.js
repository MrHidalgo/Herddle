

/**
 * @name initHamburger
 *
 * @description Init hamburger logic with animated
 */
const initHamburger = () => {

  const btn = document.querySelector("[hamburger-js]"),
    hideScrollContainer = document.querySelectorAll("html, body"),
    mobileContainer = $("[mobile-block-js]");

	/**
   * @description
	 */
	if(btn) {
    btn.addEventListener("click", (ev) => {
      const elem = ev.currentTarget;

      elem.classList.toggle("is-active");

      if(mobileContainer.hasClass('is-open')) {
        mobileContainer.addClass("zoomOut");

        setTimeout(() => {
          mobileContainer.removeClass("is-open");
        }, 500);
      }
      else {
        mobileContainer.removeClass("zoomOut").addClass("is-open");
      }

      $('.header').toggleClass('is-open');

      hideScrollContainer.forEach((val, idx) => {
        val.classList.toggle("is-hideScroll");
      });

    });
  }

};