/* eslint-disable new-cap */
/* eslint-disable no-new */
/* eslint-disable no-undef */
/* 위 사항들에 대한 무시는 fullpage.js의 것들을 사용하기 때문이다. */

const initObserverForBackground = function initObserver() {
  let observer;
  const imgs = document.querySelectorAll('.swiper__img');
  const mainImgs = document.querySelectorAll('.swiper__contents__main');
  const leftImgs = document.querySelectorAll('.swiper__img__left');
  const rightImgs = document.querySelectorAll('.swiper__img__right');

  const makeObserverInstance = function makeObserverInstance() {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('swiper__img')) {
            document.getElementsByTagName('body')[0].style.backgroundColor = entry.target.dataset.color;
          } else if (entry.target.classList.contains('swiper__img__left')
            || entry.target.classList.contains('swiper__img__right')
            || entry.target.classList.contains('swiper__contents__main')) {
            entry.target.style.backgroundImage = `url(${entry.target.dataset.src})`;
          }
        }
      });
    });
  };

  const observeElements = function observElements() {
    imgs.forEach(swiperImg => observer.observe(swiperImg));
    leftImgs.forEach(swiperLeftImg => observer.observe(swiperLeftImg));
    rightImgs.forEach(swiperRightImg => observer.observe(swiperRightImg));
    mainImgs.forEach(swiperContentsMain => observer.observe(swiperContentsMain));
  };

  makeObserverInstance();
  observeElements();
};

const initFullpage = function initFullpage() {
  new fullpage('#fullpage', {
    anchors: ['irene', 'seulgi', 'wendy', 'yeri', 'joy'],
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
        section.classList.add('hide');
      }
    });
  };

  const backwardClickAnimation = function backwardClickAnimation(index) {
    // eslint-disable-next-line prefer-destructuring
    // const index = fullpage_api.getActiveSection().index;
    const activateAnimation = function animate() {
      header.classList.remove('in');
      header.classList.add('out');
      backBtn.classList.remove('in');
      backBtn.classList.add('out');
      sections[index].classList.remove('in');
      sections[index].classList.add('out');
      sections.forEach((section, sectionIndex) => {
        if (sectionIndex !== index) {
          section.classList.remove('hide');
        }
      });
    };

    const replaceOutToLoad = function replaceOutToLoad() {
      document.querySelectorAll('.swiper__img')[index].addEventListener('animationend', () => {
        sections[index].classList.replace('out', 'load');
      });
    };

    activateAnimation();
    replaceOutToLoad();
  };

  let currentIndex;
  const addClickEventToSwiper = () => {
    document.querySelectorAll('.swiper__img').forEach((swiperImg, index) => swiperImg.addEventListener('click',
      () => {
        currentIndex = index;
        forwardClickAnimation(swiperImg, index);
        fullpage_api.setAutoScrolling(false);
        fullpage_api.setLockAnchors(true);
      }));
  };

  const addClickEventToBackBtn = function addClickEventToBackBtn() {
    backBtn.addEventListener('click', () => {
      backwardClickAnimation(currentIndex);
      fullpage_api.moveTo(currentIndex + 1);
      fullpage_api.setAutoScrolling(true);
      fullpage_api.setLockAnchors(false);
    });
  };

  setHoverEffect();
  addClickEventToSwiper();
  addClickEventToBackBtn();
};

window.onload = () => {
  initAnimation();
  initObserverForBackground();
  initFullpage();
};
