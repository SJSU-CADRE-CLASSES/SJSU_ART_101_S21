class Enemy1 {
  constructor(){
    this.r = 40;
    this.x = random(w);
    this.y = 0 - this.r;
    this.speed = 1.25;
  }

  display(){
    image(enemy1Img, this.x, this.y, this.r, this.r);
    // rect(this.x, this.y, this.r, this.r);
  }

  move(){
    if (this.y <= h){
      this.y += this.speed;
    }
    // ALLOW enemy TO LOOP
    // else if (this.y > h) {
    //   this.x = random(w);
    //   this.y = 0 - this.r;
    // }
  }
}
