/* eslint-disable new-cap */
/* eslint-disable no-new */
/* eslint-disable no-undef */
/* 위 사항들에 대한 무시는 fullpage.js의 것들을 사용하기 때문이다. */

const CLASSES = (function makeCommonClasses() {
  return {
    SWIPER_IMGS: document.querySelectorAll('.swiper__img'),
    SWIPER_IMGLEFTS: document.querySelectorAll('.swiper__img__left'),
    SWIPER_IMGRIGHTS: document.querySelectorAll('.swiper__img__right'),
  };
}());

const initObserverForBackground = function initObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.getElementsByTagName('body')[0].style.backgroundColor = entry.target.dataset.color;
      }
    });
  });
  CLASSES.SWIPER_IMGS.forEach(swiperImg => observer.observe(swiperImg));
};

const initFullpage = function initFullpage() {
  new fullpage('#fullpage', {
    autoScrolling: true,
    afterLoad(_origin, destination) {
      CLASSES.SWIPER_IMGLEFTS[destination.index].classList.add('left-rotate');
      CLASSES.SWIPER_IMGRIGHTS[destination.index].classList.add('right-rotate');
    },
    onLeave(origin) {
      CLASSES.SWIPER_IMGLEFTS[origin.index].classList.remove('left-rotate');
      CLASSES.SWIPER_IMGRIGHTS[origin.index].classList.remove('right-rotate');
    },
  });
  fullpage_api.setAllowScrolling(true);
};

const initAnimation = function initAnimation() {
  const swiperTitles = document.querySelectorAll('.swiper__title');
  const swiperContentsInsides = document.querySelectorAll('.swiper__contents__inside');
  const sections = document.querySelectorAll('.section');
  const backBtn = document.getElementById('backBtn-js');
  const header = document.getElementById('header-js');

  const addHoverOnEventToImg = function addHoverOnEventToImg() {
    CLASSES.SWIPER_IMGS.forEach((swiperImg, index) => swiperImg.addEventListener('mouseenter', () => {
      swiperImg.classList.add('hover-up');
      swiperTitles[index].classList.add('hover-up');
      CLASSES.SWIPER_IMGLEFTS[index].classList.add('hover-hide');
      CLASSES.SWIPER_IMGRIGHTS[index].classList.add('hover-hide');
    }));
  };

  const addHoverOnEventToTItle = function addHoverOnEventToTItle() {
    swiperTitles.forEach((swiperTitle, index) => swiperTitle.addEventListener('mouseenter', () => {
      swiperTitle.classList.add('hover-up');
      CLASSES.SWIPER_IMGS[index].classList.add('hover-up');
      CLASSES.SWIPER_IMGLEFTS[index].classList.add('hover-hide');
      CLASSES.SWIPER_IMGRIGHTS[index].classList.add('hover-hide');
    }));
  };

  const addHoverOffEventToImg = function addHoverOffEventToImg() {
    CLASSES.SWIPER_IMGS.forEach((swiperImg, index) => swiperImg.addEventListener('mouseleave', () => {
      swiperImg.classList.remove('hover-up');
      swiperTitles[index].classList.remove('hover-up');
      CLASSES.SWIPER_IMGLEFTS[index].classList.remove('hover-hide');
      CLASSES.SWIPER_IMGRIGHTS[index].classList.remove('hover-hide');
    }));
  };

  const addHoverOffEventToTitle = function addHoverOffEventToTitle() {
    swiperTitles.forEach((swiperTitle, index) => swiperTitle.addEventListener('mouseleave', () => {
      swiperTitle.classList.remove('hover-up');
      CLASSES.SWIPER_IMGS[index].classList.remove('hover-up');
      CLASSES.SWIPER_IMGLEFTS[index].classList.remove('hover-hide');
      CLASSES.SWIPER_IMGRIGHTS[index].classList.remove('hover-hide');
    }));
  };

  const showHeader = function showHeader() {
    header.classList.remove('hide');
    header.classList.add('show');
  };

  const hideHeader = function hideHeader() {
    header.classList.remove('show');
    header.classList.add('hide');
  };

  const showBackBtn = function showBackBtn() {
    backBtn.classList.add('show');
  };

  const hideBackBtn = function hideBackBtn() {
    backBtn.classList.remove('show');
  };

  const forwardClickAnimation = function forwardClickAnimation(swiperImg, index) {
    CLASSES.SWIPER_IMGLEFTS[index].classList.remove('left-gone-backward');
    CLASSES.SWIPER_IMGRIGHTS[index].classList.remove('right-gone-backward');
    CLASSES.SWIPER_IMGLEFTS[index].classList.add('left-gone');
    CLASSES.SWIPER_IMGRIGHTS[index].classList.add('right-gone');
    swiperTitles[index].classList.remove('move-up-backward');
    swiperImg.classList.remove('move-down-backward');
    swiperTitles[index].classList.add('move-up');
    swiperImg.classList.add('move-down');
    sections.forEach((section, sectionIndex) => {
      if (sectionIndex !== index) {
        section.classList.add('hide');
      }
    });
    swiperContentsInsides[index].classList.add('show-contents');
  };

  const backwardClickAnimation = function backwardClickAnimation() {
    // eslint-disable-next-line prefer-destructuring
    const index = fullpage_api.getActiveSection().index;
    CLASSES.SWIPER_IMGLEFTS[index].classList.remove('left-gone');
    CLASSES.SWIPER_IMGRIGHTS[index].classList.remove('right-gone');
    CLASSES.SWIPER_IMGLEFTS[index].classList.add('left-gone-backward');
    CLASSES.SWIPER_IMGRIGHTS[index].classList.add('right-gone-backward');
    swiperTitles[index].classList.remove('move-up');
    CLASSES.SWIPER_IMGS[index].classList.remove('move-down');
    swiperTitles[index].classList.add('move-up-backward');
    CLASSES.SWIPER_IMGS[index].classList.add('move-down-backward');
    document.querySelector('.show-contents').classList.remove('show-contents');
    sections.forEach(section => section.classList.remove('hide'));
  };

  const addClickEventToImg = () => {
    CLASSES.SWIPER_IMGS.forEach((swiperImg, index) => swiperImg.addEventListener('click', () => {
      forwardClickAnimation(swiperImg, index);
      hideHeader();
      showBackBtn();
      fullpage_api.setAutoScrolling(false);
    }));
  };

  const addClickEventToBackBtn = function addClickEventToBackBtn() {
    backBtn.addEventListener('click', () => {
      backwardClickAnimation();
      showHeader();
      hideBackBtn();
      fullpage_api.setAutoScrolling(true);
    });
  };

  const addNoRebuildEvent = () => {
    window.addEventListener('resize', () => {
      if (matchMedia('(max-width: 768px)').matches) {
        const moveDownElem = document.querySelector('.move-down');
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
  addClickEventToBackBtn();
};

window.onload = () => {
  initAnimation();
  initObserverForBackground();
  initFullpage();
};
