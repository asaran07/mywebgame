const canvas = document.getElementById("gameArea");
const ctx = canvas.getContext("2d");

class Player {
    constructor() {
        this.x = 100;
        this.y = 100;
        this.width = 20;
        this.height = 60;
        this.color = "yellow";
        this.speed = 5;
    }

    inputs() {
        if (downPressed) {
            this.y += this.speed;
        }
        if (upPressed) {
            this.y -= this.speed;
        }
        if (leftPressed) {
            this.x -= this.speed;
        }
        if (rightPressed) {
            this.x += this.speed;
        }
    }

    draw() {
        ctx.fillStyle = player.color;
        ctx.beginPath();
        ctx.fillRect(player.x, player.y, player.width, player.height);
    }
}

const player = new Player();

let downPressed = false;
let upPressed = false;
let leftPressed = false;
let rightPressed = false;

document.body.addEventListener("keydown", keyDown);
document.body.addEventListener("keyup", keyUp)

function drawGame() {
    requestAnimationFrame(drawGame);
    refreshCanvas();
    player.inputs();
    player.draw();
}

function refreshCanvas() {
    ctx.fillStyle = "black";
    ctx.fillRect(0,0, canvas.clientWidth, canvas.clientHeight)
}

function keyDown(event) {
    if(event.keyCode == 40) {
        downPressed = true;
    }
    if (event.keyCode == 38) {
        upPressed = true;
    }
    if (event.keyCode == 37) {
        leftPressed = true;
    }
    if (event.keyCode == 39) {
        rightPressed = true;
    }
}

function keyUp(event) {
    if (event.keyCode == 40) {
        downPressed = false;
    }
    if (event.keyCode == 38) {
        upPressed = false;
    }
    if (event.keyCode == 37) {
        leftPressed = false;
    }
    if (event.keyCode == 39) {
        rightPressed = false;
    }
}

drawGame();