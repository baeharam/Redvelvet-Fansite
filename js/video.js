const initializeCarousel = function initializeCarousel() {
  const slidesContainer = document.querySelector('.carousel-slides');
  const slides = [].slice.call(slidesContainer.children);

  const leftBtn = document.querySelector('.button-play--left');
  const rightBtn = document.querySelector('.button-play--right');

  const slideWidth = slides[0].getBoundingClientRect().width;
  const setSlidePosition = (slide, index) => {
    slide.style.left = `${slideWidth * index}px`;
  };
  slides.forEach(setSlidePosition);

  const moveVideo = (currentVideo, targetVideo, moveValue) => {
    slidesContainer.style.transform = `translateX(${moveValue})`;
    currentVideo.classList.remove('active');
    targetVideo.classList.add('active');
  };

  leftBtn.addEventListener('click', () => {
    const currentVideo = document.querySelector('.active');
    const prevVideo = currentVideo.previousElementSibling;
    if (prevVideo) {
      moveVideo(currentVideo, prevVideo, prevVideo.style.left);
    }
  });

  rightBtn.addEventListener('click', () => {
    const currentVideo = document.querySelector('.active');
    const nextVideo = currentVideo.nextElementSibling;
    if (nextVideo) {
      moveVideo(currentVideo, nextVideo, `-${nextVideo.style.left}`);
    }
  });
};

initializeCarousel();
