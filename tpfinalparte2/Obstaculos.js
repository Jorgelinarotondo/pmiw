class Obstaculos {
  constructor(x, y, tienePagina) {
    this.x = x;
    this.y = y;
    this.ancho = 100;
    this.alto = 30;
    this.vel = 3;
    this.tienePagina = tienePagina; // true o false
    this.paginaRecolectada = false;
  }

  mover() {
    this.x -= this.vel;
    if (this.x < -this.ancho) {
      this.x = width + random(200, 400);
      this.y = random(300, 400);
      this.tienePagina = random() < 0.5; // a veces vuelve con página
      this.paginaRecolectada = false;
    }
  }

  mostrar() {
     image(imgObstaculo, this.x, this.y, this.ancho, this.alto);
    if (this.tienePagina && !this.paginaRecolectada) {
      image(imgPagina, this.x + this.ancho / 2 - 10, this.y - 25, 20, 30);
    }
  }

  personajeSobre(personaje) {
    return (personaje.posX + 80 > this.x && personaje.posX < this.x + this.ancho && personaje.posY + 100 >= this.y && personaje.posY + 100 <= this.y + 20 && personaje.velY >= 0);
  }

  colisionPagina(personaje) {
    if (!this.tienePagina || this.paginaRecolectada) return false;
    return (personaje.posX + 80 > this.x + this.ancho / 2 - 10 && personaje.posX < this.x + this.ancho / 2 + 10 && personaje.posY + 100 > this.y - 25 && personaje.posY < this.y - 5
    );
  }
}
