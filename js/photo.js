const initMasonry = function initMasonry() {
  const grid = document.querySelector('.grid');
  let msnry;

  const makeMasonry = function makeMasonry() {
    // eslint-disable-next-line no-undef
    msnry = new Masonry(grid, {
      itemSelector: '.grid__item',
      columnWidth: '.grid__sizer',
      gutter: '.gutter-sizer',
      percentPosition: true,
    });
  };

  const initReiszeEvent = function initReiszeEvent() {
    window.addEventListener('resize', () => {
      msnry.destroy();
      makeMasonry();
    });
  };

  makeMasonry();
  initReiszeEvent();
};

const initLazyLoading = function initLazyLoading() {
  const smallImgs = document.querySelectorAll('.placeholder__img');

  smallImgs.forEach((smallImg) => {
    const img = new Image();
    img.src = smallImg.src;
    img.onload = () => smallImg.classList.add('loaded');
  });
};

const initObserver = function initObserver(io) {
  const gridItems = document.querySelectorAll('.grid__item');
  const placeholders = document.querySelectorAll('.placeholder');
  gridItems.forEach(gridItem => io.observe(gridItem));
  placeholders.forEach(placeholder => io.observe(placeholder));
};

const initScrollBehaviors = function initScrollBehaviors() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.className === 'grid__item') {
          entry.target.classList.add('grid__item--scale');
        } else {
          const originalImg = new Image();
          originalImg.onload = () => originalImg.classList.add('loaded');
          originalImg.src = entry.target.dataset.large;
          entry.target.firstElementChild.classList.remove('loaded');
          entry.target.appendChild(originalImg);
        }
      }
    });
  });
  initObserver(io);
};

window.onload = () => {
  initMasonry();
  initLazyLoading();
  initScrollBehaviors();
};
