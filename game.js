const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 1000;
canvas.height = 600;

player = {
    x: canvas.width / 2 - 66,
    y: canvas.height - 32,
    width: 45,
    height: 30,
    color: "#FFFFFF",
    speed: 5,
    movLeft: false,
    movRight: false
};

const shots = [];
const velShots = 7;

const aliens = [];
const lineAliens = 4
const collumnAliens = 8;
const AlienWidth = 40;
const AlienHeight = 30
let directionAlien = 1; // 1 = right, -1 = left 
let velAlien = 1.5;
let DownAliens = false;

function createAlien(){
    for (let l = 0; l < lineAliens; l++){
        for (let c = 0; c < collumnAliens; c ++){
            aliens.push({
                x: c * (AlienWidth + 15) + 50,
                y: l * (AlienHeight + 15) + 50,
                width: AlienWidth,
                height: AlienHeight,
                alive: true
            });
        }
    }
}


window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") player.movLeft = true;
  if (e.key === "ArrowRight") player.movRight = true;
  if (e.key === " " || e.key === "Spacebar"){
    if (!e.repeat){
        shots.push({
            x: player.x + player.width / 2 - 2,
            y: player.y,
            width: 4,
            height: 12
        });
    }
  }
});

window.addEventListener("keyup", (e) => {
    if (e.key === "ArrowLeft") player.movLeft = false;
    if (e.key === "ArrowRight") player.movRight = false;
});

