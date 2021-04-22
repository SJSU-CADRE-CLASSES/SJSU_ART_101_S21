let array = [];
let button;
var c;
var lineLength = 0;
var angle = 0;
var angleSpeed = 1;


function preload(){
  song = loadSound('asset/bunnytime.mp3');
}




function setup() {
  createCanvas(600, 650);
  background(212,205,221);
  drawGrid();


  bg = loadImage('asset/sparklerose.jpg');
  cursor(CROSS);
  strokeWeight(3);
  c = color(191,159,147);
  bg1= loadImage('asset/canvas.jpg');
  song.loop();

  // stroke('#908898');
  // strokeWeight(6);
  noFill();
  button2 = select("#restart");
  button2.class("restart");
}

function draw() {

  if (mouseIsPressed){

    background(bg);
    // line(mouseX, mouseY, pmouseX, pmouseY);
    array.push([mouseX, mouseY]);
    if (mouseIsPressed && mouseButton == LEFT) {
  push();
  translate(mouseX, mouseY);
  rotate(radians(angle));
  stroke(c);
  line(0, 0, lineLength, 0);
  pop();

  angle += angleSpeed;
}

  }

}

function mousePressed() {
  // create a new random line length each new press
  lineLength = random(40, 20);
}



function keyReleased() {


  // reverse direction and mirror angle
  if (key == 't' || key == 'T') {
    angle += 180;
    angleSpeed *= -1;
  }

  // change color
  if (key == ' ') c = color(random(255), random(255), random(255), random(80, 100));
  // default colors from 1 to 3
  if (key == '1') c = color(191,159,147);
  if (key == '2') c = color(86,109,69);
  if (key == '3') c = color(186,164,17);

}

function keyTyped(){

  if (key === 's'){
    // save this image
    saveCanvas('fileName', 'png');
  } else if (key === 'd'){
     //display image
     background(bg1);

     beginShape();
     for(let i = 0; i < array.length; i++){
     // line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
     curveVertex(array[i][0], array[i][1])
     }
     endShape();


  }

  return false;
}





function drawGrid() {
  numCells = 10;
  fillColor = 255;
  stroke(255);
  strokeWeight(1);


  for (let i = 0; i <= width; i += width / numCells){
    for (let j = 0; j <= height; j += height / numCells){
      if (fillColor === '#dfd2da'){
        fillColor = '#D4CDDD';
      } else {
        fillColor = '#dfd2da';
      }
      fill(fillColor);
        rect(i, j, width / numCells, height / numCells);
    }
  }
    // strokeWeight(5);
}
