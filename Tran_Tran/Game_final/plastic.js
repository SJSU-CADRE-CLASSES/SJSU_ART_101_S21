class Plastic {
  constructor(){
    this.r = 50;
    this.x = random(w);
    this.y = 0 - this.r;
  }

  display(){
    // rect(this.x, this.y, this.r);
    image(plasticImg, this.x, this.y, this.r);
  }

  move(){
    this.y++;
  }
}
