function preload(){
  logoImg = loadImage('image/logo.png');
  peneiraImg = loadImage('image/peneira.png');
  menuImg = loadImage('image/menu.png');
  stadiumImg= loadImage('image/stadium.png');
  stadiumAt1= loadImage('image/stadium-atualizado1.png');
  stadiumAt2= loadImage('image/stadium-atualizado2.png');
}

//finanças---------------
var caixa = 20000;

//stadium-------------
var semGrana = false;
var atualizar = [1000,10000,20000];
var stadiumAtual = 0;

var tela = 3;
var telaMenu = 0;
var selX = 25;
var selY = 30;

var linha = 1;
var coluna = 1;

var W=400, H=400;
function setup() {
  createCanvas(W,H);
}

function draw() {
  background(163, 174, 191)
  
  if(tela == 1){
    logo();
  }if(tela == 2){
    peneira();
  }if(tela == 3){
    menu();
  }if(telaMenu == 1){
    stadium();
  }
  text(stadiumAtual,375,400);
  text(coluna,375,375);
}

function logo(){
  image(logoImg,0,0);
}

function peneira(){
  image(peneiraImg,0,0);
}

function menu(){
  image(menuImg,0,0);
  
  //SELETOR
  c = color("rgba(4, 86, 212, 0.7)");
  fill(c);
  noStroke();
  rect(selX,selY,112,85,10);
}

function stadium(){
  c = color(0,0,0)
  fill(c)
  image(stadiumImg,0,0);
  textAlign(CENTER);
  text(`proxima atualização: ${atualizar[stadiumAtual]}$ `,200,375);
  text("SHIFT para atualizar ou ESC para sair ",200,355);
  text(`caixa: ${caixa}$`,200,395);
  if(semGrana){
    textAlign(CENTER)
    c = color(255,0,0);
    fill(c);
    text("GRANA INSUFICIENTE PARA PROXIMA ATUALIZAÇÃO!",200,335);
  }
  if(stadiumAtual == 1){
    image(stadiumAt1,106,129);
  }
  if(stadiumAtual == 2){
    image(stadiumAt2,106,129-16)
  }
}

function keyPressed(){
  if(keyCode == ENTER){
    tela+=1;
    if(tela > 3){
      tela = 3;
    }
  }
  
  if(keyCode == LEFT_ARROW && selX >25 && telaMenu === 0){
    selX = selX - 120;
    coluna--;
  }
  if(keyCode == RIGHT_ARROW && selX <2*120 && telaMenu === 0){
    selX = selX + 120;
    coluna++;
  }
  if(keyCode == UP_ARROW && selY > 30 && telaMenu === 0){
    selY = selY - 92
    linha--;
  }
  if(keyCode == DOWN_ARROW && selY < 2*92 && telaMenu === 0){
    selY = selY + 92;
    linha++;
  }
  if(linha == 1 && coluna == 1 && keyCode == ENTER && tela == 3){
    telaMenu = 1;
    
  }
  if(keyCode == ESCAPE){
      telaMenu = 0;
      semGrana = false;
  }
  if(keyCode == SHIFT && telaMenu == 1 && caixa >= atualizar[stadiumAtual]){
    semGrana = false;
    caixa -= atualizar[stadiumAtual];
    console.log(caixa);
    stadiumAtual++;
  }
  if(keyCode == SHIFT && telaMenu == 1 && caixa < atualizar[stadiumAtual])
    semGrana = true;
}