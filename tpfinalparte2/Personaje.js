class Personaje{
constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.dipper = dipper
    this.vida = 5;
    this.velY = 0;
    this.gravedad = 0.8;
    this.suelo = posY;
    this.sueloActual = posY;
    this.vivo= true;
  }
  dibujar(){
    if (this.vivo) {
  image(this.dipper, this.posX, this.posY,80,100);
  } 
  }
  actualizarSuelo(obstaculos) {
  this.sueloActual = this.suelo;

  for (let i = 0; i < obstaculos.length; i++) {
    let obs = obstaculos[i];

    let estaArriba = this.posX + 80 > obs.x && this.posX < obs.x + obs.ancho && this.posY + 100 >= obs.y && this.posY + 100 <= obs.y + 20 &&
      this.velY >= 0;

    if (estaArriba) {
      this.sueloActual = obs.y - 100; 
    }
  }
}
  
  saltar(){
    if (this.posY >= this.sueloActual) {
      this.velY = -15;
    }
  }
  
  caer(){
    if (!this.vivo) return;
    this.velY += this.gravedad;
    this.posY += this.velY;

    if (this.posY > this.sueloActual) {
      this.posY = this.sueloActual;
      this.velY = 0;
  }
  } 
   detectarColision(balas) {
     if (!this.vivo) return;
    for (let i = 0; i < balas.length; i++) {
      let b = balas[i];
      if (b.x < this.posX + 50 && b.x + 20 > this.posX && b.y < this.posY + 100 && b.y + 5 > this.posY) {
        this.vida--;
        b.x = 900;
        
         if (this.vida <= 0) {
          this.morir();
        }
      }
    }
  }
  
  morir(){
  this.vivo = false;
    this.velY = 0;
  }
}
