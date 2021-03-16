let mic;
let micLevel;
let scaleUp;
let cnv;
let x;
let y;
let z;
let s;


function setup() {
  createCanvas(500, 400);
  angleMode(DEGREES);

  mic = new p5.AudioIn();
  mic.start();
}

/////////////DRAW LOOP/////////////

function draw(){
  micLevel = mic.getLevel();
  scaleUp = map(mic.getLevel(), 0, 0.2, 0.5, 1.5, true);
  
  
  background(120,120,120);
  background(x,y,z);
  drawTophead();
  drawHead();
  drawBottom();
  drawLeftfingers();
  drawRightfingers();
  
  fill(255,149, 29);
  drawEyes();
  drawTopout();
  drawHair();

  fill(120);
  drawMouth(scaleUp);
  drawText();
}


/////////DRAW BODY PARTS///////
function drawTophead(){
  fill('#F15A29');
  noStroke();
  rect(225, 25, 50, 25);
};
function drawHead(){
  fill('#231F20');
  beginShape();
    vertex(200, 50);
    vertex(200, 75);
    vertex(175, 75);
    vertex(175, 100);
    vertex(150, 100);
    vertex(150, 225);
    vertex(350, 225);
    vertex(350, 100);
    vertex(325, 100);
    vertex(325, 75);
    vertex(300, 75);
    vertex(300, 50);
  endShape(CLOSE);
};
function drawBottom(){
  fill('#F15A29');
  noStroke();
  beginShape();
    vertex(75, 175);
    vertex(75, 250);
    vertex(100, 250);
    vertex(100, 275);
    vertex(150, 275);
    vertex(150, 350);
    vertex(175, 350);
    vertex(175, 375);
    vertex(200, 375);
    vertex(200, 400);
    vertex(225, 400);
    vertex(225, 375);
    vertex(275, 375);
    vertex(275, 400);
    vertex(300, 400);
    vertex(300, 375);
    vertex(325, 375);
    vertex(325, 350);
    vertex(350, 350);
    vertex(350, 275);
    vertex(400, 275);
    vertex(400, 250);
    vertex(425, 250);
    vertex(425, 200);
    vertex(450, 200);
    vertex(450, 175);
    vertex(375, 175);
    vertex(375, 225);
    vertex(125, 225);
    vertex(125, 175);
  endShape(CLOSE);
};
function drawLeftfingers(){
  push();
    translate(0, 0);
    //the fingers rotate slightly left to right and loop
    rectMode(CENTER);
    rotate(PI * 0);
    noStroke();
    fill(0);
    triangle(35, 125, 25, 150, 50, 150);
    triangle(87, 125, 75, 150, 100, 150);
  
    beginShape();
      vertex(50, 150);
      vertex(50, 175);
      vertex(75, 175);
      vertex(75, 150);
    endShape(CLOSE);
  pop();
};
function drawRightfingers(){
  push();
    noStroke();
    fill(0);
    circle(width*.93, height*.4, 25);
    circle(width*.93, height*.54, 25);
  pop();
};
function drawEyes(){
  
  point(10, 10);
  ellipse(200, 250, 35, 25);
  quad(283, 242, 274, 274, 310, 265, 315, 235);
};
function drawTopout(){
  beginShape();
    vertex(175, 100);
    vertex(175, 200);
    vertex(225, 200);
    vertex(225, 175);
    vertex(250, 175);
    vertex(250, 200);
    vertex(275, 200);
    vertex(275, 175);
    vertex(300, 175);
    vertex(300, 200);
    vertex(325, 200);
    vertex(325, 100);
    vertex(300, 100);
    vertex(300, 125);
    vertex(275, 125);
    vertex(275, 100);
    vertex(250, 100);
    vertex(250, 125);
    vertex(225, 125);
    vertex(225, 100);
  endShape(CLOSE);
};
function drawHair(){
  line(225, 0, 250, 25);
  stroke('black');
  line(275, 0, 250, 25); 
};
function drawText(){
  push();
  fill(0);
  translate(width* 0.5, width* 0.31);
  scale(s);
  textAlign(CENTER,CENTER);
  text('HELLO WORLD', 0, 0);
  textFont('Arial');
  pop();
};

////MOUSECLICKED TO CHANGE BACKGROUND & POP-UP TEXT/////// 
function mouseClicked(){

    if (mouseX > width* 0.45 && mouseX < width*0.55 && mouseY > width* 0.6 && mouseY < width* 0.7){
      // console.log("mouse beep");
      x = 200; y= 208; z=79;
      s=1.5;


    }else {
      x=120;y=120;z=120;
      s=1;

      }

}

/////////SOUND INPUT TO COLLECT FROM MICRO
function drawMouth(scaleUp){
  push();
  translate(width * .5, width* .65);
  
  fill(255);
  circle(0, 0, width*.1);
  pop();
  
  push();
  translate(width*.5, width* .65);
  
  scale(scaleUp);
  circle(0, 0, width* .05);
  
  pop();
};