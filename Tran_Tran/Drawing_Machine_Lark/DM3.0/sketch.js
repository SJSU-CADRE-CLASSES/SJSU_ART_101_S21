let array = [];
let backgroundColor = 200;
// let noiseOffset = 0.0;
// let strokeWidth = 100;

function setup() {
  createCanvas(800, 800);
  // background(backgroundColor);
  // drawGrid();
  strokeWeight(5);
  noFill();
  // noStroke();
}

function draw() {
// strokeWeight(strokeWidth);
//
// noiseOffset += 0.01;
// strokeWidth = noise(noiseOffset) * 10;


if (mouseIsPressed == true){
  // stroke(255);
  backgroundColor -= 5;
  line(mouseX, mouseY, pmouseX, pmouseY);
background(backgroundColor);
  array.push([mouseX, mouseY]);

  beginShape();
  for (let i = 0; i < array.length; i ++) {
    curveVertex(array[i][0], array[i][1])
  }
  endShape();
}
}
function keyTyped(){
if (key === 's'){
  saveCanvas('fileName', 'png');

}else if (key === 'd'){
  for(let i = 0; i < array.length; i++){
  background(255);

  beginShape();
  for (let i = 0; i < array.length; i ++) {
    curveVertex(array[i][0], array[i][1])
  }
  endShape();
// line(array[0][0], array[0][1], array[1][0], array[1][1]);

}
}
  return false;
}

function mousePressed() {
  array = [];
  backgroundColor = 200;
}

// function drawGrid(){
//   numCells = 40;
//   fillColor = 255;
//   strokeWeight(0);
//   for (let i = 0; i <= width; i += width / numCells){
//     for (let j = 0; j <= height; j += height / numCells){
//       if (fillColor === 255){
//         fillColor = 200;
//       } else {
//         fillColor = 255;
//       }
//       fill(fillColor)
//       rect(i, j, width / numCells, height / numCells );
//
//     }
//   }
// strokeWeight(5);
//
// }
