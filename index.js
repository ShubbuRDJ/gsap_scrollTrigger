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


gsap.set(".image-card-con-parallelXImage-container", { zIndex: (i, target, targets) => targets.length - i });







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







// translator

async function changeLanguage(lang) {
  // Get all the elements on the page
  var body = document.querySelector("body");
  let elements = body.querySelectorAll('*');

  // Loop through each element and change its text content to the equivalent text in the selected language
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var content = element.textContent;

    const data = await fetch(`/translate?to=${lang}&text=${content}`)
    const json = await data.json();
    console.log(json)

  }
}

// Add an event listener to the button that will trigger the language change function when clicked
document.getElementById("language-switcher").addEventListener("click", function () {
  // var lang = this.getAttribute("data-language");
  changeLanguage('hi');
});





// const cardSlider = document.getElementById('card-slider');
//   const cards = document.querySelectorAll('.card');
//   let currentIndex = 0;

//   function updateSlider() {
//     cardSlider.style.transform = `translateX(${-currentIndex * 100}%)`;
//   }

//   function nextCard() {
//     currentIndex = (currentIndex + 1) % cards.length;
//     updateSlider();
//   }

//   function prevCard() {
//     currentIndex = (currentIndex - 1 + cards.length) % cards.length;
//     updateSlider();
//   }


// const cardSlider = document.getElementById('card-slider');
// const cards = document.querySelectorAll('.card');
// let currentIndex = 0;

// const cardWidth = cards[0].offsetWidth + parseInt(getComputedStyle(cards[0]).marginLeft) + parseInt(getComputedStyle(cards[0]).marginRight); // Calculate card width including margins

// function updateSlider() {
//   cardSlider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
// }

// function nextCard() {
//   currentIndex = (currentIndex + 1) % cards.length;
//   updateSlider();

//   // Handle loop back from last to first
//   if (currentIndex === 0) {
//     cardSlider.style.transition = 'none'; // Disable transition for smooth loop
//     cardSlider.style.transform = `translateX(-${cards.length * cardWidth}px)`; // Move to last card before animation
//     setTimeout(() => {
//       cardSlider.style.transition = ''; // Re-enable transition for next animation
//       updateSlider(); // Update position with transition
//     }, 0); // Schedule update immediately after transition disable
//   }
// }

// function prevCard() {
//   currentIndex = (currentIndex - 1 + cards.length) % cards.length;
//   updateSlider();

//   // Handle loop back from first to last
//   if (currentIndex === cards.length - 1) {
//     cardSlider.style.transition = 'none';
//     cardSlider.style.transform = `translateX(0px)`; // Move to first card before animation
//     setTimeout(() => {
//       cardSlider.style.transition = '';
//       updateSlider();
//     }, 0);
//   }
// }
// updateSlider();


const cards = document.querySelectorAll('.card');
const cardSlider = document.getElementById('card-slider');
let counter = 0;
cards.forEach((card, index) => {
  card.style.left = `${index * 100}%`
})

const cardSlideFunc = () => {
  console.log(counter);
  const trans = -counter * 100

  cards.forEach((card) => {
    card.style.transform = `translateX(${(trans)}%)`
  })
}

const nextCard = () => {
  counter = (counter + 1)% cards.length;
  cardSlideFunc();
}
const prevCard = () => {
  counter = ((counter - 1) + cards.length) % cards.length;
  cardSlideFunc();
}


