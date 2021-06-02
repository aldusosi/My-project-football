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
  if(keyCode == UP_ARROW &&telaMenu == 5 && selEquipeTecnicaY > 135 && !listaDeTreinadores){
    selEquipeTecnicaY -= 22;
  }
  if(keyCode == UP_ARROW && listaDeTreinadores && selListaDeTreinadoresY > 142 && !perfilDoTreinador){
    selListaDeTreinadoresY -= 17;
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
  if(keyCode == DOWN_ARROW && telaMenu == 5 && selEquipeTecnicaY < 267 && !listaDeTreinadores){
    selEquipeTecnicaY += 22;
  }
  if(keyCode == DOWN_ARROW && listaDeTreinadores && selListaDeTreinadoresY < 244 && !perfilDoTreinador){
    selListaDeTreinadoresY += 17;
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
  if (linha == 3 && coluna == 3 && keyCode == ENTER && tela == 3){
    telaMenu = 5;
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
  if (keyCode == SHIFT && telaMenu == 5 && selEquipeTecnicaY == 135){
    listaDeTreinadores = true;
    contShiftEt++;
  }
  if(keyCode == SHIFT && listaDeTreinadores && contShiftEt == 2){
    perfilDoTreinador = true;
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
  if (keyCode == ESCAPE && !perfilDoJogador && !listaDeTreinadores) { //VOLTA PARA MENU
    telaMenu = 0;
    semGrana = false;
    semJogadores = false;
  }
  if (keyCode == ESCAPE && perfilDoJogador == true && !listaDeTreinadores) { //VOLTA PARA MENU
    perfilDoJogador = false;
    contShift = 0;
    contagem = 0; //contador de shift dentro do adiconar peneira
    selPerfilX = 81;
  }
  if(keyCode == ESCAPE && listaDeTreinadores){
    listaDeTreinadores = false;
  }
  if(keyCode == ESCAPE && perfilDoTreinador){
    perfilDoTreinador = false;
    listaDeTreinadores = true;
    contShiftEt=0;
    
  }

}