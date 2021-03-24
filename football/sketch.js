function preload() {
  logoImg = loadImage('image/logo-my-clube.png');
  peneiraImg = loadImage('image/peneira.png')
  menuImg = loadImage('image/menu.png');
  stadiumImg = loadImage('image/stadium.png')
}

var W = 400;
var H = 400;

var BemVindo = false;
var Logo = false;
var Peneira = false;
var Menu = true;
var Stadium = false;
var caixa = 2000;
var atualStadium = 0; //variável que guarda a atualização


var seleBemX = 0;
var seleLogoX = 0;
var selePeneX = 0;
var seleStadiumX = 0;
var selMenuX = 25;
var selMenuY = 13;
var seletorY = 375;

function setup() {
  createCanvas(W,H);
  keyReleased();
  
}
// Exibe mensagem de bem vindo
function bemVindo(){
  if(BemVindo){
    background(3, 153, 23);
    color(255,255,255);
    text("Ola! seja bem vindo.", 25,20);
    
    
    text("desejas continuar?",0,350)
    textSize(20)
    rect(seleBemX,seletorY,50,25); // Seletor da tela Bem Vindo
    text("não",50,400);
    //rect(100,375,50,25)
    text("sim",150,400);
    
    if(keyCode === LEFT_ARROW){
      seleBemX = 0;
    }
    if(keyCode === RIGHT_ARROW){
      seleBemX = 100;
    }
    if(seleBemX == 100 && keyCode === ENTER){
      BemVindo = false;
      Logo = true;
    }
  }
}
//exibe logo e uma breve história
function logo(){
  if(Logo){
    background(0,0,0);
    image(logoImg,0,0)
    
    text("desejas continuar?",0,350)
    textSize(20)
    rect(seleLogoX,seletorY,50,25); // Seletor da tela Bem Vindo
    text("não",50,400);
    //rect(100,375,50,25)
    text("sim",150,400);
    
    if(keyCode === LEFT_ARROW){
      seleLogoX = 0;
    }
    if(keyCode === RIGHT_ARROW){
      seleLogoX = 100;
    }
    if(seleLogoX == 100 && keyCode === ENTER){
      Logo = false;
      Peneira = true;
    }
  }
}
//fala sobre peneira e recrutar jogadores
function peneira(){
  if(Peneira){
    background(3, 153, 23);
    color(255,255,255);
    image(peneiraImg,0,0);
    
    
    text("Ir para o escritório?",0,350)
    textSize(20)
    rect(selePeneX,seletorY,50,25); // Seletor da tela Bem Vindo
    text("não",50,400);
    //rect(100,375,50,25)
    text("sim",150,400);
    
    if(keyCode === LEFT_ARROW){
      selePeneX = 0;
    }
    if(keyCode === RIGHT_ARROW){
      selePeneX = 100;
    }
    if(selePeneX == 100 && keyCode === ENTER){
      Peneira = false;
      Menu = true;
    }
  }
}
//menu do jogo
function menu(){
  if(Menu){
    var menuX = 0;
    background(0,0,0);
    image(menuImg,0,0)
    
    
    c = color('rgba(0, 150, 150,0.5)');
    fill(c)
    rect(selMenuX,selMenuY,111,85);
    
    //(INICIO-STADIUM)------------------------------------------
    if(Stadium){
      image(stadiumImg,0,0);
      //seletor
      rect(seleStadiumX,seletorY,50,25);
      //textos
      fill(color(0,0,0))
      textSize(20)
      text("Investir no stadium ?",0,375)
      text("não",50,400);
      text("sim",150,400)
      
      if(keyCode === LEFT_ARROW){
        seleStadiumX = 0;
      }
      if(keyCode === RIGHT_ARROW){
        seleStadiumX = 100;
      }
      if(seleStadiumX == 100 && keyCode === ENTER && seleStadiumX ){
        if(caixa >= 1000 || atualStadium == 1000){
          textSize(12);
          fill(color(0,0,0));
          atualStadium = 1000;
          text(atualStadium,215,375);
          
        }
      }
    }
    //(FIM-STADIUM)--------------------------------------------
    
    
   
    
    
    /*
    text("desejas continuar?",0,350)
    textSize(20)
    rect(seleMenuX,seletorY,50,25); // Seletor da tela Bem Vindo
    text("não",50,400);
    //rect(100,375,50,25)
    text("sim",150,400);
    
    if(keyCode === LEFT_ARROW){
      seleMenuX = 0;
    }
    if(keyCode === RIGHT_ARROW){
      seleMenuX = 100;
    }
    if(seleMenuX == 100 && keyCode === ENTER){
      Menu = false;
    }*/
  }
}

function keyReleased(){
  if(Menu){
    
    //(INICIO-SELETOR-MENU)------------------------------
    if(keyCode == LEFT_ARROW && selMenuX >= -95){
      selMenuX = selMenuX - 120;
      selMenuY = selMenuY-17;
      if(selMenuX == -95 && selMenuY >= 64){
        selMenuX = 265;
        selMenuY = selMenuY-40;
      }
      if(selMenuY == -4){
        selMenuX = 265;
        selMenuY = 229;
      }
      
   }
    if(keyCode == RIGHT_ARROW ){
      selMenuX = selMenuX + 120;
      selMenuY = selMenuY+17;
      if(selMenuX >= 385 && selMenuY >= 64){
        selMenuX = 25;
        selMenuY = selMenuY+40;
      }
      if(selMenuY == 286){
        selMenuX = 25;
        selMenuY = 13;
      }
    }
    //(FIM-SELETOR-MENU)----------------------------
    
    //(INICIO-SELETOR-STADIUM)--------------------------------
    if(keyCode == ENTER && selMenuX == 25 && selMenuY == 13){
      Stadium = true;
      
    }else if(keyCode == ESCAPE){//Sair do estado atual do menu
        Stadium = false;
        seleStadiumX = 0;
        //lembrar de por outros estados do menu aqui...................
      }
    //(FIM-SELETOR-STADIUM)--------------------------------
      
  }//fim do menu
   
    return false;
 }

function draw() {
  bemVindo();
  logo();
  peneira();
  menu();
  text(caixa,215,400);
}