//A prompt is given to the user to draw something. An image is included, but only shown for a few seconds then the end drawing is all up to the user. No restrictions to the drawing, can be literal or figurative.
//click a key to use an eraser
  //eraser is just stroke colored white and stroke size increased

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(15);
  stroke(250);
  noFill();
}

function draw() {
  if (mouseIsPressed == true){
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
    stroke(0);
    strokeWeight(10);
  }
  //uses the "pen" to continue drawing
  if (key == 'p'){
    stroke(250);
    strokeWeight(1);
  }
}
