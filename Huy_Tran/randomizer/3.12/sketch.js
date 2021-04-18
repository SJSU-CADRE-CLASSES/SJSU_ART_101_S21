let array = [];
let backgroundColor = 100;

function setup() {
  createCanvas(450, 450);
  // background(backgroundColor);


  drawGrid();
  noFill();
}


function draw() {
  if (mouseIsPressed) {
    // stroke(map(mouseX, 0, 600, 0, 255, true));
    // line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY, );
    // line(mouseX, mouseY, pmouseX, pmouseY);
    backgroundColor -= 7;
    background(backgroundColor);
    array.push([mouseX, mouseY]);

  }
}

function keyTyped() {
  //Save canvas to file name
  if (key === 's') {
    //save current drawing
    saveCanvas('drawSomething', 'png');

  } else if (key === 'd') {
    //display image
    background(200);

    beginShape();
    for (var i = 0; i < array.length; i++) {
      // line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
      curveVertex(array[i][0], array[i][1]);
    }
    endShape();
  }
  return false;
}

function mousePressed() {
  array = [];
  backgroundColor = 200;
}

function drawGrid() {
  numCells = 20;
  fillColor = 255;
  strokeWeight(0);

  for (let i = 0; i <= width; i += width / numCells) {
    for (let j = 0; j <= width; j += height / numCells) {
      if (fillColor === 255) {
        fillColor = 210;
      } else {
        fillColor = 255;
      }
      fill(fillColor);
      rect(i, j, width / numCells, height / numCells);
    }
  }
  strokeWeight(5);
}
