let swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 45,
    centeredSlides: true,
    loop: true,
  
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      950: {
        slidesPerView: 3,
      },
    },
  });
  
  // Hover event for next button
  let nextButton = document.querySelector(".swiper-button-next");
  let slideNextInterval;
  
  nextButton.addEventListener("mouseenter", function () {
    slideNextInterval = setInterval(function () {
      swiper.slideNext(2000);
    }, 0);
  });
  
  
  nextButton.addEventListener("mouseleave", function () {
    clearInterval(slideNextInterval);
  });
  
  
  
  
  let prevButton = document.querySelector(".swiper-button-prev");
  let slidePrevInterval;
  prevButton.addEventListener("mouseenter", function () {
    slidePrevInterval = setInterval(function () {
      swiper.slidePrev(2000);
    }, 0);
  });
  
  prevButton.addEventListener("mouseleave", function () {
    clearInterval(slidePrevInterval);
  });
  
  
  