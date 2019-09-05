import 'intersection-observer';
import Masonry from 'masonry-layout';
import './default';
import '../css/photo.css';


const MasonryLayout = function MasonryMaker() {
  const grid = document.querySelector('.grid');
  let msnry;
  return {
    make: () => {
      msnry = new Masonry(grid, {
        itemSelector: '.grid__item',
        columnWidth: '.grid__sizer',
        gutter: '.gutter-sizer',
        percentPosition: true,
      });
    },
    destroy: () => {
      if (typeof msnry !== 'undefined') {
        msnry.destroy();
      }
    },
  };
};

const initMasonry = function initMasonry() {
  const masonry = MasonryLayout();

  const initReiszeEvent = function initReiszeEvent() {
    window.addEventListener('resize', () => {
      masonry.destroy();
      masonry.make();
    });
  };

  initReiszeEvent();
};

const initObserver = function initObserver(io) {
  const placeholders = document.querySelectorAll('.placeholder');
  placeholders.forEach((placeholder) => io.observe(placeholder));
};

const initScrollBehaviors = function initScrollBehaviors() {
  const masonry = MasonryLayout();
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const originalImg = new Image();
        originalImg.onload = () => {
          if (originalImg.complete) {
            masonry.make();
            originalImg.classList.add('loaded');
            entry.target.classList.add('placeholder--scale');
            entry.target.appendChild(originalImg);
          }
        };
        originalImg.src = entry.target.dataset.large;
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px 200px 0px' });
  initObserver(io);
};

window.onload = () => {
  initMasonry();
  initScrollBehaviors();
};
