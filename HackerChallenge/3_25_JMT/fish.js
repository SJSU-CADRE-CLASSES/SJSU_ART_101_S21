let fishes=[];
let animating;

function setup() {
  createCanvas(800, 400);
  frameRate=50;
  for (let i = 0; i <= 5; i++){
    fishes[i] = new Fishes(random(50, 550), random(100, 300));
    console.log(fishes[i]);
  }
}

function draw() {
  
  if (animating == false){
  
  background(0, 140, 255);
  
  circle(500,200,200);
  triangle(450, 50, 432, 125, 467, 125);
  triangle(538, 58, 510, 125, 547, 125);
  line(356,189, 440,212);
  line(356,212, 440,212);
  line(360,242, 440,212);
  line(650,189, 549,212);
  line(650,212, 549,212);
  line(650,242, 549,212);
  push();
  strokeWeight(15);
  point(450,160);
  point(520,160);
  pop();
  ellipse(500, 250, 55, 20);
  console.log(mouseX, mouseY);
  
  for (i = 0; i<fishes.length; i++){
  fishes[i].display();
  fishes[i].move();
  }
  }
}

function mousePressed() {
  animating =! animating;
  
}

class Fishes {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  move(x) {
    this.x += 5;
    if (this.x >= width){
      this.x = this.x-width;
    }
  }

  display(x, y) {
    push();
    translate(this.x, this.y);
    fill(240,140,40);
    stroke(180,93,13);
    triangle(-width * 0.05, -height * 0.05, -width * 0.05, height * 0.05, -width * 0.025, 0);
    triangle(-width * 0.025, -height * 0.1, -width * 0.025, height * 0.1, width * 0.075, 0);
    pop();
  }
}
