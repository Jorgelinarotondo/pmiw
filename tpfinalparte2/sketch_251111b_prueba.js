let objJuego;

function preload(){
  dipper= loadImage("data/dipper.png"); fondo= loadImage("data/bosque.png"); ojo= loadImage("data/ojo.png"); fragmento= loadImage("data/fragmento.png"); corazon= loadImage("data/corazon.png"); imgPerdiste = loadImage("data/perdiste.png"); imgObstaculo= loadImage("data/roca.png"); imgPagina= loadImage("data/pagina.jpg"); imgGanaste= loadImage("data/ganaste.png"); imgInicio=loadImage("data/inicio.png");
pisadas= loadSound("data/pisadas.mp3"); disparo= loadSound("data/disparo.mp3"); paginaSonido= loadSound("data/pasarpagina.mp3"); ganarSonido= loadSound("data/ganar.mp3"); perderSonido= loadSound("data/perder.mp3"); musiquitaIntro= loadSound("data/musiquitaIntro.mp3");
}


function setup() {
createCanvas(640,480);
objJuego= new Juego();
}


function draw() {
  background(230);
objJuego.dibujar()
}

function keyPressed() {
  if (key === ' ' || keyCode === UP_ARROW) {
    objJuego.objPersonaje.saltar();
  }
  if ((key === 'r' || key === 'R') && (objJuego.perdio || objJuego.gano)) {
    objJuego.reiniciar();
}
   if ((key === 'c' || key === 'C') && (!objJuego.enJuego)) {
    objJuego.iniciarJuego();
  }
}
