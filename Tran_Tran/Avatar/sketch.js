// 'use strict'

let myHeadAngle = 0;
let angleTail = 10;
let mic;
let micLevel;
let mouthMove;
let tailMove;
let a = 0, b =0
// let myTailAngle = 0;






function setup() {

  // console.log(angleWag);

  createCanvas(1000, 1000);
  angleMode(DEGREES);

  mic = new p5.AudioIn();
  mic.start();

  mouthMove = map(mic.getLevel(), 0, 0.01, 0, 5);
  tailMove = map(mic.getLevel(), 0, 0.8, 0, 10);
  console.log("mouse x is: " + mouseX);
  console.log("mouse y is: " + mouseY);

  console.log("mic level" + mic.getLevel());

  micLevel = mic.getLevel();

  console.log(mouthMove);

  spirit = new Crystals();
  spirit1 = new Crystals();
  spirit2 = new Crystals();
  spirit3 = new Crystals();
  spirit4 = new Crystals();
  spirit5 = new Crystals();
  spirit6 = new Crystals();
  spirit7 = new Crystals();
  spirit8 = new Crystals();
  spirit9 = new Crystals();
  spirit10 = new Crystals();
  spirit11 = new Crystals();
  spirit12 = new Crystals();

//   for (let i = 0; i < 50; i++) {
//    spirit.push(new Crystals());
// }
}


function draw() {



//     push();
//   // let frameRate = 10;
//   // let bgColors = [p, e, o]
//   // let p = fill(255, 0, 255);
//   // let e = fill(0, 0, 210);
  // let o = fill(255, 165, 0);



  background(10);

  // spirit.move();
  // spirit.display();

  // for (let i = 0; i < spirit.length; i++) {
  spirit.move();
  spirit.display();
  spirit2.move();
  spirit2.display();
  spirit3.move();
  spirit3.display();
  spirit4.move();
  spirit4.display();
  spirit5.move();
  spirit5.display();
  spirit6.move();
  spirit6.display();
  spirit7.move();
  spirit7.display();
  spirit8.move();
  spirit8.display();
  spirit9.move();
  spirit9.display();
  spirit10.move();
  spirit10.display();
  spirit11.move();
  spirit11.display();
  spirit12.move();
  spirit12.display();

  // }

  push();

  // rotate(radians(frameCount +5));
  translate(10,10)
  let i = PI / 4
  if (mouseX <= 300 , mouseY >= 300 && mouseX <= 600 , mouseY <= 600){
    rotate(i + 2);
  }else if (rotate(i - 2))


  drawTail(-10 ,-10);


  pop();


  drawBody();


  push();
  translate(500,500);
  // let myHeadAngle = 0;
  // rotate(myHeadAngle);

  if(mouseY <= 300 && mouseX >= 300){
    rotate(myHeadAngle + 4);
  } else if (mouseY >= 100 && mouseX <= 280 ){
    rotate(myHeadAngle - 4);
  }

  drawHead(-500,-500);


  // pop();


  // frameRate(color( _purple, _blue, _orange));



  drawPupils();

  // push();

  drawHighlights();

  drawBlinking();

  // push();


  translate(0, mouthMove)
  drawInnerMouth();




  pop();




  drawLegs();


  // print(myAngle);

}



function drawBody() {
  // Body
  fill(240, 120, 100);
  strokeWeight(15);
  stroke(50);
  beginShape();
  vertex(width * 0.3, height * 0.7);
  vertex(width * 0.3, height * 1);
  vertex(width * 0.7, height * 1);
  vertex(width * 0.7, height * 0.7);
  vertex(width * 0.6, height * 0.5);
  vertex(width * 0.4, height * 0.5);
  endShape(CLOSE);
// }

// function drawInnerBody() {
  // inner body
  noStroke();
  fill(230, 150, 140);
  beginShape();
  vertex(width * 0.4, height * 0.7);
  vertex(width * 0.4, height * 0.98);
  vertex(width * 0.6, height * 0.98);
  vertex(width * 0.6, height * 0.7);
  vertex(width * 0.5, height * 0.8);
  endShape(CLOSE);
// }

// function drawInnerBodyGrey(){
  //inner body grey
  noStroke();
  fill(250);
  beginShape();
  vertex(width * 0.4, height * 0.75);
  vertex(width * 0.4, height * 0.99);
  vertex(width * 0.6, height * 0.99);
  vertex(width * 0.6, height * 0.75);
  vertex(width * 0.5, height * 0.85);
  endShape(CLOSE);
  // }

// function drawInnerBodyWhite(){
  //inner body white
  noStroke();
  fill(220);
  beginShape();
  vertex(width * 0.4, height * 0.85);
  vertex(width * 0.4, height * 0.99);
  vertex(width * 0.6, height * 0.99);
  vertex(width * 0.6, height * 0.85);
  vertex(width * 0.5, height * 0.95);
  endShape(CLOSE);
// }

// function drawHeadShadow(){
  //head shadow
  noStroke();
  fill(160, 80, 60);
  beginShape();
  vertex(width * 0.354, height * 0.605);
  vertex(width * 0.402, height * 0.51);
  vertex(width * 0.6, height * 0.51);
  vertex(width * 0.645, height * 0.605);
  vertex(width * 0.5, height * 0.75);
  endShape(CLOSE);
}

function drawHead(x,y){
  //head

  translate(x, y);

  fill(240, 120, 100)
  strokeWeight(15);
  stroke(50);
  beginShape();
  vertex(width * 0.5, height * 0.7);
  vertex(width * 0.37, height * 0.56);
  vertex(width * 0.25, height * 0.56);
  vertex(width * 0.3, height * 0.5);
  vertex(width * 0.25, height * 0.5);
  vertex(width * 0.3, height * 0.45);
  vertex(width * 0.3, height * 0.3);
  vertex(width * 0.2, height * 0.2);
  vertex(width * 0.2, height * 0.0);
  vertex(width * 0.4, height * 0.2);
  vertex(width * 0.6, height * 0.2);
  vertex(width * 0.8, height * 0.0);
  vertex(width * 0.8, height * 0.2);
  vertex(width * 0.7, height * 0.3);
  vertex(width * 0.7, height * 0.45);
  vertex(width * 0.75, height * 0.5);
  vertex(width * 0.7, height * 0.5);
  vertex(width * 0.75, height * 0.56);
  vertex(width * 0.63, height * 0.56);
  endShape(CLOSE);
// }

// function drawEyelids(){
  //left eyelid


  // translate()
  noStroke();
  fill(160, 80, 60);
  beginShape();
  vertex(width * 0.35, height * 0.29);
  vertex(width * 0.43, height * 0.3);
  vertex(width * 0.46, height * 0.4);
  endShape(CLOSE);

  //right eyelid
  beginShape();
  vertex(width * 0.57, height * 0.3);
  vertex(width * 0.65, height * 0.29);
  vertex(width * 0.54, height * 0.4);
  endShape(CLOSE);


// }

// function drawBrows(){
  //brow circles
  noStroke();
  fill(250);
  circle(width * 0.43, height * 0.3, 38);
  circle(width * 0.57, height * 0.3, 38);
// }

// function drawEars(){
  //ear whites
  noStroke();
  fill(250);
  beginShape();
  vertex(width * 0.206, height * 0.1);
  vertex(width * 0.206, height * 0.015);
  vertex(width * 0.29, height * 0.1)
  endShape(CLOSE);

  beginShape();
  vertex(width * 0.707, height * 0.1);
  vertex(width * 0.793, height * 0.015);
  vertex(width * 0.793, height * 0.1)
  endShape(CLOSE);


  //ears shadows
  fill(160, 80, 60);
  beginShape();
  vertex(width * 0.24, height * 0.2);
  vertex(width * 0.3, height * 0.25);
  vertex(width * 0.35, height * 0.2);
  vertex(width * 0.24, height * 0.09);
  endShape(CLOSE);

  beginShape();
  vertex(width * 0.65, height * 0.2);
  vertex(width * 0.7, height * 0.25);
  vertex(width * 0.76, height * 0.19);
  vertex(width * 0.76, height * 0.09);
  endShape(CLOSE);
// }

// function drawEyes(){
  //left eye
  fill(250)
  strokeWeight(15);
  stroke(50);
  beginShape();
  vertex(width * 0.35, height * 0.3);
  vertex(width * 0.35, height * 0.4);
  vertex(width * 0.45, height * 0.4);
  endShape(CLOSE);

  //right eye
  beginShape();
  vertex(width * 0.65, height * 0.3);
  vertex(width * 0.65, height * 0.4);
  vertex(width * 0.55, height * 0.4);
  endShape(CLOSE);
// }





// function drawSnout(){
  //snout shadow
  noStroke();
  fill(160, 80, 60);
  beginShape();
  vertex(width * 0.39, height * 0.54);
  vertex(width * 0.45, height * 0.4);
  vertex(width * 0.55, height * 0.4);
  vertex(width * 0.61, height * 0.54);
  vertex(width * 0.5, height * 0.64);
  endShape(CLOSE);

  //snout white
  fill(250);
  noStroke();
  beginShape();
  vertex(width * 0.45, height * 0.4);
  vertex(width * 0.55, height * 0.4);
  vertex(width * 0.60, height * 0.52);
  vertex(width * 0.55, height * 0.56);
  vertex(width * 0.5, height * 0.5);
  vertex(width * 0.45, height * 0.56);
  vertex(width * 0.4, height * 0.52);
  endShape(CLOSE);
// }

// function drawNose(){
  //nose
  fill(10);
  beginShape();
  vertex(width * 0.45, height * 0.45);
  vertex(width * 0.55, height * 0.45);
  vertex(width * 0.5, height * 0.5);
  endShape(CLOSE);
// }

// function drawMouth(){
  //mouth outer
  fill(90, 40, 35);
  beginShape();
  vertex(width * 0.5, height * 0.5);
  vertex(width * 0.45, height * 0.56);
  vertex(width * 0.5, height * 0.6);
  vertex(width * 0.55, height * 0.56);
  endShape(CLOSE);
}

function drawInnerMouth(){
  fill(10);
  beginShape();
  vertex(width * 0.465, height * 0.55);
  vertex(width * 0.5, height * 0.515);
  vertex(width * 0.535, height * 0.55);
  endShape(CLOSE);
}


function drawLegs(){
  //leg left
  strokeWeight(15);
  stroke(50);
  fill(160, 80, 60);
  beginShape();
  vertex(width * 0.2, height * 1);
  vertex(width * 0.3, height * 0.9);
  vertex(width * 0.3, height * 1);
  endShape(CLOSE);

  //leg right
  fill(160, 80, 60);
  beginShape();
  vertex(width * 0.8, height * 1);
  vertex(width * 0.7, height * 0.9);
  vertex(width * 0.7, height * 1);
  endShape(CLOSE);
}

function drawTail(a, b){
  //tail
  translate(a, b)
  strokeWeight(15);
  stroke(50);
  fill(160, 80, 60);
  beginShape();
  vertex(width * 0.7, height * 0.9);
  vertex(width *0.7, height *0.99)
  vertex(width * 0.8, height * 0.99);
  vertex(width * 0.95, height * 0.85);
  vertex(width * 0.9, height * 0.8);
  vertex(width * 0.98, height * 0.7);
  vertex(width * 0.9, height * 0.7);
  endShape(CLOSE);

  //tail2
  fill(240, 120, 100)
  beginShape();
  vertex(width * 0.98, height * 0.69);
  vertex(width * 0.83, height * 0.56);
  vertex(width * 0.7, height * 0.7);
  vertex(width * 0.8, height * 0.8);
  vertex(width * 0.9, height * 0.7)
  endShape(CLOSE);

  //tail3
  noStroke();
  fill(250);
  beginShape();
  vertex(width * 0.71, height * 0.7)
  vertex(width * 0.8, height * 0.79)
  vertex(width * 0.9, height * 0.69)
  vertex(width * 0.85, height * 0.65)
  vertex(width * 0.8, height * 0.7)
  vertex(width * 0.75, height * 0.66)
  endShape(CLOSE);


}


function drawBlinking(){
  //left eyelid
  //let fill equal full opacity and frameRate it to change
  // for(fill(160, 80, 60, 255))
  noStroke();

  if(frameCount % 10 <= 1){
      fill(160, 80, 60, 255)
  }
  else {fill(160, 80, 60, 0)
   }

  // fill(160, 80, 60);
  beginShape();
  vertex(width * 0.355, height * 0.395);
  vertex(width * 0.35, height * 0.29);
  vertex(width * 0.46, height * 0.395);
  endShape(CLOSE);

  //right eyelid
  beginShape();
  vertex(width * 0.645, height * 0.395);
  vertex(width * 0.65, height * 0.29);
  vertex(width * 0.54, height * 0.395);
  endShape(CLOSE);
}

function drawPupils(){
  //left pupil
  noStroke();
 // if(frameCount % 180 < 15)
  // fill(10);



  frameRate(5)
  var color_select = ["#666699", "#33cccc", "#ff5500", "#00ff55", "#ff0000"]
   fill(random(color_select))

  beginShape();
  vertex(width * 0.37, height * 0.325);
  vertex(width * 0.37, height * 0.395);
  vertex(width * 0.42, height * 0.395);
  vertex(width * 0.42, height * 0.375);
  endShape(CLOSE);

  //right pupil
  beginShape();
  vertex(width * 0.58, height * 0.38);
  vertex(width * 0.58, height * 0.395);
  vertex(width * 0.63, height * 0.395);
  vertex(width * 0.63, height * 0.325);
  endShape(CLOSE);
}

function drawHighlights(){
//eye highlights
  noStroke();
  fill(250);
  circle(width * 0.37, height * 0.37, 22);
  circle(width * 0.63, height * 0.37, 22);
 }
