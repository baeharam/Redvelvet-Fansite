const initializeScrollEffect = function() {
  const intersectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.intersectionRatio > 0) {
        entry.target.className = entry.target.className.replace('hidden','fadeIn');
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
  });
  fullpage_api.setAllowScrolling(false);
}

window.onload = () => {
  initializeScrollEffect();
  initializeFullpageEffect();
}