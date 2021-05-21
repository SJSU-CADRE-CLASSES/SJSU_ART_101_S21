
class Coin {
  constructor(){
    // this.r = 50;
    // this.x = random(w);
    // this.y = 0 - this.r;

    this.r = 400;
    this.x = w / 2;
    this.y = 0 - this.r;

  }

  display(){
    image(enemy, this.x, this.y, this.r);

  }

  move(){
    this.y++;
  }
}
