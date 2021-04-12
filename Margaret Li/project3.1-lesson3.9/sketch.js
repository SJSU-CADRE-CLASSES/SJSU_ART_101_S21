let array = []; //empty array for mouseX and mouseY
//let backgroundColor = 255;

function setup() {
  //fullscreen canvas
  createCanvas(windowWidth, windowHeight);
  background(20, 120, 255);
  strokeWeight(3);
  noFill();
}

function draw() {

  if (mouseIsPressed){
    //string
    stroke(220, 180, 70);
    strokeWeight(2);
    line(width-mouseX, height-mouseY, width-pmouseX, height-pmouseY);
    line(mouseX, mouseY, pmouseX, pmouseY);

    //beads
    push();
    fill(random(0, 255), random(0, 255), random(0, 255));
    noStroke();
    circle(width-mouseX, height-mouseY, 40);
    circle(mouseX, mouseY, 40);
    pop();
  }
}

function keyTyped() {
  if (key === 's') { //save image
    saveCanvas('drawing', 'png');
  }
  return false;
}
