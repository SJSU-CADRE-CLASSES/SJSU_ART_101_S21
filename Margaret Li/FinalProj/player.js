class Player {
  constructor(){
    //default x position
    this.r = 100;
    // this.x = w;
    this.x = windowWidth-this.r;
    //default y position
    this.y = height*0.5;
    this.speed = 2;
    this.direction = 'still';
  }

  display(){
    let frameIndex=(int)(frameCount*0.05) % 4;
    image(playerAnimation[frameIndex], this.x, this.y, this.r, this.r);
  }

  move() {
    switch (this.direction) {
      case 'still':
      //don't move anything
      break;

      case 'up':
      //decrease y position
      if (this.y > height*0.5){ //min (upmost) y pos
        this.y-=this.speed;
      }
      break;

      case 'down':
      //increase y position
      if (this.y < height-this.r){ //max (downmost) y pos
        this.y+=this.speed;
      }
      break;

      case 'left':
      //decrease x position
      if (this.x > 0){ //min x pos
        this.x-=this.speed;
      }
      break;

      case 'right':
      //increase x position
      // if (this.x < w-this.r){ //max x pos
      if (this.x < windowWidth-this.r){ //max x pos
        this.x+=this.speed;
      }
      break;

      default:
      break;
    }

  }

}
