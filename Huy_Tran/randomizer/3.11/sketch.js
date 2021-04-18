let array = [];
let noiseOffset = 0.0;
let strokeValue = 5;
// let backgroundColor = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100, 150, 70, 30);

  strokeWeight(5);
  noFill();
}

function draw() {
    background(100, 150, 70, 30);

    strokeWeight(strokeValue);
    noiseOffset += 0.05;
    strokeValue = noise(noiseOffset) * 110;

    stroke(map(mouseX, 0, 600, 0, 255, true));
    line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    line(mouseX, mouseY, pmouseX, pmouseY);
}

function keyTyped() {
  //Save canvas to file name
  if (key === 's') {
    //save current drawing
    saveCanvas('drawSomething', 'png');

  } else if (key === 'c') {
    //display image
  clear();
  }
  return false;
}
