//Setting up the variables
let test1;
let test2;
let test3;
let test4;

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

function draw() {
  //Background canvas color
  background(random, random, random);

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
  
   vertex(width*.4, height*.5)
  vertex(width*.4, height*.6)
  vertex(width*.3, height*.7)
  vertex(width*.2, height*.6)
  vertex(width*.2, height*.5)
  vertex(width*.25, height*.45)
  vertex(width*.3, height*.45)
  vertex(width*.35, height*.45)
  endShape(CLOSE);
  
  ellipse(width*.35, height*.52, 30, 20)
  ellipse(width*.25, height*.52, 30, 20)

}