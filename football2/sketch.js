//preload

//finanças---------------
var caixa = 20000;

//stadium-------------
var semGrana = false;
var atualizar = [1000, 10000, 20000];
var stadiumAtual = 0;
var temDezesseis = false;

//calendário
var campeonatos = false;
var peneiras = false;
var calX = 139;
var calY = 264;
var semJogadores = false;
var organizarPeneira = false;
var quantidadeDePeneiras = 0;


//jogadoreselenco


var elencoX = 214;
var elencoY = 49;
var selPerfilX = 81;
var selPerfilY = 306;
var contShift = 0;
var perfilDoJogador = false;
var contagem = 0;

//treinador
var treinador = {
  nome:"nenhum",
  formacao:"4-4-2"
}
//Clube
var clube = {
  nivel:1,
  nome:"sem nome",
  formacao:treinador.formacao,
}
//Equipe técnica
var selEquipeTecnicaX = 110;
var selEquipeTecnicaY = 135;
var selListaDeTreinadoresY = 142;
var contShiftEt = 0;
var listaDeTreinadores = false;
var perfilDoTreinador = false;

var tela = 1;
var telaMenu = 0;
var selX = 25;
var selY = 30;
var contStart = 0; //controle para que não entre em stadium antes da hora.

var linha = 1;
var coluna = 1;

var W = 400,
  H = 400;

function setup() {
  createCanvas(W, H);
  var segundos = second();
}

function timer(){
  segundos = second()
}

function draw() {
  background(163, 174, 191)
  timer();
  if (tela == 1) {
    logo();
  }
  if (tela == 2) {
    peneira();
  }
  if (tela == 3) {
    menu();
  }
  if (telaMenu == 1) {
    stadium();
  }
  if (telaMenu == 2) {
    financas();
  }
  if (telaMenu == 3) {
    calendario();
  }
  if (telaMenu == 4) {
    elenco();
  }
  if(telaMenu == 5){
    equipeTecnica();
  }
  //fill(0, 0, 0)
  
  text(selListaDeTreinadoresY,250,200);
  //text(elencoY, 200, 250);
  //text(meias,0,300);
  //text(zagueiros,0,350);
  
}

//logo

//peneira

//menu

//stadium

//financas

//calendario

//elenco

//equipeTecnica



//keyPressed