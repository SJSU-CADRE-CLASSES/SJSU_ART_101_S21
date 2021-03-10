let angleHand = 10;
let angleMouth;
let angleKnife;
let mic;
let bamYes = false;

let bubbles = [];
let bubble1;
let bubble2;
let bubble3;
let bubble4;


function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);

  for (let i = 0; i <= 30; i++) {
    bubbles[i] = new Bubble(random(1, 10) * width * .1, random(1, 10) * width * .1, random(360), random(10) * .2);
  }

  mic = new p5.AudioIn()
  mic.start();

}

function draw() {

  angleMouth = map(mic.getLevel(), 0, 0.2, 0, 10);

  background(184, 255, 253);

  //drawBubble(width * .4, height * .3);
  //drawBubble(width * .7, height * .3);

  for (i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].move();
  };

  drawShapeBG();
  drawHat();
  drawHead();
  drawArm();
  drawWrapMouth();
  drawHeadWrap();
  drawTorso();
  drawEyes();
  drawShoulder();
  drawKnife(angleKnife);
  drawHand(angleHand);
  drawMouth(angleMouth);
  if (bamYes == true) {
    fill(255, 0, 0);
    noStroke();
    circle(width / 2, height / 2, 100);

  }
}

function mousePressed() {

  // if the position of the mouse is inside this region then do this

  if (mouseX > width * .4 && mouseX < width * .8 && mouseY > height * .1 && mouseY < height * .4) {
    angleHand = -angleHand;
  } else if (mouseX < width * .2 || mouseX > width * .8) {
    bamYes = !bamYes;
    circle(width / 2, height / 2, 100);

  }

}

function drawHand(X) {
  // the hand of the character
  push();
  translate(X, 0);
  fill(255, 243, 82);
  circle(width * .8, height * .5, width * .15)
  pop();
}

function drawHead() {
  // the head of the character
  beginShape();
  strokeWeight(5);
  stroke(51);
  fill(255, 243, 82);
  vertex(width * .4, height * .4);
  vertex(width * .7, height * .4);
  vertex(width * .7, height * .7);
  vertex(width * .4, height * .7);
  endShape(CLOSE);
}

function drawHat(){
  push();
  beginShape();
  stroke(1);
  fill(255, 207, 51);
  vertex(width * .55, height * .2);
  vertex(width * .3, height * .4);
  vertex(width * .8, height * .4);
  endShape(CLOSE);
  pop();
  
}

function drawShapeBG(){
  push();
  beginShape();
  noStroke();
  fill(245, 156, 66);
  vertex(width * .0, height * .4);
  vertex(width * .0, height * .4);
  vertex(width * .2, height * .0);
  vertex(width * .0, height * .0);
  endShape(CLOSE);
  pop();
  
  push();
  beginShape();
  noStroke();
  fill(245, 156, 66);
  vertex(width * 1, height * .4);
  vertex(width * 1, height * .4);
  vertex(width * .8, height * .0);
  vertex(width * 1, height * .0);
  endShape(CLOSE);
  pop();

}

function drawKnife(){
  push();
  beginShape();
  stroke(1);
  fill(255, 0, 0);
  vertex(width * 0, height * .9);
  vertex(width * 0, height * .9);
  vertex(width * 0, height * .6);
  vertex(width * .3, height * .5);
  endShape(CLOSE);
  pop();
}

function drawHeadWrap(){
  beginShape();
  strokeWeight(5);
  stroke(51);
  fill(255);
  vertex(width * .4, height * .4);
  vertex(width * .7, height * .4);
  vertex(width * .4, height * .7);
  endShape(CLOSE);
}

function drawWrapMouth(){
  beginShape();
  strokeWeight(5);
  stroke(51);
  fill(255);
  vertex(width * .9, height * .5);
  vertex(width * .7, height * .5);
  vertex(width * .7, height * .7);
  vertex(width * .4, height * .7);
  endShape(CLOSE);
}

function drawTorso() {
  // the torso of the character
  push();
  beginShape();
  fill(120, 88, 52);
  vertex(width * .3, height * .7);
  vertex(width * .3, height * 1);
  vertex(width * .8, height * 1);
  vertex(width * .8, height * .7);
  endShape(CLOSE);
  pop();
  
}

function drawShoulder() {
  // the shoulder of the character
  beginShape();
  fill(120, 88, 52);
  vertex(width * .8, height * .7);
  vertex(width * .9, height * .7);
  vertex(width * .9, height * .9);
  vertex(width * .8, height * .9);
  endShape(CLOSE);
}

function drawArm() {
  // the arm of the character
  beginShape();
  fill(120, 88, 52);
  vertex(width * .8, height * .7);
  vertex(width * .9, height * .7);
  vertex(width * .9, height * .5);
  vertex(width * .8, height * .5);
  endShape(CLOSE);

}

function drawEyes() {
  // the left eye of the character
  fill(255);
  circle(width * .475, height * .53, width * .1);
  fill(252, 186, 3);
  circle(width * .475, height * .56, width * .05);

  //the right eye of the character
  fill(255);
  circle(width * .625, height * .53, width * .1);
  fill(255, 0, 0);
  circle(width * .625, height * .56, width * .05);

}

function drawMouth(Y) {
  //the mouth of the character
  push();
  translate(0, Y);
  beginShape();
  fill(0);
  vertex(width * .5, height * .6);
  vertex(width * .6, height * .6);
  vertex(width * .6, height * .63);
  vertex(width * .5, height * .63);
  endShape(CLOSE);
  pop();
}