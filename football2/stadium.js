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
    textSize(14)
    textAlign(CENTER)
    c = color(255, 0, 0);
    fill(c);
    text("GRANA INSUFICIENTE PARA PROXIMA ATUALIZAÇÃO!", 200, 335);
  }
  c = color(0, 0, 0);
  textSize(14)
  fill(c)
  textAlign(CENTER);
  text(`proxima atualização custa: ${atualizar[stadiumAtual]} reais `, 200, 375);
  text("SHIFT para atualizar ou ESC para sair ", 200, 355);
  text(`dinheiro disponivel no caixa: ${caixa} reais`, 200, 395);
}