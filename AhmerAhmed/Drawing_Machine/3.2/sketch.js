//A prompt is given to the user to draw something. An image is included, but only shown for a few seconds then the end drawing is all up to the user. No restrictions to the drawing, can be literal or figurative.
//click a key to use an eraser
  //eraser is just stroke colored white and stroke size increased

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(15,15,15);
  stroke(250);
  noFill();
}

function draw() {
  if (mouseIsPressed == true){
    background(15,15,15,10);
    line(mouseX, mouseY, pmouseX, pmouseY);
    //causes reflection of the line, can be used for a prompt?    (line(width-mouseX, height-mouseY, width-pmouseX, height-pmouseY);)
  }
}

function keyTyped(){
  //saves the canvas
  if (key == 's'){
    saveCanvas('Name_This_File_Something_-__-', 'png');
  }
  //creates an eraser
  if (key == 'e'){
    stroke(15);
    strokeWeight(10);
  }
  //uses the "pen" to continue drawing
  if (key == 'p'){
    stroke(250);
    strokeWeight(1);
  }
  if (key == 'd'){
    clear();
    background(15,15,15);
  }
  if (key == '0'){
    stroke(250);
    strokeWeight(1);
  }
  if (key == '1'){
    stroke(250);
    strokeWeight(10);
  }
  if (key == '2'){
    stroke(250);
    strokeWeight(20);
  }
  if (key == '3'){
    stroke(250);
    strokeWeight(30);
  }
  if (key == '4'){
    stroke(250);
    strokeWeight(40);
  }
  if (key == '5'){
    stroke(250);
    strokeWeight(50);
  }
}
