class Enemy3 {
  constructor(){
    this.r = 50;
    this.x = 200;
    this.y = 0 - this.r;
    this.speed = 1.5;
  }

  display(){
    image(enemy3Img, random(this.x, 400), this.y, this.r, this.r);
  }

  move(){
    if (this.y <= h){
      this.y += this.speed;
    }
  }
}
