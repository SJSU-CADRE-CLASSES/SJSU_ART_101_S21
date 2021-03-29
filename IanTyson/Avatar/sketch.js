var mic;
var micLevel;
var mouthMove;
var eyeMoveX;
var eyeMoveY;
var change = false;
var background_; //classVariable

//color hex codes below

// green = '#80FF00';
// darkGreen = '#80C837';
// darkGreenEye = '#80EB14';
// red = '#ED1919';
// darkRed = '#CF0E0E';
// darkRedEye = '#DB0E0E';

function setup() {
  
  mic = new p5.AudioIn()
  mic.start();
  
  createCanvas(1000, 1000);
  angleMode(DEGREES);
  
  background_ = new Background(0,0);
  
}

function draw() {
  
  micLevel = mic.getLevel() * 350;  
  
  mouthMove = micLevel;
  
  eyeMoveX = map(mouseX, 0,width,-57,57);
  eyeMoveY = map(mouseY, 0,width,-57,57);
  
  
  background(20);
  
  
  background_.display();
  background_.move();
  
drawBase(0);
  
  
  mousePressed();
  
  push();
   translate(0, mouthMove);
drawMouthLines();
  pop();

  push();
  translate(eyeMoveX, eyeMoveY);
  drawCenterEye();
  pop();
  
  
  if (change == true){
    
    drawBaseRed();
    
     push();
   translate(0, mouthMove);
drawMouthLinesRed();
  pop();
    
    push();
  translate(eyeMoveX, eyeMoveY);
  drawCenterEyeRed();
  pop();
    
    
    push();
     fill(200); //angry brow
  stroke(150);
  strokeWeight(12);
  beginShape();
  vertex(width *.3, width *.25);
  vertex(width *.7, width *.25);
  vertex(width *.5, width *.35);
  vertex(width *.5, width *.35);
  endShape(CLOSE);
    pop();
    
  }
  
  
}

function mousePressed(){
  
  
  
  if(mouseX > width *.1 && mouseX < width *.9 && mouseY > width *.2 && mouseY < width * .9 && mouseIsPressed){
            change = true;
drawX();
    
     } 
  else { 
               change = false;
               }
  
}

//drawing shapes below

function drawBase(){
  
  fill(200);
  strokeWeight(0);
 rect(width *.1,width *.2,width *.8,width *.7,20); //body
  
    fill(150);
rect(width *.3,width *.15,width *.4,width *.05); //top
  
    strokeWeight(0);
rect(width *.1,width *.8,width *.2,width *.1); //corner
rect(width *.7,width *.8,width *.2,width *.1); //corner
  
fill('#80FF00');
  stroke(150);
  strokeWeight(12);
  circle(width *.5,width *.4,width *.25); //outer eye
  
   fill('#80FF00');
  stroke(0);
  strokeWeight(1);
  rect(width *.3,width *.6,width *.4,width *.3); //mouth
  
}
function drawBaseRed(){
  
  fill(200);
  strokeWeight(0);
  rect(width *.1,width *.2,width *.8,width *.7,20); //body
  
  beginShape();
  vertex(width *.3, width *.25);
  vertex(width *.7, width *.25);
  vertex(width *.5, width *.4);
  vertex(width *.5, width *.4);
  endShape(CLOSE);
  
    fill(150);
rect(width *.3,width *.15,width *.4,width *.05); //top
  
    strokeWeight(0);
rect(width *.1,width *.8,width *.2,width *.1); //corner
rect(width *.7,width *.8,width *.2,width *.1); //corner
  
fill('#ED1919');
  stroke(150);
  strokeWeight(12);
  circle(width *.5,width *.4,width *.25); //outer eye
  
   fill('#ED1919');
  stroke(0);
  strokeWeight(1);
  rect(width *.3,width *.6,width *.4,width *.3); //mouth
  
}

function drawCenterEye(){
  
  fill('#80EB14');
  stroke('#80C837');
  strokeWeight(5);
  circle(width *.5,width *.4,width * .07);
  
}
function drawCenterEyeRed(){
  
  fill('#DB0E0E');
  stroke('#CF0E0E');
  strokeWeight(5);
  circle(width *.5,width *.4,width * .07);
  
}

function drawMouthLines(){
  
  stroke('#80C837');
  strokeWeight(7);
line(width *.5,width *.63,width *.5,width *.85); //center line

line(width *.45,width *.655,width *.45,width *.825); //2nd
line(width *.55,width *.655,width *.55,width *.825);

line(width *.4,width *.68,width *.4,width *.8); //3rd
line(width *.6,width *.68,width *.6,width *.8);

line(width *.35,width *.705,width *.35,width *.775); //4th
line(width *.65,width *.705,width *.65,width *.775);
}
function drawMouthLinesRed(){
  
  stroke('#CF0E0E');
  strokeWeight(7);
line(width *.5,width *.63,width *.5,width *.85); //center line

line(width *.45,width *.655,width *.45,width *.825); //2nd
line(width *.55,width *.655,width *.55,width *.825);

line(width *.4,width *.68,width *.4,width *.8); //3rd
line(width *.6,width *.68,width *.6,width *.8);

line(width *.35,width *.705,width *.35,width *.775); //4th
line(width *.65,width *.705,width *.65,width *.775);
}

function drawX(){
     
  strokeWeight(100);
  stroke('#ED1919');
  
  line(width * 0, width * 0, width * 1, width * 1);
  line(width * 1, width * 0, width * 0, width * 1);
   
 }





