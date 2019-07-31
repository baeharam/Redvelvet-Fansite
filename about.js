const initializeScrollEffect = function() {
  const intersectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.intersectionRatio > 0) {
        entry.target.className = entry.target.className.replace('hidden','fadeIn');
        document.getElementsByTagName('body')[0].style.backgroundColor
        = entry.target.dataset.color;
        document.getElementById('header__logo-js').src 
        = entry.target.dataset.theme === 'light' ? 'images/logo.png' : 'images/logo-white.png';
      } else {
        entry.target.className = entry.target.className.replace('fadeIn','hidden');
      }
    });
  });
  const fadeInElemes = document.querySelectorAll('.hidden');
  fadeInElemes.forEach((fadeInElem) => intersectionObserver.observe(fadeInElem));
}

const initializeFullpageEffect = function() {
  new fullpage('#fullpage', {
    autoScrolling: true,
    onLeave: function(origin, destination, direction){
      if(origin.index >= 0 && direction === 'down') {
        document.getElementById('header-js').classList.add('sticky');
      } else if(destination.index === 0 && direction === 'up') {
        document.getElementById('header-js').classList.remove('sticky');
      }
    }
  });
  fullpage_api.setAllowScrolling(true);
}

window.onload = () => {
  initializeScrollEffect();
  initializeFullpageEffect();
}