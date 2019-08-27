const initializeOverlay = function initializeOverlay() {
  const overlay = document.getElementById('js-overlay');
  const headerMenu = document.getElementById('js-header__menu');
  const overlayCloseBtn = document.getElementById('js-overlay__closeBtn');

  headerMenu.addEventListener('click', () => overlay.classList.add('open'));
  overlayCloseBtn.addEventListener('click', () => overlay.classList.remove('open'));
};

window.addEventListener('DOMContentLoaded', () => initializeOverlay());
