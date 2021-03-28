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
  esquemaImg = [loadImage('image/esquema-3-4-3.png'),loadImage('image/esquema-3-5-2.png'),
  loadImage('image/esquema-4-4-2.png'),loadImage('image/esquema-4-3-3.png'),loadImage('image/esquema-4-5-1.png'),
  loadImage('image/esquema-4-4-2.png'),loadImage('image/esquema-5-4-1.png')];
  
  jogadoresImg = [loadImage("image/perfil-do-jogador.png"), loadImage("image/perfil-do-jogador1.png"), 
  loadImage("image/perfil-do-jogador2.png"), loadImage("image/perfil-do-jogador3.png"), loadImage("image/perfil-do-jogador4.png")
  , loadImage("image/perfil-do-jogador5.png"), loadImage("image/perfil-do-jogador6.png"), loadImage("image/perfil-do-jogador7.png")
  , loadImage("image/perfil-do-jogador8.png"), loadImage("image/perfil-do-jogador9.png"), loadImage("image/perfil-do-jogador10.png")
  , loadImage("image/perfil-do-jogador11.png"), loadImage("image/perfil-do-jogador12.png"), loadImage("image/perfil-do-jogador13.png")]
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
var organizarPeneira = false;
var quantidadeDePeneiras = 0;

//jogadoreselenco
var miguel = {
  nome:"Miguel",
  idade:19,
  salario:0,
  contrato:"sem contrato",
  posicao:"indefinida",
  personalidade:"tranquilo",
  media:0,
  jogos:0,
  gols:0,
  assistencias:0,
  cartoesAmarelos:0,
  cartoesVermelhos:0,
  contusao:0,
  posicaoMenu:49,
}
var davi = {
  nome:"Davi",
  idade:25,
  salario:0,
  contrato:"sem contrato",
  posicao:"indefinida",
  personalidade:"tranquilo",
  media:0,
  jogos:0,
  gols:0,
  assistencias:0,
  cartoesAmarelos:0,
  cartoesVermelhos:0,
  contusao:0,
  posicaoMenu:49,
}
var arthur = {
  nome:"Arthur",
  idade:16,
  salario:0,
  contrato:"sem contrato",
  posicao:"indefinida",
  personalidade:"tranquilo",
  media:0,
  jogos:0,
  gols:0,
  assistencias:0,
  cartoesAmarelos:0,
  cartoesVermelhos:0,
  contusao:0,
  posicaoMenu:49,
}
var pedro = {
  nome:"Pedro",
  idade:23,
  salario:0,
  contrato:"sem contrato",
  posicao:"indefinida",
  personalidade:"tranquilo",
  media:0,
  jogos:0,
  gols:0,
  assistencias:0,
  cartoesAmarelos:0,
  cartoesVermelhos:0,
  contusao:0,
  posicaoMenu:49,
}
var gabriel = {
  nome:"Gabriel",
  idade:19,
  salario:0,
  contrato:"sem contrato",
  posicao:"indefinida",
  personalidade:"tranquilo",
  media:0,
  jogos:0,
  gols:0,
  assistencias:0,
  cartoesAmarelos:0,
  cartoesVermelhos:0,
  contusao:0,
  posicaoMenu:49,
}
var bernardo = {
  nome:"Bernardo",
  idade:28,
  salario:0,
  contrato:"sem contrato",
  posicao:"indefinida",
  personalidade:"tranquilo",
  media:0,
  jogos:0,
  gols:0,
  assistencias:0,
  cartoesAmarelos:0,
  cartoesVermelhos:0,
  contusao:0,
  posicaoMenu:49,
}
var lucas = {
  nome:"Lucas",
  idade:33,
  salario:0,
  contrato:"sem contrato",
  posicao:"indefinida",
  personalidade:"tranquilo",
  media:0,
  jogos:0,
  gols:0,
  assistencias:0,
  cartoesAmarelos:0,
  cartoesVermelhos:0,
  contusao:0,
  posicaoMenu:49,
}
var matheus = {
  nome:"Matheus",
  idade:28,
  salario:0,
  contrato:"sem contrato",
  posicao:"indefinida",
  personalidade:"tranquilo",
  media:0,
  jogos:0,
  gols:0,
  assistencias:0,
  cartoesAmarelos:0,
  cartoesVermelhos:0,
  contusao:0,
  posicaoMenu:49,
}
var rafael = {
  nome:"Rafael",
  idade:30,
  salario:0,
  contrato:"sem contrato",
  posicao:"indefinida",
  personalidade:"tranquilo",
  media:0,
  jogos:0,
  gols:0,
  assistencias:0,
  cartoesAmarelos:0,
  cartoesVermelhos:0,
  contusao:0,
  posicaoMenu:49,
}
var heitor = {
  nome:"Heitor",
  idade:37,
  salario:0,
  contrato:"sem contrato",
  posicao:"indefinida",
  personalidade:"tranquilo",
  media:0,
  jogos:0,
  gols:0,
  assistencias:0,
  cartoesAmarelos:0,
  cartoesVermelhos:0,
  contusao:0,
  posicaoMenu:49,
}
var enzo = {
  nome:"Enzo",
  idade:29,
  salario:0,
  contrato:"sem contrato",
  posicao:"indefinida",
  personalidade:"tranquilo",
  media:0,
  jogos:0,
  gols:0,
  assistencias:0,
  cartoesAmarelos:0,
  cartoesVermelhos:0,
  contusao:0,
  posicaoMenu:49,
}
var guilherme = {
  nome:"Guilherme",
  idade:15,
  salario:0,
  contrato:"sem contrato",
  posicao:"indefinida",
  personalidade:"tranquilo",
  media:0,
  jogos:0,
  gols:0,
  assistencias:0,
  cartoesAmarelos:0,
  cartoesVermelhos:0,
  contusao:0,
  posicaoMenu:49,
}
var nicolas = {
  nome:"Nicolas",
  idade:39,
  salario:0,
  contrato:"sem contrato",
  posicao:"indefinida",
  personalidade:"tranquilo",
  media:0,
  jogos:0,
  gols:0,
  assistencias:0,
  cartoesAmarelos:0,
  cartoesVermelhos:0,
  contusao:0,
  posicaoMenu:49,
}
var lorenzo = {
  nome:"Lorenzo",
  idade:27,
  salario:0,
  contrato:"sem contrato",
  posicao:"indefinida",
  personalidade:"tranquilo",
  media:0,
  jogos:0,
  gols:0,
  assistencias:0,
  cartoesAmarelos:0,
  cartoesVermelhos:0,
  contusao:0,
  posicaoMenu:49,
}
var gustavo = {
  nome:"Gustavo",
  idade:19,
  salario:0,
  contrato:"sem contrato",
  posicao:"indefinida",
  personalidade:"tranquilo",
  media:0,
  jogos:0,
  gols:0,
  assistencias:0,
  cartoesAmarelos:0,
  cartoesVermelhos:0,
  contusao:0,
  posicaoMenu:49,
}

var jogadoresPeneira1 =[miguel,davi,arthur,pedro,gabriel,bernardo,lucas,matheus,rafael,heitor,enzo,guilherme,nicolas,lorenzo,gustavo]
var jogadoresDaPeneira1 = [miguel.nome, davi.nome, arthur.nome, pedro.nome, gabriel.nome, 
bernardo.nome, lucas.nome, matheus.nome, rafael.nome, heitor.nome, enzo.nome, guilherme.nome, 
nicolas.nome, lorenzo.nome, gustavo.nome, "Felipe", "Samuel", "João Pedro", "Daniel", 
"Vitor", "Leonardo", "Henrique", "Theo", "Murilo", "Eduardo", "Pedro Henrique", 
"Pietro", "Cauã", "Isaac", "Caio", "Vinicius", "Benjamin", "João", "Lucca"];
var jogadoresDaPeneira2 = ["João Miguel", "Bryan", "Joaquim", "João Vitor", "Thiago", "Antônio", "Davi Lucas", 
"Francisco", "Enzo Gabriel", "Bruno", "Emanuel", "João Gabriel", "Ian", "Davi Luiz", 
"Rodrigo", "Otávio", "Alexsandro Duarte"];
var elencoX = 214;
var elencoY = 49;
var perfilDoJogador = false;

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
  }if(telaMenu == 4){
    elenco();
  }

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
  var i=0;
  image(calendarioImg,0,0);
  if(!campeonatos){
    textSize(12);
    textAlign(LEFT)
    fill(0,0,0)
    text(`Você ainda não está inscrito em competições.`,75,122,100,100);
  }
  if(!peneiras){
    textSize(10);
    fill(0,0,0)
    text(`Sem nenhuma peneira marcada. A quantidade de peneira determina quantos jogos treinos os jogadores que voce selecionar terão para participar, ao fim dos do periodo de partidas você terá que decidir quem fica e quem deixa o clube.`,207,122,125,140);
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
  if(organizarPeneira){    
    quantidadeDePeneiras = prompt("Quantas peneiras deseja ralizar esse més? insira no maximo 10 peneiras");
    if(quantidadeDePeneiras <=10){
      if(quantidadeDePeneiras === null){//CASO A PESSOA SAIA SEM DEFINIR UM VALOR O PROGRAMA TRAVA (ESSE IF CONCERTA)
      quantidadeDePeneiras = 0;
      }else{
        peneiras = true;
      }
      
    }else{
      quantidadeDePeneiras = 0;
    }
    
    textSize(12);
    organizarPeneira = false;
  }
  if(quantidadeDePeneiras !== 0){
    if(i <= quantidadeDePeneiras){
      fill(0,0,0);
      textAlign(LEFT)
      text(`Peneiras a serem realizadas: ${quantidadeDePeneiras}`,207,122,125,140);
      i++;
    }
  }
}

function elenco (){
  i = 0;
  cont = 0;
  image(esquemaImg[2],0,0);
  fill(107, 50, 168)
  rect(elencoX,elencoY,169,11)//SELETOR PENEIRA
  fill(0,0,0)
  text(elencoY,200,200)
  while(cont < jogadoresDaPeneira1.length){//INSERE TODOS OS NOMES DE JOGADORES DA PENEIRA!
    textSize(9);
    textAlign(LEFT)
    fill(255,255,255);
    text(`${jogadoresDaPeneira1[cont]}`,215,57+i);
    i += 10;
    cont ++;
  }
  if(elencoY == 49 && perfilDoJogador){
    image(jogadoresImg[0],32,76);
    fill(40, 113, 138);
    textSize(12);
    text(jogadoresPeneira1[0].nome,243,123);
    text(jogadoresPeneira1[0].idade,243,140);
    text(jogadoresPeneira1[0].salario,243,156);
    text(jogadoresPeneira1[0].contrato,255,172);
    text(jogadoresPeneira1[0].posicao,255,188);
    text(jogadoresPeneira1[0].personalidade,285,204);
    text(jogadoresPeneira1[0].media,243,222);
  }
    if(elencoY == 59 && perfilDoJogador){
    image(jogadoresImg[1],32,76);
    fill(40, 113, 138);
    textSize(12);
    text(jogadoresPeneira1[1].nome,243,123);
    text(jogadoresPeneira1[1].idade,243,140);
    text(jogadoresPeneira1[1].salario,243,156);
    text(jogadoresPeneira1[1].contrato,255,172);
    text(jogadoresPeneira1[1].posicao,255,188);
    text(jogadoresPeneira1[1].personalidade,285,204);
    text(jogadoresPeneira1[1].media,243,222);
  }
    if(elencoY == 69 && perfilDoJogador){
    image(jogadoresImg[2],32,76);
    fill(40, 113, 138);
    textSize(12);
    text(jogadoresPeneira1[2].nome,243,123);
    text(jogadoresPeneira1[2].idade,243,140);
    text(jogadoresPeneira1[2].salario,243,156);
    text(jogadoresPeneira1[2].contrato,255,172);
    text(jogadoresPeneira1[2].posicao,255,188);
    text(jogadoresPeneira1[2].personalidade,285,204);
    text(jogadoresPeneira1[2].media,243,222);
  }
    if(elencoY == 79 && perfilDoJogador){
    image(jogadoresImg[3],32,76);
    fill(40, 113, 138);
    textSize(12);
    text(jogadoresPeneira1[3].nome,243,123);
    text(jogadoresPeneira1[3].idade,243,140);
    text(jogadoresPeneira1[3].salario,243,156);
    text(jogadoresPeneira1[3].contrato,255,172);
    text(jogadoresPeneira1[3].posicao,255,188);
    text(jogadoresPeneira1[3].personalidade,285,204);
    text(jogadoresPeneira1[3].media,243,222);
  }
    if(elencoY == 89 && perfilDoJogador){
    image(jogadoresImg[4],32,76);
    fill(40, 113, 138);
    textSize(12);
    text(jogadoresPeneira1[4].nome,243,123);
    text(jogadoresPeneira1[4].idade,243,140);
    text(jogadoresPeneira1[4].salario,243,156);
    text(jogadoresPeneira1[4].contrato,255,172);
    text(jogadoresPeneira1[4].posicao,255,188);
    text(jogadoresPeneira1[4].personalidade,285,204);
    text(jogadoresPeneira1[4].media,243,222);
  }
    if(elencoY == 99 && perfilDoJogador){
    image(jogadoresImg[5],32,76);
    fill(40, 113, 138);
    textSize(12);
    text(jogadoresPeneira1[5].nome,243,123);
    text(jogadoresPeneira1[5].idade,243,140);
    text(jogadoresPeneira1[5].salario,243,156);
    text(jogadoresPeneira1[5].contrato,255,172);
    text(jogadoresPeneira1[5].posicao,255,188);
    text(jogadoresPeneira1[5].personalidade,285,204);
    text(jogadoresPeneira1[5].media,243,222);
  }
  if(elencoY == 109 && perfilDoJogador){
    image(jogadoresImg[6],32,76);
    fill(40, 113, 138);
    textSize(12);
    text(jogadoresPeneira1[6].nome,243,123);
    text(jogadoresPeneira1[6].idade,243,140);
    text(jogadoresPeneira1[6].salario,243,156);
    text(jogadoresPeneira1[6].contrato,255,172);
    text(jogadoresPeneira1[6].posicao,255,188);
    text(jogadoresPeneira1[6].personalidade,285,204);
    text(jogadoresPeneira1[6].media,243,222);
  }
  if(elencoY == 119 && perfilDoJogador){
    image(jogadoresImg[7],32,76);
    fill(40, 113, 138);
    textSize(12);
    text(jogadoresPeneira1[7].nome,243,123);
    text(jogadoresPeneira1[7].idade,243,140);
    text(jogadoresPeneira1[7].salario,243,156);
    text(jogadoresPeneira1[7].contrato,255,172);
    text(jogadoresPeneira1[7].posicao,255,188);
    text(jogadoresPeneira1[7].personalidade,285,204);
    text(jogadoresPeneira1[7].media,243,222);
  }
  
  if(elencoY == 129 && perfilDoJogador){
    image(jogadoresImg[8],32,76);
    fill(40, 113, 138);
    textSize(12);
    text(jogadoresPeneira1[8].nome,243,123);
    text(jogadoresPeneira1[8].idade,243,140);
    text(jogadoresPeneira1[8].salario,243,156);
    text(jogadoresPeneira1[8].contrato,255,172);
    text(jogadoresPeneira1[8].posicao,255,188);
    text(jogadoresPeneira1[8].personalidade,285,204);
    text(jogadoresPeneira1[8].media,243,222);
  }
  if(elencoY == 139 && perfilDoJogador){
    image(jogadoresImg[9],32,76);
    fill(40, 113, 138);
    textSize(12);
    text(jogadoresPeneira1[9].nome,243,123);
    text(jogadoresPeneira1[9].idade,243,140);
    text(jogadoresPeneira1[9].salario,243,156);
    text(jogadoresPeneira1[9].contrato,255,172);
    text(jogadoresPeneira1[9].posicao,255,188);
    text(jogadoresPeneira1[9].personalidade,285,204);
    text(jogadoresPeneira1[9].media,243,222);
  }
  if(elencoY == 149 && perfilDoJogador){
    image(jogadoresImg[10],32,76);
    fill(40, 113, 138);
    textSize(12);
    text(jogadoresPeneira1[10].nome,243,123);
    text(jogadoresPeneira1[10].idade,243,140);
    text(jogadoresPeneira1[10].salario,243,156);
    text(jogadoresPeneira1[10].contrato,255,172);
    text(jogadoresPeneira1[10].posicao,255,188);
    text(jogadoresPeneira1[10].personalidade,285,204);
    text(jogadoresPeneira1[10].media,243,222);
  }
  if(elencoY == 159 && perfilDoJogador){
    image(jogadoresImg[11],32,76);
    fill(40, 113, 138);
    textSize(12);
    text(jogadoresPeneira1[11].nome,243,123);
    text(jogadoresPeneira1[11].idade,243,140);
    text(jogadoresPeneira1[11].salario,243,156);
    text(jogadoresPeneira1[11].contrato,255,172);
    text(jogadoresPeneira1[11].posicao,255,188);
    text(jogadoresPeneira1[11].personalidade,285,204);
    text(jogadoresPeneira1[11].media,243,222);
  }
  if(elencoY == 169 && perfilDoJogador){
    image(jogadoresImg[12],32,76);
    fill(40, 113, 138);
    textSize(12);
    text(jogadoresPeneira1[12].nome,243,123);
    text(jogadoresPeneira1[12].idade,243,140);
    text(jogadoresPeneira1[12].salario,243,156);
    text(jogadoresPeneira1[12].contrato,255,172);
    text(jogadoresPeneira1[12].posicao,255,188);
    text(jogadoresPeneira1[12].personalidade,285,204);
    text(jogadoresPeneira1[12].media,243,222);
  }
  if(elencoY == 179 && perfilDoJogador){
    image(jogadoresImg[13],32,76);
    fill(40, 113, 138);;
    textSize(12);
    text(jogadoresPeneira1[13].nome,243,123);
    text(jogadoresPeneira1[13].idade,243,140);
    text(jogadoresPeneira1[13].salario,243,156);
    text(jogadoresPeneira1[13].contrato,255,172);
    text(jogadoresPeneira1[13].posicao,255,188);
    text(jogadoresPeneira1[13].personalidade,285,204);
    text(jogadoresPeneira1[13].media,243,222);
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
  //MOVIMNTOS PARA ESQUERDA
  if(keyCode == LEFT_ARROW && selX >25 && telaMenu === 0){
    selX = selX - 120;
    coluna--;
  }
  //MOVIMNTOS PARA DIREITA
  if(keyCode == RIGHT_ARROW && selX <2*120 && telaMenu === 0){
    selX = selX + 120;
    coluna++;
  }
  //MOVIMNTOS PARA CIMA
  if(keyCode == UP_ARROW && selY > 30 && telaMenu === 0){
    selY = selY - 92
    linha--;
  }
  if(keyCode == UP_ARROW && telaMenu === 4 && elencoY > 49){
    elencoY = elencoY - 10;
    perfilDoJogador = false;
  }
  //MOVIMNTOS PARA BAIXO
  if(keyCode == DOWN_ARROW && selY < 2*92 && telaMenu === 0){
    selY = selY + 92;
    linha++;
  }
  if(keyCode == DOWN_ARROW && telaMenu === 4 && elencoY < 379){
    elencoY = elencoY + 10;
    perfilDoJogador = false;
  }
  //-------------------------FIM DE MOVIMENTOS--------------------------------
  
  //UTILAZAÇÃO DE ENTER
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
  if(linha == 2 && coluna == 1 && keyCode == ENTER && tela == 3){
    telaMenu = 4;
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
  if(telaMenu == 3 && keyCode == SHIFT && calX == 329 ){//SERVE PARA JOGADOR ORGANIZAR TOTAL DE PENEIRAS
    if(quantidadeDePeneiras === 0){// QUANDO TODAS AS PENIRAS ACABAR DEVE SE ZERAR O VALOR DE QTD DE PENEIRA.
      organizarPeneira = true;
    }
    
  }
  if(keyCode == SHIFT && telaMenu == 1 && caixa >= atualizar[stadiumAtual]){
    semGrana = false;
    caixa -= atualizar[stadiumAtual];
    console.log(caixa);
    stadiumAtual++;
  }
  if(keyCode == SHIFT && telaMenu == 1 && caixa < atualizar[stadiumAtual]){
    semGrana = true;
    
  }
  if(keyCode == SHIFT && telaMenu == 4){
    perfilDoJogador = true;
  }
  if(keyCode == ESCAPE && !perfilDoJogador ){//VOLTA PARA MENU
      telaMenu = 0;
      semGrana = false;
      semJogadores = false;
  }
  if(keyCode == ESCAPE && perfilDoJogador == true){//VOLTA PARA MENU
      perfilDoJogador = false;
  }
  
}
