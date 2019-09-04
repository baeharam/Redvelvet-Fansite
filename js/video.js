import './default';
import 'intersection-observer';
import '../css/video.css';

const initIframeLoading = function initIframeLoading() {
  const iframes = document.querySelectorAll('iframe');
  const videos = document.querySelectorAll('.video');
  iframes.forEach((iframe, index) => {
    iframe.addEventListener('load', () => {
      videos[index].classList.add('loaded');
    });
  });
};

const initLazyLoading = function initLazyLoading() {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.src = entry.target.dataset.src;
        observer.unobserve(entry.target);
      }
    });
  });
  const iframes = document.querySelectorAll('iframe');
  iframes.forEach((iframe) => io.observe(iframe));
};

window.addEventListener('DOMContentLoaded', () => {
  initIframeLoading();
  initLazyLoading();
});
