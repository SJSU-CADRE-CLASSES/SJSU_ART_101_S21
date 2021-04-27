//A prompt is given to the user to draw something. An image is included, but only shown for a few seconds then the end drawing is all up to the user. No restrictions to the drawing, can be literal or figurative.
//click a key to use an eraser
  //eraser is just stroke colored white and stroke size increased

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(15,15,15);
  stroke(250);
  noFill();

  drawGrid();
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

function drawGrid(){
  numCells = 20;
  fillColor = 15;
  for(let i = 0; i <= width; i += width/numCells){
    for(let j = 0; j <= height; j += height/numCells){
      if(fillColor == 15){
        fillColor = 50;
      }else{
        fillColor = 15;
      }
      fill(fillColor);
      rect(i, j, width/numCells, height/numCells);
    }
  }
}
