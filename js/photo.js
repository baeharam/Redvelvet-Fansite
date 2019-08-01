const initializeMasonry = () => {
    const elem = document.querySelector('.grid');
    new Masonry( elem, {
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        gutter: '.gutter-sizer',
    });
}

initializeMasonry();