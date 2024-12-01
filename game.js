const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

let lastFrameTime = 0;

function update(deltaTime) {
    console.log(deltaTime);
}

function draw() {
}

function gameLoop(currentTime) {
    const deltaTime = currentTime - lastFrameTime;
    lastFrameTime = currentTime;

    update(deltaTime);
    draw();
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);