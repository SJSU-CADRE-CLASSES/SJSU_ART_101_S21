class Player {
  constructor(animation, x, speed) {
    this.r = 100;
    // this.h = 600;
    this.x = x;

    this.y = h - this.r;
    // this.animation = playerAnimation;
    // this.speed = 2;
    this.speed = speed;
    // this.len = playerAnimation.length;
    this.direction = 'still';
    // this.index = 0;
  }

  show() {
     // rect(this.x, this.y, this.r, this.r);
     // image(playerImg, this.x, this.y, this.r, this.r);
     // let index = floor(this.index) % this.len;
     //     image(playerAnimation[index], this.x, this.y)
     this.frame = frameCount
     image(playerAnimation[this.frame % playerAnimation.length], this.x, this.y, this.r, this.r);
     // console.log(this.x)
  }

    // animate() {
    //   this.index += this.speed;
    //   this.y += this.speed * 0.5;
    //
    //   if(this.y > window.innerWidth) {
    //     this.y = -this.animation[0].width;
    //   }
    // }

  move() {
    if (this.speed > 4)
     {this.speed = 4}
    switch (this.direction) {
      case 'still':
        // dont move
        break;

      case 'up':
        // decrease ypos
        if (this.y > 0){
        this.y -= this.speed;
      }
        break;

      case 'down':
        // increase ypos
        if (this.y < h - this.r) {
          // console.log('this.y')
        this.y += this.speed;
        }
        break;

      case 'right':
        // increase xpos
        if (this.x < w - this.r) {
        this.x += this.speed
        }
        break;

      case 'left':
        // decrease xpos
        if (this.x > 0){
        this.x -= this.speed
      }
        break;
        default:
        break;
      }
    }
}
