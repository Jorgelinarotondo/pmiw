class Fondo {
  constructor(fondo) {
    this.fondo = fondo;
    this.x = 0;
    this.vel = 2;
  }

  mover() {
    this.x -= this.vel;
    if (this.x <= -width) {
      this.x = 0;
    }
  }

  dibujar() {
    image(this.fondo, this.x, 0, width * 2, height);
  }
}
