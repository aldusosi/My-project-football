function preload() {
  logo = loadImage('image/logo-my-clube.png');
}


var Time = true;
var contFrames = 0;
var segundos = 0;
var BemVindo = false;
var apareceLogo = false;
var Space = 0;

W=400;
H=400;
function setup() {
  createCanvas(W,H);
  frameRate(30);
}
//CONTROLA OS SEGUNDOS
function time(){
  if(Time){
       if(frameRate()>=30){
      contFrames++;
      if(contFrames >= 30){
        segundos++;
        contFrames = 0;
      }
    }
  }
 
}
//EXIBE UMA MENSAGEM DE SEJA BEM VINDO
function bemVindo(){
  if(segundos >= 1){
    BemVindo = true;
    if(BemVindo && segundos<3){
      color(255,255,255)
      textSize(32);
      text("Olá seja bem vindo",50,50);
      if(segundos >= 3){
        BemVindo = false;
      }
    }
  }
}



//EXIBE O NOME DO JOGO E UMA BREVE EXPLICAÇÃO
function logoJogo(){
  if(segundos >=3){
    
    apareceLogo = true;
    
    if(apareceLogo && Space === 0){
      image(logo,0,0);
      
      if(keyIsPressed === true && apareceLogo){//este bloco muda a variável Space como detecção da tecla
        Space = 1;
      }
      
      if(Space !== 0){
        apareceLogo = false;
        key = "p";
      }
    }
  }
}

//

function draw() {
  time();
  background(0,150,0);
  color(250,250,250);
  textSize(32);
  text(segundos,200,200);
  bemVindo();
  logoJogo();
}