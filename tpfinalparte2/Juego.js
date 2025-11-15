class Juego{
  constructor(){
    this.objFondo = new Fondo(fondo);
  this.objPersonaje= new Personaje(50,350);
  this.objOjo= new Enemigo(ojo,500, 360);
  this.perdio= false;
  this.gano = false; 
  this.enJuego = false;
  this.contadorPaginas = 0;
  this.obstaculos = [];
   for (let i = 0; i < 3; i++) {
     let tienePag = random() < 0.5;
  let x = width + i * 250;
  let y = random(330, 400);
      this.obstaculos.push(new Obstaculos(x, y, tienePag));
    }
  }
 
crearPersonaje(){
this.objPersonaje = new Personaje;
}

iniciarJuego() {
  this.enJuego = true;
  if (!pisadas.isPlaying()) {
    pisadas.loop();
    pisadas.setVolume(0.8);
  }
}
dibujar(){
  if (!this.enJuego) {
    this.mostrarInstrucciones();
    return;
   
  }
 this.objFondo.dibujar();
  
  if (!this.objPersonaje.vivo) {
    if (!this.perdio){
  this.perdio = true;
  perderSonido.play();
  perderSonido.setVolume(0.4);
}
  }
if (this.perdio) {
  this.perdiste();
  return;
}
if (this.gano) {
  this.ganaste();
  return;
  
}
 if(!this.perdio){
   this.objFondo.mover();
 }
 
  this.objPersonaje.caer();
this.objPersonaje.dibujar();

 this.objOjo.dibujar();
  this.objOjo.disparar();
  
  this.objPersonaje.detectarColision(this.objOjo.balas);
 
for (let i = 0; i < this.obstaculos.length; i++) {
 let obs = this.obstaculos[i];
  obs.mover();
  obs.mostrar();

  if (obs.colisionPagina(this.objPersonaje)) {
    obs.paginaRecolectada = true;
    this.contadorPaginas++;
    paginaSonido.play();
  } 
}

 this.objPersonaje.actualizarSuelo(this.obstaculos);
  if (this.contadorPaginas >= 5) {

    this.gano = true;
    ganarSonido.play();
    ganarSonido.setVolume(0.4);
}
  this.mostrarCantidadPaginas();
  this.mostrarVidas();
}

mostrarInstrucciones() {
   imageMode(CORNER);
  textAlign(CENTER);
  
 if (pisadas.isPlaying()) {
  pisadas.stop();
 } 
  if (!musiquitaIntro.isPlaying()) {
    musiquitaIntro.loop();
    musiquitaIntro.setVolume(0.5);
}
  image(imgInicio,0,0,width,height);
  fill(255);
  textSize(22);
  text("¿CÓMO JUGAR?", width / 2, 220);

  textSize(18);
  text("Recolectá las páginas del diario para poder derrotar al Ojo Malvado\n y salvar a Gravity Falls", width / 2, height / 2 + 50)
  text("Esquivá sus rayos y saltá sobre los obstáculos con la barra espaciadora.\n Tocá 'C' para comenzar.", width / 2, height / 2+150);
}
mostrarVidas() {
  for (let i = 0; i < this.objPersonaje.vida; i++) {
    image(corazon, 20 + i * 40, 20, 30, 25);
  }
}

mostrarCantidadPaginas(){
 image(imgPagina, 20, 60, 30, 45); // imagen arriba a la izquierda
  textSize(24);
  fill(255);
  textAlign(LEFT, CENTER);
text(this.contadorPaginas + "/5", 60, 83);
textAlign(CENTER,BASELINE);
}

ganaste(){
  if (pisadas.isPlaying()) {
  pisadas.stop();
}
 if (musiquitaIntro.isPlaying()) {
    musiquitaIntro.stop();
}

  imageMode(CENTER);
  image(imgGanaste, width / 2, 140, 300, 100);
  textAlign(CENTER);
  textSize(20);
  fill(255);
  text("¡Recolectaste las 5 páginas y salvaste a Gravity Falls!", width / 2, 290);
  text("Tocá R para reiniciar", width / 2, 340);
  textSize(10);
  text("Creditos \n Desarrollado por Jorgelina Rotondo y Sofia Scaglia. \n Inspirado en Gravity Falls (Alex Hirsch). \n Hecho para PMIW – TP Final Parte 2.", width/2, 400);
  imageMode(CORNER);
}
perdiste(){
  if (pisadas.isPlaying()) {
  pisadas.stop();
}
 if (musiquitaIntro.isPlaying()) {
    musiquitaIntro.stop();
}

  imageMode(CENTER);
  image(imgPerdiste, width / 2, 140, 300, 100);
  textAlign(CENTER);
  textSize(20);
  fill(255);
  text("No lograste esquivar los ataques del ojo malvado", width / 2, 290);
  text("Tocá R para reiniciar", width / 2, 340);
  textSize(10);
   text("Creditos \n Desarrollado por Jorgelina Rotondo y Sofia Scaglia. \n Inspirado en Gravity Falls (Alex Hirsch). \n Hecho para PMIW – TP Final Parte 2.", width/2, 400);
  imageMode(CORNER);
}

reiniciar() {
 this.objFondo = new Fondo(fondo);
this.objPersonaje = new Personaje(50, 350);
 this.objOjo = new Enemigo(ojo, 500, 360);
 this.perdio = false;
 this.contadorPaginas = 0;
this.gano = false;
this.enJuego = false;
}
}
