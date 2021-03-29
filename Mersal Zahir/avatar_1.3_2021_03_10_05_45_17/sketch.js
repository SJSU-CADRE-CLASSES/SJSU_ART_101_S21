let eyeMove; 
let eyeSpin;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  
}


function draw() {
  
  console.log("mouse x is: " + mouseX)
  console.log("mouse y is: " + mouseY)
  
  eyeMove = map(mouseX, 150, 0, 345, 369);
  eyeSpin = map(mouseY, 0, 150, 345, 369);
  
  fill(180, 150, 220);
  stroke(255);
  strokeWeight(5);
  
  background(9, 22, 159);
  
  drawEyes();
  drawTears();
  drawMouth();
  drawNose();
  drawEyeballOne(eyeMove, eyeSpin);
  drawEyeballTwo(eyeMove, eyeSpin);
  

  
}

function drawEyes(){
  
  fill(180, 150, 220);
  stroke(255);
  strokeWeight(5);
  
  //draw first circle
  circle(100, 100, 100);
  
  //draw second circle
  circle(300, 100, 100);
  
}

function drawTears(){
  
  fill(180, 150, 220);
  stroke(255);
  strokeWeight(5);
  
  //draw first ellispe
  ellipse(55, 225, 20, 200);
  
  //draw second ellipse
  ellipse(85, 230, 15, 160);
  
  //draw third ellipse 
  ellipse(315, 230, 15, 160);
  
  //draw fourth ellipse
  ellipse(345, 225, 20, 200);
}

function drawMouth(){
  
  fill(180, 150, 220);
  stroke(255);
  strokeWeight(5);
  
  //draw mouth
  ellipse(200, 300, 105, 25);

}

function drawNose(){
  
  fill(180, 150, 220);
  stroke(255);
  strokeWeight(5);
  
  //draw triangle
  triangle(200, 180, 190, 230, 210, 230);
}

function drawEyeballOne(){
  
  //color eyeballs
  fill(170, 220, 255);
  strokeWeight(2);

  // draw first eyeball
  push();
  translate(100, 80);
  rotate(eyeMove);
  rotate(eyeSpin);
  rectMode(CENTER);
  rect(0, 0, 30, 30);
  pop();
}

function drawEyeballTwo(){
  
  //color eyeballs
  fill(170, 220, 255);
  strokeWeight(2);

  // draw second eyeball
  push();
  translate(300, 80);
  rotate(eyeMove);
  rotate(eyeSpin);
  rectMode(CENTER);
  rect(0, 0, 30, 30);
  pop();
}
