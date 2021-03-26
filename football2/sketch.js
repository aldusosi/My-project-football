function preload(){
  logoImg = loadImage('image/logo.png');
  peneiraImg = loadImage('image/peneira.png');
  menuImg = loadImage('image/menu.png');
  stadiumImg= loadImage('image/stadium.png');
  stadiumAt1= loadImage('image/stadium-atualizado1.png');
  stadiumAt2= loadImage('image/stadium-atualizado2.png');
  finacasImg= loadImage('image/bank.png');
  calendarioImg = loadImage('image/calendario.png')
  seletorCalendario = loadImage('image/seletor-calendario.png')
}

//finanças---------------
var caixa = 20000;

//stadium-------------
var semGrana = false;
var atualizar = [1000,10000,20000];
var stadiumAtual = 0;
var temDezesseis = false;

//calendário
var campeonatos = false;
var peneiras = false;
var calX = 139;
var calY = 264;
var semJogadores = false;

var tela = 3;
var telaMenu = 0;
var selX = 25;
var selY = 30;
var contStart = 0; //controle para que não entre em stadium antes da hora.

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
  }if(telaMenu == 2){
    financas();
  }if(telaMenu == 3){
    calendario();
  }
  text(calX,200,200)

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
  
  
  if(stadiumAtual == 1){
    image(stadiumAt1,0,0);
  }
  if(stadiumAtual == 2){
    image(stadiumAt2,0,0)
  }
  if(semGrana){
    textAlign(CENTER)
    c = color(255,0,0);
    fill(c);
    text("GRANA INSUFICIENTE PARA PROXIMA ATUALIZAÇÃO!",200,335);
  }
  c=color(0,0,0);
  fill(c)
  textAlign(CENTER);
  text(`proxima atualização custa: ${atualizar[stadiumAtual]} reais `,200,375);
  text("SHIFT para atualizar ou ESC para sair ",200,355);
  text(`dinheiro disponivel no caixa: ${caixa} reais`,200,395);
}

function financas(){
  textAlign(LEFT)
  c = color(31, 46, 209);
  fill(c);
  image(finacasImg,0,0);
  text(`CAIXA: ${caixa} reais`,50,150);
}

function calendario(){
  
  image(calendarioImg,0,0);
  if(!campeonatos){
    textSize(12);
    fill(0,0,0)
    text(`Você ainda não está inscrito em competições.`,75,125,100,100);
  }
  if(!peneiras){
    textSize(12);
    fill(0,0,0)
    text(`Sem nenhuma peneira marcada.`,207,125,100,100);
  }
  if(telaMenu == 3){
    image(seletorCalendario,calX,calY);
    textAlign(CENTER)
    textSize(14)
    text("Mova direcionais para escolher e SHIFT para selecionar.",200,395);
  }
  if(semJogadores){
    c = color(255,0,0);
    fill(c);
    text("Seu clube não possue o minimo de 16 jogadores.",200,375);
  }
}

function keyPressed(){
  if(keyCode == ENTER){
    tela+=1;
    contStart++;
    if(contStart>4){
      contStart = 4
    }
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
  if(linha == 1 && coluna == 1 && keyCode == ENTER && tela == 3 && contStart >=3){//ENTRA NA SEÇÃO STADIUM
    telaMenu = 1;
    contStart++;
    
  }
  if(linha == 1 && coluna == 2 && keyCode == ENTER && tela == 3){//ENTRA NA SEÇÃO FINANÇAS
    telaMenu = 2;
    contStart++;
    
  }
  if(linha == 1 && coluna == 3 && keyCode == ENTER && tela == 3){//ENTRA NA SEÇÃO CALENDÁRIO
    telaMenu = 3;
    contStart++;
  }
  if(keyCode == LEFT_ARROW && telaMenu == 3 && calX >139){//MOVE SELETOR DO CALENDÁRIO
    calX -= 190;
  }
  if(keyCode == RIGHT_ARROW && telaMenu == 3 && calX < 139+190){//MOVE SELETOR DO CALENDÁRIO
    calX += 190;
    semJogadores = false;
  }
  if(telaMenu == 3 && keyCode == SHIFT && calX == 139){//VERIFICA SE TEM JOGADORES SUFICIENTES PARA INSCREVER NA COMPETIÇÃO
    if (temDezesseis){
      //------------------------------VALIDE A PARTICIPAÇÃO EM CAMPEONATOS AQUI----------------------------------------
    }else{
      semJogadores = true;
    }
  }
  if(keyCode == ESCAPE){//VOLTA PARA MENU
      telaMenu = 0;
      semGrana = false;
      semJogadores = false;
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