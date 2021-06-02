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