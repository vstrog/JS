  let canvas, canvasContext;

let ballX = 75;
let ballY = 75;
let ballSpeedX = 5;
let ballSpeedY = 7;

const BRICK_W = 100;
const BRICK_H = 50;
const BRICK_COUNT = 4;

const PADDLE_WIDTH = 100;
const PADDLE_THIKNESS = 10;
const PADDLE_DIST_FROM_EDGE = 60;

let paddleX = 400;

let mouseX;
let mouseY;

function updateMousePos(e) {
    let rect = canvas.getBoundingClientRect();
    let root = document.documentElement;

    mouseX = e.clientX - rect.left - root.scrollLeft;
    mouseY = e.clientY - rect.top - root.scrollTop;
    paddleX = mouseX - PADDLE_WIDTH/2;
}

window.onload = function() {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    let framesPerSecond = 30;
    setInterval(updateAll, 1000/framesPerSecond);
    canvas.addEventListener('mousemove', updateMousePos);
}

function updateAll() {
    moveAll();
    drawAll();
}

function moveAll() {
    ballX += ballSpeedX;
    ballY += ballSpeedY;
    if(ballX < 0) {
        ballSpeedX *= -1;
    }
    if(ballX > canvas.width) {
        ballSpeedX *= -1;
    }
    if(ballY < 0) {
        ballSpeedY *= -1;
    }
    if(ballY > canvas.height) {
        ballReset();
        //ballSpeedY *= -1;
    }

    let paddleTopEdgeY = canvas.height - PADDLE_DIST_FROM_EDGE;
    let paddleBottomEdgeY = paddleTopEdgeY + PADDLE_THIKNESS;
    let paddleLeftEdgeX = paddleX;
    let paddleRightEdgeX = paddleLeftEdgeX + PADDLE_WIDTH;

    if (ballY > paddleTopEdgeY &&
        ballY < paddleBottomEdgeY && 
        ballX >paddleLeftEdgeX && 
        ballX < paddleRightEdgeX) {
            ballSpeedY *= -1;

            let centerOfPaddleX = paddleX + PADDLE_WIDTH/2;
            let ballDistFromPaddleCenterX = ballX - centerOfPaddleX;
            ballSpeedX = ballDistFromPaddleCenterX  * 0.35;
        }
}

function ballReset() {
    ballX = canvas.width/2;
    ballY = canvas.height/2;
}

function drawBricks() {
    colorRect(0, 0, BRICK_W, BRICK_H, '#00f');
}

function drawAll() {
    colorRect(0, 0, canvas.width, canvas.height, '#000');
    colorCircle(ballX, ballY, 10, '#fff');
    colorRect(paddleX, canvas.height - PADDLE_DIST_FROM_EDGE, PADDLE_WIDTH, PADDLE_THIKNESS, '#fff');

    drawBricks();

    colorText(mouseX + "," + mouseY, mouseX, mouseY, '#f00');
}

function colorRect(topLeftX, topLeftY, boxWidth, boxHeight, fillColor) {
    canvasContext.fillStyle = fillColor;
    canvasContext.fillRect(topLeftX, topLeftY, boxWidth, boxHeight);

}

function colorCircle(centerX, centerY, radius, fillColor) {
    canvasContext.fillStyle = fillColor;
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, radius, 0, Math.PI*2, true);
    canvasContext.fill(); 
}


function colorText(showWords, textX, textY, fillColor) {
    canvasContext.fillStyle = fillColor;
    canvasContext.fillText(showWords, textX, textY);
}
