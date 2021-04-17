function preload() {
  logoImg = loadImage('image/logo.png');
  peneiraImg = loadImage('image/peneira.png');
  menuImg = loadImage('image/menu.png');
  stadiumImg = loadImage('image/stadium.png');
  stadiumAt1 = loadImage('image/stadium-atualizado1.png');
  stadiumAt2 = loadImage('image/stadium-atualizado2.png');
  finacasImg = loadImage('image/bank.png');
  calendarioImg = loadImage('image/calendario.png')
  seletorCalendario = loadImage('image/seletor-calendario.png');
  minOf = loadImage('image/minOf.png');
  minOn = loadImage('image/minOn.png');
  esquemaImg = [loadImage('image/esquema-3-4-3.png'), loadImage('image/esquema-3-5-2.png'),
    loadImage('image/esquema-4-4-2.png'), loadImage('image/esquema-4-3-3.png'), loadImage('image/esquema-4-5-1.png'),
    loadImage('image/esquema-4-5-1.png'), loadImage('image/esquema-5-4-1.png')
  ];

  jogadoresImg = [loadImage("image/perfil-do-jogador.png"), loadImage("image/perfil-do-jogador1.png"),
    loadImage("image/perfil-do-jogador2.png"), loadImage("image/perfil-do-jogador3.png"), loadImage("image/perfil-do-jogador4.png"), loadImage("image/perfil-do-jogador5.png"), loadImage("image/perfil-do-jogador6.png"), loadImage("image/perfil-do-jogador7.png"), loadImage("image/perfil-do-jogador8.png"), loadImage("image/perfil-do-jogador9.png"), loadImage("image/perfil-do-jogador10.png"), loadImage("image/perfil-do-jogador11.png"), loadImage("image/perfil-do-jogador12.png"), loadImage("image/perfil-do-jogador13.png"), loadImage("image/perfil-do-jogador14.png"), loadImage("image/perfil-do-jogador15.png"), loadImage("image/perfil-do-jogador16.png"), loadImage("image/perfil-do-jogador17.png"), loadImage("image/perfil-do-jogador18.png"), loadImage("image/perfil-do-jogador19.png"), loadImage("image/perfil-do-jogador20.png"), loadImage("image/perfil-do-jogador21.png"), loadImage("image/perfil-do-jogador22.png"), loadImage("image/perfil-do-jogador23.png"), loadImage("image/perfil-do-jogador24.png"), loadImage("image/perfil-do-jogador25.png"), loadImage("image/perfil-do-jogador26.png"), loadImage("image/perfil-do-jogador27.png"), loadImage("image/perfil-do-jogador28.png"), loadImage("image/perfil-do-jogador29.png"), loadImage("image/perfil-do-jogador30.png"), loadImage("image/perfil-do-jogador31.png"), loadImage("image/perfil-do-jogador32.png"), loadImage("image/perfil-do-jogador33.png")
  ]
}

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
var miguel = {
  nome: "Miguel",
  idade: 19,
  salario: 0,
  contrato: "sem contrato",
  posicao: "indefinida",
  personalidade: "tranquilo",
  media: 0,
  jogos: 0,
  gols: 0,
  assistencias: 0,
  cartoesAmarelos: 0,
  cartoesVermelhos: 0,
  contusao: 0,
  posicaoMenu: 49,
}
var davi = {
  nome: "Davi",
  idade: 25,
  salario: 0,
  contrato: "sem contrato",
  posicao: "indefinida",
  personalidade: "tranquilo",
  media: 0,
  jogos: 0,
  gols: 0,
  assistencias: 0,
  cartoesAmarelos: 0,
  cartoesVermelhos: 0,
  contusao: 0,
  posicaoMenu: 59,
}
var arthur = {
  nome: "Arthur",
  idade: 16,
  salario: 0,
  contrato: "sem contrato",
  posicao: "indefinida",
  personalidade: "tranquilo",
  media: 0,
  jogos: 0,
  gols: 0,
  assistencias: 0,
  cartoesAmarelos: 0,
  cartoesVermelhos: 0,
  contusao: 0,
  posicaoMenu: 69,
}
var pedro = {
  nome: "Pedro",
  idade: 23,
  salario: 0,
  contrato: "sem contrato",
  posicao: "indefinida",
  personalidade: "tranquilo",
  media: 0,
  jogos: 0,
  gols: 0,
  assistencias: 0,
  cartoesAmarelos: 0,
  cartoesVermelhos: 0,
  contusao: 0,
  posicaoMenu: 79,
}
var gabriel = {
  nome: "Gabriel",
  idade: 19,
  salario: 0,
  contrato: "sem contrato",
  posicao: "indefinida",
  personalidade: "tranquilo",
  media: 0,
  jogos: 0,
  gols: 0,
  assistencias: 0,
  cartoesAmarelos: 0,
  cartoesVermelhos: 0,
  contusao: 0,
  posicaoMenu: 89,
}
var bernardo = {
  nome: "Bernardo",
  idade: 28,
  salario: 0,
  contrato: "sem contrato",
  posicao: "indefinida",
  personalidade: "tranquilo",
  media: 0,
  jogos: 0,
  gols: 0,
  assistencias: 0,
  cartoesAmarelos: 0,
  cartoesVermelhos: 0,
  contusao: 0,
  posicaoMenu: 99,
}
var lucas = {
  nome: "Lucas",
  idade: 33,
  salario: 0,
  contrato: "sem contrato",
  posicao: "indefinida",
  personalidade: "tranquilo",
  media: 0,
  jogos: 0,
  gols: 0,
  assistencias: 0,
  cartoesAmarelos: 0,
  cartoesVermelhos: 0,
  contusao: 0,
  posicaoMenu: 109,
}
var matheus = {
  nome: "Matheus",
  idade: 28,
  salario: 0,
  contrato: "sem contrato",
  posicao: "indefinida",
  personalidade: "tranquilo",
  media: 0,
  jogos: 0,
  gols: 0,
  assistencias: 0,
  cartoesAmarelos: 0,
  cartoesVermelhos: 0,
  contusao: 0,
  posicaoMenu: 119,
}
var rafael = {
  nome: "Rafael",
  idade: 30,
  salario: 0,
  contrato: "sem contrato",
  posicao: "indefinida",
  personalidade: "tranquilo",
  media: 0,
  jogos: 0,
  gols: 0,
  assistencias: 0,
  cartoesAmarelos: 0,
  cartoesVermelhos: 0,
  contusao: 0,
  posicaoMenu: 129,
}
var heitor = {
  nome: "Heitor",
  idade: 37,
  salario: 0,
  contrato: "sem contrato",
  posicao: "indefinida",
  personalidade: "tranquilo",
  media: 0,
  jogos: 0,
  gols: 0,
  assistencias: 0,
  cartoesAmarelos: 0,
  cartoesVermelhos: 0,
  contusao: 0,
  posicaoMenu: 139,
}
var enzo = {
  nome: "Enzo",
  idade: 29,
  salario: 0,
  contrato: "sem contrato",
  posicao: "indefinida",
  personalidade: "tranquilo",
  media: 0,
  jogos: 0,
  gols: 0,
  assistencias: 0,
  cartoesAmarelos: 0,
  cartoesVermelhos: 0,
  contusao: 0,
  posicaoMenu: 149,
}
var guilherme = {
  nome: "Guilherme",
  idade: 15,
  salario: 0,
  contrato: "sem contrato",
  posicao: "indefinida",
  personalidade: "tranquilo",
  media: 0,
  jogos: 0,
  gols: 0,
  assistencias: 0,
  cartoesAmarelos: 0,
  cartoesVermelhos: 0,
  contusao: 0,
  posicaoMenu: 159,
}
var nicolas = {
  nome: "Nicolas",
  idade: 39,
  salario: 0,
  contrato: "sem contrato",
  posicao: "indefinida",
  personalidade: "tranquilo",
  media: 0,
  jogos: 0,
  gols: 0,
  assistencias: 0,
  cartoesAmarelos: 0,
  cartoesVermelhos: 0,
  contusao: 0,
  posicaoMenu: 169,
}
var lorenzo = {
  nome: "Lorenzo",
  idade: 27,
  salario: 0,
  contrato: "sem contrato",
  posicao: "indefinida",
  personalidade: "tranquilo",
  media: 0,
  jogos: 0,
  gols: 0,
  assistencias: 0,
  cartoesAmarelos: 0,
  cartoesVermelhos: 0,
  contusao: 0,
  posicaoMenu: 179,
}
var gustavo = {
  nome: "Gustavo",
  idade: 24,
  salario: 0,
  contrato: "sem contrato",
  posicao: "indefinida",
  personalidade: "tranquilo",
  media: 0,
  jogos: 0,
  gols: 0,
  assistencias: 0,
  cartoesAmarelos: 0,
  cartoesVermelhos: 0,
  contusao: 0,
  posicaoMenu: 189,
}
var felipe = {
  nome: "Felipe",
  idade: 20,
  salario: 0,
  contrato: "sem contrato",
  posicao: "indefinida",
  personalidade: "tranquilo",
  media: 0,
  jogos: 0,
  gols: 0,
  assistencias: 0,
  cartoesAmarelos: 0,
  cartoesVermelhos: 0,
  contusao: 0,
  posicaoMenu: 199,
}
var samuel = {
  nome: "Samuel",
  idade: 17,
  salario: 0,
  contrato: "sem contrato",
  posicao: "indefinida",
  personalidade: "tranquilo",
  media: 0,
  jogos: 0,
  gols: 0,
  assistencias: 0,
  cartoesAmarelos: 0,
  cartoesVermelhos: 0,
  contusao: 0,
  posicaoMenu: 209,
}
var joaoPedro = {
  nome: "João Pedro",
  idade: 15,
  salario: 0,
  contrato: "sem contrato",
  posicao: "indefinida",
  personalidade: "tranquilo",
  media: 0,
  jogos: 0,
  gols: 0,
  assistencias: 0,
  cartoesAmarelos: 0,
  cartoesVermelhos: 0,
  contusao: 0,
  posicaoMenu: 219,
}
var daniel = {
  nome: "Daniel",
  idade: 28,
  salario: 0,
  contrato: "sem contrato",
  posicao: "indefinida",
  personalidade: "tranquilo",
  media: 0,
  jogos: 0,
  gols: 0,
  assistencias: 0,
  cartoesAmarelos: 0,
  cartoesVermelhos: 0,
  contusao: 0,
  posicaoMenu: 229,
}
var victor = {
  nome: "Victor",
  idade: 19,
  salario: 0,
  contrato: "sem contrato",
  posicao: "indefinida",
  personalidade: "tranquilo",
  media: 0,
  jogos: 0,
  gols: 0,
  assistencias: 0,
  cartoesAmarelos: 0,
  cartoesVermelhos: 0,
  contusao: 0,
  posicaoMenu: 239,
}
var leonardo = {
  nome: "Leonardo",
  idade: 30,
  salario: 0,
  contrato: "sem contrato",
  posicao: "indefinida",
  personalidade: "tranquilo",
  media: 0,
  jogos: 0,
  gols: 0,
  assistencias: 0,
  cartoesAmarelos: 0,
  cartoesVermelhos: 0,
  contusao: 0,
  posicaoMenu: 249,
}
var henrrique = {
  nome: "Henrrique",
  idade: 34,
  salario: 0,
  contrato: "sem contrato",
  posicao: "indefinida",
  personalidade: "tranquilo",
  media: 0,
  jogos: 0,
  gols: 0,
  assistencias: 0,
  cartoesAmarelos: 0,
  cartoesVermelhos: 0,
  contusao: 0,
  posicaoMenu: 259,
}
var theo = {
  nome: "Theo",
  idade: 30,
  salario: 0,
  contrato: "sem contrato",
  posicao: "indefinida",
  personalidade: "tranquilo",
  media: 0,
  jogos: 0,
  gols: 0,
  assistencias: 0,
  cartoesAmarelos: 0,
  cartoesVermelhos: 0,
  contusao: 0,
  posicaoMenu: 269,
}
var murilo = {
  nome: "Murilo",
  idade: 25,
  salario: 0,
  contrato: "sem contrato",
  posicao: "indefinida",
  personalidade: "tranquilo",
  media: 0,
  jogos: 0,
  gols: 0,
  assistencias: 0,
  cartoesAmarelos: 0,
  cartoesVermelhos: 0,
  contusao: 0,
  posicaoMenu: 279,
}
var eduardo = {
  nome: "Eduardo",
  idade: 23,
  salario: 0,
  contrato: "sem contrato",
  posicao: "indefinida",
  personalidade: "tranquilo",
  media: 0,
  jogos: 0,
  gols: 0,
  assistencias: 0,
  cartoesAmarelos: 0,
  cartoesVermelhos: 0,
  contusao: 0,
  posicaoMenu: 289,
}
var pedroHenrrique = {
  nome: "Pedro Henrrique",
  idade: 32,
  salario: 0,
  contrato: "sem contrato",
  posicao: "indefinida",
  personalidade: "tranquilo",
  media: 0,
  jogos: 0,
  gols: 0,
  assistencias: 0,
  cartoesAmarelos: 0,
  cartoesVermelhos: 0,
  contusao: 0,
  posicaoMenu: 299,
}
var pietro = {
  nome: "Pietro",
  idade: 40,
  salario: 0,
  contrato: "sem contrato",
  posicao: "indefinida",
  personalidade: "tranquilo",
  media: 0,
  jogos: 0,
  gols: 0,
  assistencias: 0,
  cartoesAmarelos: 0,
  cartoesVermelhos: 0,
  contusao: 0,
  posicaoMenu: 309,
}
var caua = {
  nome: "Cauã",
  idade: 14,
  salario: 0,
  contrato: "sem contrato",
  posicao: "indefinida",
  personalidade: "tranquilo",
  media: 0,
  jogos: 0,
  gols: 0,
  assistencias: 0,
  cartoesAmarelos: 0,
  cartoesVermelhos: 0,
  contusao: 0,
  posicaoMenu: 319,
}
var isac = {
  nome: "Isac",
  idade: 29,
  salario: 0,
  contrato: "sem contrato",
  posicao: "indefinida",
  personalidade: "tranquilo",
  media: 0,
  jogos: 0,
  gols: 0,
  assistencias: 0,
  cartoesAmarelos: 0,
  cartoesVermelhos: 0,
  contusao: 0,
  posicaoMenu: 329,
}
var caio = {
  nome: "Caio",
  idade: 21,
  salario: 0,
  contrato: "sem contrato",
  posicao: "indefinida",
  personalidade: "tranquilo",
  media: 0,
  jogos: 0,
  gols: 0,
  assistencias: 0,
  cartoesAmarelos: 0,
  cartoesVermelhos: 0,
  contusao: 0,
  posicaoMenu: 339,
}
var vinicius = {
  nome: "Vinícius",
  idade: 25,
  salario: 0,
  contrato: "sem contrato",
  posicao: "indefinida",
  personalidade: "tranquilo",
  media: 0,
  jogos: 0,
  gols: 0,
  assistencias: 0,
  cartoesAmarelos: 0,
  cartoesVermelhos: 0,
  contusao: 0,
  posicaoMenu: 349,
}
var benjamin = {
  nome: "Benjamin",
  idade: 27,
  salario: 0,
  contrato: "sem contrato",
  posicao: "indefinida",
  personalidade: "tranquilo",
  media: 0,
  jogos: 0,
  gols: 0,
  assistencias: 0,
  cartoesAmarelos: 0,
  cartoesVermelhos: 0,
  contusao: 0,
  posicaoMenu: 359,
}
var joao = {
  nome: "João",
  idade: 17,
  salario: 0,
  contrato: "sem contrato",
  posicao: "indefinida",
  personalidade: "tranquilo",
  media: 0,
  jogos: 0,
  gols: 0,
  assistencias: 0,
  cartoesAmarelos: 0,
  cartoesVermelhos: 0,
  contusao: 0,
  posicaoMenu: 369,
}
var lucca = {
  nome: "Lucca",
  idade: 19,
  salario: 0,
  contrato: "sem contrato",
  posicao: "indefinida",
  personalidade: "tranquilo",
  media: 0,
  jogos: 0,
  gols: 0,
  assistencias: 0,
  cartoesAmarelos: 0,
  cartoesVermelhos: 0,
  contusao: 0,
  posicaoMenu: 379,
}
var goleiros = [];
var zagueiros = [];
var meias = [];
var atacantes = [];
var jogadoresPeneira1 = [miguel, davi, arthur, pedro, gabriel, bernardo, lucas, matheus, rafael, heitor, enzo, guilherme, nicolas, lorenzo, gustavo, felipe, samuel, joaoPedro, daniel, victor, leonardo,
  henrrique, theo, murilo, eduardo, pedroHenrrique, pietro, caua, isac, caio, vinicius, benjamin, joao, lucca
];
var jogadoresDaPeneira1 = [miguel.nome, davi.nome, arthur.nome, pedro.nome, gabriel.nome,
  bernardo.nome, lucas.nome, matheus.nome, rafael.nome, heitor.nome, enzo.nome, guilherme.nome,
  nicolas.nome, lorenzo.nome, gustavo.nome, felipe.nome, samuel.nome, joaoPedro.nome, daniel.nome,
  victor.nome, leonardo.nome, henrrique.nome, theo.nome, murilo.nome, eduardo.nome, pedroHenrrique.nome,
  pietro.nome, caua.nome, isac.nome, caio.nome, vinicius.nome, benjamin.nome, joao.nome, lucca.nome
];
var jogadoresDaPeneira2 = ["João Miguel", "Bryan", "Joaquim", "João Vitor", "Thiago", "Antônio", "Davi Lucas",
  "Francisco", "Enzo Gabriel", "Bruno", "Emanuel", "João Gabriel", "Ian", "Davi Luiz",
  "Rodrigo", "Otávio", "Alexsandro Duarte"
];
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
  nome:"sem nome",
  formacao:treinador.formacao,
}

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
}

function draw() {
  background(163, 174, 191)

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
  fill(0, 0, 0)
  text(selPerfilX, 200, 200);
  text(elencoY, 200, 250);
  //text(meias,0,300);
  //text(zagueiros,0,350);
}

function logo() {
  image(logoImg, 0, 0);
}

function peneira() {
  image(peneiraImg, 0, 0);
}

function menu() {
  image(menuImg, 0, 0);



  //SELETOR
  c = color("rgba(0, 91, 9, 0.7)");
  fill(c);
  noStroke();
  rect(selX, selY, 112, 85, 10);
}

function stadium() {
  c = color(0, 0, 0)
  fill(c)
  image(stadiumImg, 0, 0);


  if (stadiumAtual == 1) {
    image(stadiumAt1, 0, 0);
  }
  if (stadiumAtual == 2) {
    image(stadiumAt2, 0, 0)
  }
  if (semGrana) {
    textAlign(CENTER)
    c = color(255, 0, 0);
    fill(c);
    text("GRANA INSUFICIENTE PARA PROXIMA ATUALIZAÇÃO!", 200, 335);
  }
  c = color(0, 0, 0);
  fill(c)
  textAlign(CENTER);
  text(`proxima atualização custa: ${atualizar[stadiumAtual]} reais `, 200, 375);
  text("SHIFT para atualizar ou ESC para sair ", 200, 355);
  text(`dinheiro disponivel no caixa: ${caixa} reais`, 200, 395);
}

function financas() {
  textAlign(LEFT)
  c = color(31, 46, 209);
  fill(c);
  image(finacasImg, 0, 0);
  text(`CAIXA: ${caixa} reais`, 50, 150);
}

function calendario() {
  var i = 0;
  image(calendarioImg, 0, 0);
  if (!campeonatos) {
    textSize(12);
    textAlign(LEFT)
    fill(0, 0, 0)
    text(`Você ainda não está inscrito em competições.`, 75, 122, 100, 100);
  }
  if (!peneiras) {
    textSize(10);
    fill(0, 0, 0)
    text(`Sem nenhuma peneira marcada. A quantidade de peneira determina quantos jogos treinos os jogadores que voce selecionar terão para participar, ao fim dos do periodo de partidas você terá que decidir quem fica e quem deixa o clube.`, 207, 122, 125, 140);
  }
  if (telaMenu == 3) {
    image(seletorCalendario, calX, calY);
    textAlign(CENTER)
    textSize(14)
    text("Mova direcionais para escolher e SHIFT para selecionar.", 200, 395);
  }
  if (semJogadores) {
    c = color(255, 0, 0);
    fill(c);
    text("Seu clube não possue o minimo de 18 jogadores.", 200, 375);
  }
  if (organizarPeneira) {
    quantidadeDePeneiras = prompt("Quantas peneiras deseja ralizar esse més? insira no maximo 10 peneiras");
    if (quantidadeDePeneiras <= 10) {
      if (quantidadeDePeneiras === null) { //CASO A PESSOA SAIA SEM DEFINIR UM VALOR O PROGRAMA TRAVA (ESSE IF CONCERTA)
        quantidadeDePeneiras = 0;
      } else {
        peneiras = true;
      }

    } else {
      quantidadeDePeneiras = 0;
    }

    textSize(12);
    organizarPeneira = false;
  }
  if (quantidadeDePeneiras !== 0) {
    if (i <= quantidadeDePeneiras) {
      fill(0, 0, 0);
      textAlign(LEFT)
      text(`Peneiras a serem realizadas: ${quantidadeDePeneiras}`, 207, 122, 125, 140);
      i++;
    }
  }
}

function elenco() {
  i = 0;
  cont = 0;

  
  
  if(clube.formacao == "4-4-2"){ //FORMAÇÃO 4-4-2
  image(esquemaImg[2], 0, 0); //img 4-4-2
  fill(107, 50, 168)
  rect(elencoX, elencoY, 169, 11) //SELETOR PENEIRA
  fill(0, 0, 0);
  
    //Goleiro titular
  if(goleiros.length == 0){
    textSize(14)
    text("",50,60);
  }else{
    textSize(14)
    text(goleiros[0].nome,50,60);
  }
  
  //Goleiro reserva
  if(goleiros.length < 2){
    textSize(12)
    text("",50,293);
  }else{
    textSize(12)
    text(goleiros[1].nome,50,293);
  }
  
  //Defensor titular 1    
  if(zagueiros.length == 0){
    textSize(14)
    text("",50,80);
  }else{
    textSize(14);
    text(zagueiros[0].nome,50,80);
  }
  //Defensor titular 2    
  if(zagueiros.length < 2){
    textSize(14)
    text("",50,100);
  }else{
    textSize(14);
    text(zagueiros[1].nome,50,99);
  }
  //Defensor titular 3   
  if(zagueiros.length < 3){
    textSize(14)
    text("",50,120);
  }else{
    textSize(14);
    text(zagueiros[2].nome,50,117);
  }
  //Defensor titular 4  
  if(zagueiros.length < 4){
    textSize(14)
    text("",50,137);
  }else{
    textSize(14);
    text(zagueiros[3].nome,50,137);
  }
  //Defensor RESERVA 1  
  if(zagueiros.length < 5){
    textSize(14)
    text("",50,306);
  }else{
    textSize(12);
    text(zagueiros[4].nome,50,306);
  }
  //Defensor RESERVA 2  
  if(zagueiros.length < 6){
    textSize(14)
    text("",50,319);
  }else{
    textSize(12);
    text(zagueiros[5].nome,50,319);
  }
  //meia titular 1
  if(meias.length == 0){
    textSize(14)
    text("",50,157);
  }else{
    textSize(14);
    text(meias[0].nome,50,157);
  }
  //meia titular 2
  if(meias.length < 2){
    textSize(14)
    text("",50,176);
  }else{
    textSize(14);
    text(meias[1].nome,50,176);
  }
  //meia titular 3
  if(meias.length < 3){
    textSize(14)
    text("",50,195);
  }else{
    textSize(14);
    text(meias[2].nome,50,195);
  }
  //meia titular 4
  if(meias.length < 4){
    textSize(14)
    text("",50,214);
  }else{
    textSize(14);
    text(meias[3].nome,50,214);
  }
  //meia RESERVA 1  
  if(meias.length < 5){
    textSize(14)
    text("",50,332);
  }else{
    textSize(12);
    text(meias[4].nome,50,332);
  }
  //meia RESERVA 2   
  if(meias.length < 6){
    textSize(14)
    text("",50,345);
  }else{
    textSize(12);
    text(meias[5].nome,50,345);
  }
   //atacante titular 1
  if(atacantes.length == 0){
    textSize(14)
    text("",50,236);
  }else{
    textSize(14);
    text(atacantes[0].nome,50,236);
  }
   //atacante titular 2
  if(atacantes.length < 2){
    textSize(14)
    text("",50,255);
  }else{
    textSize(14);
    text(atacantes[1].nome,50,255);
  }
  //atacante reserva 1
  if(atacantes.length < 3){
    textSize(14)
    text("",50,358);
  }else{
    textSize(12);
    text(atacantes[2].nome,50,358);
  }
  //atacante reserva 2
   if(atacantes.length < 4){
    textSize(14)
    text("",50,371);
  }else{
    textSize(12);
    text(atacantes[3].nome,50,371);
  }
}else if(clube.formacao == "4-3-3"){//Formação 4-3-3
  image(esquemaImg[3], 0, 0); //img 4-3-3
  fill(107, 50, 168)
  rect(elencoX, elencoY, 169, 11) //SELETOR PENEIRA
  fill(0, 0, 0);
  
    //Goleiro titular
  if(goleiros.length == 0){
    textSize(14)
    text("",50,60);
  }else{
    textSize(14)
    text(goleiros[0].nome,50,60);
  }
  
  //Goleiro reserva
  if(goleiros.length < 2){
    textSize(12)
    text("",50,293);
  }else{
    textSize(12)
    text(goleiros[1].nome,50,293);
  }
  
  //Defensor titular 1    
  if(zagueiros.length == 0){
    textSize(14)
    text("",50,80);
  }else{
    textSize(14);
    text(zagueiros[0].nome,50,80);
  }
  //Defensor titular 2    
  if(zagueiros.length < 2){
    textSize(14)
    text("",50,100);
  }else{
    textSize(14);
    text(zagueiros[1].nome,50,99);
  }
  //Defensor titular 3   
  if(zagueiros.length < 3){
    textSize(14)
    text("",50,120);
  }else{
    textSize(14);
    text(zagueiros[2].nome,50,117);
  }
  //Defensor titular 4  
  if(zagueiros.length < 4){
    textSize(14)
    text("",50,137);
  }else{
    textSize(14);
    text(zagueiros[3].nome,50,137);
  }
  //Defensor RESERVA 1   
  if(zagueiros.length < 5){
    textSize(14)
    text("",50,306);
  }else{
    textSize(12);
    text(zagueiros[4].nome,50,306);
  }
  //Defensor RESERVA 2 
  if(zagueiros.length < 6){
    textSize(14)
    text("",50,319);
  }else{
    textSize(12);
    text(zagueiros[5].nome,50,319);
  }
  //meia titular 1
  if(meias.length == 0){
    textSize(14)
    text("",50,157);
  }else{
    textSize(14);
    text(meias[0].nome,50,157);
  }
  //meia titular 2
  if(meias.length < 2){
    textSize(14)
    text("",50,176);
  }else{
    textSize(14);
    text(meias[1].nome,50,176);
  }
  //meia titular 3
  if(meias.length < 3){
    textSize(14)
    text("",50,195);
  }else{
    textSize(14);
    text(meias[2].nome,50,195);
  }
  //meia RESERVA 1 
  if(meias.length < 4){
    textSize(14)
    text("",50,332);
  }else{
    textSize(12);
    text(meias[3].nome,50,332);
  }
  //meia RESERVA 2 
  if(meias.length < 5){
    textSize(14)
    text("",50,345);
  }else{
    textSize(12);
    text(meias[4].nome,50,345);
  }
  //meia RESERVA 3
  if(meias.length < 6){
    textSize(14)
    text("",50,358);
  }else{
    textSize(12);
    text(meias[5].nome,50,358);
  }
  //atacante titular 1
  if(atacantes.length == 0){
    textSize(14)
    text("",50,214);
  }else{
    textSize(14);
    text(atacantes[0].nome,50,214);
  }
     //atacante titular 2
  if(atacantes.length < 2){
    textSize(14)
    text("",50,236);
  }else{
    textSize(14);
    text(atacantes[1].nome,50,236);
  }
   //atacante titular 3
  if(atacantes.length < 3){
    textSize(14)
    text("",50,255);
  }else{
    textSize(14);
    text(atacantes[2].nome,50,255);
  }
    //atacante reserva 1
   if(atacantes.length < 4){
    textSize(14)
    text("",50,371);
  }else{
    textSize(12);
    text(atacantes[3].nome,50,371);
  }
}else if(clube.formacao == "3-4-3"){ //Formação 3-4-3
  image(esquemaImg[0], 0, 0); //img 3-4-3
  fill(107, 50, 168)
  rect(elencoX, elencoY, 169, 11) //SELETOR PENEIRA
  fill(0, 0, 0);
  
    //Goleiro titular
  if(goleiros.length == 0){
    textSize(14)
    text("",50,60);
  }else{
    textSize(14)
    text(goleiros[0].nome,50,60);
  }
  
  //Goleiro reserva
  if(goleiros.length < 2){
    textSize(12)
    text("",50,293);
  }else{
    textSize(12)
    text(goleiros[1].nome,50,293);
  }
  
  //Defensor titular 1    
  if(zagueiros.length == 0){
    textSize(14)
    text("",50,80);
  }else{
    textSize(14);
    text(zagueiros[0].nome,50,80);
  }
  //Defensor titular 2    
  if(zagueiros.length < 2){
    textSize(14)
    text("",50,100);
  }else{
    textSize(14);
    text(zagueiros[1].nome,50,99);
  }
  //Defensor titular 3   
  if(zagueiros.length < 3){
    textSize(14)
    text("",50,120);
  }else{
    textSize(14);
    text(zagueiros[2].nome,50,117);
  }
    //Defensor RESERVA 1   
  if(zagueiros.length < 4){
    textSize(14)
    text("",50,306);
  }else{
    textSize(12);
    text(zagueiros[3].nome,50,306);
  }
  //Defensor RESERVA 2 
  if(zagueiros.length < 5){
    textSize(14)
    text("",50,319);
  }else{
    textSize(12);
    text(zagueiros[4].nome,50,319);
  }
    //defensor RESERVA 3 
  if(zagueiros.length < 6){
    textSize(14)
    text("",50,332);
  }else{
    textSize(12);
    text(zagueiros[5].nome,50,332);
  }
    //meia titular 1  
  if(meias.length == 0){
    textSize(14)
    text("",50,137);
  }else{
    textSize(14);
    text(meias[0].nome,50,137);
  }
   //meia titular 2
  if(meias.length < 2){
    textSize(14)
    text("",50,157);
  }else{
    textSize(14);
    text(meias[1].nome,50,157);
  }
  //meia titular 3
  if(meias.length < 3){
    textSize(14)
    text("",50,176);
  }else{
    textSize(14);
    text(meias[2].nome,50,176);
  }
  //meia titular 4
  if(meias.length < 4){
    textSize(14)
    text("",50,195);
  }else{
    textSize(14);
    text(meias[3].nome,50,195);
  }
    //meia RESERVA 1 
  if(meias.length < 5){
    textSize(14)
    text("",50,345);
  }else{
    textSize(12);
    text(meias[4].nome,50,345);
  }
    //meia RESERVA 2
  if(meias.length < 6){
    textSize(14)
    text("",50,358);
  }else{
    textSize(12);
    text(meias[5].nome,50,358);
  }
    //atacante titular 1
  if(atacantes.length == 0){
    textSize(14)
    text("",50,214);
  }else{
    textSize(14);
    text(atacantes[0].nome,50,214);
  }
     //atacante titular 2
  if(atacantes.length < 2){
    textSize(14)
    text("",50,236);
  }else{
    textSize(14);
    text(atacantes[1].nome,50,236);
  }
   //atacante titular 3
  if(atacantes.length < 3){
    textSize(14)
    text("",50,255);
  }else{
    textSize(14);
    text(atacantes[2].nome,50,255);
  }
    //atacante reserva 1
   if(atacantes.length < 4){
    textSize(14)
    text("",50,371);
  }else{
    textSize(12);
    text(atacantes[3].nome,50,371);
  }
}else if(clube.formacao == "3-5-2"){ //Formação 3-5-2
  image(esquemaImg[1], 0, 0); //img 3-5-2
  fill(107, 50, 168)
  rect(elencoX, elencoY, 169, 11) //SELETOR PENEIRA
  fill(0, 0, 0);
  
     //Goleiro titular
  if(goleiros.length == 0){
    textSize(14)
    text("",50,60);
  }else{
    textSize(14)
    text(goleiros[0].nome,50,60);
  }
  
  //Goleiro reserva
  if(goleiros.length < 2){
    textSize(12)
    text("",50,293);
  }else{
    textSize(12)
    text(goleiros[1].nome,50,293);
  }
  
  //Defensor titular 1    
  if(zagueiros.length == 0){
    textSize(14)
    text("",50,80);
  }else{
    textSize(14);
    text(zagueiros[0].nome,50,80);
  }
  //Defensor titular 2    
  if(zagueiros.length < 2){
    textSize(14)
    text("",50,100);
  }else{
    textSize(14);
    text(zagueiros[1].nome,50,99);
  }
  //Defensor titular 3   
  if(zagueiros.length < 3){
    textSize(14)
    text("",50,120);
  }else{
    textSize(14);
    text(zagueiros[2].nome,50,117);
  }
    //Defensor RESERVA 1   
  if(zagueiros.length < 4){
    textSize(14)
    text("",50,306);
  }else{
    textSize(12);
    text(zagueiros[3].nome,50,306);
  }
  //Defensor RESERVA 2 
  if(zagueiros.length < 5){
    textSize(14)
    text("",50,319);
  }else{
    textSize(12);
    text(zagueiros[4].nome,50,319);
  }
    //defensor RESERVA 3 
  if(zagueiros.length < 6){
    textSize(14)
    text("",50,332);
  }else{
    textSize(12);
    text(zagueiros[5].nome,50,332);
  }
     //meia titular 1  
  if(meias.length == 0){
    textSize(14)
    text("",50,137);
  }else{
    textSize(14);
    text(meias[0].nome,50,137);
  }
   //meia titular 2
  if(meias.length < 2){
    textSize(14)
    text("",50,157);
  }else{
    textSize(14);
    text(meias[1].nome,50,157);
  }
  //meia titular 3
  if(meias.length < 3){
    textSize(14)
    text("",50,176);
  }else{
    textSize(14);
    text(meias[2].nome,50,176);
  }
  //meia titular 4
  if(meias.length < 4){
    textSize(14)
    text("",50,195);
  }else{
    textSize(14);
    text(meias[3].nome,50,195);
  }
      //meia titular 5
  if(meias.length < 5){
    textSize(14)
    text("",50,214);
  }else{
    textSize(14);
    text(meias[4].nome,50,214);
  }
    //meia RESERVA 1 
  if(meias.length < 6){
    textSize(14)
    text("",50,345);
  }else{
    textSize(12);
    text(meias[5].nome,50,345);
  }
  //atacante titular 1
    if(atacantes.length == 0){
    textSize(14)
    text("",50,236);
  }else{
    textSize(14);
    text(atacantes[0].nome,50,236);
  }
   //atacante titular 2
  if(atacantes.length < 2){
    textSize(14)
    text("",50,255);
  }else{
    textSize(14);
    text(atacantes[1].nome,50,255);
  }
      //atacante reserva 1 
  if(atacantes.length < 3){
    textSize(14)
    text("",50,358);
  }else{
    textSize(12);
    text(atacantes[2].nome,50,358);
  }
      //atacante reserva 2
   if(atacantes.length < 4){
    textSize(14)
    text("",50,371);
  }else{
    textSize(12);
    text(atacantes[3].nome,50,371);
  }
}else if(clube.formacao == "4-5-1"){//Formação 4-5-1
  image(esquemaImg[5], 0, 0); //img 4-5-1
  fill(107, 50, 168)
  rect(elencoX, elencoY, 169, 11) //SELETOR PENEIRA
  fill(0, 0, 0);
  
     //Goleiro titular
  if(goleiros.length == 0){
    textSize(14)
    text("",50,60);
  }else{
    textSize(14)
    text(goleiros[0].nome,50,60);
  }
  
  //Goleiro reserva
  if(goleiros.length < 2){
    textSize(12)
    text("",50,293);
  }else{
    textSize(12)
    text(goleiros[1].nome,50,293);
  }
  
  //Defensor titular 1    
  if(zagueiros.length == 0){
    textSize(14)
    text("",50,80);
  }else{
    textSize(14);
    text(zagueiros[0].nome,50,80);
  }
  //Defensor titular 2    
  if(zagueiros.length < 2){
    textSize(14)
    text("",50,100);
  }else{
    textSize(14);
    text(zagueiros[1].nome,50,99);
  }
  //Defensor titular 3   
  if(zagueiros.length < 3){
    textSize(14)
    text("",50,120);
  }else{
    textSize(14);
    text(zagueiros[2].nome,50,117);
  }
  //Defensor titular 4  
  if(zagueiros.length < 4){
    textSize(14)
    text("",50,137);
  }else{
    textSize(14);
    text(zagueiros[3].nome,50,137);
  }
  //Defensor RESERVA 1  
  if(zagueiros.length < 5){
    textSize(14)
    text("",50,306);
  }else{
    textSize(12);
    text(zagueiros[4].nome,50,306);
  }
  //Defensor RESERVA 2  
  if(zagueiros.length < 6){
    textSize(14)
    text("",50,319);
  }else{
    textSize(12);
    text(zagueiros[5].nome,50,319);
  }
  //meia titular 1
  if(meias.length == 0){
    textSize(14)
    text("",50,157);
  }else{
    textSize(14);
    text(meias[0].nome,50,157);
  }
  //meia titular 2
  if(meias.length < 2){
    textSize(14)
    text("",50,176);
  }else{
    textSize(14);
    text(meias[1].nome,50,176);
  }
  //meia titular 3
  if(meias.length < 3){
    textSize(14)
    text("",50,195);
  }else{
    textSize(14);
    text(meias[2].nome,50,195);
  }
  //meia titular 4
  if(meias.length < 4){
    textSize(14)
    text("",50,214);
  }else{
    textSize(14);
    text(meias[3].nome,50,214);
  }
    //meia titular 5
    if(meias.length < 5){
    textSize(14)
    text("",50,236);
  }else{
    textSize(14);
    text(meias[4].nome,50,236);
  }
    //defensor RESERVA 3 
  if(meias.length < 6){
    textSize(14)
    text("",50,332);
  }else{
    textSize(12);
    text(meias[5].nome,50,332);
  }
   //atacante titular 1
  if(atacantes.length == 0){
    textSize(14)
    text("",50,255);
  }else{
    textSize(14);
    text(atacantes[0].nome,50,255);
  }
    //atacante RESERVA 1 
  if(atacantes.length < 2){
    textSize(14)
    text("",50,345);
  }else{
    textSize(12);
    text(atacantes[1].nome,50,345);
  }
        //atacante reserva 1 
  if(atacantes.length < 3){
    textSize(14)
    text("",50,358);
  }else{
    textSize(12);
    text(atacantes[2].nome,50,358);
  }
      //atacante reserva 2
   if(atacantes.length < 4){
    textSize(14)
    text("",50,371);
  }else{
    textSize(12);
    text(atacantes[3].nome,50,371);
  }
}else if(clube.formacao == "5-4-1"){//Formação 5-4-1
  image(esquemaImg[6], 0, 0); //img 5-4-1
  fill(107, 50, 168)
  rect(elencoX, elencoY, 169, 11) //SELETOR PENEIRA
  fill(0, 0, 0);
  
     //Goleiro titular
  if(goleiros.length == 0){
    textSize(14)
    text("",50,60);
  }else{
    textSize(14)
    text(goleiros[0].nome,50,60);
  }
  
  //Goleiro reserva
  if(goleiros.length < 2){
    textSize(12)
    text("",50,293);
  }else{
    textSize(12)
    text(goleiros[1].nome,50,293);
  }
  
  //Defensor titular 1    
  if(zagueiros.length == 0){
    textSize(14)
    text("",50,80);
  }else{
    textSize(14);
    text(zagueiros[0].nome,50,80);
  }
  //Defensor titular 2    
  if(zagueiros.length < 2){
    textSize(14)
    text("",50,100);
  }else{
    textSize(14);
    text(zagueiros[1].nome,50,99);
  }
  //Defensor titular 3   
  if(zagueiros.length < 3){
    textSize(14)
    text("",50,120);
  }else{
    textSize(14);
    text(zagueiros[2].nome,50,117);
  }
  //Defensor titular 4  
  if(zagueiros.length < 4){
    textSize(14)
    text("",50,137);
  }else{
    textSize(14);
    text(zagueiros[3].nome,50,137);
  }
    //Defensor titular 5
  if(zagueiros.length < 5){
    textSize(14)
    text("",50,157);
  }else{
    textSize(14);
    text(zagueiros[4].nome,50,157);
  }
    //Defensor RESERVA 1  
  if(zagueiros.length < 6){
    textSize(14)
    text("",50,306);
  }else{
    textSize(12);
    text(zagueiros[5].nome,50,306);
  }
  //meia titular 1
  if(meias.length == 0){
    textSize(14)
    text("",50,176);
  }else{
    textSize(14);
    text(meias[0].nome,50,176);
  }
  //meia titular 2
  if(meias.length < 2){
    textSize(14)
    text("",50,195);
  }else{
    textSize(14);
    text(meias[1].nome,50,195);
  }
  //meia titular 3
  if(meias.length < 3){
    textSize(14)
    text("",50,214);
  }else{
    textSize(14);
    text(meias[2].nome,50,214);
  }
    //meia titular 4
    if(meias.length < 4){
    textSize(14)
    text("",50,236);
  }else{
    textSize(14);
    text(meias[3].nome,50,236);
  }
    //meia  RESERVA 1  
  if(meias.length < 5){
    textSize(14)
    text("",50,319);
  }else{
    textSize(12);
    text(meias[4].nome,50,319);
  }
  if(meias.length < 6){
    textSize(14)
    text("",50,332);
  }else{
    textSize(12);
    text(meias[5].nome,50,332);
  }
    //atacante titular 1
  if(atacantes.length == 0){
    textSize(14)
    text("",50,255);
  }else{
    textSize(14);
    text(atacantes[0].nome,50,255);
  }
    //atacante RESERVA 1 
  if(atacantes.length < 2){
    textSize(14)
    text("",50,345);
  }else{
    textSize(12);
    text(atacantes[1].nome,50,345);
  }
        //atacante reserva 1 
  if(atacantes.length < 3){
    textSize(14)
    text("",50,358);
  }else{
    textSize(12);
    text(atacantes[2].nome,50,358);
  }
      //atacante reserva 2
   if(atacantes.length < 4){
    textSize(14)
    text("",50,371);
  }else{
    textSize(12);
    text(atacantes[3].nome,50,371);
  }
}

  
  
  
  while (cont < jogadoresDaPeneira1.length) { //INSERE TODOS OS NOMES DE JOGADORES DA PENEIRA!
    textSize(9);
    textAlign(LEFT)
    fill(255, 255, 255);
    text(`${jogadoresDaPeneira1[cont]}`, 215, 57 + i);
    i += 10;
    cont++;
  }
  if (elencoY == 49 && perfilDoJogador) {
    image(jogadoresImg[0], 32, 76);
    fill(40, 113, 138);
    textSize(12);
    text(jogadoresPeneira1[0].nome, 243, 123);
    text(jogadoresPeneira1[0].idade, 243, 140);
    text(jogadoresPeneira1[0].salario, 243, 156);
    text(jogadoresPeneira1[0].contrato, 255, 172);
    text(jogadoresPeneira1[0].posicao, 255, 188);
    text(jogadoresPeneira1[0].personalidade, 285, 204);
    text(jogadoresPeneira1[0].media, 243, 222);

    fill('rgba(21, 76, 94,0.7)')
    rect(selPerfilX, selPerfilY, 30, 18, 2);
  }
  if (elencoY == 59 && perfilDoJogador) {
    image(jogadoresImg[1], 32, 76);
    fill(40, 113, 138);
    textSize(12);
    text(jogadoresPeneira1[1].nome, 243, 123);
    text(jogadoresPeneira1[1].idade, 243, 140);
    text(jogadoresPeneira1[1].salario, 243, 156);
    text(jogadoresPeneira1[1].contrato, 255, 172);
    text(jogadoresPeneira1[1].posicao, 255, 188);
    text(jogadoresPeneira1[1].personalidade, 285, 204);
    text(jogadoresPeneira1[1].media, 243, 222);

    fill('rgba(21, 76, 94,0.7)')
    rect(selPerfilX, selPerfilY, 30, 18, 2);
  }
  if (elencoY == 69 && perfilDoJogador) {
    image(jogadoresImg[2], 32, 76);
    fill(40, 113, 138);
    textSize(12);
    text(jogadoresPeneira1[2].nome, 243, 123);
    text(jogadoresPeneira1[2].idade, 243, 140);
    text(jogadoresPeneira1[2].salario, 243, 156);
    text(jogadoresPeneira1[2].contrato, 255, 172);
    text(jogadoresPeneira1[2].posicao, 255, 188);
    text(jogadoresPeneira1[2].personalidade, 285, 204);
    text(jogadoresPeneira1[2].media, 243, 222);

    fill('rgba(21, 76, 94,0.7)')
    rect(selPerfilX, selPerfilY, 30, 18, 2);
  }
  if (elencoY == 79 && perfilDoJogador) {
    image(jogadoresImg[3], 32, 76);
    fill(40, 113, 138);
    textSize(12);
    text(jogadoresPeneira1[3].nome, 243, 123);
    text(jogadoresPeneira1[3].idade, 243, 140);
    text(jogadoresPeneira1[3].salario, 243, 156);
    text(jogadoresPeneira1[3].contrato, 255, 172);
    text(jogadoresPeneira1[3].posicao, 255, 188);
    text(jogadoresPeneira1[3].personalidade, 285, 204);
    text(jogadoresPeneira1[3].media, 243, 222);

    fill('rgba(21, 76, 94,0.7)')
    rect(selPerfilX, selPerfilY, 30, 18, 2);
  }
  if (elencoY == 89 && perfilDoJogador) {
    image(jogadoresImg[4], 32, 76);
    fill(40, 113, 138);
    textSize(12);
    text(jogadoresPeneira1[4].nome, 243, 123);
    text(jogadoresPeneira1[4].idade, 243, 140);
    text(jogadoresPeneira1[4].salario, 243, 156);
    text(jogadoresPeneira1[4].contrato, 255, 172);
    text(jogadoresPeneira1[4].posicao, 255, 188);
    text(jogadoresPeneira1[4].personalidade, 285, 204);
    text(jogadoresPeneira1[4].media, 243, 222);

    fill('rgba(21, 76, 94,0.7)')
    rect(selPerfilX, selPerfilY, 30, 18, 2);
  }
  if (elencoY == 99 && perfilDoJogador) {
    image(jogadoresImg[5], 32, 76);
    fill(40, 113, 138);
    textSize(12);
    text(jogadoresPeneira1[5].nome, 243, 123);
    text(jogadoresPeneira1[5].idade, 243, 140);
    text(jogadoresPeneira1[5].salario, 243, 156);
    text(jogadoresPeneira1[5].contrato, 255, 172);
    text(jogadoresPeneira1[5].posicao, 255, 188);
    text(jogadoresPeneira1[5].personalidade, 285, 204);
    text(jogadoresPeneira1[5].media, 243, 222);

    fill('rgba(21, 76, 94,0.7)')
    rect(selPerfilX, selPerfilY, 30, 18, 2);
  }
  if (elencoY == 109 && perfilDoJogador) {
    image(jogadoresImg[6], 32, 76);
    fill(40, 113, 138);
    textSize(12);
    text(jogadoresPeneira1[6].nome, 243, 123);
    text(jogadoresPeneira1[6].idade, 243, 140);
    text(jogadoresPeneira1[6].salario, 243, 156);
    text(jogadoresPeneira1[6].contrato, 255, 172);
    text(jogadoresPeneira1[6].posicao, 255, 188);
    text(jogadoresPeneira1[6].personalidade, 285, 204);
    text(jogadoresPeneira1[6].media, 243, 222);

    fill('rgba(21, 76, 94,0.7)')
    rect(selPerfilX, selPerfilY, 30, 18, 2);
  }
  if (elencoY == 119 && perfilDoJogador) {
    image(jogadoresImg[7], 32, 76);
    fill(40, 113, 138);
    textSize(12);
    text(jogadoresPeneira1[7].nome, 243, 123);
    text(jogadoresPeneira1[7].idade, 243, 140);
    text(jogadoresPeneira1[7].salario, 243, 156);
    text(jogadoresPeneira1[7].contrato, 255, 172);
    text(jogadoresPeneira1[7].posicao, 255, 188);
    text(jogadoresPeneira1[7].personalidade, 285, 204);
    text(jogadoresPeneira1[7].media, 243, 222);

    fill('rgba(21, 76, 94,0.7)')
    rect(selPerfilX, selPerfilY, 30, 18, 2);
  }
  if (elencoY == 129 && perfilDoJogador) {
    image(jogadoresImg[8], 32, 76);
    fill(40, 113, 138);
    textSize(12);
    text(jogadoresPeneira1[8].nome, 243, 123);
    text(jogadoresPeneira1[8].idade, 243, 140);
    text(jogadoresPeneira1[8].salario, 243, 156);
    text(jogadoresPeneira1[8].contrato, 255, 172);
    text(jogadoresPeneira1[8].posicao, 255, 188);
    text(jogadoresPeneira1[8].personalidade, 285, 204);
    text(jogadoresPeneira1[8].media, 243, 222);

    fill('rgba(21, 76, 94,0.7)')
    rect(selPerfilX, selPerfilY, 30, 18, 2);
  }
  if (elencoY == 139 && perfilDoJogador) {
    image(jogadoresImg[9], 32, 76);
    fill(40, 113, 138);
    textSize(12);
    text(jogadoresPeneira1[9].nome, 243, 123);
    text(jogadoresPeneira1[9].idade, 243, 140);
    text(jogadoresPeneira1[9].salario, 243, 156);
    text(jogadoresPeneira1[9].contrato, 255, 172);
    text(jogadoresPeneira1[9].posicao, 255, 188);
    text(jogadoresPeneira1[9].personalidade, 285, 204);
    text(jogadoresPeneira1[9].media, 243, 222);

    fill('rgba(21, 76, 94,0.7)')
    rect(selPerfilX, selPerfilY, 30, 18, 2);
  }
  if (elencoY == 149 && perfilDoJogador) {
    image(jogadoresImg[10], 32, 76);
    fill(40, 113, 138);
    textSize(12);
    text(jogadoresPeneira1[10].nome, 243, 123);
    text(jogadoresPeneira1[10].idade, 243, 140);
    text(jogadoresPeneira1[10].salario, 243, 156);
    text(jogadoresPeneira1[10].contrato, 255, 172);
    text(jogadoresPeneira1[10].posicao, 255, 188);
    text(jogadoresPeneira1[10].personalidade, 285, 204);
    text(jogadoresPeneira1[10].media, 243, 222);

    fill('rgba(21, 76, 94,0.7)')
    rect(selPerfilX, selPerfilY, 30, 18, 2);
  }
  if (elencoY == 159 && perfilDoJogador) {
    image(jogadoresImg[11], 32, 76);
    fill(40, 113, 138);
    textSize(12);
    text(jogadoresPeneira1[11].nome, 243, 123);
    text(jogadoresPeneira1[11].idade, 243, 140);
    text(jogadoresPeneira1[11].salario, 243, 156);
    text(jogadoresPeneira1[11].contrato, 255, 172);
    text(jogadoresPeneira1[11].posicao, 255, 188);
    text(jogadoresPeneira1[11].personalidade, 285, 204);
    text(jogadoresPeneira1[11].media, 243, 222);

    fill('rgba(21, 76, 94,0.7)')
    rect(selPerfilX, selPerfilY, 30, 18, 2);
  }
  if (elencoY == 169 && perfilDoJogador) {
    image(jogadoresImg[12], 32, 76);
    fill(40, 113, 138);
    textSize(12);
    text(jogadoresPeneira1[12].nome, 243, 123);
    text(jogadoresPeneira1[12].idade, 243, 140);
    text(jogadoresPeneira1[12].salario, 243, 156);
    text(jogadoresPeneira1[12].contrato, 255, 172);
    text(jogadoresPeneira1[12].posicao, 255, 188);
    text(jogadoresPeneira1[12].personalidade, 285, 204);
    text(jogadoresPeneira1[12].media, 243, 222);

    fill('rgba(21, 76, 94,0.7)')
    rect(selPerfilX, selPerfilY, 30, 18, 2);
  }
  if (elencoY == 179 && perfilDoJogador) {
    image(jogadoresImg[13], 32, 76);
    fill(40, 113, 138);;
    textSize(12);
    text(jogadoresPeneira1[13].nome, 243, 123);
    text(jogadoresPeneira1[13].idade, 243, 140);
    text(jogadoresPeneira1[13].salario, 243, 156);
    text(jogadoresPeneira1[13].contrato, 255, 172);
    text(jogadoresPeneira1[13].posicao, 255, 188);
    text(jogadoresPeneira1[13].personalidade, 285, 204);
    text(jogadoresPeneira1[13].media, 243, 222);

    fill('rgba(21, 76, 94,0.7)')
    rect(selPerfilX, selPerfilY, 30, 18, 2);
  }
  if (elencoY == 189 && perfilDoJogador) {
    image(jogadoresImg[14], 32, 76);
    fill(40, 113, 138);;
    textSize(12);
    text(jogadoresPeneira1[14].nome, 243, 123);
    text(jogadoresPeneira1[14].idade, 243, 140);
    text(jogadoresPeneira1[14].salario, 243, 156);
    text(jogadoresPeneira1[14].contrato, 255, 172);
    text(jogadoresPeneira1[14].posicao, 255, 188);
    text(jogadoresPeneira1[14].personalidade, 285, 204);
    text(jogadoresPeneira1[14].media, 243, 222);

    fill('rgba(21, 76, 94,0.7)')
    rect(selPerfilX, selPerfilY, 30, 18, 2);
  }
  if (elencoY == 199 && perfilDoJogador) {
    image(jogadoresImg[15], 32, 76);
    fill(40, 113, 138);;
    textSize(12);
    text(jogadoresPeneira1[15].nome, 243, 123);
    text(jogadoresPeneira1[15].idade, 243, 140);
    text(jogadoresPeneira1[15].salario, 243, 156);
    text(jogadoresPeneira1[15].contrato, 255, 172);
    text(jogadoresPeneira1[15].posicao, 255, 188);
    text(jogadoresPeneira1[15].personalidade, 285, 204);
    text(jogadoresPeneira1[15].media, 243, 222);

    fill('rgba(21, 76, 94,0.7)')
    rect(selPerfilX, selPerfilY, 30, 18, 2);
  }
  if (elencoY == 209 && perfilDoJogador) {
    image(jogadoresImg[16], 32, 76);
    fill(40, 113, 138);;
    textSize(12);
    text(jogadoresPeneira1[16].nome, 243, 123);
    text(jogadoresPeneira1[16].idade, 243, 140);
    text(jogadoresPeneira1[16].salario, 243, 156);
    text(jogadoresPeneira1[16].contrato, 255, 172);
    text(jogadoresPeneira1[16].posicao, 255, 188);
    text(jogadoresPeneira1[16].personalidade, 285, 204);
    text(jogadoresPeneira1[16].media, 243, 222);

    fill('rgba(21, 76, 94,0.7)')
    rect(selPerfilX, selPerfilY, 30, 18, 2);
  }
  if (elencoY == 219 && perfilDoJogador) {
    image(jogadoresImg[17], 32, 76);
    fill(40, 113, 138);;
    textSize(12);
    text(jogadoresPeneira1[17].nome, 243, 123);
    text(jogadoresPeneira1[17].idade, 243, 140);
    text(jogadoresPeneira1[17].salario, 243, 156);
    text(jogadoresPeneira1[17].contrato, 255, 172);
    text(jogadoresPeneira1[17].posicao, 255, 188);
    text(jogadoresPeneira1[17].personalidade, 285, 204);
    text(jogadoresPeneira1[17].media, 243, 222);

    fill('rgba(21, 76, 94,0.7)')
    rect(selPerfilX, selPerfilY, 30, 18, 2);
  }
  if (elencoY == 229 && perfilDoJogador) {
    image(jogadoresImg[18], 32, 76);
    fill(40, 113, 138);;
    textSize(12);
    text(jogadoresPeneira1[18].nome, 243, 123);
    text(jogadoresPeneira1[18].idade, 243, 140);
    text(jogadoresPeneira1[18].salario, 243, 156);
    text(jogadoresPeneira1[18].contrato, 255, 172);
    text(jogadoresPeneira1[18].posicao, 255, 188);
    text(jogadoresPeneira1[18].personalidade, 285, 204);
    text(jogadoresPeneira1[18].media, 243, 222);

    fill('rgba(21, 76, 94,0.7)')
    rect(selPerfilX, selPerfilY, 30, 18, 2);
  }
  if (elencoY == 239 && perfilDoJogador) {
    image(jogadoresImg[19], 32, 76);
    fill(40, 113, 138);;
    textSize(12);
    text(jogadoresPeneira1[19].nome, 243, 123);
    text(jogadoresPeneira1[19].idade, 243, 140);
    text(jogadoresPeneira1[19].salario, 243, 156);
    text(jogadoresPeneira1[19].contrato, 255, 172);
    text(jogadoresPeneira1[19].posicao, 255, 188);
    text(jogadoresPeneira1[19].personalidade, 285, 204);
    text(jogadoresPeneira1[19].media, 243, 222);

    fill('rgba(21, 76, 94,0.7)')
    rect(selPerfilX, selPerfilY, 30, 18, 2);
  }
  if (elencoY == 249 && perfilDoJogador) {
    image(jogadoresImg[20], 32, 76);
    fill(40, 113, 138);;
    textSize(12);
    text(jogadoresPeneira1[20].nome, 243, 123);
    text(jogadoresPeneira1[20].idade, 243, 140);
    text(jogadoresPeneira1[20].salario, 243, 156);
    text(jogadoresPeneira1[20].contrato, 255, 172);
    text(jogadoresPeneira1[20].posicao, 255, 188);
    text(jogadoresPeneira1[20].personalidade, 285, 204);
    text(jogadoresPeneira1[20].media, 243, 222);

    fill('rgba(21, 76, 94,0.7)')
    rect(selPerfilX, selPerfilY, 30, 18, 2);
  }
  if (elencoY == 259 && perfilDoJogador) {
    image(jogadoresImg[21], 32, 76);
    fill(40, 113, 138);;
    textSize(12);
    text(jogadoresPeneira1[21].nome, 243, 123);
    text(jogadoresPeneira1[21].idade, 243, 140);
    text(jogadoresPeneira1[21].salario, 243, 156);
    text(jogadoresPeneira1[21].contrato, 255, 172);
    text(jogadoresPeneira1[21].posicao, 255, 188);
    text(jogadoresPeneira1[21].personalidade, 285, 204);
    text(jogadoresPeneira1[21].media, 243, 222);

    fill('rgba(21, 76, 94,0.7)')
    rect(selPerfilX, selPerfilY, 30, 18, 2);
  }
  if (elencoY == 269 && perfilDoJogador) {
    image(jogadoresImg[22], 32, 76);
    fill(40, 113, 138);;
    textSize(12);
    text(jogadoresPeneira1[22].nome, 243, 123);
    text(jogadoresPeneira1[22].idade, 243, 140);
    text(jogadoresPeneira1[22].salario, 243, 156);
    text(jogadoresPeneira1[22].contrato, 255, 172);
    text(jogadoresPeneira1[22].posicao, 255, 188);
    text(jogadoresPeneira1[22].personalidade, 285, 204);
    text(jogadoresPeneira1[22].media, 243, 222);

    fill('rgba(21, 76, 94,0.7)')
    rect(selPerfilX, selPerfilY, 30, 18, 2);
  }
  if (elencoY == 279 && perfilDoJogador) {
    image(jogadoresImg[23], 32, 76);
    fill(40, 113, 138);;
    textSize(12);
    text(jogadoresPeneira1[23].nome, 243, 123);
    text(jogadoresPeneira1[23].idade, 243, 140);
    text(jogadoresPeneira1[23].salario, 243, 156);
    text(jogadoresPeneira1[23].contrato, 255, 172);
    text(jogadoresPeneira1[23].posicao, 255, 188);
    text(jogadoresPeneira1[23].personalidade, 285, 204);
    text(jogadoresPeneira1[23].media, 243, 222);

    fill('rgba(21, 76, 94,0.7)')
    rect(selPerfilX, selPerfilY, 30, 18, 2);
  }
  if (elencoY == 289 && perfilDoJogador) {
    image(jogadoresImg[24], 32, 76);
    fill(40, 113, 138);;
    textSize(12);
    text(jogadoresPeneira1[24].nome, 243, 123);
    text(jogadoresPeneira1[24].idade, 243, 140);
    text(jogadoresPeneira1[24].salario, 243, 156);
    text(jogadoresPeneira1[24].contrato, 255, 172);
    text(jogadoresPeneira1[24].posicao, 255, 188);
    text(jogadoresPeneira1[24].personalidade, 285, 204);
    text(jogadoresPeneira1[24].media, 243, 222);

    fill('rgba(21, 76, 94,0.7)')
    rect(selPerfilX, selPerfilY, 30, 18, 2);
  }
  if (elencoY == 299 && perfilDoJogador) {
    image(jogadoresImg[25], 32, 76);
    fill(40, 113, 138);;
    textSize(12);
    text(jogadoresPeneira1[25].nome, 243, 123);
    text(jogadoresPeneira1[25].idade, 243, 140);
    text(jogadoresPeneira1[25].salario, 243, 156);
    text(jogadoresPeneira1[25].contrato, 255, 172);
    text(jogadoresPeneira1[25].posicao, 255, 188);
    text(jogadoresPeneira1[25].personalidade, 285, 204);
    text(jogadoresPeneira1[25].media, 243, 222);

    fill('rgba(21, 76, 94,0.7)')
    rect(selPerfilX, selPerfilY, 30, 18, 2);
  }
  if (elencoY == 309 && perfilDoJogador) {
    image(jogadoresImg[26], 32, 76);
    fill(40, 113, 138);;
    textSize(12);
    text(jogadoresPeneira1[26].nome, 243, 123);
    text(jogadoresPeneira1[26].idade, 243, 140);
    text(jogadoresPeneira1[26].salario, 243, 156);
    text(jogadoresPeneira1[26].contrato, 255, 172);
    text(jogadoresPeneira1[26].posicao, 255, 188);
    text(jogadoresPeneira1[26].personalidade, 285, 204);
    text(jogadoresPeneira1[26].media, 243, 222);

    fill('rgba(21, 76, 94,0.7)')
    rect(selPerfilX, selPerfilY, 30, 18, 2);
  }
  if (elencoY == 319 && perfilDoJogador) {
    image(jogadoresImg[27], 32, 76);
    fill(40, 113, 138);;
    textSize(12);
    text(jogadoresPeneira1[27].nome, 243, 123);
    text(jogadoresPeneira1[27].idade, 243, 140);
    text(jogadoresPeneira1[27].salario, 243, 156);
    text(jogadoresPeneira1[27].contrato, 255, 172);
    text(jogadoresPeneira1[27].posicao, 255, 188);
    text(jogadoresPeneira1[27].personalidade, 285, 204);
    text(jogadoresPeneira1[27].media, 243, 222);

    fill('rgba(21, 76, 94,0.7)')
    rect(selPerfilX, selPerfilY, 30, 18, 2);
  }
  if (elencoY == 329 && perfilDoJogador) {
    image(jogadoresImg[28], 32, 76);
    fill(40, 113, 138);;
    textSize(12);
    text(jogadoresPeneira1[28].nome, 243, 123);
    text(jogadoresPeneira1[28].idade, 243, 140);
    text(jogadoresPeneira1[28].salario, 243, 156);
    text(jogadoresPeneira1[28].contrato, 255, 172);
    text(jogadoresPeneira1[28].posicao, 255, 188);
    text(jogadoresPeneira1[28].personalidade, 285, 204);
    text(jogadoresPeneira1[28].media, 243, 222);

    fill('rgba(21, 76, 94,0.7)')
    rect(selPerfilX, selPerfilY, 30, 18, 2);
  }
  if (elencoY == 339 && perfilDoJogador) {
    image(jogadoresImg[29], 32, 76);
    fill(40, 113, 138);;
    textSize(12);
    text(jogadoresPeneira1[29].nome, 243, 123);
    text(jogadoresPeneira1[29].idade, 243, 140);
    text(jogadoresPeneira1[29].salario, 243, 156);
    text(jogadoresPeneira1[29].contrato, 255, 172);
    text(jogadoresPeneira1[29].posicao, 255, 188);
    text(jogadoresPeneira1[29].personalidade, 285, 204);
    text(jogadoresPeneira1[29].media, 243, 222);

    fill('rgba(21, 76, 94,0.7)')
    rect(selPerfilX, selPerfilY, 30, 18, 2);
  }
  if (elencoY == 349 && perfilDoJogador) {
    image(jogadoresImg[30], 32, 76);
    fill(40, 113, 138);;
    textSize(12);
    text(jogadoresPeneira1[30].nome, 243, 123);
    text(jogadoresPeneira1[30].idade, 243, 140);
    text(jogadoresPeneira1[30].salario, 243, 156);
    text(jogadoresPeneira1[30].contrato, 255, 172);
    text(jogadoresPeneira1[30].posicao, 255, 188);
    text(jogadoresPeneira1[30].personalidade, 285, 204);
    text(jogadoresPeneira1[30].media, 243, 222);

    fill('rgba(21, 76, 94,0.7)')
    rect(selPerfilX, selPerfilY, 30, 18, 2);
  }
  if (elencoY == 359 && perfilDoJogador) {
    image(jogadoresImg[31], 32, 76);
    fill(40, 113, 138);;
    textSize(12);
    text(jogadoresPeneira1[31].nome, 243, 123);
    text(jogadoresPeneira1[31].idade, 243, 140);
    text(jogadoresPeneira1[31].salario, 243, 156);
    text(jogadoresPeneira1[31].contrato, 255, 172);
    text(jogadoresPeneira1[31].posicao, 255, 188);
    text(jogadoresPeneira1[31].personalidade, 285, 204);
    text(jogadoresPeneira1[31].media, 243, 222);

    fill('rgba(21, 76, 94,0.7)')
    rect(selPerfilX, selPerfilY, 30, 18, 2);
  }
  if (elencoY == 369 && perfilDoJogador) {
    image(jogadoresImg[32], 32, 76);
    fill(40, 113, 138);;
    textSize(12);
    text(jogadoresPeneira1[32].nome, 243, 123);
    text(jogadoresPeneira1[32].idade, 243, 140);
    text(jogadoresPeneira1[32].salario, 243, 156);
    text(jogadoresPeneira1[32].contrato, 255, 172);
    text(jogadoresPeneira1[32].posicao, 255, 188);
    text(jogadoresPeneira1[32].personalidade, 285, 204);
    text(jogadoresPeneira1[32].media, 243, 222);

    fill('rgba(21, 76, 94,0.7)')
    rect(selPerfilX, selPerfilY, 30, 18, 2);
  }
  if (elencoY == 379 && perfilDoJogador) {
    image(jogadoresImg[33], 32, 76);
    fill(40, 113, 138);;
    textSize(12);
    text(jogadoresPeneira1[33].nome, 243, 123);
    text(jogadoresPeneira1[33].idade, 243, 140);
    text(jogadoresPeneira1[33].salario, 243, 156);
    text(jogadoresPeneira1[33].contrato, 255, 172);
    text(jogadoresPeneira1[33].posicao, 255, 188);
    text(jogadoresPeneira1[33].personalidade, 285, 204);
    text(jogadoresPeneira1[33].media, 243, 222);

    fill('rgba(21, 76, 94,0.7)')
    rect(selPerfilX, selPerfilY, 30, 18, 2);
    

  }
  
  
    image(minOf, 160,15);  
    if(goleiros.length == 2 && zagueiros.length == 6 && meias.length == 6 && atacantes.length == 4){
      image(minOn, 160,15);
    }

}

function keyPressed() {
  if (keyCode == ENTER) {
    tela += 1;
    contStart++;
    if (contStart > 4) {
      contStart = 4
    }
    if (tela > 3) {
      tela = 3;
    }
  }
  //MOVIMNTOS PARA ESQUERDA
  if (keyCode == LEFT_ARROW && selX > 25 && telaMenu === 0) {
    selX = selX - 120;
    coluna--;
  }
  if (keyCode == LEFT_ARROW && perfilDoJogador && selPerfilX > 40 && selPerfilX <= 81) {
    selPerfilX -= 41;
  }
  if (keyCode == LEFT_ARROW && perfilDoJogador && selPerfilX > 154) {
    selPerfilX -= 38;
  }
  //MOVIMNTOS PARA DIREITA
  if (keyCode == RIGHT_ARROW && selX < 2 * 120 && telaMenu === 0) {
    selX = selX + 120;
    coluna++;
  }
  if (keyCode == RIGHT_ARROW && perfilDoJogador && selPerfilX >= 40 && selPerfilX < 81) {
    selPerfilX += 41;
  }
  if (keyCode == RIGHT_ARROW && perfilDoJogador && selPerfilX >= 154 && selPerfilX < 268) {
    selPerfilX += 38;
  }
  //MOVIMNTOS PARA CIMA
  if (keyCode == UP_ARROW && selY > 30 && telaMenu === 0) {
    selY = selY - 92
    linha--;
  }
  if (keyCode == UP_ARROW && telaMenu === 4 && elencoY > 49) {
    elencoY = elencoY - 10;
    perfilDoJogador = false;
    selPerfilX = 81;
    contShift = 0;
    contagem = 0;
  }
  //MOVIMNTOS PARA BAIXO
  if (keyCode == DOWN_ARROW && selY < 2 * 92 && telaMenu === 0) {
    selY = selY + 92;
    linha++;
  }
  if (keyCode == DOWN_ARROW && telaMenu === 4 && elencoY < 379) {
    elencoY = elencoY + 10;
    perfilDoJogador = false;
    selPerfilX = 81;
    contShift = 0;
    contagem = 0;
  }
  //-------------------------FIM DE MOVIMENTOS--------------------------------

  //UTILAZAÇÃO DE ENTER
  if (linha == 1 && coluna == 1 && keyCode == ENTER && tela == 3 && contStart >= 3) { //ENTRA NA SEÇÃO STADIUM
    telaMenu = 1;
    contStart++;

  }
  if (linha == 1 && coluna == 2 && keyCode == ENTER && tela == 3) { //ENTRA NA SEÇÃO FINANÇAS
    telaMenu = 2;
    contStart++;

  }
  if (linha == 1 && coluna == 3 && keyCode == ENTER && tela == 3) { //ENTRA NA SEÇÃO CALENDÁRIO
    telaMenu = 3;
    contStart++;
  }
  if (linha == 2 && coluna == 1 && keyCode == ENTER && tela == 3) {
    telaMenu = 4;
  }
  if (keyCode == LEFT_ARROW && telaMenu == 3 && calX > 139) { //MOVE SELETOR DO CALENDÁRIO
    calX -= 190;
  }
  if (keyCode == RIGHT_ARROW && telaMenu == 3 && calX < 139 + 190) { //MOVE SELETOR DO CALENDÁRIO
    calX += 190;
    semJogadores = false;
  }
  if (telaMenu == 3 && keyCode == SHIFT && calX == 139) { //VERIFICA SE TEM JOGADORES SUFICIENTES PARA INSCREVER NA COMPETIÇÃO
    if (temDezesseis) {
      //------------------------------VALIDE A PARTICIPAÇÃO EM CAMPEONATOS AQUI----------------------------------------
    } else {
      semJogadores = true;
    }
  }
  if (telaMenu == 3 && keyCode == SHIFT && calX == 329) { //SERVE PARA JOGADOR ORGANIZAR TOTAL DE PENEIRAS
    if (quantidadeDePeneiras === 0) { // QUANDO TODAS AS PENIRAS ACABAR DEVE SE ZERAR O VALOR DE QTD DE PENEIRA.
      organizarPeneira = true;
    }

  }
  if (keyCode == SHIFT && telaMenu == 1 && caixa >= atualizar[stadiumAtual]) {
    semGrana = false;
    caixa -= atualizar[stadiumAtual];
    console.log(caixa);
    stadiumAtual++;
  }
  if (keyCode == SHIFT && telaMenu == 1 && caixa < atualizar[stadiumAtual]) {
    semGrana = true;

  }
  if (keyCode == SHIFT && telaMenu == 4) {
    perfilDoJogador = true;
    if (contShift < 2) {
      contShift++;
    }

  }
  if (keyCode == SHIFT && perfilDoJogador && selPerfilX == 40) {
    perfilDoJogador = false;
    selPerfilX = 81
    contShift = 0;
    contagem = 0;
  }
  if (keyCode == SHIFT && contShift == 2 && perfilDoJogador && selPerfilX == 81) {
    selPerfilX = 154;
  }
  if (keyCode == SHIFT && perfilDoJogador && selPerfilX == 154) { //AICIONA JOGADORES A POSIÇÃO DE GOLEIRO
    if (keyCode == SHIFT && contagem < 3)
      contagem++ //contador de shift dentro do adiconar peneira
      for (var jogador of jogadoresPeneira1) {
        if (jogador.posicaoMenu == elencoY && contagem >= 2 && goleiros.length < 2 && jogador.posicao != "GK") {
          jogador.posicao = "GK"
          goleiros.push(jogador);
          for (player of zagueiros) { // remove o jogador caso esteja entre os defensores
            if (player == jogador) {
              index = zagueiros.indexOf(jogador);
              zagueiros.splice(index, index + 1);
              console.log(zagueiros)
            }
          }
          for (player of meias) { // remove o jogador caso esteja entre os meias
            if (player == jogador) {
              index = meias.indexOf(jogador);
              meias.splice(index, index + 1);
            }
          }
          for (player of atacantes) { // remove o jogador caso esteja entre os meias
            if (player == jogador) {
              index = atacantes.indexOf(jogador);
              atacantes.splice(index, index + 1);
            }
          }

          contagem = 1;
        } else if (jogador.posicaoMenu == elencoY && contagem >= 2 && goleiros.length == 2 && jogador.posicao != "GK") {
          jogador.posicao = "GK";
          goleiros.shift();
          goleiros.push(jogador);
          for (player of zagueiros) { // remove o jogador caso esteja entre os defensores
            if (player == jogador) {
              index = zagueiros.indexOf(jogador);
              zagueiros.splice(index, index + 1);
              console.log(zagueiros)
            }
          }
          for (player of meias) { // remove o jogador caso esteja entre os meias
            if (player == jogador) {
              index = meias.indexOf(jogador);
              meias.splice(index, index + 1);
            }
          }
          for (player of atacantes) { // remove o jogador caso esteja entre os meias
            if (player == jogador) {
              index = atacantes.indexOf(jogador);
              atacantes.splice(index, index + 1);
            }
          }
        }
      }
  }
  if (keyCode == SHIFT && perfilDoJogador && selPerfilX == 192) { //AICIONA JOGADORES A POSIÇÃO DE DEFENSORES
    for (var jogador of jogadoresPeneira1) {
      if (jogador.posicaoMenu == elencoY && zagueiros.length < 6 && jogador.posicao != "DF") {
        jogador.posicao = "DF";
        zagueiros.push(jogador);
        for (player of goleiros) { // remove o jogador caso esteja entre os goleiros
          if (player == jogador) {
            index = goleiros.indexOf(jogador);
            goleiros.splice(index, index + 1);
            console.log(goleiros)
          }
        }
        for (player of meias) { // remove o jogador caso esteja entre os meias
            if (player == jogador) {
              index = meias.indexOf(jogador);
              meias.splice(index, index + 1);
            }
        }
        
      } else if (jogador.posicaoMenu == elencoY && zagueiros.length == 6 && jogador.posicao != "DF") {
        jogador.posicao = "DF";
        zagueiros.shift();
        zagueiros.push(jogador);
        console.log(zagueiros);
        for (player of goleiros) { // remove o jogador caso esteja entre os goleiros
          if (player == jogador) {
            index = goleiros.indexOf(jogador);
            goleiros.splice(index, index + 1);
          }
        }
        for (player of meias) { // remove o jogador caso esteja entre os meias
            if (player == jogador) {
              index = meias.indexOf(jogador);
              meias.splice(index, index + 1);
            }
        }
        for (player of atacantes) { // remove o jogador caso esteja entre os meias
            if (player == jogador) {
              index = atacantes.indexOf(jogador);
              atacantes.splice(index, index + 1);
            }
        }
      }
    }
  }
  if (keyCode == SHIFT && perfilDoJogador && selPerfilX == 230) {
    for (var jogador of jogadoresPeneira1) {
      if (jogador.posicaoMenu == elencoY && meias.length < 6 && jogador.posicao != "MC"){
        jogador.posicao = "MC";
        meias.push(jogador);
        for (player of goleiros) { // remove o jogador caso esteja entre os goleiros
          if(player == jogador){
            index = goleiros.indexOf(jogador);
            goleiros.splice(index, index + 1);
          }
        }
        for (player of zagueiros) { // remove o jogador caso esteja entre os defensores
            if (player == jogador) {
              index = zagueiros.indexOf(jogador);
              zagueiros.splice(index, index + 1);
            }
        }
        for (player of atacantes) { // remove o jogador caso esteja entre os meias
            if (player == jogador) {
              index = atacantes.indexOf(jogador);
              atacantes.splice(index, index + 1);
            }
        }
      }else if (jogador.posicaoMenu == elencoY && meias.length == 6 && jogador.posicao != "MC"){
        jogador.posicao = "MC";
        meias.shift();
        meias.push(jogador);
        for (player of goleiros) { // remove o jogador caso esteja entre os goleiros
          if (player == jogador) {
            index = goleiros.indexOf(jogador);
            goleiros.splice(index, index + 1);
          }
        }
        for (player of zagueiros) { // remove o jogador caso esteja entre os defensores
            if (player == jogador) {
              index = zagueiros.indexOf(jogador);
              zagueiros.splice(index, index + 1);
            }
        }
        for (player of atacantes) { // remove o jogador caso esteja entre os meias
            if (player == jogador) {
              index = atacantes.indexOf(jogador);
              atacantes.splice(index, index + 1);
            }
        }
      }
    }
  }
  if (keyCode == SHIFT && perfilDoJogador && selPerfilX == 268) {
    for (var jogador of jogadoresPeneira1) {
      if (jogador.posicaoMenu == elencoY && atacantes.length < 4 && jogador.posicao != "AT"){
        jogador.posicao = "AT";
        atacantes.push(jogador);
        for (player of goleiros) { // remove o jogador caso esteja entre os goleiros
          if(player == jogador){
            index = goleiros.indexOf(jogador);
            goleiros.splice(index, index + 1);
          }
        }
        for (player of zagueiros) { // remove o jogador caso esteja entre os defensores
            if (player == jogador) {
              index = zagueiros.indexOf(jogador);
              zagueiros.splice(index, index + 1);
              console.log(zagueiros)
            }
        }
        for (player of meias) { // remove o jogador caso esteja entre os meias
            if (player == jogador) {
              index = meias.indexOf(jogador);
              meias.splice(index, index + 1);
            }
        }
      }else if (jogador.posicaoMenu == elencoY && atacantes.length == 4 && jogador.posicao != "AT"){
        jogador.posicao = "AT";
        atacantes.shift();
        atacantes.push(jogador);
        for (player of goleiros) { // remove o jogador caso esteja entre os goleiros
          if (player == jogador) {
            index = goleiros.indexOf(jogador);
            goleiros.splice(index, index + 1);
          }
        }
        for (player of zagueiros) { // remove o jogador caso esteja entre os defensores
            if (player == jogador) {
              index = zagueiros.indexOf(jogador);
              zagueiros.splice(index, index + 1);
              console.log(zagueiros)
            }
        }
        for (player of meias) { // remove o jogador caso esteja entre os meias
            if (player == jogador) {
              index = meias.indexOf(jogador);
              meias.splice(index, index + 1);
            }
        }
      }
    }
  }
  if (keyCode == ESCAPE && !perfilDoJogador) { //VOLTA PARA MENU
    telaMenu = 0;
    semGrana = false;
    semJogadores = false;
  }
  if (keyCode == ESCAPE && perfilDoJogador == true) { //VOLTA PARA MENU
    perfilDoJogador = false;
    contShift = 0;
    contagem = 0; //contador de shift dentro do adiconar peneira
    selPerfilX = 81;
  }

}