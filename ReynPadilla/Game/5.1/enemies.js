class Enemy{
  constructor(){
    this.r = 50;
    this.x = random(w);
    this.y = 0 - this.r;
    this.speed = random(2, 6);
  }

  display(){
    //rect(this.x, this.y, this.r, this.r);
    image(enemyImg,this.x, this.y, this.r, this.r);
  }

  move(){
    this.y += this.speed;
  }
}
