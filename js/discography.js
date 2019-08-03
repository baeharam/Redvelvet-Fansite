/*
Author(using jQuery): Mert Cukuren
URL: https://codepen.io/knyttneve/pen/bgvmma/
I changed jQuery source code into pure javascript
*/

const initializeTimeline = function() {
    const timeline = document.getElementById('timeline-js');
    const selectors = {
        id: timeline,
        items: document.querySelectorAll('.timeline__item'),
        activeClass: 'timeline__item--active',
        imgs: document.querySelectorAll('.timeline__img')
    };
    selectors.removeAllActive = function() {
        selectors.items.forEach((item) => 
            item.classList.remove(selectors.activeClass));
    }
    selectors.items[0].classList.add(selectors.activeClass);
    selectors.id.style.backgroundImage = `url(${selectors.imgs[0].src})`;
    let itemLength = selectors.items.length;
    window.addEventListener('scroll', function(){
        let max,min;
        let pos = document.documentElement.scrollTop;
        selectors.items.forEach(function(item,index){
            min = item.offsetTop;
            max = item.offsetTop + item.offsetHeight;
            if(index === itemLength-2 && pos > min + item.offsetHeight/2){
                selectors.removeAllActive();
                selectors.id.style.backgroundImage = `url(${selectors.imgs[itemLength-1].src})`;
                selectors.items[itemLength-1].classList.add(selectors.activeClass);
            } else if(pos <= max-40 && pos >= min){
                let src = document.querySelector('.timeline__item--active .timeline__img').src;
                selectors.id.style.backgroundImage = `url(${src})`;
                selectors.removeAllActive();
                item.classList.add(selectors.activeClass);
            }
        });
    });
}
initializeTimeline();