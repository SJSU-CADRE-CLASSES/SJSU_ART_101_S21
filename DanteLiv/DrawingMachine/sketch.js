let array = [];
let backgroundColor = 200;

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(backgroundColor);
  strokeWeight(5);
  noFill();
}

function draw() {
  if (mouseIsPressed) {
    backgroundColor -= 2;
    background(backgroundColor);
    beginShape();
    for (let i = 0; i < array.length; i++) {
      //line(array[i][0], array[i][1], array[i+1][0], array[i+1][1])
      curveVertex(array[i][0], array[i][1]);
    }
    endShape();
    array.push([mouseX, mouseY]);
  }
}

function keyTyped() {
  console.log(`key ${key} is being typed`)
  if (key == "s") {
    saveCanvas('fileName', 'png')
  } else if (key == "d") {
    background(255);
    beginShape();
    for (let i = 0; i < array.length; i++) {
      //line(array[i][0], array[i][1], array[i+1][0], array[i+1][1])
      curveVertex(array[i][0], array[i][1]);
    }
    endShape();
  }
  return false;
}

function mousePressed() {
  console.log("mouse pressed function");
  array = [];
  backgroundColor = 255;
}
