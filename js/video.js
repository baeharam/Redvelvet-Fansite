const moveToSelected = function moveToSelected(element) {
  let selected;

  if (element === 'prev') {
    selected = document.querySelector('.selected').previousElementSibling;
  } else if (element === 'next') {
    selected = document.querySelector('.selected').nextElementSibling;
  } else {
    selected = element;
  }

  let next = selected ? selected.nextElementSibling : undefined;
  let prev = selected ? selected.previousElementSibling : undefined;

  if (typeof (selected) !== 'undefined') {
    selected.classList = '';
    selected.classList.add('carousel__contents');
    selected.classList.add('selected');
  }
  if (typeof (prev) !== 'undefined') {
    prev.classList = '';
    prev.classList.add('carousel__contents');
    prev.classList.add('prev');
  }
  if (typeof (next) !== 'undefined') {
    next.classList = '';
    next.classList.add('carousel__contents');
    next.classList.add('next');
  }

  while (typeof (next) !== 'undefined' && typeof (next.nextElementSibling) !== 'undefined') {
    next.nextElementSibling.classList = '';
    next.nextElementSibling.classList.add('carousel__contents');
    next.nextElementSibling.classList.add('hide');
    next = next.nextElementSibling;
  }

  while (typeof (prev) !== 'undefined' && typeof (prev.previousElementSibling) !== 'undefined') {
    prev.previousElementSibling.classList = '';
    prev.previousElementSibling.classList.add('carousel__contents');
    prev.previousElementSibling.classList.add('hide');
    prev = prev.previousElementSibling;
  }
};

const initKeyEvent = function initKeyEvent() {
  document.addEventListener('keydown', (e) => {
    switch (e.which) {
      case 37:
        moveToSelected('prev');
        break;
      case 39:
        moveToSelected('next');
        break;
      default:
    }
    e.preventDefault();
  });
};

const initClickEvent = function initClickEvent() {
  document.querySelectorAll('.carousel__contents').forEach((content) => {
    content.addEventListener('click', () => moveToSelected(content));
  });
};

const initVideo = function initVideo() {
  const handleMouseEnter = function handleMouseEnter(videoElem) {
    videoElem.addEventListener('mouseenter', () => {
      const src = videoElem.getAttribute('src');
      if (!src.includes('autoplay')) {
        videoElem.setAttribute('src', `${src}&autoplay=1`);
      } else {
        videoElem.contentWindow
          .postMessage('{"event":"command","func":"playVideo","args":""}', '*');
      }
    });
  };

  const handleMouseLeave = function handleMouseLeave(videoElem) {
    videoElem.addEventListener('mouseleave', () => {
      videoElem.contentWindow
        .postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      window.focus();
    });
  };

  document.querySelectorAll('.video__player').forEach((videoElem) => {
    handleMouseEnter(videoElem);
    handleMouseLeave(videoElem);
  });
};

const initHeader = function initHeader() {
  const header = document.getElementById('header-js');
  const handler = function handler() {
    if (matchMedia('(max-width: 768px)').matches) {
      header.classList.replace('header--float', 'header--fixed');
    } else {
      header.classList.replace('header--fixed', 'header--float');
    }
  };
  window.addEventListener('resize', handler);
  handler();
};

window.onload = () => {
  initKeyEvent();
  initClickEvent();
  initVideo();
  initHeader();
};
