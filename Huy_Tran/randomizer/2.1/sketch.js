// DEFINE STATE
let circleX = 20; //Set the initial X-position for circle
let circleY = 20; // Set the initial Y-position for circle
let xSpeed = 1;
let ySpeed = 1;

function setup() {
  createCanvas(500, 300);
  background(255, 100, 0);
  noStroke();
  blendMode(DIFFERENCE);
}

function draw() {

  // CURRENT STATE
  circle(random(circleX* 5), circleY* 3, 10);
  circle(circleX, random(circleY* .2), 25);

  // ADJUSTING STATE
  circleX = circleX + xSpeed;
  circleY = circleY + ySpeed;

  //BOUNCE FROM LEFT - RIGHT FROM THE ORIGIN
  if(circleX < 0 || circleX > width) {
    xSpeed = xSpeed * -1;
    background(random(255), random(155), random(55));
  }

  // BOUNCE FROM TOP - BOTTOM 
  if(circleY < 0 || circleY > height) {
    // ySpeed = ySpeed * -1;
    background(random(55), random(155), random(255));
  }
}