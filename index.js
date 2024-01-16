gsap.registerPlugin(ScrollTrigger);

const allCards = document.querySelectorAll('.collapsible-container');
const countOfCards = allCards.length;

allCards.forEach((element, index) => {
  gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      pin: true,
      scrub: true,
      pinSpacing: false,
      start: `top ${120 + (20 * index)}px`,
      end: `${696 * (countOfCards - index) - (745 + (15 * index))}px`,
    },
    scrollY: `-${696 * index}px`,
  })
})



// const imagesCards = document.querySelector('.parallelXImage-container');

// ScrollTrigger.create({
//   trigger: imagesCards,
//   pin: true,
//   pinSpacing: false,
//   start: `top 140px`,
//   end: `${530 * 3}px`,
// })


const allPortFolioCard = document.querySelectorAll('.image-card-con-parallelXImage-container')
const countOfPortFolioCard = allPortFolioCard.length;

// allPortFolioCard.forEach((portfolio, index) => {
//   gsap.to(portfolio, {
//     scrollTrigger: {
//       trigger: portfolio,
//       pin: true,
//       scrub: true,
//       pinSpacing: false,
//       start: `top ${120 + (20 * index)}px`,
//       end: `${696 * (countOfCards - index) - (745 + (15 * index))}px`,
//     },
//     scrollY: `-${696 * index}px`,
//   })
// })


// console.log(allPortFolioCard.length, 'csdbcwdeuwer')

// gsap.to(allPortFolioCard[1], {
//   height: "0%",
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".parallelXImage-container",
//     start: "top 150px",
//     pin: true,
//     end: `+=${675 * 1}px`,
//     scrub: 0.5
//   }
// });


// allPortFolioCard.forEach((portfolio, index) => {
//   console.log(index, 'csdbcwdeuwer')
//   if (index !== 0) {
//     gsap.to(portfolio, {
//       height: "0%",
//       ease: "none",
//       scrollTrigger: {
//         trigger: ".parallelXImage-container",
//         start: "top 150px",
//         pin: true,
//         end: `+=${675 * 1}px`,
//         scrub: 0.5
//       }
//     });
//   }
// })




gsap.registerPlugin(ScrollTrigger);

gsap.to(".image-card-con-parallelXImage-container:not(:last-child)", {
  yPercent: -100, 
  ease: "none",
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".parallelXImage-container",
    start: "top 150px",
    end: "+=300%",
    scrub: true,
    pin: true
  }
});


gsap.set(".image-card-con-parallelXImage-container", {zIndex: (i, target, targets) => targets.length - i});







// carousel start 

document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");
  const itemWidth = document.querySelector(".carousel-item").offsetWidth + 10; // Including margin

  let currentIndex = 0;

  function updateCarousel() {
    const translateValue = -currentIndex * itemWidth;
    carousel.style.transform = `translateX(${translateValue}px)`;
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + carousel.children.length) % carousel.children.length;
    updateCarousel();
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % carousel.children.length;
    updateCarousel();
  }

  prevButton.addEventListener("mouseenter", prevSlide);
  nextButton.addEventListener("mouseenter", nextSlide);
});



// carousel end 


