class Birds {
  constructor(x, y) {
    this.x = x;
    this.y = map(y, 0, height * 0.3, height * 0.15, height * 0.2);
    //scale the birds to a random size
    this.s = random(0.25, 1);
  }

  //move the birds horizontally by a step size of 15
  move(x, y) {
    this.x += 15;
    if (this.x >= width) {
      this.x = this.x - width;
    }
  }

  display() {

    noStroke();

    push();

    scale(this.s);
    translate(this.x, this.y);

    //tail
    fill(random(40, 180), random(40, 180), random(40, 180));
    triangle(0, 0, -width * 0.15, -height * 0.03, -width * 0.15, height * 0.03);
    //wings
    fill(random(40, 180), random(40, 180), random(40, 180));
    arc(-width * 0.03, 0, width * 0.15, height * 0.2, -HALF_PI, HALF_PI, OPEN);
    //body
    fill(random(40, 180), random(40, 180), random(40, 180));
    ellipse(0, 0, width * 0.15, height * 0.1);
    //head
    fill(random(40, 180), random(40, 180), random(40, 180));
    circle(width * 0.1, 0, width * 0.07);
    //beak
    fill(random(40, 180), random(40, 180), random(40, 180));
    triangle(width * 0.12, -height * 0.01, width * 0.15, 0, width * 0.12, height * 0.01);

    pop();
  }

}