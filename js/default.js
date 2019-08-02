const SECTION = {
    MAIN: 0,
    ABOUT: 1,
    PHOTO: 2,
    DISCOGRAPHY: 3,
    VIDEO: 4
};

const overlayCoverImages = [
    'images/irene.jpg',
    'images/seulgi.jpg',
    'images/wendy.jpg',
    'images/yeri.jpg',
    'images/joy.jpg'
];
const overlayElement = document.getElementById('overlay-js');

const initializeOverlay = function() {
    const menu = document.getElementById('header__menu-js');
    const closeBtn = document.getElementById('overlay__closeBtn-js');
    menu.addEventListener('click', () => overlayElement.classList.add('open'));
    closeBtn.addEventListener('click', () => overlayElement.classList.remove('open'));
}

initializeOverlay();