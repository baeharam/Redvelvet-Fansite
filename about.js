let fadeInForScroll = function() {
  let elements,windowHeight;
  let init = function() {
    elements = document.querySelectorAll('.hidden');
    windowHeight = window.innerHeight;
    addEventHandlers();
    checkPosition();
  }
  let addEventHandlers = function() {
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  }
  let showElement = (target) => target.className = target.className.replace('hidden','fade-in');
  let hideElement = (target) => target.className = target.className.replace('fade-in','hidden');

  let checkPosition = function() {
    for (let i = 0; i < elements.length; i++) {
      let positionInfo = elements[i].getBoundingClientRect();
      let positionFromTop = positionInfo.top;
      let elementHeight = positionInfo.height;

      if (positionFromTop - windowHeight <= 0) { 
        showElement(elements[i]); 
      }
      else if ((positionFromTop - windowHeight > 1) || (positionFromTop + elementHeight < 0)) {
        hideElement(elements[i]);
      }
    }
  }
  return { init: init };
};

let initializeMenu = function() {
  let main = document.querySelector('main');
  let header = document.querySelector('header');
  main.style.paddingTop = header.offsetHeight + 'px';
}

window.onload = () => {
  fadeInForScroll().init();
  initializeMenu();
}

window.onresize = () => {
  initializeMenu();
}