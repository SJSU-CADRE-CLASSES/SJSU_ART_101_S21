class Flower {

  constructor() {
    this.x = random(width);
    this.y = random(height * 0.55, height * 0.7);
    this.r = random(10, 20);
    this.s = random(10, 15);
    this.c = random(150, 255), random(150, 255), random(150, 255);
  }

  display(){
    fill(this.c);
    circle(this.x - this.s / 2, this.y - this.s / 2, this.r);
    circle(this.x + this.s / 2, this.y - this.s / 2, this.r);
    circle(this.x - this.s / 2, this.y + this.s / 2, this.r);
    circle(this.x + this.s / 2, this.y + this.s / 2, this.r);

    fill(random(255), random(255), random(255));
    circle(this.x, this.y, this.s/2);
  }
}
