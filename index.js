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
      start: `top ${40 + (20 * index)}px`,
      // end: `${696 * (countOfCards - index) - (745 + (15*index))}px`,
    },
    scrollY: `-${696 * index}px`,
  })
})


