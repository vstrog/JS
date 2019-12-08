let counter = document.querySelector('.counter');
const ADD_COUNT = document.querySelector('#plusBtn');
const LOWER_COUNT = document.querySelector('#minusBtn');


let count = 0;

ADD_COUNT.addEventListener('click', incrementCounter);
LOWER_COUNT.addEventListener('click', decrementCounter);


function incrementCounter () {
    count++;
    counter.innerHTML = count;
    if(counter.innerHTML > '0') {
        counter.style.color = '#f5bc00'
    } else if(counter.innerHTML === '0') {
        counter.style.color = '#fff'
    }
    counter.animate([{opacity: '0.15'}, {opacity: '1.0'}], {duration: 300, fill: 'forwards'});
}

function decrementCounter () {
    count--;
    counter.innerHTML = count;
    if(counter.innerHTML < '0') {
        counter.style.color = '#f00'
    } else if(counter.innerHTML === '0') {
        counter.style.color = '#fff'
    }
    counter.animate([{opacity: '0.15'}, {opacity: '1.0'}], {duration: 500, fill: 'forwards'});
}