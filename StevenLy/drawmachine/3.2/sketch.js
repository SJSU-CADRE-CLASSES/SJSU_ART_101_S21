let array = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 255, 255);

  strokeWeight(5);
  noFill();
}

function draw() {

  background(0, 255, 255, 5);

  if (mouseIsPressed) {
    //line(mouseX, mouseY, pmouseX, pmouseY);
    array.push([mouseX, mouseY]);
  }

}

function keyTyped() {

  if (key == 's') {
    // save this image
    saveCanvas('fileName', 'png')
  } else if (key == 'd') {
    //display image


    beginShape();
    for (let i = 0; i < array.length; i++) {
      //  line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
      curveVertex(array[i][0], array[i][1])
    }
    endShape();

  }
  if (key == 'c') {
    clear();
  }
  return false;

}
