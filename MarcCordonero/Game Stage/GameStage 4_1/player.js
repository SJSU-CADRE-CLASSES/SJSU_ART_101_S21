
class Player {
  constructor(){
    this.r = 60;
    this.x = w / 2;
    this.y = h - this.r;
    this.speed = 2;
    this.direction = 'still';
  }

display(){
  rect(this.x, this.y, this.r, this.r);
}

  move(){

    switch (this.direction) {
      case 'still':
      //don't move anything
      break;
      case 'up':
      //decrease y pos
      this.y -= this.speed;
      break;
      case 'down':
      //increase y pos
      this.y += this.speed;
      break;
      case 'right':
      this.x += this.speed;
      //increase x pos
      break;
      case 'left':
      this.x -= this.speed;
      //decrease x pos
      break;
      default:
      break;

    }

  }

}
