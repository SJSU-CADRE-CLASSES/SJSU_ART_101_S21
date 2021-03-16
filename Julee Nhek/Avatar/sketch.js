  let angleSway = 10;
  let flosSING = false;
  let flower = [];
  function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  
  for (let i = 0; i<= 20; i++){
    flower[i] = new Flower(random(1,-3) * width * .1, random(1, 10) * width * .1, random(360), random(2) * .9);
  }

}


  function draw() {


  angleSway = map(mouseX, 120, 0, 345, 360);
  angleSwing = map(mouseY, 0, 120, 345, 360);
  
    
    background(240, 239, 244) 
    drawBackground();
    for (i=0; i < flower.length -1; i++){
    flower[i].display();
    flower[i].move();
    }
    drawBody();
    drawEars();
    drawOutereyes();
    drawBeak();
    drawEyes();
    push();
    translate(angleSway)
    drawLeftWings();
    drawRightWings();
    for (i=0; i < flower.length -1; i++){
    flower[i].display();
    flower[i].move();
    }
    
    if (flosSING == true){
   
    }
  
}


////////////////////////THE FUNCTIONS////////////////////////////////
function drawBackground(){
  noStroke();
    //cream layer
  fill(238, 228, 225);
  rect(0,55,width,100);
    //beige layer
  fill(231, 216, 201);
  rect(0,110,width,100);
   // tan layer
  fill(230, 190, 174);
  rect(0,165,width,100);
    //olive layer
  fill(178, 150, 125);
  rect(0,220,width,200);
  //taupe layer
  fill(122, 108, 93);
  rect(0,280,width,150);
}

function drawBody(){
  //body
  fill(225, 175, 159);
  noStroke();
  circle(width * .50, width * .59, width * .58);
}

function drawEars(){
  //left ear
  push();
  fill(87, 57, 22);
  noStroke();
  translate(185,9);
  triangle(120, 120, 30, 130, 120, 10);
  pop();
  
      //right ear
    fill(87, 57, 22);
  noStroke();
  triangle(110, 20, 90, 130, 200, 190);
  
}

function drawOutereyes(){
  //left outer circle
  fill(247, 235, 231);
  noStroke();
  circle(width * .39, width * .34, width * .35);
  
  //right outer circle
  fill(247, 235, 231);
  noStroke();
  circle(width * .62, width * .34, width * .35);
  
}

function drawBeak(){
  //beak
  fill(253,177,0);
  beginShape();
  vertex(width * .40, height * .4);
  vertex(width * .60, height * .4);
  vertex(width * .5, height * .5);
  vertex(width * .5, height * .5);
  endShape(CLOSE);
  
}

function drawEyes(){
  //left eye 
  fill(255);
  circle(width * .61, width * .34, width * .25);
  
    //right eye 
  fill(255);
  circle(width * .40, width * .34, width * .25);
  
    //left black iris 
  fill(90);
  circle(width * .62, width * .34, width * .13);
  
      //right black iris 
  fill(90);
  circle(width * .40, width * .34, width * .13);
  
      //left pupil 
  fill(255);
  circle(width * .60, width * .32, width * .03);
  
        //right pupil 
  fill(255);
  circle(width * .38, width * .32, width * .03);
  
}

function drawLeftWings(){
         //left wing
  fill(87, 57, 22)
  translate(width * .12, height * .49);
  push();
  rotate(angleSway);
  beginShape();
  vertex(50, 30);
  bezierVertex(80, 1, 80, 70, 50, 140);
  bezierVertex(10, 30, 10, 12, 45, 35);
  endShape();
  pop();
           
}
function drawRightWings(){
           //right wing
  fill(87, 57, 22)
  translate(width * .54, height * .02);
  push();
  rotate(angleSway);
  beginShape();
  vertex(50, 30);
  bezierVertex(80, 1, 80, 70, 35, 140);
  bezierVertex(10, 30, 10, 12, 45, 35);
  endShape();
  pop();
}











  