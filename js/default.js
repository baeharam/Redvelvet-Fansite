const initializeOverlay = function initializeOverlay() {
  const overlay = document.getElementById('js-overlay');
  const headerMenu = document.getElementById('js-header__menu');
  const overlayCloseBtn = document.getElementById('js-overlay__closeBtn');

  headerMenu.addEventListener('click', () => overlay.classList.add('open'));
  overlayCloseBtn.addEventListener('click', () => overlay.classList.remove('open'));
};

const initMobileVideo = function initMobileVideo() {
  const normalVideoPage = 'https://hisfedev2.github.io/html/video.html';
  const mobileVideoPage = 'https://hisfedev2.github.io/html/video-mobile.html';
  detectmobile.redirectCallback = (mode, url) => {
    if (mode === 'mobile' && url === normalVideoPage) {
      return mobileVideoPage;
    }
    return url;
  };
};

window.addEventListener('DOMContentLoaded', () => {
  initializeOverlay();
  initMobileVideo();
});
