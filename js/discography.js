/*
Referenced URL: https://codepen.io/knyttneve/pen/bgvmma/
I changed jQuery source code into Vanilla JS and removed useless logics.
*/

const initPlayer = function initPlayer() {
  let player;

  return function innerInitPlayer(youtubeID) {
    if (typeof (player) !== 'undefined' && typeof (player.loadVideoById) !== 'undefined') {
      player.loadVideoById(youtubeID);
      return;
    }
    const loadPlayer = function loadPlayer() {
      player = new YT.Player('js-timeline__player', {
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
  const timeline = document.getElementById('js-timeline');
  const timelineItems = document.querySelectorAll('.timeline__item');
  const activeClass = 'timeline__item--active';
  const extraSpace = 80;

  const changeBackground = function changeBackground(src) {
    timeline.style.backgroundImage = `url(${src})`;
  };

  const removeAllActiveElems = function removeAllActiveElems() {
    document.querySelectorAll(`.${activeClass}`).forEach(el => el.classList.remove(activeClass));
  };

  timelineItems[0].classList.add(activeClass);
  changeBackground(timelineItems[0].dataset.src);
  playMusicByYoutube(timelineItems[0].dataset.id);

  window.addEventListener('scroll', () => {
    const pos = window.scrollY;
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
  timelineImgs.forEach((timelineImg) => {
    const image = new Image();
    image.onload = () => {
      if (image.complete) loadedCount += 1;
      if (loadedCount === timelineImgs.length) {
        document.getElementById('js-loader').classList.add('hide');
        document.getElementById('js-main').classList.add('show');
        document.getElementById('js-header').classList.add('show');
        document.getElementById('js-footer').classList.add('show');
      }
    };
    image.src = timelineImg.getAttribute('src');
  });
};

window.onload = () => {
  initScrollEvent();
  initLoader();
};
