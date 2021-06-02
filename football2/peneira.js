function peneira() {
  image(peneiraImg, 0, 0);
  
    if(segundos % 2 == 0){
      image(trofeuInicioWhite,330,355);
    }else{
      image(trofeuInicio,355,355);
    }
}