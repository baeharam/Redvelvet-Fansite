const swiperImg = document.querySelector('.swiper__img');
const swiperTitle = document.querySelector('.swiper__title');
const swiperImgLeft = document.querySelector('.swiper__img__left');
const swiperImgRight = document.querySelector('.swiper__img__right');
const swiperContentsInside = document.querySelector('.swiper__contents__inside');

swiperImg.addEventListener('mouseenter', () => {
  swiperImg.classList.add('hover');
  swiperTitle.classList.add('hover');
});

swiperTitle.addEventListener('mouseenter', () => {
  swiperImg.classList.add('hover');
  swiperTitle.classList.add('hover');
});

swiperImg.addEventListener('mouseleave', () => {
  swiperImg.classList.remove('hover');
  swiperTitle.classList.remove('hover');
});

swiperTitle.addEventListener('mouseleave', () => {
  swiperImg.classList.remove('hover');
  swiperTitle.classList.remove('hover');
});

swiperImg.addEventListener('click', () => {
  swiperTitle.classList.remove('hover');
  swiperTitle.classList.add('move-up');
  swiperImgLeft.classList.add('left-gone');
  swiperImgRight.classList.add('right-gone');
  swiperImg.classList.add('move-down');
  swiperContentsInside.classList.add('appear');
});

window.addEventListener('resize', () => {
  document.querySelector('.move-down').style.animationDuration = '0s';
  document.querySelector('.move-down').style.animationDelay = '0s';
});


// const bgColors = ['#07131d', '#031f1c'];
// const imgs = document.querySelectorAll('.swiper__img');
// const mains = document.querySelectorAll('.swiper__img__main');
// const lefts = document.querySelectorAll('.swiper__img__left');
// const rights = document.querySelectorAll('.swiper__img__right');
// const titles = document.querySelectorAll('.swiper__img__title');

// imgs.forEach((img, index) => {
//   img.addEventListener('click', () => {
//     lefts[index].classList.remove('left-rotate');
//     lefts[index].classList.add('left-disappear');
//     rights[index].classList.remove('right-rotate');
//     rights[index].classList.add('right-disappear');

//     imgs[index].classList.add('swiper__break-position');
//     mains[index].classList.add('main__break-position');
//     titles[index].classList.remove('fade-in');
//     titles[index].classList.add('title__break-position');

//     document.querySelectorAll('.section').forEach((section, _index) => {
//       if (index !== _index) {
//         section.style.display = 'none';
//       }
//     });
//     fullpage_api.destroy();
//   });
// });

// eslint-disable-next-line no-new
// new fullpage('#fullpage', {
//   autoScrolling: true,
//   scrollHorizontally: false,
//   scrollOverflow: true,
//   afterLoad(origin, destination, direction) {
//     const leftImgs = document.querySelectorAll('.swiper__img__left');
//     const rightImgs = document.querySelectorAll('.swiper__img__right');
//     const titles = document.querySelectorAll('.swiper__img__title');

//     const curLeftImg = [].filter.call(leftImgs, (img, index) => index === destination.index);
//     const curRightImg = [].filter.call(rightImgs, (img, index) => index === destination.index);
//     const curTitle = [].filter.call(titles, (title, index) => index === destination.index);

//     curLeftImg[0].classList.remove('no-rotate');
//     curRightImg[0].classList.remove('no-rotate');
//     curTitle[0].classList.remove('fadeOut-effect');
//     curLeftImg[0].classList.add('left-rotate');
//     curRightImg[0].classList.add('right-rotate');
//     curTitle[0].classList.add('fadeIn-effect');

//     document.getElementsByTagName('body')[0].style.backgroundColor = bgColors[destination.index];
//   },
//   onLeave(origin, destination, direction) {
//     const leftImgs = document.querySelectorAll('.swiper__img__left');
//     const rightImgs = document.querySelectorAll('.swiper__img__right');
//     const titles = document.querySelectorAll('.swiper__img__title');

//     const curLeftImg = [].filter.call(leftImgs, (img, index) => index === origin.index);
//     const curRightImg = [].filter.call(rightImgs, (img, index) => index === origin.index);
//     const curTitle = [].filter.call(titles, (title, index) => index === origin.index);

//     curLeftImg[0].classList.remove('left-rotate');
//     curRightImg[0].classList.remove('right-rotate');
//     curTitle[0].classList.remove('fadeIn-effect');
//     curLeftImg[0].classList.add('no-rotate');
//     curRightImg[0].classList.add('no-rotate');
//     curTitle[0].classList.add('fadeOut-effect');
//   },
// });
// fullpage_api.setAllowScrolling(true);
