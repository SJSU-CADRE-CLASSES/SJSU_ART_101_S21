//Setting up the variables
let eyeWobble;
let mic;
let avatarMove = 50;
let mouthMove = 7;
let bread1;
let bread2;
let bread3;
let bread4;

function setup() {

  //creating canvas
  createCanvas(500, 500);

  //Mic input setup
  mic = new p5.AudioIn()
  mic.start();

  //Moving background bread peices (x, y, rotation, size)
  bread1 = new BackgroundBread(50, 20, .1, 2);
  bread2 = new BackgroundBread(100, -40, .5, .5);
  bread3 = new BackgroundBread(10, 60, 1, 1);
  bread4 = new BackgroundBread(256, 0, 2, 1);
}

function draw() {

  //Eye wobble from mic level
  eyeWobble = map(mic.getLevel(), .1, .2, 260, 270);

  //Background canvas color
  background(158, 220, 207);

  //Movement and display of the background bread objects
  push();
  bread1.display();
  bread1.move();

  bread2.display();
  bread2.move();

  bread3.display();
  bread3.move();

  bread4.display();
  bread4.move();
  pop();

  //Drawing the main avatar
  drawTailFins();

  drawTail();

  drawBody();

  drawFins(110, -80, -100);

  drawHead();

  drawMouth(-mouthMove, mouthMove);

  drawEye(eyeWobble);
}


function mousePressed() {
  //If the mouse is pressed near the mouth / lips, the lips move
  if (mouseX < width * .95 && mouseX > width * .85 && mouseY < height * .58 && mouseY > height * .45) {
    mouthMove = -mouthMove + 30;
  }
}

function drawBody() {
  //Drawing Body
  fill(color(247, 197, 111));
  scale(.90);
  translate(50, 40);
  strokeWeight(6);
  beginShape();
  vertex(width * .9, height * .2);
  vertex(width * .97, height * .3);
  vertex(width * .9, height * .4);
  vertex(width * .9, height * .7);
  vertex(width * .6, height * .7);

  vertex(width * .6 - 200, height * .7 - 50);
  vertex(width * .6 - 200, height * .5 - 50);

  vertex(width * .6 - 200, height * .4 - 50);
  vertex(width * .53 - 200, height * .3 - 50);
  vertex(width * .6 - 200, height * .2 - 50);

  vertex(width * .75 - 200, height * .17 - 50);

  vertex(width * .9 - 200, height * .2 - 50);
  endShape(CLOSE);

  //Misc Body Detail
  strokeWeight(6);
  line(width * .9, height * .2, width * .75, height * .17);
  line(width * .75, height * .17, width * .6, height * .2);
  line(width * .53, height * .3, width * .6, height * .2);
  line(width * .6, height * .4, width * .53, height * .3);
  line(width * .6, height * .4, width * .6, height * .7);
  line(width * .6, height * .4, width * .6 - 200, height * .4 - 50);

}

function drawTail() {
  //Drawing Tail
  push();
  fill(color(34, 179, 176));
  rotate(-50);
  translate(95, 40);
  strokeWeight(6);
  ellipse(100, 100, 275, 140);
  pop();
}

function drawFins(xPos, yPos, finRotation) {
  //Drawing Fins
  fill(color(34, 179, 176));
  rotate(finRotation)
  translate(xPos, yPos);
  strokeWeight(4);
  beginShape();
  vertex(width * .45, height * .4);
  vertex(width * .5, height * .4);
  vertex(width * .6, height * .45);
  vertex(width * .56, height * .5)
  vertex(width * .45, height * .55)
  vertex(width * .35, height * .53);
  endShape(CLOSE);
}

function drawTailFins() {
  //Large back tail fins
  fill(color(133, 191, 102));
  strokeWeight(3);
  triangle(width * .05, height * .15, width * .07, height * .3, width * .6, height * .4);
  triangle(width * .075, height * .35, width * .05, height * .5, width * .6, height * .45);

  //Bottom smaller tail fin
  push();
  scale(.5);
  translate(175, 285);
  strokeWeight(4);
  triangle(width * .075, height * .35, width * .05, height * .5, width * .6, height * .45);
  pop();
}

function drawHead() {
  //Drawing Head
  push();
  fill(color(34, 179, 176));
  scale(1, -1)
  rotate(100);
  scale(1.8);
  translate(110, -20);
  arc(70, 50, 80, 180, 220, PI - QUARTER_PI, CHORD);
  pop();
}

function drawMouth(topLipMove, bottomLipMove) {
  //Drawing Mouth
  fill(color(133, 191, 102));
  translate(-5, 10);
  push();
  translate(0, bottomLipMove);
  triangle(width * .76, height * .08, width * .85, height * .13, width * .86, height * .05);
  pop();
  rotate(20);
  translate(-170, -390);
  push();
  translate(0, topLipMove * .2);
  triangle(width * .73, height * .12, width * .75, height * .03, width * .7, height * .02);
  pop();
}

function drawEye(pupilRotate) {
  //Drawing Eye
  fill(color(241, 224, 76));
  scale(.8);
  translate(200, -85);
  circle(200, 200, 50);
  scale(.7);
  translate(45, 70);
  fill(color(0, 0, 0));
  push();
  translate(0, pupilRotate - 240);
  circle(250, 200, 50);
  pop();
}