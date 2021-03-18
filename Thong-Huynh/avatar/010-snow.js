class Snow {
  constructor(_xPos,_yPos,_size) {
    this.xPos = _xPos;
    this.yPos = _yPos;
    this.size = _size;
  }

  display(t1,t2) {
  push();
  fill(255,255,255,random(t1,t2));
  noStroke();
  circle(this.xPos, this.yPos, width*(this.size) + random(5));
  pop();
  }
  
  
  move(){
    
    if (this.xPos <= width){
      this.xPos += width * 0.0015;
    } else if (this.xPos > width){
      this.xPos = 0;
    }
    
    if (this.yPos <= height){
    // this.yPos = this.yPos + 2;
    // shorthand below is +=
      this.yPos += width * .005;
    } else {
      this.yPos = 0;
    }
  }
}