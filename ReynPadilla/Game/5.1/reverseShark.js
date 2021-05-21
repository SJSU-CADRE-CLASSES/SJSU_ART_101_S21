class ReverseShark{
  constructor(){
    this.r = 150;
    this.x = w;
    this.y = random(h);
    this.speed = random(4, 6);
  }

  display(){
    image(reverseSharkImg, this.x, this.y, this.r, this.r);
  }

  move(){
    this.x -= this.speed;
  }
}
