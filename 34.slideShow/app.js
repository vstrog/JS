const NEXT_BTN = document.querySelector('.nextBtn');
const PREV_BTN = document.querySelector('.prevBtn');

const CONTAINER = document.querySelector('.images');

let counter = 0;
NEXT_BTN.addEventListener('click', nextSlide);
PREV_BTN.addEventListener('click', prevSlide);

function nextSlide() {
        CONTAINER.animate([{opacity: '0.1'}, {opacity: '1'}], {duration: 600, fill: 'forwards'})
    if(counter === 5 ) {
        counter = -1;
    }
    counter++;

    CONTAINER.style.backgroundImage = `url(img/${counter}.jpg)`;
}

function prevSlide() {
    CONTAINER.animate([{opacity: '0.1'}, {opacity: '1'}], {duration: 600, fill: 'forwards'})
    if(counter === 0 ) {
        counter = 5;
    }
    counter--;

    CONTAINER.style.backgroundImage = `url(img/${counter}.jpg)`;
}
