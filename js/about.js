const initVisibleHandler = function initVisibleHandler() {
  return {
    show: function showElement(elem) {
      if (elem.classList.contains('hide')) {
        elem.classList.replace('hide', 'show');
      } else {
        elem.classList.add('show');
      }
    },
    hide: function hidelement(elem) {
      if (elem.classList.contains('show')) {
        elem.classList.replace('show', 'hide');
      } else {
        elem.classList.add('hide');
      }
    },
  };
};

const initExpandHandler = function initExpandHandler() {
  const singleElems = document.querySelectorAll('.single');
  return {
    show: function showExpandedMembers(index) {
      if (singleElems[index].classList.contains('hide')) {
        singleElems[index].classList.replace('hide', 'show');
      } else {
        singleElems[index].classList.add('show');
      }
    },
    hide: function hideExpandedMembers() {
      const showing = [].filter.call(singleElems, single => single.classList.contains('show'))[0];
      showing.classList.replace('show', 'hide');
    },
  };
};

const scrollUp = function scrollUp() {
  document.documentElement.scrollTop = 0;
};

const initMemberHandler = function initMemberHandler() {
  const groupInside = document.getElementById('group__inside-js');
  const groupMembers = document.querySelectorAll('.group__member');
  const closeBtn = document.getElementById('closeBtn-js');
  const header = document.getElementById('header-js');
  const footer = document.getElementById('footer-js');

  const visibleHandler = initVisibleHandler();
  const expandHandler = initExpandHandler();

  return {
    handleMouseEnter: function mouseEnter() {
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
      });
    },
    handleMouseLeave: function mouseLeave() {
      groupInside.addEventListener('mouseleave', () => {
        groupMembers.forEach(member => member.classList.add('group__member--active'));
      });
    },
    handleExpand: function expand() {
      groupMembers.forEach((member, index) => {
        member.addEventListener('click', () => {
          groupMembers.forEach((innerMember) => {
            if (innerMember.classList.contains('group__member--shrink')) {
              innerMember.classList.remove('group__member--shrink');
            }
          });
          member.classList.add('group__member--expand');
          expandHandler.show(index);
          visibleHandler.show(closeBtn);
          visibleHandler.hide(header);
          visibleHandler.hide(footer);
          scrollUp();
        });
      });
    },
    handleShrink: function shrink() {
      document.getElementById('closeBtn-js').addEventListener('click', () => {
        visibleHandler.hide(closeBtn);
        visibleHandler.show(header);
        visibleHandler.show(footer);
        expandHandler.hide();
        document.querySelector('.group__member--expand').classList
          .replace('group__member--expand', 'group__member--shrink');
      });
    },
  };
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
  const header = document.getElementById('header-js');
  const headerMenu = document.getElementById('header__menu-js');
  const footer = document.getElementById('footer-js');

  const controlMediaQuery = () => {
    if (matchMedia('(max-width: 768px)').matches) {
      header.classList.replace('header--float', 'header--fixed');
      headerMenu.classList.replace('light', 'dark');
      footer.classList.replace('footer--float', 'footer--fixed');
      footer.classList.replace('footer--light', 'footer--dark');
    } else {
      header.classList.replace('header--fixed', 'header--float');
      headerMenu.classList.replace('dark', 'light');
      footer.classList.replace('footer--fixed', 'footer--float');
      footer.classList.replace('footer--dark', 'footer--light');
    }
  };
  window.addEventListener('resize', controlMediaQuery);
  controlMediaQuery();
};

const initLoader = function initLoader() {
  let loadedCount = 0;
  const groupMembers = document.querySelectorAll('.group__member');
  groupMembers.forEach((member) => {
    const image = new Image();
    image.onload = () => {
      if (image.complete) loadedCount += 1;
      if (loadedCount === groupMembers.length) {
        document.querySelector('.loader').classList.add('hide');
        document.querySelector('.main').classList.add('show');
        document.querySelector('.header').classList.add('show');
        document.querySelector('.footer').classList.add('show');
      }
    };
    image.src = member.dataset.src;
  });
};

window.onload = () => {
  const memberHandler = initMemberHandler();
  memberHandler.handleMouseEnter();
  memberHandler.handleMouseLeave();
  memberHandler.handleExpand();
  memberHandler.handleShrink();
  removeDefaultAnimations();
  initPhotos();
  initMediaQuery();
  initLoader();
};
