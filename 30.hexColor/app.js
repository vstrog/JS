const HEX_NUMBERS = [0,1,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const HEX_BTN = document.querySelector('.hexBtn');
const BODY_BG = document.querySelector('body');
const HEX = document.querySelector('.hex');

HEX_BTN.addEventListener('click', getHex);

function getHex() {
    let hexColor = '#';
    for(let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random()*HEX_NUMBERS.length);
        hexColor += HEX_NUMBERS[random];
    }
    
    BODY_BG.style.backgroundColor = hexColor;
    HEX.innerHTML = hexColor;
}