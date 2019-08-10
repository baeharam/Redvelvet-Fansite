/* eslint-disable new-cap */
/* eslint-disable no-new */
/* eslint-disable no-undef */
/* 위 사항들에 대한 무시는 fullpage.js의 것들을 사용하기 때문이다. */

const initializeAnimation = function initializeAnimation() {
  const swiperImgs = document.querySelectorAll('.swiper__img');
  const swiperTitles = document.querySelectorAll('.swiper__title');
  const swiperImgLefts = document.querySelectorAll('.swiper__img__left');
  const swiperImgRights = document.querySelectorAll('.swiper__img__right');
  const swiperContentsInsides = document.querySelectorAll('.swiper__contents__inside');
  const sections = document.querySelectorAll('.section');

  const addHoverOnEventToImg = function addHoverOnEventToImg() {
    swiperImgs.forEach((swiperImg, index) => swiperImg.addEventListener('mouseenter', () => {
      swiperImg.classList.add('hover-up');
      swiperTitles[index].classList.add('hover-up');
      swiperImgLefts[index].classList.add('hover-hide');
      swiperImgRights[index].classList.add('hover-hide');
    }));
  };

  const addHoverOnEventToTItle = function addHoverOnEventToTItle() {
    swiperTitles.forEach((swiperTitle, index) => swiperTitle.addEventListener('mouseenter', () => {
      swiperTitle.classList.add('hover-up');
      swiperImgs[index].classList.add('hover-up');
      swiperImgLefts[index].classList.add('hover-hide');
      swiperImgRights[index].classList.add('hover-hide');
    }));
  };

  const addHoverOffEventToImg = function addHoverOffEventToImg() {
    swiperImgs.forEach((swiperImg, index) => swiperImg.addEventListener('mouseleave', () => {
      swiperImg.classList.remove('hover-up');
      swiperTitles[index].classList.remove('hover-up');
      swiperImgLefts[index].classList.remove('hover-hide');
      swiperImgRights[index].classList.remove('hover-hide');
    }));
  };

  const addHoverOffEventToTitle = function addHoverOffEventToTitle() {
    swiperTitles.forEach((swiperTitle, index) => swiperTitle.addEventListener('mouseleave', () => {
      swiperTitle.classList.remove('hover-up');
      swiperImgs[index].classList.remove('hover-up');
      swiperImgLefts[index].classList.remove('hover-hide');
      swiperImgRights[index].classList.remove('hover-hide');
    }));
  };

  const addClickEventToImg = () => {
    swiperImgs.forEach((swiperImg, index) => swiperImg.addEventListener('click', () => {
      swiperImgLefts[index].classList.add('left-gone');
      swiperImgRights[index].classList.add('right-gone');
      swiperTitles[index].classList.add('move-up');
      swiperImg.classList.add('move-down');
      sections.forEach((section, sectionIndex) => {
        if (sectionIndex !== index) {
          section.style.display = 'none';
        }
      });
      swiperContentsInsides[index].classList.add('appear');
      fullpage_api.destroy();
    }));
  };

  const addNoRebuildEvent = () => {
    window.addEventListener('resize', () => {
      if (matchMedia('(max-width: 768px)').matches) {
        const moveDownElem = document.querySelector('.move-down');
        // moveDownElem.classList.remove('move-down');
        moveDownElem.classList.add('no-rebuild');
      }
    });
  };

  addHoverOnEventToImg();
  addHoverOnEventToTItle();
  addHoverOffEventToImg();
  addHoverOffEventToTitle();
  addClickEventToImg();
  addNoRebuildEvent();
};

const initializeFullpage = function initializeFullpage() {
  new fullpage('#fullpage', {
    autoScrolling: true,
  });
  fullpage_api.setAllowScrolling(true);
};

window.onload = () => {
  initializeAnimation();
  initializeFullpage();
};
