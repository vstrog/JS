let canvas;
let canvasContext;
let ballX = 50;
let ballY = 50;
let ballSpeedX = 10; 
let ballSpeedY = 4;

let leftPaddle = 250;
let rightPaddle = 250;

const PADDLE_HEIGHT = 100;
const PADDLE_THIKNESS = 10;

let player1Score = 0;
let player2Score = 0;

const WINNING_SCORE = 3;

let showWin = false;

//calculating mouse position
function calcMousePos(e) {
    let rect = canvas.getBoundingClientRect();
    let root = document.documentElement;
    let mouseX = e.clientX - rect.left - root.scrollLeft;
    let mouseY = e.clientY - rect.top - root.scrollTop;
    return {
        x:mouseX,
        y:mouseY
    };
}

function handleMouseClick(e) {
    if(showWin) {
        player1Score = 0;
        player2Score = 0;
        showWin = false;
    }
}

window.onload = function() {
    
    canvas = document.getElementById('canvas');
    canvasContext = canvas.getContext('2d');

    let framesPerSecond = 30;
    setInterval(() => {
        move();
        draw();
    }, 1000/framesPerSecond);

    canvas.addEventListener('mousedown', handleMouseClick);

    canvas.addEventListener('mousemove', 
        function(e) {
            let mousePos = calcMousePos(e);
            leftPaddle = mousePos.y-(PADDLE_HEIGHT/2);
        });
}

function ballReset() {
    if(player1Score >= WINNING_SCORE || player2Score >= WINNING_SCORE) {
        showWin = true;
    }
    ballSpeedX = -ballSpeedX;
    ballX = canvas.width/2;
    ballY = canvas.height/2;
}

function compMove() {
    let rightPaddleCenter = rightPaddle + (PADDLE_HEIGHT/2);
    if(rightPaddleCenter < ballY - 35) {
        rightPaddle += 6;
    } else  if(rightPaddleCenter > ballY + 35) {
        rightPaddle -= 6;
    }
}



function move() {
    if(showWin) {
        return;
    }
    compMove();
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    if(ballX > canvas.width) {
        if(
            ballY > rightPaddle &&  ballY < rightPaddle + PADDLE_HEIGHT
        ) {
            ballSpeedX = -ballSpeedX;
            let deltaY = ballY - (rightPaddle + PADDLE_HEIGHT/2);
            ballSpeedY = deltaY * 0.35;
        } else {
            player1Score += 1;
            ballReset();
        }
    }
    if(ballX < 0) {
        if(
            ballY > leftPaddle &&  ballY < leftPaddle + PADDLE_HEIGHT
        ) {
            ballSpeedX = -ballSpeedX;
            let deltaY = ballY - (leftPaddle + PADDLE_HEIGHT/2);
            ballSpeedY = deltaY * 0.35;
        } else {
            player2Score += 1;
            ballReset();
        }
    }
    if(ballY > canvas.height) {
        ballSpeedY = -ballSpeedY;
    }
    if(ballY < 0) {
        ballSpeedY = -ballSpeedY;
    }
}

function drawNet() {
    for (let i = 0; i < canvas.height; i+=40) {
        colorRectangle(canvas.width/2-1, i, 2, 20, '#fff');
        
    }
}

function draw() {
    // the canvas
    colorRectangle(0,0,canvas.width,canvas.height, '#000');

    if(showWin) {            
        canvasContext.fillStyle = '#fff';
        if(player1Score >= WINNING_SCORE){
            canvasContext.fillText("Left player WON!", 350, 200);
        } else if(player2Score >= WINNING_SCORE) {
            canvasContext.fillText("Right player WON!", 350, 200);
        }
        canvasContext.fillText("click to continue", 350, 500);
        return;
    }

    drawNet();

    // left player
    colorRectangle(0, leftPaddle, PADDLE_THIKNESS, PADDLE_HEIGHT, '#fff');
    // right player
    colorRectangle(canvas.width-PADDLE_THIKNESS, rightPaddle, PADDLE_THIKNESS, PADDLE_HEIGHT, '#fff');

    // a ball
    drawBall(ballX, ballY, 10, '#fff');

    canvasContext.fillText(player1Score, 100, 100);
    canvasContext.fillText(player2Score, canvas.width - 100, 100);

}

function drawBall(centerX, centerY, radius, drawColor) {
    canvasContext.fillStyle = drawColor;
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, radius, 10, 0, Math.PI*2, true);
    canvasContext.fill();
}

function colorRectangle(leftY, topY, width, height, drawColor) {
    canvasContext.fillStyle = drawColor;
    canvasContext.fillRect(leftY, topY, width, height);
}























