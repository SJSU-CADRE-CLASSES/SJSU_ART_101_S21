
let r, g, b;
let anglewag = 10;
var vol;
let micLevel;
let circleYOne = 0;
let circleYTwo = 0;
let circleYThree = 0;
let circleYFour = 0;
let circleYFive = 0;

function setup(){
    createCanvas(400, 400);
  // Pick colors randomly
  r = random(255);
  g = random(255);
  b = random(255);
  angleMode(DEGREES);
  //mic functionSetup
  mic = new p5.AudioIn();
  mic.start();
}
//Functions//
function draw(){
  
   let vol = mic.getLevel();
 
  console.log(vol)
  //console.log("mouse x is:" + mouseX)
  //console.log("mouse y is:" + mouseY)
anglewag = mouseX;
   background(220);
  circle(300, circleYOne, 29);
  fill(100, 120, 340)
  circle(200, circleYTwo, 110);
  fill(300, 400, 100)
  circle(100, circleYThree, 90);
  
  circle(380, circleYFour, 30);
  fill(200, 300, 500)
  circle(20, circleYFive, 40);

  circleYOne += 1.8;
  circleYTwo += 1.2;
  circleYThree += 3;
  circleYFour += 1;
  circleYFive += 1;
//circles
  if (circleYOne > height) {
    circleYOne = 10;
  }
  if(circleYTwo > height){
   circleYTwo = 2.6; 
  } 
  if(circleYThree > height){
    circleYThree = 4.7;  
  if(circleYFour > height){
    circleFour = 10;
  }
  if(circleYFive > height){
    circleYFive = 100;
  }
  }
  // Draw a circle
  strokeWeight(2);
  stroke(r, g, b);
  fill(r, g, b, 127);
  ellipse(200, 200, 500, 800);
  
drawBody();
shadowChin();
drawHead();
eyeShadow(); 
drawEyes(); 
drawSecondeye();
drawMouth();  
drawTongue(micLevel);
push();
  translate((mouseX/10)-15,(mouseY/10)-15);
  console.log((mouseX/10)-15);
  drawPupils(anglewag); 
  pop();
drawGlare(); 
//drawBall();
}

function mousePressed(){
  // Check if mouse is inside the circle
  
  let d = dist(mouseX, mouseY, 200, 200);
  if (d < 100) {
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
  }
}
function drawBall(){//drawBall//
  fill(20, 100, 300);
  circle(20, 100, 40);
}
function drawGlare(){//drawGlare//
  
  fill(300);
  circle(153, 110, 20.4);
  
  circle(270, 110, 20.4);}

function drawPupils(){//drawPupils//

  fill(0);
  circle(140, 130, 40)
  
  circle(260, 130, 40);
}

function drawTongue(){ //drawTongue//
  fill(130, 10, 20, 300);
  ellipse(200, 245, 120, 32);
}
function drawMouth(){
    //drawMouth//
  fill(20);
  noStroke();
  ellipse(200, 240, 200, 60);
}
function drawSecondeye(){
   // drawSecondeye//
  circle(260, 130, 100);
}
function drawEyes(){
    //drawEyes//
  fill(250);
  stroke(0);
  strokeWeight(0);
  circle(140, 130, 100);
}
function eyeShadow(){
    //eyeShadow//
  
  fill(0, 220, 300);  
  circle(258, 132, 100);
  circle(142, 132, 100);
}
function drawHead(){
   //drawHead//
  fill(0, 260, 250);
  noStroke();
  ellipse(200, 190, 310, 240);
}
function shadowChin(){
//shadowChin//
  fill(0, 240, 300);
  ellipse(200, 194, 310, 240);
}
function drawBody(){
//drawBody//
  fill(0, 260, 250);
  noStroke();
  square(45, 200, 310);
}




