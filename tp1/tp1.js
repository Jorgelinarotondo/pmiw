//https://www.youtube.com/watch?v=1JnIJ1Aee8o
 
 let tam = 40; 
let fila =10;
let columna=10 ;
let Rosayvioleta;
let modoColor = "normal";
let mover = false; 
      
function preload(){
 Rosayvioleta= loadImage("data/Rosavioletaycorazones.jpg");
}

function setup() {
  createCanvas(800, 400);
  Rosayvioleta.resize(400,400);
  fila = width / tam;
  columna = height / tam;
   noLoop(); 
  dibujarCuadricula();
 
}
 
function draw() {
  background(255);
  image(Rosayvioleta, 0,0,400,400);
 translate(400, 0); 

  for (let i = 0; i < fila; i++) {
    for (let j = 0; j < columna; j++) { 
      let tamano = tam;
       if (mover) {
     let d = dist(mouseX, mouseY, i * tam + tam / 2, j * tam + tam / 2);
        tamano = map(d, 0, 700, tam * 0.5, tam * 1.0);
      }
      if (modoColor === "normal") {
      // alternar colores rosa/violeta
      if ((i + j) % 2 == 0) {
        fill(255, 182, 193); // rosa
      } else {
        fill(186, 85, 211); // violeta
      }
      } else if (modoColor === "random") {
        fill(random(255), random(255), random(255)); 
      }

      noStroke();
      rect(i * tam, j * tam, tamano, tamano);

   if ((i + j) % 2 === 0) {
  fill(220, 0, 10); // rojo
} else {
  fill(255); // blanco
}
      
      corazones(i * tam, j * tam, tamano);
    }
  }
}
function mouseMoved() {
  mover = true; 
  loop();      
}

function corazones(x, y, tamano) {
  let tamanoCorazon = tamano * 0.2; 
  noStroke(); 

  ellipse(x - tamanoCorazon / 2, y - tamanoCorazon / 2, tamanoCorazon, tamanoCorazon);
  ellipse(x + tamanoCorazon / 2, y - tamanoCorazon / 2, tamanoCorazon, tamanoCorazon);
  triangle(
    x - tamanoCorazon, y - tamanoCorazon / 4,
    x + tamanoCorazon, y - tamanoCorazon / 4,
    x, y + tamanoCorazon
  );
}

function keyPressed() {
  if (key === 'r' || key === 'R') {
    modoColor = "random"; 
    redraw(); // vuelve a dibujar
  } else if (key === 'n' || key === 'N') {
    modoColor = "normal"; 
    redraw();
  }
}
function dibujarCuadricula() {
  redraw();
}
