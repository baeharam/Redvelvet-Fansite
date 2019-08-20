const initLoader = function initLoader() {
  let loadedCount = 0;
  const bgImgs = document.querySelectorAll('.bg__img');
  bgImgs.forEach((img) => {
    const image = new Image();
    image.onload = () => {
      if (image.complete) {
        loadedCount += 1;
      }
      if (loadedCount === bgImgs.length) {
        document.querySelector('.loader').classList.add('hide');
        document.querySelector('.main').classList.add('show');
        document.querySelector('.header').classList.add('show');
        document.querySelector('.footer').classList.add('show');
      }
    };
    image.src = img.dataset.src;
  });
};

window.onload = () => initLoader();
