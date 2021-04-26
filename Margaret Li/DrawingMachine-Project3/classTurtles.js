class Turtles {

  constructor(x, y) {
    this.x = x;
    //this.y = map(y, 0, height, height * 0.1, height * 0.8);
    this.y = y;
    //scale the turtles to a random size
    this.s = random(0.5, 1);
  }

  move(x, y) {
    //move the turtles horizontally by a step size of 1
    this.x += 1;
    this.x %= windowWidth;
  }

  display() {
    noStroke();
    push();
    translate(this.x, this.y);
    scale(this.s);
    fill(random(50, 200), random(50, 200), random(50, 200)); //let head and tail color match
    //head
    circle(153, 70, 25);
    //tail
    triangle(75, 60, 40, 70, 75, 80);
    fill(random(50, 200), random(50, 200), random(50, 200)); //let front and back flipper color match
    //front flippers
    quad(145, 30, 70, 70, 145, 110, 130, 70);
    //back flippers
    quad(55, 30, 130, 70, 55, 110, 70, 70);

    //shell
    fill(random(50, 200), random(50, 200), random(50, 200));
    ellipse(100, 70, 80, 70);
    //square design for shell
    fill(random(50, 200), random(50, 200), random(50, 200)); //colors for the shell patterns
    rectMode(CENTER);
    square(80, 70, 20);
    rectMode(CENTER);
    square(120, 70, 20);
    pop();
  }
}
