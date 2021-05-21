class Player {
  constructor() {
    this.r = 60;
    this.x = w / 2;
    this.y = h - this.r;
    this.speed = 7;
    this.direction = 'still';
  }
  display() {
    //rect(this.x, this.y, this.r, this.r);
    image(playerImg, this.x, this.y, this.r, this.r);
  }

  move() {
    switch (this.direction) {
      case 'still':
        break;
      case 'up':
      if (this.y - this.r / 2 > 0) {
        this.y -= this.speed;
      }
        break;
      case 'down':
      if (this.y < h - this.r / 2) {
        this.y += this.speed;
      }
        break;
      case 'right':
      if (this.x < w - this.r / 2) {
        this.x += this.speed;
      }
        break;
      case 'left':
      if (this.x - this.r / 2 > 0) {
        this.x -= this.speed;
      }
        break;
      default:
      break;
    }
  }
}
