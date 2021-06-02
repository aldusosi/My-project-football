function equipeTecnica(){
  image(menuEquipeTecnica,0,0);
  rect(selEquipeTecnicaX,selEquipeTecnicaY,180,4);
  if(listaDeTreinadores && clube.nivel == 1){
    noStroke();
    image(treinadoresNivel1,0,0);
    rect(171,selListaDeTreinadoresY,21,15);
    if(perfilDoTreinador && selListaDeTreinadoresY == 142){
      image(perfilTreinadoresNivel1[0],0,0);//Imagen da mensagem e perfil do jogador vem aqui;
    }
  }
}