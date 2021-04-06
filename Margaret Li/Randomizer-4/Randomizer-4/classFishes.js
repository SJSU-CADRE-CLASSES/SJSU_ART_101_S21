class Fishes {
  constructor(x, y) {
    this.x = x;
    this.y = map(y, 0, height, height * 0.9, height);
    //scale the fishes to a random size
    this.s = random(0.5, 2)
  }

  move(x, y) {
    //move the fishes horizontally by a step size of 15
    this.x += 15;
    if (this.x >= width) {
      this.x = this.x - width;
    }
  }

  display() {

    push();

    scale(this.s);
    translate(this.x, this.y);

    //tail
    fill(random(128, 255), random(128, 255), random(128, 255));
    noStroke();
    triangle(-width * 0.05, -height * 0.05, -width * 0.05, height * 0.05, -width * 0.025, 0);
    //body
    fill(random(128, 255), random(128, 255), random(128, 255));
    noStroke();
    triangle(-width * 0.025, -height * 0.1, -width * 0.025, height * 0.1, width * 0.075, 0);

    pop();
  }

}