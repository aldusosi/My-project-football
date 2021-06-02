function financas() {
  textAlign(LEFT)
  c = color(31, 46, 209);
  textSize(14)
  fill(c);
  image(finacasImg, 0, 0);
  text(`CAIXA: ${caixa} reais`, 50, 150);
}