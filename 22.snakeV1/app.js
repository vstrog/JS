window.onload = () => {
    canvas = document.getElementById("gameCanvas");
    canvasContext = canvas.getContext("2d");
    document.addEventListener("keydown", keyPush);
    let framesPerSecond = 30;
    setInterval(game, 1000/framesPerSecond);
}

let moveX = 0;
let moveY = 0;
let playerX = 10;
let playerY = 10;
let gridSize = 20
let tileCount = 20
let appleX = 15;
let appleY = 15;
let trail = [];
let tail = 5;

function game() {
    playerX += moveX;
    playerY += moveY;
    if(playerX < 0) {
        playerX = tileCount-1;
    }
    if(playerX > tileCount-1) {
        playerX = 0;
    }
    if(playerY < 0) {
        playerY = tileCount-1;
    }
    if(playerY > tileCount-1){
        playerY = 0;
    }

    canvasContext.fillStyle = "#000";
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);

    canvasContext.fillStyle = "#bfff00";
    for(let i = 0; i < trail.length; i++)
    {
    canvasContext.fillRect(trail[i].x*gridSize, trail[i].y*gridSize, gridSize - 2, gridSize - 2);
    if(trail[i].x == playerX && trail[i].y == playerY) {
        tail = 5;
        }
    }

    trail.push({
        x: playerX,
        y: playerY
    });
    while(trail.length > tail) {
        trail.shift();
    }

    if(appleX == playerX && appleY == playerY) {
        tail++;
        appleX = Math.floor(Math.random() * tileCount);
        appleY = Math.floor(Math.random() * tileCount);
    }

    canvasContext.fillStyle = "#f00";
    canvasContext.fillRect(appleX*gridSize, appleY*gridSize, gridSize - 2, gridSize - 2);
}

function keyPush(e) {
    switch(e.keyCode){
        case 37:
            moveX = -1;
            moveY = 0;
            break;
        case 38:
            moveX = 0;
            moveY = -1;
            break;            
        case 39:
            moveX = 1;
            moveY = 0;
            break;
        case 40:
            moveX = 0;
            moveY = 1;
            break;
    }
}