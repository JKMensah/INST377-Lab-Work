/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-syntax */
let slideposition = 0;
const slides = document.querySelectorAll('.carousel_item');
const totalslides = slides.length;
next = document.querySelector('.carousel_button--next');
previous = document.querySelector('.carousel_button--prev');

next.addEventListener('click', () => {
  moveToPrevSlide();
});

previous.addEventListener('click', () => {
  moveToNextSlide();
});

function updateSlidePosition() {
  for (const slide of slides) {
    slide.classList.remove('carousel_item--visible');
    slide.classList.add('carousel_item--hidden');
  }
  slides[slideposition].classList.add('carousel_item--visible');
}

function moveToNextSlide() {
  console.log('next');
  if (slideposition === totalslides - 1) {
    slideposition = 0;
  } else {
    slideposition++;
  }
  updateSlidePosition();
}

function moveToPrevSlide() {
  console.log('previous');
  if (slideposition === 0) {
    slideposition = totalslides - 1;
  } else {
    slideposition--;
  }
  updateSlidePosition();
}