class Bubble {
  constructor(_xPos, _yPos, _rotation, _size) {
    this.xPos = _xPos;
    this.yPos = _yPos;
    this.rotation = _rotation;
    this.size = _size;
  }

  display() {
    // bubble color
    fill(255,0,0);
    noStroke();

    // the bubble above the head
    push();
    translate(this.xPos, this.yPos);
    rotate(this.rotation);
    scale(this.size);
    rectMode(CENTER);
    rect(0, 0, width * .1, height * .1);
    pop();
  }

  move() {
    //this.angle++ is shorthand for this.angle = this.angle +1;
    this.rotation++;

    if (this.yPos <= height * 2.01) {
      //this.yPos = this.yPos + 2; 
      //short hand +=
      this.yPos += 2;
    } else {
      this.yPos = 0;
    }
  }
}