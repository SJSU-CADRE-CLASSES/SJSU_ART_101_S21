class Player {
  constructor() {
    this.r = 70;
    this.x = w / 2;
    this.y = h - this.r;
    this.speed = 2;
    this.direction = 'still';
  }

  display() {
    // rect(this.x, this.y, this.r, this.r);
    image(playerImg, this.x, this.y, this.r, this.r);
  }

  move() {

    switch (this.direction) {
      case 'still':
        //do nothing
        break;
      case 'up':
        //decreasing ypos
        this.y -= this.speed;
        break;
      case 'down':
        //increasing ypos
        this.y += this.speed;
        break;
      case 'right':
        //increasing xpos
        this.x += this.speed;
        break;
      case 'left':
        //decreasing xpos
        this.x -= this.speed;
        break;
      default:
        break;
    }
  }
}
