let htc; // DECLARE OBJECT
let mySound; //DECLARE SOUND

function setup() {
  createCanvas(710, 400);
  
  // CREATE OBJECT WITH BLENDS EFFECT
  htc = new Jitter();
  noStroke();
  
//MANIPULATED CIRCLES WITH BLENDMODE 
  blendMode(DIFFERENCE);
  frameRate(15);
}
//DECLARE FUNCTION FOR SOUND AND FORMAT
function preload() {
  soundFormats('mp3');
  mySound = loadSound('assets/laser-scan-04');
}

function draw() {
  //RED(0-50), GREEN(0-150), BLUE(0-255);
  background(random(50), random(150), random(255));
  htc.move();
  htc.display();
  mySound.play();  
}

//////////PLAY-STOP//////////
function mouseClicked() {
  if (mySound.isPlaying()) {
    //  Returns a the initial sound background when clicked
    mySound.stop();
  } 
  
  else {
    mySound.play();
  }
}
/////////////////////////////

// JITTER CLASS
class Jitter {
    //Same as function with class declaration to define the position
  constructor() {
    this.x = random(width* 3);
    this.y = random(height* 7);
    this.speed = 100;
  }

// CALL X,Y PARAMETERS TO MAKE ANIMATION FROM CONSTRUCTOR
  move() {
    //An object position added in based on random speed
    this.x += random(this.speed, this.speed);
    this.y += random(this.speed, this.speed);
  }

//CALL [constructor] parameters to draw circles.
  display() {
      circle(3, random(this.y), this.y *.6);
      circle(random(this.x), this.y *.5, 9);
      circle(random(this.x), this.y *.4, 19);
      circle(7, random(this.x), this.y *.3);
      circle(random(this.x), 16, this.y *.2);
      circle(15, random(this.x), this.y *.1);
  }
}


