const initializeMembers = function initializeMembers() {
  const groupInside = document.getElementById('group__inside-js');
  const groupMembers = document.querySelectorAll('.group__member');
  const singles = document.querySelectorAll('.single');
  const closeBtn = document.getElementById('closeBtn-js');
  const header = document.getElementById('header-js');
  const HIDE_CLASS = 'hide';
  const SHOW_CLASS = 'show';

  const showcloseBtn = function showcloseBtn() {
    closeBtn.classList.remove(HIDE_CLASS);
    closeBtn.classList.add(SHOW_CLASS);
  };

  const hidecloseBtn = function hidecloseBtn() {
    closeBtn.classList.remove(SHOW_CLASS);
    closeBtn.classList.add(HIDE_CLASS);
  };

  const showExpandedMembers = function showExpandedMembers(index) {
    singles[index].classList.remove(HIDE_CLASS);
    singles[index].classList.add(SHOW_CLASS);
  };

  const hideExpandedMembers = function hideExpandedMembers() {
    document.querySelector('.show').classList.replace(SHOW_CLASS, HIDE_CLASS);
  };

  const hideHeader = function hideHeader() {
    header.classList.remove(SHOW_CLASS);
    header.classList.add(HIDE_CLASS);
  };

  const showHeader = function showHeader() {
    header.classList.remove(HIDE_CLASS);
    header.classList.add(SHOW_CLASS);
  };

  const scrollUp = function scrollUp() {
    document.documentElement.scrollTop = 0;
  };

  groupMembers.forEach((member, index) => {
    member.addEventListener('mouseenter', () => {
      groupMembers.forEach((innerMmber, innerIndex) => {
        if (innerIndex !== index) {
          innerMmber.classList.remove('group__member--active');
        } else {
          innerMmber.classList.add('group__member--active');
        }
      });
    });
    member.addEventListener('click', () => {
      groupMembers.forEach((innerMember) => {
        if (innerMember.classList.contains('group__member--shrink')) {
          innerMember.classList.remove('group__member--shrink');
        }
      });
      member.classList.add('group__member--expand');
      showExpandedMembers(index);
      showcloseBtn();
      hideHeader();
      scrollUp();
    });
  });

  groupInside.addEventListener('mouseleave', () => {
    groupMembers.forEach(member => member.classList.add('group__member--active'));
  });

  closeBtn.addEventListener('click', () => {
    hidecloseBtn();
    hideExpandedMembers();
    document.querySelector('.group__member--expand').classList
      .replace('group__member--expand', 'group__member--shrink');
    showHeader();
  });
};

const removeDefaultAnimations = function removeDefaultAnimations() {
  document.querySelectorAll('.group__member').forEach((member) => {
    member.addEventListener('animationend', () => { member.classList.add('no-animation'); });
  });
};

const isVisible = function isVisible(elem) {
  const elemTop = elem.getBoundingClientRect().top;
  const docHeight = document.documentElement.clientHeight;
  return elemTop && elemTop <= docHeight;
};

const initPhotos = function initPhotos() {
  const placeholders = document.querySelectorAll('.placeholder');
  window.addEventListener('scroll', () => {
    placeholders.forEach((placeholder) => {
      if (!placeholder.classList.contains('loaded') && isVisible(placeholder)) {
        const image = new Image();
        image.onload = () => {
          placeholder.removeChild(placeholder.firstElementChild);
          placeholder.classList.add('intersect');
          placeholder.append(image);
        };
        image.src = placeholder.dataset.src;
        image.alt = placeholder.dataset.alt;
        placeholder.classList.add('loaded');
      }
    });
  });
};

const initMediaQuery = function initMediaQuery() {
  const handler = () => {
    if (matchMedia('(max-width: 768px)').matches) {
      document.getElementById('header__menu-js').classList.replace('light', 'dark');
      document.querySelector('.footer').classList.replace('footer--float', 'footer--fixed');
      document.querySelector('.footer').classList.replace('footer--light', 'footer--dark');
    } else {
      document.getElementById('header__menu-js').classList.replace('dark', 'light');
      document.querySelector('.footer').classList.replace('footer--fixed', 'footer--float');
      document.querySelector('.footer').classList.replace('footer--dark', 'footer--light');
    }
  };
  window.addEventListener('resize', handler);
  handler();
};

window.onload = () => {
  initializeMembers();
  removeDefaultAnimations();
  initPhotos();
  initMediaQuery();
};
