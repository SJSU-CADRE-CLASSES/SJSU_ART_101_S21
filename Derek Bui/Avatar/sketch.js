let voice;
let mic;
let eye = 255;
let x, y;
let rain1;

var direction = "right"
 

function setup() {
  createCanvas(450, 450); 
  angleMode();
  
   mic = new p5.AudioIn();
  mic.start();

  x = width/2;
  y = height;
  
  rain1 = new rain(width * .8, height*.8, 10, .5);

}

function draw(){
    
  console.log("mic level is: " + mic.getLevel());
  voice = mic.getLevel();

   background(0, 255, 255);
  
   strokeWeight(3);
  
   rain1.display();

  rain1.move();
  
  drawclothes();
  
  drawneck();
  
  drawhead();
  
   fill(255, 255, 255);
  rect(-10, -20, 470, 90, 20);
  
  fill(0);
  rect(-20, -20, 100, 45, 25);
  
   fill(0);
  rect(400, -20, 130, 80, 25);
  
     fill(0);
  rect(180, -25, 100, 50, 20);
  
  push();
  translate(0,voice*50);
  drawmouth();
   pop();
  
  draweyes();
  
  drawbrows();
  
  drawhair();
  
  }

function mouseClicked(){
 

   console.log("mouse beep");
  console.log(mouseX, mouseY);
  
  if (eye === 0 ) {
    eye = 255;
  } else {
    
    eye = 0;
  }
    
  
  }
  
function drawmouth(){
  
   //smile
  
   strokeWeight(5);
  stroke(51);
  beginShape()
curveVertex(width * .50, height * .70);
curveVertex(width * .40, height * .70);
curveVertex(width * .50, height * .70);
curveVertex(width * .60, height * .70);
  endShape (CLOSE)
  
   //tounge
  fill(255, 153, 153)
 push();

  arc(225, 315, 60, 60, 0, PI);
  pop();
  
  //tounge line
  
   strokeWeight(4);
  stroke(51);
  fill(52);
    rect(225, 315, 2, 15);
  
}

function draweyes(){
   //eyes
  
  fill(52)
  ellipse(175, 230, 65, 95);
  
  fill(52)
  ellipse(275, 230, 65, 95);
  
  //pupiles
  fill(eye)
ellipse(175, 230, 60, 90);
  
    fill(eye)
ellipse(275, 230, 60, 90);
  

  
 
  
}

function drawbrows(){
  
  // eyebrows
  strokeWeight(10);
  stroke(51);
 beginShape()

  fill(52)
curveVertex(width * .65, height * .33);
curveVertex(width * .55, height * .35);
curveVertex(width * .65, height * .33);

  endShape (CLOSE)
  
  strokeWeight(10);
  stroke(51);
 beginShape()

  fill(52)
curveVertex(width * .43, height * .38);
curveVertex(width * .33, height * .39);
curveVertex(width * .43, height * .38);

  endShape (CLOSE)
}

function drawhair(){
  
  //hair 1 left side
  beginShape()

  fill(52)
  vertex (width * .15, height * .35);
  vertex (width * .26, height * .15);
  vertex (width * .27, height * .66);
  endShape (CLOSE)
  
  
  //hair 2
  beginShape()
  fill(51)
  vertex (width * .26, height * .25);
  vertex (width * .35, height * .12);
  vertex (width * .27, height * .35);
  endShape (CLOSE)
  
  //hair 3
    beginShape()
  fill(51)
  vertex (width * .28, height * .34);
  vertex (width * .45, height * .10);
  vertex (width * .30, height * .20);
  endShape (CLOSE)
  
  //hair 4
  beginShape()
  fill(51)
  vertex (width * .35, height * .25);
  vertex (width * .60, height * .10);
  vertex (width * .40, height * .15);
  endShape (CLOSE)
  
  //hair 5
  beginShape()
  fill(51)
  vertex (width * .70, height * .15);
  vertex (width * .55, height * .12);
  vertex (width * .40, height * .23);
  endShape (CLOSE)
  
  //hair 6
  beginShape()
  fill(51)
  vertex (width * .80, height * .20);
  vertex (width * .50, height * .15);
  vertex (width * .50, height * .20);
  endShape (CLOSE)
  
  //hair 7
   beginShape()
  fill(51)
  vertex (width * .80, height * .20);
  vertex (width * .70, height * .15);
  vertex (width * .53, height * .15);
  endShape (CLOSE)
  
  //hair 8
     beginShape()
  fill(51)
  vertex (width * .85, height * .30);
  vertex (width * .70, height * .15);
  vertex (width * .43, height * .20);
  endShape (CLOSE)
  
  //hair 9 right side
       beginShape()
  fill(52)
  vertex (width * .83, height * .35);
  vertex (width * .75, height * .25);
  vertex (width * .73, height * .66);
  endShape (CLOSE)
  
  //hair 10
       beginShape()
  fill(52)
  vertex (width * .80, height * .40);
  vertex (width * .90, height * .25);
  vertex (width * .60, height * .20);
  endShape (CLOSE)
  
  //hair 11
      beginShape()
  fill(52)
    vertex (width * .73, height * .09);
  vertex (width * .70, height * .20);
  vertex (width * .50, height * .15);
  endShape (CLOSE)
  
  //hair 12
  beginShape()
  fill(52)
    vertex (width * .85, height * .12);
  vertex (width * .70, height * .20);
  vertex (width * .50, height * .15);
  endShape (CLOSE)
  
  //hair 13
   beginShape()
  fill(52)
    vertex (width * .90, height * .15);
  vertex (width * .80, height * .30);
  vertex (width * .70, height * .15);
  endShape (CLOSE)
  
  //hair 14
  beginShape()
  fill(52)
    vertex (width * .93, height * .20);
  vertex (width * .70, height * .30);
  vertex (width * .70, height * .15);
  endShape (CLOSE)
  
  //bang 1
  beginShape()

  fill(52)
  vertex (width * .40, height * .35);
  vertex (width * .16, height * .35);
  vertex (width * .35, height * .20);
  endShape (CLOSE)
  
  //bang 2
   beginShape()

  fill(52)
  vertex (width * .55, height * .33);
  vertex (width * .26, height * .25);
  vertex (width * .55, height * .15);
  endShape (CLOSE)
  
  //bang 3
   beginShape()

  fill(52)
  vertex (width * .66, height * .33);
  vertex (width * .50, height * .25);
  vertex (width * .70, height * .15);
  endShape (CLOSE)
  
}

function drawneck(){
   //neck
  strokeWeight(4);
  stroke(51);
  fill(255, 255, 102);
  rect(190, 335, 70, 45);
  
  
}

function drawhead(){

   //head
  strokeWeight(4);
  stroke(51);
  fill(255, 255, 102);
  circle(225, 220, 250);
  
  

 
  
  
}

function drawclothes(){
   
  //hood
   strokeWeight(4);
  stroke(51);
  fill(77, 255, 166);
  rect(125, 339, 200, 40);
  
  
  //jacket
   strokeWeight(4);
  stroke(51);
  fill(77, 255, 166);
  rect(100, 380, 255, 200);
  
  
  //jacket hole 1
  fill(52)
  ellipse(160, 400, 20, 20);
  
  //jacket hole 2
  
  fill(52)
  ellipse(290, 400, 20, 20);
  
  //string 1
  strokeWeight(4);
  stroke(51);
  fill(255);
    rect(152, 400, 15, 50);
  
  //string 2
  strokeWeight(4);
  stroke(51);
  fill(255);
  rect(283, 400, 15, 50);
  
  
  //shirt
   strokeWeight(4);
  fill(51);
  rect(185, 380, 80, 70);
  
  
   
  
 
  
 
}









