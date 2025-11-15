class Bala{
  constructor(fragmento, x, y, vel) {
    this.fragmento = fragmento;
    this.x = x;
    this.y = y;
    this.vel= vel;
  }
  
 mover() {
    this.x -= this.vel;
  }
  
  dibujar() {
    image(this.fragmento, this.x, this.y, 20, 5);
  }
}
