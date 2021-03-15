class Pupils {
  constructor(_Scale) {
    this.scale = _Scale;
  }

  display() {
  //left pupil
  push();
  if (mouseX > width * 0.475 && mouseX < width * 0.525 && mouseY > 0 && mouseY < height) {
    translate((mouseX - width * 0.1), width * .5);
  } else if (mouseX > width * .0 && mouseX < width * 0.475 && mouseY > 0 && mouseY < height) {
    translate(width * 0.375, width * 0.5);
  } else if (mouseX > width * 0.525 && mouseX < width * 1.0 && mouseY > 0 && mouseY < height) {
    translate(width * 0.425, width * 0.5);
  } else {
    translate(width * 0.4, width * 0.5);
  }
  scale(this.scale);
  circle(0, 0, width * .05);
  pop();

  //right pupil
  push();
  if (mouseX > width * 0.475 && mouseX < width * 0.525 && mouseY > 0 && mouseY < height) {
    translate((mouseX + width * 0.1), width * .5);
  } else if (mouseX > width * .0 && mouseX < width * 0.475 && mouseY > 0 && mouseY < height) {
    translate(width * 0.575, width * 0.5);
  } else if (mouseX > width * 0.525 && mouseX < width * 1.0 && mouseY > 0 && mouseY < height) {
    translate(width * 0.625, width * 0.5);
  } else {
    translate(width * 0.6, width * 0.5);
  }
  scale(this.scale);
  circle(0, 0, width * .05);
  pop();
  }
}
