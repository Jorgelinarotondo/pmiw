 class Enemigo{
  constructor(ojo,x,y,vel){
  this.ojo = ojo;
    this.x = x;
    this.y = y;
    this.vel = vel;
    this.balas=[];
    for (let i = 0; i < 1; i++) {
      this.balas.push(new Bala(fragmento, this.x, this.y + 40, 5));
    }
    this.tiempo = 0;
    this.indiceBala = 0;
  }
 
  
   dibujar() {
    image(this.ojo, this.x, this.y, 135, 80);
    for (let i = 0; i < this.balas.length; i++) {
    let b = this.balas[i];
    b.mover();
    b.dibujar();
  }
  }
  
  disparar() {
    this.tiempo++;
    if (this.tiempo > 60*2) { 
      let b = this.balas[this.indiceBala];
      b.x = this.x;
      b.y = this.y + 40;
      this.indiceBala++;
      if (this.indiceBala >= this.balas.length) {
        this.indiceBala = 0;
      }
      this.tiempo = 0;
      disparo.play();
      disparo.setVolume(0.5);
    }
}
}
