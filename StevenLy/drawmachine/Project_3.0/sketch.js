let array = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  // background(0, 255, 255);

  drawGrid();
  noFill();
}

function draw() {

  background(0, 255, 255, 1.5);

  if (mouseIsPressed) {
    line(mouseX, mouseY, pmouseX, pmouseY);
    //  array.push([mouseX, mouseY]);
  }
}

function keyTyped() {

  if (key == 's') {
    // save this image
    saveCanvas('fileName', 'png')
  } else if (key == 'd') {
    //display image
    //  beginShape();
    // for (let i = 0; i < array.length; i++) {
    //   // line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
    //   curveVertex(array[i][0], array[i][1]);
    // }
    // endShape();

  }
  if (key == 'c') {
    array = [];
    clear();
    drawGrid();
  }
  return false;

}

function drawGrid() {
  numCells = 20;
  fillColor = 255;
  strokeWeight(0);

  for (let i = 0; i <= width; i += width / numCells) {
    for (let j = 0; j <= height; j += height / numCells) {
      if (fillColor === 255) {
        fillColor = 200;
      } else {
        fillColor = 255;
      }
      fill(fillColor);
      rect(i, j, width / numCells, height / numCells);
    }
  }
  strokeWeight(5);
}
