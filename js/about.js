const initializeScrollEffect = function initializeScrollEffect() {
  const changeBackgroundColor = (color) => {
    document.getElementsByTagName('body')[0].style.backgroundColor = color;
  };
  const changeLogoColor = (theme) => {
    document.getElementById('header__logo-js').src = theme === 'light' ? 'images/logo-red.png' : 'images/logo-white.png';
  };

  let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  let isScrollUp = false;
  window.addEventListener('scroll', () => {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    isScrollUp = st <= lastScrollTop;
    lastScrollTop = st <= 0 ? 0 : st;
  });

  const fadeInElemes = document.querySelectorAll('.hidden');
  const intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.className = entry.target.className.replace('hidden', 'fadeIn');
        changeBackgroundColor(entry.target.dataset.color);
        changeLogoColor(entry.target.dataset.theme);
      } else {
        entry.target.className = entry.target.className.replace('fadeIn', 'hidden');
        const targetIndex = fadeInElemes.indexOf(entry.target);
        if (targetIndex > 0 && isScrollUp) {
          changeBackgroundColor(fadeInElemes[targetIndex - 1].dataset.color);
          changeLogoColor(fadeInElemes[targetIndex - 1].dataset.theme);
        }
      }
    });
  });
  fadeInElemes.forEach(fadeInElem => intersectionObserver.observe(fadeInElem));
};

const initializeFullpageEffect = function initializeFullpageEffect() {
  // eslint-disable-next-line no-new
  new fullpage('#fullpage-js', {
    autoScrolling: true,
    responsiveWidth: 768,
  });
  // eslint-disable-next-line no-undef
  fullpage_api.setAllowScrolling(true);
};

window.onload = () => {
  initializeScrollEffect();
  initializeFullpageEffect();
};
