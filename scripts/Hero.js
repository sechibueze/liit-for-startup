// 


const slides = document.querySelectorAll('ul.hero-slider li');
// const count = slider.children.length;
// console.log();
let counter = 0;
let currSlideIdx = 0;
const showSlide = () => {

  if (currSlideIdx >= slides.length) {
    // reset counter
    currSlideIdx = 0;
  }


  console.log('showing slide', currSlideIdx);
  // Remove other slides
  const oldSlides = Array.from(slides).filter((value, indx) => {
    return indx !== currSlideIdx;
  });

  if (oldSlides) {
    // console.log('old', oldSlides);
    oldSlides.forEach(el => {
      el.style.display = 'none';
    })
  }


  const currSlide = slides[currSlideIdx];
  currSlide.style.display = 'block';
  currSlideIdx++;
};

setInterval(showSlide, 8000);
