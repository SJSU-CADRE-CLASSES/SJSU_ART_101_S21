class Run {
  constructor(_xPos,_yPos,_size) {
    this.xPos = _xPos;
    this.yPos = _yPos;
    this.size = _size;
  }

  display() {
  push();
  fill(random(255),random(255),random(255));
  noStroke();
  circle(this.xPos, this.yPos, (this.size));
  pop();
  }


  move(){

    if (this.xPos <= width){
      this.xPos += width * 0.1;
    } else if (this.xPos > width){
      this.xPos = 0;
    }
  }

}
