let array = [];
let noiseOffset = 0.0;
let strokeWidth = 2;

function setup() {
  createCanvas(800, 800);
background(235);
drawGrid();
  noFill();

}

function draw() {


 if (mouseIsPressed) {
    //line(mouseX, mouseY, pmouseX, pmouseY)
      background(50, 125, 225, 80);
      strokeWeight(strokeWidth);

      noiseOffset += 0.1;
      strokeWidth = noise(noiseOffset) * 25;
      stroke(map(mouseX, 0, 600, 0, 0, true));
          line(mouseX, mouseY, pmouseX, pmouseY)
    array.push([mouseX, mouseY]);
  }

}

function drawGrid(){
  numCells = 20;
  fillColor =  255;
  strokeWeight(0);
  for (let i = 0; i<= width; i += width / numCells){
    for (let j = 0; j<= height; j += height / numCells){
if (fillColor === 255){
  fillColor = 200;
}else{
  fillColor = 255;
}
      fill(fillColor);
          rect(i, j, width / numCells, height / numCells);
    }

  }
  strokeWeight(5);
}

function keyTyped() {

  if (key === 's') {
    // save image
    saveCanvas('fileName', 'png')
  }

  else if (key === 'd') {
    //display image
background(235);
beginShape();
    for (let i = 0; i < array.length; i++) {
    //line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
    curveVertex(array[i][0], array[i][1])
    }

endShape();


  }



}
