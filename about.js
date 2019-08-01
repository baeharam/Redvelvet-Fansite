const initializeScrollEffect = function() {

  const changeBackgroundColor = (color) => {
    document.getElementsByTagName('body')[0].style.backgroundColor = color;
  }
  const changeLogoColor = (theme) => {
    document.getElementById('header__logo-js').src = 
      theme === 'light' ? 'images/logo.png' : 'images/logo-light.png';
  }

  let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  let isScrollUp = false;
  window.addEventListener('scroll', function(){
    let st = window.pageYOffset || document.documentElement.scrollTop;
    isScrollUp = st <= lastScrollTop;
    lastScrollTop = st <= 0 ? 0 : st;
  });

  const fadeInElemes = document.querySelectorAll('.hidden');
  const intersectionObserver = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
      if(entry.isIntersecting) {
        entry.target.className = entry.target.className.replace('hidden','fadeIn');
        changeBackgroundColor(entry.target.dataset.color);
        changeLogoColor(entry.target.dataset.theme);
      } else {
        entry.target.className = entry.target.className.replace('fadeIn','hidden');
        const targetIndex = Array.prototype.indexOf.call(fadeInElemes,entry.target);
        if(targetIndex > 0 && isScrollUp) {
          changeBackgroundColor(fadeInElemes[targetIndex-1].dataset.color);
          changeLogoColor(fadeInElemes[targetIndex-1].dataset.theme);
        }
      }
    });
  });
  fadeInElemes.forEach((fadeInElem) => intersectionObserver.observe(fadeInElem));
}

const initializeFullpageEffect = function() {
  new fullpage('#fullpage-js', {
    autoScrolling: true,
    responsiveWidth: 768,
  });
  fullpage_api.setAllowScrolling(true);
}

window.onload = () => {
  initializeScrollEffect();
  initializeFullpageEffect();
}