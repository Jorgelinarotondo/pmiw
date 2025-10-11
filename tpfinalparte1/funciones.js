function mostrarDiario(x, y, w, h) {
  if (mouseX > 60 && mouseX < 150 && mouseY > 314 && mouseY < 400) {
    fill(30,0,0,150);
  rect(0,0, width,height);
  image(diario, x, y, w, h);
  fill(219,191,135);
  text("Toca el diario para elegir que hacer",150,300);
}
}
function mostrarBoton(x, y, w, h, texto){
  if (botonPresionado(x, y, w, h)) {
    fill(219,191,135);  
    rect(x, y, w, h, 10);
    fill(66,55,56);    
  } else {
    fill(66,55,56);    
    rect(x, y, w, h, 10);
    fill(219,191,135); 
  }
   textAlign(CENTER, CENTER);
  textSize(15);
  text(texto, x + 10, y + 10, w - 20, h - 20);
  textAlign(LEFT, BASELINE); 
}
function botonPresionado(x, y, w, h) {
  return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
}
function mostrarCueva(x, y, w, h) {
  if (mouseX > 435 && mouseX < 640 && mouseY > 90 && mouseY < 340) {
    fill(0,220);
  rect(0,0, width,height);
  image(cueva, x, y, w, h);
  fill(219,191,135);
  text(botones[8],380,80);
  } 
}
function mostrarMarcas(x, y, w, h) {
  if (mouseX > 230 && mouseX < 385 && mouseY > 0 && mouseY < 360) {
    fill(0,220);
 rect(0,0, width,height);
  image(marcas, x, y, w, h);
 fill(219,191,135);
  text(botones[7],220,400);
  }
}
function mostrarLuciernagas(x, y, w, h) {
  if (mouseX > 0 && mouseX < 135 && mouseY > 60 && mouseY < 360) {
    fill(0,220);
 rect(0,0, width,height);
  image(luciernagas, x, y, w, h);
 fill(219,191,135);
  text(botones[6],50,80);
  }
}
function reproducirSB(){
if (!sonidoBotones.isPlaying()) {
      sonidoBotones.play();
      sonidoBotones.setVolume(0.2);
}
}
function reiniciarJuego(){
  mostrarTextos = true;
  estado=0
  sonidoAmbiente.stop();
  sonidoAmbiente.loop();
  sonidoAmbiente.setVolume(1);
  return;
}
