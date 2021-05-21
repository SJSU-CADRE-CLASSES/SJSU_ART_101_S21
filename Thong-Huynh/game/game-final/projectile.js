class Projectile {
  constructor(){
    this.r = 15;
    this.x = player.x;
    this.y = player.y - player.r / 2;
    this.speed = 18;
  }

  display(){
    push();
    noStroke();
    fill(38, 176, 222);
    ellipse(this.x, this.y, this.r, this.r);
    // ellipse(this.x-10, this.y, this.r, this.r);
    // ellipse(this.x+10, this.y, this.r, this.r);
    pop();
  }

  move(){
    if (this.y <= h){
      this.y -= this.speed;
    }
  }
}
