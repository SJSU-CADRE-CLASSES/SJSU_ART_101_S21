class Mouth {
  constructor(_yPos) {
    this.yPos = _yPos;
  }

  display() {
  //teeth
  push();
  fill(230);
  translate(width * .5, (height * .9) + this.yPos);  
  beginShape();
  rectMode(CENTER);
  rect(0, 0, width * 0.15, height * 0.015);
  endShape(CLOSE);
  pop();  
    
  //mouth
  push();
  translate(width * .5, (height * .9) + this.yPos);  
  beginShape();
  vertex(width * -.1, height * .0);
  vertex(width * .1, height * .0);
  vertex(width * .05, height * .05);
  vertex(width * -.05, height * .05);
  endShape(CLOSE);
  pop();

  //shadow mouth
  push();
  fill(0, 0, 0, 20);
  translate(width * .5, (height * .9) + this.yPos);
  beginShape();
  vertex(width * -.1, height * .0);
  vertex(width * -.05, height * .03);
  vertex(width * .05, height * .03);
  vertex(width * .1, height * .0);
  vertex(width * .05, height * .05);
  vertex(width * -.05, height * .05);
  endShape(CLOSE);
  pop();
  }
}