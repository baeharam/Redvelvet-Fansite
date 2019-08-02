const CLASS = {
    GRID: '.grid',
    GRID_ITEM: '.grid-item',
    GRID_SIZER: '.grid-sizer',
    GUTTER_SIZER: '.gutter-sizer',
    LOADED: 'loaded',
    ACTIVE: 'active',
    PLACEHOLDER: '.placeholder',
    IMG_SMALL: '.img-small'
};

const EVENT = {
    DOMCONTENT_LOADED: 'DOMContentLoaded',
    LOAD: 'load',
    SCROLL: 'scroll',
    RESIZE: 'resize',
    MOUSEENTER: 'mouseenter'
};


const initializeMasonry = () => {
    const elem = document.querySelector(CLASS.GRID);
    new Masonry( elem, {
        itemSelector: CLASS.GRID_ITEM,
        columnWidth: CLASS.GRID_SIZER,
        gutter: CLASS.GUTTER_SIZER,
    });
};

const isElementInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

const onVisibilityChange = (element, callback) => {
    return function () {
        const visible = isElementInViewport(element);
        if(visible && typeof callback === 'function') {
            callback();
        }
    }
};

const initializePlaceholders = () => {
    const placeholders = document.querySelectorAll(CLASS.PLACEHOLDER);
    const smallImages = document.querySelectorAll(CLASS.IMG_SMALL);

    [].forEach.call(smallImages, (smallImage) => {
        const img = new Image();
        img.src = smallImage.src;
        img.onload = () => smallImage.classList.add(CLASS.LOADED);
    });

    [].forEach.call(placeholders, (placeholder) => {
        const largeImage = new Image();
        largeImage.dataset.src = placeholder.dataset.large;
        largeImage.onload = () => {
            largeImage.classList.add(CLASS.LOADED);
            largeImage.addEventListener(EVENT.MOUSEENTER,() => {
                const activeImage = document.getElementsByClassName(CLASS.ACTIVE)[0];
                if(activeImage !== largeImage){
                    largeImage.classList.add(CLASS.ACTIVE);
                    activeImage.classList.remove(CLASS.ACTIVE);
                }
            });
        }
        const handler = onVisibilityChange(largeImage, () => {
            if(largeImage.src === ""){
                largeImage.src = largeImage.dataset.src;
            }
        });
        window.addEventListener(EVENT.LOAD, handler);
        window.addEventListener(EVENT.RESIZE, handler);
        window.addEventListener(EVENT.SCROLL, handler);
        placeholder.appendChild(largeImage);
    });
}

initializeMasonry();
initializePlaceholders();