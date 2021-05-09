let array = [];
let backgroundColor = 200;

function setup() {
  createCanvas(600, 600);
  //background(backgroundColor);
  
  drawGrid();
  noFill();
}

function draw() {
  
  if (mouseIsPressed) {
    backgroundColor -= 5;
    background(backgroundColor);
    
    array.push([mouseX, mouseY]);
    
    beginShape();
    for (let i = 0; i < array.length; i++) {
  
      curveVertex(array[i][0], array[i][1])
    }
    endShape();
  }
  
}

function keyTyped() {
  
  if (key === 's') {
    
    saveCanvas('fileName', 'png');
  } else if (key === 'd') {
    background(225);
    
    beginShape();
    for (let i = 0; i < array.length; i++) {
      curveVertex(array[i][0], array[i][1])
    }
    endShape();
    
  }
  
  return false;
  
}

function mousePressed() {
  array = [];
  backgroundColor = 255;
}

function drawGrid() {
  numCells = 20;
  fillcolor = 255;
  strokeWeight(0);
  
  for (let i = 0; i <= width; i += width / numCells) {
    for (let j = 0; j <= height; j += height / numCells) {
     if (fillColor255) {
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