let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;


function criarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 10 * box, 10 * box);
}

criarBG();