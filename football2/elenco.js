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