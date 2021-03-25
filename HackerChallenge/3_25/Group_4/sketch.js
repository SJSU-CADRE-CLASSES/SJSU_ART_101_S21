//Setting up the variables
let test1;
let test2;
let test3;
let test4;
let value = (65, 110, 70);
let backColor = value;


function setup() {

  //creating canvas
  createCanvas(500, 500);

  //Mic input setup
  mic = new p5.AudioIn()
  mic.start();

  //Moving background bread peices (x, y, rotation, size)
  test1 = new tester(50, 20, .1, 2);
  test2 = new tester(100, -40, .5, .5);
  test3 = new tester(10, 60, 1, 1);
  test4 = new tester(256, 0, 2, 1);
}
function mouseClicked()
{
 if (backColor === (65, 110, 70)) {
    backColor = color(random(0, 170), random(0, 170), random(0, 170));
  } 
  else {
    backColor = color(random(0, 170), random(0, 170), random(0, 170));
  }
}

function draw() {
  //Background canvas color
  background(backColor);

  //Movement and display of the background bread objects
  push();
  test1.display();
  test1.move();

  test2.display();
  test2.move();

  test3.display();
  test3.move();

  test4.display();
  test4.move();
  pop();
  
   vertex(width*.4, height*.5);
  vertex(width*.4, height*.6);
  vertex(width*.3, height*.7);
  vertex(width*.2, height*.6);
  vertex(width*.2, height*.5);
  vertex(width*.25, height*.45)
  vertex(width*.3, height*.45);
  vertex(width*.35, height*.45);
  endShape(CLOSE);
  ellipse(width*.35, height*.52, 30, 20);
  ellipse(width*.25, height*.52, 30, 20);
  drawCircles();

}

function drawCircles() {
  fill(252, 186, 3);
  circle(width * .475, height * .56, width * .05);
  fill(135, 206, 235);
  circle(width * .3, height * .2, width * .15);
  fill(255, 99, 71);
  circle(width * .8, height * .5, width * .2);
  fill(0, 255, 0);
  circle(width * .8, height * .9, width * .3);
  fill(255, 255, 0);
  circle(width * .1, height * .8, width * .2);
  fill(255);
  circle(width * .475, height * .56, width * .05);

}