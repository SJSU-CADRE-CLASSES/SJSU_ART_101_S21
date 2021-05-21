class Shark{
  constructor(){
    this.r = 150;
    this.x = 0;
    this.y = random(h);
    this.speed = random(4, 6);
  }

  display(){
    image(sharkImg, this.x, this.y, this.r, this.r);
  }

  move(){
    this.x += this.speed;
  }
}
