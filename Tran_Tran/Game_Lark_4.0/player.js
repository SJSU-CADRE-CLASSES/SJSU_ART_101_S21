class Player {
  constructor() {
    this.r = 60;
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
        // dont move
        break;

      case 'up':
        // decrease ypos
        this.y -= this.speed;
        break;

      case 'down':
        // increase ypos
        this.y += this.speed;
        break;

      case 'right':
        // increase xpos
        this.x += this.speed
        break;

      case 'left':
        // decrease xpos
        this.x -= this.speed
        break;
        default:
        break;
    }
  }

}
