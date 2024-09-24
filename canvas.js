import Player from "./player.js";
import Ball from "./ball.js";
import GameController from "./gameController.js";

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

const player1 = new Player(0, 0, 8, 30);
const player2 = new Player(canvas.width - 8, 0, 8, 30);
const ball = new Ball(canvas.width/2 - 10, canvas.height/2 - 10, 10, 10, 0);
const gameController = new GameController(player1, player2, ball);

player1.setContext(ctx);
player2.setContext(ctx);
ball.setContext(ctx)

const pressedKeys = {
    "ArrowUp": false,
    "ArrowDown": false,
    "w": false,
    "s": false,
    "Enter": false
};

const keys = {
    "ArrowUp": () => player2.moveUp(),
    "ArrowDown": () => player2.moveDown(),
    "w": () => player1.moveUp(),
    "s": () => player1.moveDown(),
    "Enter": () => ball.start()
};

window.addEventListener("keydown", (event) => {
    for (let key of Object.keys(pressedKeys)) {
        if (key == event.key)
            pressedKeys[key] = true
    }
})

window.addEventListener("keyup", (event) => {
    for (let key of Object.keys(pressedKeys)) {
        if (key == event.key)
            pressedKeys[key] = false
    }
})

const updateScreen = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player1.render();
    player2.render();
    ball.render();
}

const loop = () => {

    for (let key of Object.keys(pressedKeys)) {
        if (pressedKeys[key])
            keys[key]();
    }

    ball.updatePosition();
    gameController.checkColliders();
    gameController.checkGoal();
    gameController.updateGoal();

    updateScreen();
    requestAnimationFrame(loop);
}

loop();




export { player1, player2, canvas };