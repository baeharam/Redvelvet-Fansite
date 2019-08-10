/* eslint-disable new-cap */
/* eslint-disable no-new */
/* eslint-disable no-undef */
/* 위 사항들에 대한 무시는 fullpage.js의 것들을 사용하기 때문이다. */

const CLASSES = (function makeCommonClasses() {
  return {
    SWIPER_IMGS: document.querySelectorAll('.swiper__img'),
    SWIPER_IMGLEFTS: document.querySelectorAll('.swiper__img__left'),
    SWIPER_IMGRIGHTS: document.querySelectorAll('.swiper__img__right'),
    SWIPER_CONTENTS_MAINS: document.querySelectorAll('.swiper__contents__main'),
  };
}());

const initObserverForBackground = function initObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.dataset.color) {
          document.getElementsByTagName('body')[0].style.backgroundColor = entry.target.dataset.color;
        }
        if (entry.target.dataset.src) {
          entry.target.style.backgroundImage = `url(${entry.target.dataset.src})`;
        }
      }
    });
  });
  CLASSES.SWIPER_IMGS.forEach(swiperImg => observer.observe(swiperImg));
  CLASSES.SWIPER_IMGLEFTS.forEach(swiperLeftImg => observer.observe(swiperLeftImg));
  CLASSES.SWIPER_IMGRIGHTS.forEach(swiperRightImg => observer.observe(swiperRightImg));
  CLASSES.SWIPER_CONTENTS_MAINS.forEach(swiperContentsMain => observer.observe(swiperContentsMain));
};

const initFullpage = function initFullpage() {
  new fullpage('#fullpage', {
    autoScrolling: true,
    afterLoad(_origin, destination) {
      destination.item.classList.add('load');
    },
    onLeave(origin) {
      origin.item.classList.remove('load');
    },
  });
  fullpage_api.setAllowScrolling(true);
};

const initAnimation = function initAnimation() {
  const header = document.getElementById('header-js');
  const backBtn = document.getElementById('backBtn-js');
  const sections = document.querySelectorAll('.section');

  const setHoverEffect = function setHoverEffect() {
    sections.forEach((section) => {
      const mouseenterHandler = () => { section.classList.add('hover'); };
      const mouseleaveHandler = () => { section.classList.remove('hover'); };
      section.querySelectorAll('.swiper__title, .swiper__contents__main, .swiper__img__left, .swiper__img__right').forEach((el) => {
        el.addEventListener('mouseenter', mouseenterHandler);
        el.addEventListener('mouseleave', mouseleaveHandler);
      });
    });
  };

  const forwardClickAnimation = function forwardClickAnimation(_swiperImg, index) {
    header.classList.remove('out');
    header.classList.add('in');
    backBtn.classList.remove('out');
    backBtn.classList.add('in');
    sections[index].classList.remove('out');
    sections[index].classList.add('in');
    sections.forEach((section, sectionIndex) => {
      if (sectionIndex !== index) {
        section.style.display = 'none';
      }
    });
  };

  const backwardClickAnimation = function backwardClickAnimation() {
    // eslint-disable-next-line prefer-destructuring
    const index = fullpage_api.getActiveSection().index;
    header.classList.remove('in');
    header.classList.add('out');
    backBtn.classList.remove('in');
    backBtn.classList.add('out');
    sections[index].classList.remove('in');
    sections[index].classList.add('out');

    /* TODO 다른 section 바로 안나오게 수정해야 함 */
    const displayAgain = function displayAgain() {
      sections.forEach((section, sectionIndex) => {
        if (sectionIndex !== index) {
          section.style.display = 'table';
        }
      });
    };
    setTimeout(displayAgain, 2000);
  };

  const addClickEventToSwiper = () => {
    CLASSES.SWIPER_IMGS.forEach((swiperImg, index) => swiperImg.addEventListener('click', () => {
      forwardClickAnimation(swiperImg, index);
      fullpage_api.setAutoScrolling(false);
    }));
  };

  const addClickEventToBackBtn = function addClickEventToBackBtn() {
    backBtn.addEventListener('click', () => {
      backwardClickAnimation();
      fullpage_api.setAutoScrolling(true);
    });
  };

  const addNoRebuildEvent = () => {
    window.addEventListener('resize', () => {
      if (matchMedia('(max-width: 576px)').matches) {
        const moveDownElem = document.querySelector('.move-down');
        if (moveDownElem) {
          moveDownElem.classList.add('no-rebuild');
        }
      }
    });
  };

  setHoverEffect();
  addClickEventToSwiper();
  addNoRebuildEvent();
  addClickEventToBackBtn();
};

window.onload = () => {
  initAnimation();
  initObserverForBackground();
  initFullpage();
};
