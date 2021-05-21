class Enemy2 {
  constructor(){
    this.r = 30;
    this.x = random(0+30, w-30);
    this.y = 0 - this.r;
    this.speed = 4;
  }

  display(){
    image(enemy2Img, this.x, this.y, this.r, this.r);
  }

  move(){
    if (this.y <= h){
      this.y += this.speed;
    }
  }
}
