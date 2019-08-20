/*
Author(using jQuery): Mert Cukuren
URL: https://codepen.io/knyttneve/pen/bgvmma/
I changed jQuery source code into pure javascript and modified useless logics
*/

const initPlayer = function initPlayer() {
  let player;

  return function innerInitPlayer(youtubeID) {
    if (typeof (player) !== 'undefined' && typeof (player.loadVideoById) !== 'undefined') {
      player.loadVideoById(youtubeID);
      return;
    }
    const loadPlayer = function loadPlayer() {
      player = new YT.Player('timeline__player-js', {
        videoId: youtubeID,
        loop: true,
        events: { onReady: e => e.target.playVideo() },
      });
    };

    if (typeof (YT) === 'undefined' || typeof (YT.Player) === 'undefined') {
      window.onYouTubePlayerAPIReady = () => loadPlayer();
    } else {
      loadPlayer();
    }
  };
};

const initScrollEvent = function initScrollEvent() {
  const playMusicByYoutube = initPlayer();
  const timeline = document.getElementById('timeline-js');
  const timelineItems = document.querySelectorAll('.timeline__item');
  const activeClass = 'timeline__item--active';
  const extraSpace = 80;

  const changeBackground = function changeBackground(src) {
    timeline.style.backgroundImage = `url(${src})`;
  };

  const removeAllActiveElems = function removeAllActiveElems() {
    document.querySelectorAll('.timeline__item--active')
      .forEach(el => el.classList.remove('timeline__item--active'));
  };

  timelineItems[0].classList.add(activeClass);
  changeBackground(timelineItems[0].dataset.src);
  playMusicByYoutube(timelineItems[0].dataset.id);

  window.addEventListener('scroll', () => {
    const pos = document.body.scrollTop || document.documentElement.scrollTop;
    timelineItems.forEach((item) => {
      const minPos = item.offsetTop;
      const maxPos = minPos + item.offsetHeight;
      if (pos + extraSpace >= minPos && pos <= maxPos) {
        removeAllActiveElems();
        item.classList.add(activeClass);
        changeBackground(item.dataset.src);
        playMusicByYoutube(item.dataset.id);
      }
    });
  });
};

const initLoader = function initLoader() {
  let loadedCount = 0;
  const timelineImgs = document.querySelectorAll('.timeline__img');
  timelineImgs.forEach((img) => {
    const image = new Image();
    image.onload = () => {
      if (image.complete) loadedCount += 1;
      if (loadedCount === timelineImgs.length) {
        document.querySelector('.loader').classList.add('hide');
        document.querySelector('.main').classList.add('show');
        document.querySelector('.header').classList.add('show');
        document.querySelector('.footer').classList.add('show');
      }
    };
    image.src = img.getAttribute('src');
  });
};

window.onload = () => {
  initScrollEvent();
  initLoader();
};
