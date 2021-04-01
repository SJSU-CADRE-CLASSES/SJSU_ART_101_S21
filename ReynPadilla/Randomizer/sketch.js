var canvasWidth = 400;
var canvasHeight = 400;
var maxMouthHeight = 24;
var glassReflectionYValue = 150;
var colorValue = 142;

let cube1;
let cube2;
let cube3;
let cube4;
let cube5;
let cube6;
let cube7;
let cube8;

function setup() {

  createCanvas(canvasWidth, canvasHeight);
  angleMode(degrees)

  mic = new p5.AudioIn();
  mic.start();
  
cube1 = new Cube(5,30,45);
cube2 = new Cube(80,50,55);
cube3 = new Cube(100,10,45);
cube4 = new Cube(150,50,45);
cube5 = new Cube(200,30,45);
cube6 = new Cube(250,15,55);
cube7 = new Cube(275,30,45);
cube8 = new Cube(350,60,45);

}

function draw() {
  background(124, 215, 222)

cube1.display();
cube2.display();
cube3.display();
cube4.display();
cube5.display();
cube6.display();
cube7.display();
cube8.display();


cube1.move();
cube2.move(); 
cube3.move();
cube4.move(); 
cube5.move();
cube6.move(); 
cube7.move();
cube8.move(); 
  
  //console.log("mouse y is:" + mouseY);\
  drawTail();

  //.........................change body color.............................................
  colorValue = colorValue + 0.2;
  if (colorValue > 200) {
    colorValue = 142;
  }
  //console.log(colorValue)
  drawBody(colorValue);

  //.........................draw rest of body parts............................................. 
  drawLeftshades();
  drawRightshades();
  drawLeftarm();
  drawRightarm();


  //.........................Mouse mouth movement.............................................
  var mouseValue = mouseY / canvasHeight;
  drawGlassreflection(mouseValue, glassReflectionYValue);


  //jaw changing color
  drawJaw(mouseValue);

  //.........................Mic mouth movement.............................................
  var micLevel = mic.getLevel();
  drawMouth(maxMouthHeight);
  drawInnermouth(micLevel, maxMouthHeight);

}

//...........................FUNCTIONS EXPLAINED...........................................


//tail
function drawTail(x, y) {
  fill(45)
  noStroke()
  beginShape();
  vertex(width * .25 / 10, height * 5 / 10)
  vertex(width * 1.75 / 10, height * 10 / 10)
  vertex(width * 5 / 10, height * 10 / 10)
  endShape(CLOSE);

}

//avatar figure
function drawBody(value) {
  fill(25, 206, value)
  noStroke();
  beginShape();
  vertex(width * 3 / 10, height * 1 / 10)
  vertex(width * 2 / 10, height * 4 / 10)
  vertex(width * 1 / 10, height * 5 / 10)
  vertex(width * 3 / 10, height * 7 / 10)
  vertex(width * 3.75 / 10, height * 7 / 10)
  vertex(width * 2 / 10, height * 10 / 10)
  vertex(width * 8 / 10, height * 10 / 10)
  vertex(width * 6.25 / 10, height * 7 / 10)
  vertex(width * 7 / 10, height * 7 / 10)
  vertex(width * 9 / 10, height * 5.10 / 10)
  vertex(width * 8 / 10, height * 4 / 10)
  vertex(width * 7 / 10, height * 1 / 10)
  endShape(CLOSE);
}


//lower face/jaw shape
function drawJaw(value) {
  beginShape();
  noStroke();
  if (value <= 0.5) {
    fill(2, 115, 104)
  }
  if (value > 0.5) {
    fill(0, 102, 204)
  }

  vertex(width * 5 / 10, height * 4.5 / 10)
  vertex(width * 2.25 / 10, height * 6.25 / 10)
  vertex(width * 3 / 10, height * 7 / 10)
  vertex(width * 7 / 10, height * 7 / 10)
  vertex(width * 7.9 / 10, height * 6.15 / 10)
  endShape(CLOSE);
}


// left tooth
function drawLefttooth() {
  fill(255)
  beginShape();
  vertex(width * 3.5 / 10, height * 6 / 10)
  vertex(width * 5 / 10, height * 6 / 10)
  vertex(width * 4 / 10, height * 7 / 10)
  endShape(CLOSE)
}


//right tooth
function drawRighttooth() {
  fill(255)
  beginShape();
  vertex(width * 5 / 10, height * 6 / 10)
  vertex(width * 6.5 / 10, height * 6 / 10)
  vertex(width * 6 / 10, height * 7 / 10)
  endShape(CLOSE);
}


//sunglasses left shade
function drawLeftshades() {
  fill(171, 25, 38)
  noStroke();
  beginShape();
  vertex(width * 1 / 10, height * 3 / 10)
  vertex(width * 3 / 10, height * 5 / 10)
  vertex(width * 5 / 10, height * 3 / 10)
  endShape(CLOSE)
}


//sunglasses right shade
function drawRightshades() {
  noStroke();
  fill(171, 25, 38)
  beginShape();
  vertex(width * 5 / 10, height * 3 / 10)
  vertex(width * 7 / 10, height * 5 / 10)
  vertex(width * 9 / 10, height * 3 / 10)
  endShape(CLOSE);
}


//sunglass streak
function drawGlassreflection(value, glassReflectionYValue) {
  stroke(255)
  line(350, (value * 10) + glassReflectionYValue, 50, (value * 10) + glassReflectionYValue);
}


//leftarm
function drawLeftarm() {
  fill(2, 115, 104);
  noStroke();
  beginShape();
  vertex(width * 3.55 / 10, height * 7.5 / 10)
  vertex(width * 2.65 / 10, height * 9 / 10)
  vertex(width * 5 / 10, height * 8.5 / 10)
  endShape(CLOSE);
}


//rightarm
function drawRightarm() {
  fill(2, 115, 104)
  noStroke();
  beginShape();
  vertex(width * 6.45 / 10, height * 7.5 / 10)
  vertex(width * 7.35 / 10, height * 9 / 10)
  vertex(width * 5 / 10, height * 8.5 / 10)
  endShape(CLOSE);
}


//drawmouth
function drawMouth(maxMouthHeight) {
  fill(380)
  rect(147, 250, 99, maxMouthHeight)
}

//innermouth
function drawInnermouth(value, maxMouthHeight) {
  fill(0)
  rect(148, 252, 95, (maxMouthHeight * value))
}

//triangletail
function drawTail() {
  fill(0)
  triangle(43, 255, 65, 400, 153, 400);
}