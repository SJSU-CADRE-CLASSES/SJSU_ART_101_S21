class Player {
  constructor() {
    this.r = 50; //diameter, not radius
    this.x = w / 2;
    this.y = h - this.r/2;
    this.speed = 7;
    this.direction = 'still';
  }

  display() {
    image(playerImg, this.x, this.y, this.r, this.r);
    // rect(this.x, this.y, this.r, this.r);
  }

  move() {
    switch (this.direction) {
      case 'still':
        // don't move
        break;
      case 'up':
        // decrease y pos, moving up
        if (this.y - this.r / 2 > 0) {
          this.y -= this.speed;
        }
        break;
      case 'down':
        // increase y pos, moving down
        if (this.y < h - this.r / 2) {
          this.y += this.speed;
        }
        break;
      case 'right':
        // increasing x pos, moving right
        if (this.x < w - this.r / 2) {
          this.x += this.speed;
        }
        break;
      case 'left':
        // decreasing x pos, moving left
        if (this.x - this.r / 2 > 0) {
          this.x -= this.speed;
        }
        break;
      default:
        break;
    }
  }

}

// ...................... LOOP MOVING ......................

// switch (this.direction) {
//   case 'still':
//     // don't move
//     break;
//   case 'up':
//     // decrease y pos, moving up
//     if (this.y > 0 - this.r) {
//       this.y -= this.speed;
//     } else {
//       this.y = h;
//     }
//     break;
//   case 'down':
//     // increase y pos, moving down
//     if (this.y < h) {
//       this.y += this.speed;
//     } else {
//       this.y = 0 - this.r;
//     }
//     break;
//   case 'right':
//     // increasing x pos, moving right
//     if (this.x < w) {
//       this.x += this.speed;
//     } else {
//       this.x = 0 - this.r;
//     }
//     break;
//   case 'left':
//     // decreasing x pos, moving left
//     if (this.x > 0 - this.r) {
//       this.x -= this.speed;
//     } else {
//       this.x = w;
//     }
//     break;
//   default:
//     break;
// }
