class Eyebrown {
  constructor(_Rotation) {
    this.rotation = _Rotation;
  }

  display() {
  //EYEBROWS

  //left eyebrow
  push();
  translate(width * .4, height * .4);
  rotate(-(this.rotation));
  rectMode(CENTER);
  rect(0, 0, width * .1, height * .035);
  pop();

  //right eyebrow
  push();
  translate(width * .6, height * .4);
  rotate(this.rotation * 1.75);
  rectMode(CENTER);
  rect(0, 0, width * .1, height * .035);
  pop();
  }
}

