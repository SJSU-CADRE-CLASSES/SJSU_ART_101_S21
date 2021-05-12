class Player {
  constructor() {
    this.r = 50;
    this.x = w / 2;
    this.y = h - this.r;
    this.speed = 2;
    this.direction = 'still';
  }

  display() {
    rect(this.x, this.y, this.r, this.r);
  }

  move() {
    switch (this.direction) {
      case 'still':
        // don't move
        break;
      case 'up':
        // decrease y pos
        if (this.y > 0 - this.r) {
          this.y -= this.speed;
        } else {
          this.y = h;
        }
        break;
      case 'down':
        // increase y pos
        if (this.y < h) {
          this.y += this.speed;
        } else {
          this.y = 0 - this.r;
        }
        break;
      case 'right':
        // increasing x pos
        if (this.x < w) {
          this.x += this.speed;
        } else {
          this.x = 0 - this.r;
        }
        break;
      case 'left':
        // decreasing x pos
        if (this.x > 0 - this.r) {
          this.x -= this.speed;
        } else {
          this.x = w;
        }
        break;
      default:
        break;
    }
  }

}
