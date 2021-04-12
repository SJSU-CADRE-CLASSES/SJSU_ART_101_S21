let strokeWidth = 0;
let noiseOffset = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 200, 255);
}

function draw() {
  background(200, 190, 255, 5);
  if (mouseIsPressed){

    //vary the stroke width
    strokeWeight(strokeWidth);
    noiseOffset += 0.05;
    strokeWidth = noise(noiseOffset)*25;

    stroke(map(mouseX, 0, 600, 0, 255, true));

    line(width-mouseX, height-mouseY, width-pmouseX, height-pmouseY);
    line(mouseX, mouseY, pmouseX, pmouseY);

    //ellipses
    push();
    fill(random(0, 255), random(0, 255), random(0, 255));
    stroke(map(mouseX, 0, 600, 0, 255, true));
    circle(width-mouseX, height-mouseY, 10);
    circle(mouseX, mouseY, 10);
    pop();
  }
}

function keyTyped() {
  if (key === 's') { //save image
    saveCanvas('drawing', 'png');
  } else if (key === 'c') { //clear image
    clear();
  }
  return false;
}
