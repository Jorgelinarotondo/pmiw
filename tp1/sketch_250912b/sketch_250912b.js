let tam = 40;
let fila, columna;
let modoColor = "normal";
let mover = false; // bandera: arranca en falso

function setup() {
  createCanvas(800, 400);
  fila = width / tam;
  columna = height / tam;
  noLoop(); // al inicio no se mueve
  dibujarCuadricula(); // dibujo fijo inicial
}

function draw() {
  background(255);

  for (let i = 0; i < fila; i++) {
    for (let j = 0; j < columna; j++) {
      let tamano = tam;

      // si ya empezó a moverse, los cuadrados responden al mouse
      if (mover) {
        let d = dist(mouseX, mouseY, i * tam + tam / 2, j * tam + tam / 2);
        tamano = map(d, 0, 700, tam * 0.5, tam * 1.0);
      }

      // color
      if (modoColor === "normal") {
        if ((i + j) % 2 === 0) {
          fill(255, 182, 193); // rosa
        } else {
          fill(186, 85, 211); // violeta
        }
      } else if (modoColor === "random") {
        fill(random(255), random(255), random(255));
      }

      noStroke();
      rect(i * tam, j * tam, tamano, tamano);

      // corazones en el centro
      fill(229, 0, 10);
      corazones(i * tam + tam / 2, j * tam + tam / 2, tamano);
    }
  }
}

function mouseMoved() {
  mover = true; // cuando muevo el mouse, se activa el movimiento
  loop();       // arranca el loop
}

function corazones(x, y, tamano) {
  let t = tamano * 0.3;
  noStroke();
  ellipse(x - t / 2, y - t / 2, t, t);
  ellipse(x + t / 2, y - t / 2, t, t);
  triangle(x - t, y - t / 4, x + t, y - t / 4, x, y + t);
}

function keyPressed() {
  if (key === 'r' || key === 'R') {
    modoColor = "random";
  } else if (key === 'n' || key === 'N') {
    modoColor = "normal";
  }
  redraw();
}

// función para dibujar solo una vez al inicio
function dibujarCuadricula() {
  redraw();
}
