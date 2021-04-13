let array = [];
let backgroundColor = 255;
let numCells = 20;
let fillColor = 255;

function setup() {
  createCanvas(600, 600);
  //background(backgroundColor);
  drawGrid();
  strokeWeight(5);
  noFill();
}

function draw() {
  if (mouseIsPressed) {
    backgroundColor -= 4;
    background(backgroundColor);
    array.push([mouseX, mouseY]);

    beginShape();
    for (let i = 0; i < array.length; i++) {
      curveVertex(array[i][0], array[i][1]);
    }
    endShape();
  }
}

function mousePressed() {
  array = [];
  backgroundColor = 255;
}

function drawGrid() {
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

function keyTyped() {
  if (key === 's') { //save image
    saveCanvas('drawing', 'png');
  } else if (key === 'd') { //display image
    background(255);
    stroke(0);
    beginShape(); //draw image in curvilinear lines
    for (let i = 0; i < array.length - 1; i++) {
      curveVertex(array[i][0], array[i][1]);
    }
    endShape();

  }
  return false;
}