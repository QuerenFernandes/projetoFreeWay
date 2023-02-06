let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;

//carro
let xCarro = 600;


function preload(){
    imagemDaEstrada = loadImage("img/estrada.png");
    imagemDoAtor = loadImage("img/ator-1.png");
    imagemCarro = loadImage("img/carro-1.png");  
}

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
}

function mostraAtor() {
  image(imagemDoAtor, 100, 366, 30, 30); 
  //parâmetros = eixo x, eixo y e dimensões da imagem

}

function mostraCarro() {
  image(imagemCarro, xCarro, 40, 50, 40);
}

function movimentaCarro() {
  xCarro -= 2;
}