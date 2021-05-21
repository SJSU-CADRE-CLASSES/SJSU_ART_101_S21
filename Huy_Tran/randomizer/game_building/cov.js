class Cov {
  constructor(){
    this.r = 50;
    this.x = random(w);
    this.y = 0 - this.r;
    this.speed = 3; 
  }
  display(){
    // rect(this.x, this.y, this.r, this.r);
    // image(covImg1, this.x, this.y, this.r, this.r);
    // image(covImg2, this.x, this.y, this.r, this.r);
    // image(covImg3, this.x, this.y, this.r, this.r);
    image(covImg4, this.x, this.y, this.r, this.r);
  }
  move(){
    this.y++;
  }
}
