let array = [];

function setup() {
  createCanvas(600, 600);
  background(220);
  strokeWeight(5);
  noFill();
}

function draw() {
  if (mouseIsPressed) {
    array.push([mouseX, mouseY]);
  }
}

function keyTyped() {
  console.log(`key ${key} is being typed`)
  if (key == "s") {
    saveCanvas('fileName', 'png')
  } else if (key == "d") {
    beginShape();
      for(let i = 0; i < array.length; i++) {
        //line(array[i][0], array[i][1], array[i+1][0], array[i+1][1])
        curveVertex(array[i][0], array[i][1]);
      }
      endShape();
  }
  return false;
}
