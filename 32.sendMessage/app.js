const SEND_BTN = document.querySelector('#sendBtn');
const MESSAGE_IN = document.querySelector('#messageIn');
const MESSAGE_OUT = document.querySelector('#messageOut');

SEND_BTN.addEventListener('click', sendMsg);


function sendMsg() {
    let content = MESSAGE_IN.value;
    if(content === '') {
        alert('Please Enter Any Message')
    }
    else {
        MESSAGE_OUT.innerHTML = content;
        MESSAGE_IN.value = '';
    }
}