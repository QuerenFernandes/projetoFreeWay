//ATOR
let xAtor = 100;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;


function mostraAtor() {
    image(imagemDoAtor, xAtor, yAtor, 30, 30); 
    //parâmetros = eixo x, eixo y e dimensões da imagem
}

function movimentaAtor() {
    if (keyIsDown(UP_ARROW)){
      yAtor -= 3;
    }
    if (keyIsDown(DOWN_ARROW)){
      yAtor += 3;
    }
  }

  function verificaColisao(){
    //collideRectCircle(x1, y1, widht1, height1, cx, cy, diameter)
    for (let i = 0; i < imagemCarros.length; i++){
      colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
      if(colisao){
        colidiu();
      }
    }
  }

function colidiu (){
    yAtor = 366;
  }

function incluiPontos(){
  Text(meusPontos, widht / 5, 60);
}