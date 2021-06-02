function menu() {
  image(menuImg, 0, 0);



  //SELETOR
  c = color("rgba(0, 91, 9, 0.7)");
  fill(c);
  noStroke();
  rect(selX, selY, 112, 85, 10);
  
  if(segundos % 2 == 0){
    image(trofeuInicioWhite,355,355);
  }else{
    image(trofeuInicio,355,355);
  }
}