/*
Author(using jQuery): Mert Cukuren
URL: https://codepen.io/knyttneve/pen/bgvmma/
I changed jQuery source code into pure javascript
*/

const initializePlayer = function initializePlayer() {
  let player;

  return function closureForPlayer(youtubeID) {
    if (player) {
      player.loadVideoById(youtubeID);
      return;
    }
    const loadPlayer = function loadPlayer() {
      // eslint-disable-next-line no-undef
      player = new YT.Player('timeline__player-js', {
        videoId: youtubeID,
        loop: true,
        events: { onReady: e => e.target.playVideo() },
      });
    };

    // eslint-disable-next-line no-undef
    if (typeof (YT) === 'undefined' || typeof (YT.Player) === 'undefined') {
      window.onYouTubePlayerAPIReady = () => loadPlayer();
    } else {
      loadPlayer();
    }
  };
};

const initializeTimeline = function initializeTimeline() {
  const timeline = document.getElementById('timeline-js');
  const selectors = {
    id: timeline,
    items: document.querySelectorAll('.timeline__item'),
    imgs: document.querySelectorAll('.timeline__img'),
    activeClass: 'timeline__item--active',
  };
  selectors.removeAllActive = function removeAllActive() {
    selectors.items.forEach(item => item.classList.remove(selectors.activeClass));
  };
  selectors.items[0].classList.add(selectors.activeClass);
  selectors.id.style.backgroundImage = `url(${selectors.imgs[0].src})`;
  const playMusicByYoutube = initializePlayer();

  const itemLength = selectors.items.length;
  window.addEventListener('scroll', () => {
    let max;
    let min;
    const pos = document.documentElement.scrollTop;
    selectors.items.forEach((item, index) => {
      min = item.offsetTop;
      max = item.offsetTop + item.offsetHeight;
      console.log(min,max);
      if (index === itemLength - 2 && pos > min + item.offsetHeight / 2) {
        selectors.removeAllActive();
        selectors.id.style.backgroundImage = `url(${selectors.imgs[itemLength - 1].src})`;
        selectors.items[itemLength - 1].classList.add(selectors.activeClass);
        playMusicByYoutube(selectors.items[itemLength - 1].dataset.id);
      } else if (pos <= max - 40 && pos >= min) {
        const activeImg = document.querySelector('.timeline__item--active .timeline__img');
        selectors.id.style.backgroundImage = `url(${activeImg.src})`;
        selectors.removeAllActive();
        item.classList.add(selectors.activeClass);
        playMusicByYoutube(item.dataset.id);
      }
    });
  });
};

initializeTimeline();
