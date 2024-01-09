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






// ************************************ for small gap b/w card *****************************************

// gsap.registerPlugin(ScrollTrigger);

// const allCards = document.querySelectorAll('.collapsible-container');
// const countOfCards = allCards.length;

// allCards.forEach((element, index) => {
//   gsap.to(element, {
//     scrollTrigger: {
//       trigger: element,
//       pin: true,
//       scrub: true,
//       pinSpacing: false,
//       start: `top ${120 + (11 * index)}px`,
//       end: `${705 * (countOfCards - index) - (745 + (6*index))}px`,
//     },
//     scrollY: `-${705 * index}px`,
//   })
// })