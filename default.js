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
    menu.addEventListener('click',() => {
        overlayElement.style.height = '100%';
        document.getElementById('header-js').style.display = 'none';
    });

    const closeBtn = document.getElementById('overlay__closeBtn-js');
    closeBtn.addEventListener('click',() => overlayElement.style.height = '0');

    const about = document.getElementById('overlay__about-js');
    about.addEventListener('mouseenter', () => overlayElement.style.backgroundImage
    = `url(${overlayCoverImages[SECTION.ABOUT]})`);

    const photo = document.getElementById('overlay__photo-js');
    photo.addEventListener('mouseenter', () => overlayElement.style.backgroundImage
    = `url(${overlayCoverImages[SECTION.PHOTO]})`);

    const discography = document.getElementById('overlay__discography-js');
    discography.addEventListener('mouseenter', () => overlayElement.style.backgroundImage
    = `url(${overlayCoverImages[SECTION.DISCOGRAPHY]})`);

    const video = document.getElementById('overlay__video-js');
    video.addEventListener('mouseenter', () => overlayElement.style.backgroundImage
    = `url(${overlayCoverImages[SECTION.VIDEO]})`);

    about.addEventListener('mouseleave',() => overlayElement.style.backgroundImage
    = `url(${overlayCoverImages[SECTION.MAIN]})`);
    photo.addEventListener('mouseleave',() => overlayElement.style.backgroundImage
    = `url(${overlayCoverImages[SECTION.MAIN]})`);
    discography.addEventListener('mouseleave',() => overlayElement.style.backgroundImage
    = `url(${overlayCoverImages[SECTION.MAIN]})`);
    video.addEventListener('mouseleave',() => overlayElement.style.backgroundImage
    = `url(${overlayCoverImages[SECTION.MAIN]})`);
}

initializeOverlay();