// class Sprite {
//   constructor(animation, x, y, speed) {
//     this.x = x;
//     this.y = y;
//     this.animation = animation;
//     this.speed = speed;
//     this.len = this.animation.length;
//     this.index = 0;
//   }
//
//   show() {
//     let index = floor(this.index) % this.len;
//     image(this.animation[index], this.x, this.y)
//   }
//
//   animate() {
//     this.index += this.speed;
//     this.y += this.speed * 5;
//
//     if(this.y > width) {
//       this.y = -this.animation[0].width;
//     }
//   }
// }
