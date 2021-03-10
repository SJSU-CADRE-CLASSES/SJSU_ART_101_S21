class PupilLight {
  constructor(_Scale) {
    this.scale = _Scale;
  }

  display() {
  //left
  push();
  if (mouseX > width * 0.475 && mouseX < width * 0.525 && mouseY > 0 && mouseY < height) {
    translate((mouseX - width * 0.115), width * .49);
  } else if (mouseX > width * .0 && mouseX < width * 0.475 && mouseY > 0 && mouseY < height) {
    translate(width * 0.36, width * 0.49);
  } else if (mouseX > width * 0.525 && mouseX < width * 1.0 && mouseY > 0 && mouseY < height) {
    translate(width * 0.41, width * 0.49);
  } else {
    translate(width * 0.385, width * 0.49);
  }

  scale(this.scale);
  circle(0, 0, width * .02);
  pop();

  //right
  push();
  if (mouseX > width * 0.475 && mouseX < width * 0.525 && mouseY > 0 && mouseY < height) {
    translate((mouseX + width * 0.085), width * .49);
  } else if (mouseX > width * .0 && mouseX < width * 0.475 && mouseY > 0 && mouseY < height) {
    translate(width * 0.56, width * 0.49);
  } else if (mouseX > width * 0.525 && mouseX < width * 1.0 && mouseY > 0 && mouseY < height) {
    translate(width * 0.61, width * 0.49);
  } else {
    translate(width * 0.585, width * 0.49);
  }

  scale(this.scale);
  circle(0, 0, width * .02);
  pop();
  }
}

