class Nose {
  constructor() {
  }

  display() {

  beginShape();
  vertex(width * .45, height * .8);
  vertex(width * .55, height * .8);
  vertex(width * .6, height * .9);
  vertex(width * .4, height * .9);
  endShape(CLOSE);
  }
}

