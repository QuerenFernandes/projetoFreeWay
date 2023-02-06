let imagemDaEstrada;

function preload(){
    imagemDaEstrada = loadImage("img/estrada.png")
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(imagemDaEstrada);
}
