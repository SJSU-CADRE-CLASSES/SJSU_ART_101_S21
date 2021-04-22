let array = [];
let noiseOffset = 0.0;
let backgroundColor = 200;


function setup(){
  createCanvas(500, 500);
  drawGrid();

  noFill();
}

function draw() {
  //! meaning NOT
  background(255, 50, 50, 5);
  //strokeWeight(strokeWidth);

  noiseOffset += 0.05;
  strokeWidth = noise(noiseOffset) * 100;

  stroke(map(mouseX,0,600, 0,255, true), map(mouseX,0,600, 0,100, true), map(mouseX,0,600, 0,255, true));
  line(mouseX, mouseY, pmouseX, pmouseY);

}

function keyTyped(){

  if (key === 's'){
    //save this image
    saveCanvas('fileName', 'png');

  } else if (key === 'c'){
    clear();
  }
  return false;
}

function drawGrid () {

  numCells = 20;
  fillColor = 255;

  strokeWeight(0);

  for (let i = 0; i <= width; i += width / numCells) {
    for (let j = 0; j <= height; j += height / numCells){
      if (fillColor === 255){
        fillColor = 200;
      } else {
        fillColor = 255;
      }
      fill (fillColor);
        rect(i, j, width / numCells, height / numCells);
    }
  }
  strokeWeight (5);
}
