const canvas = document.getElementById("gameArea");
const ctx = canvas.getContext("2d");

let x = 100;
let y = 100;
let radius = 50;

function drawGame() {
    refreshCanvas();
    refreshPlayer();
}

function refreshPlayer() {
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(x,y, radius,0, Math.PI * 2);
    ctx.fill();
}

function refreshCanvas() {
    ctx.fillStyle = "black";
    ctx.fillRect(0,0, canvas.clientWidth, canvas.clientHeight)
}

drawGame();