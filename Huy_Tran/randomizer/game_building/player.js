class Player {
  constructor() {
    this.r = 150;
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
        if (this.y - this.r / 2 > 0) {
          this.y -= this.speed;
        }

        break;
      case 'down':
        //increasing ypos
        if (this.y < h - this.r / 2) {
          this.y += this.speed;
        }
        break;
      case 'right':
        //increasing xpos
        if (this.x < w - this.r /2) {
          this.x += this.speed;
        }
        break;
      case 'left':
        //decreasing xpos
        if (this.x - this.r/ 2 > 0) {
          this.x -= this.speed;
        }
        break;
      default:
        break;
    }
  }
}
