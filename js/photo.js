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
        } else if (entry.target.className === 'placeholder') {
          const originalImg = new Image();
          originalImg.onload = () => originalImg.classList.add('loaded');
          originalImg.src = entry.target.dataset.large;
          entry.target.firstElementChild.classList.remove('loaded');
          entry.target.appendChild(originalImg);
        }
      }
    });
  }, { rootMargin: '0px 0px 200px 0px' });
  initObserver(io);
};

window.onload = () => {
  initMasonry();
  initScrollBehaviors();
};
