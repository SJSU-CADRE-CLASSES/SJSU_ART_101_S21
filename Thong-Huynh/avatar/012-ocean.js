class Ocean {
  constructor(_xPos,_yPos) {
    this.xPos = _xPos;
    this.yPos = _yPos;
  }

  display() {
    
  push();
  noStroke();
  translate(this.xPos, this.yPos);
  beginShape();
  vertex(width*(-1.2), width*0);
  curveVertex(width*-0.8, width*0.1);
  curveVertex(width*-0.65, width*0.025);
  curveVertex(width*-0.5, width*0.15);
  curveVertex(width*-0.3, width*0.05);
  curveVertex(width*-0.15, width*0.15);
  curveVertex(width*-0.0, width*0.05);
  curveVertex(width*0.15, width*0.1);
  curveVertex(width*0.3, width*(0.0));
  curveVertex(width*0.5, width*0.15);
  curveVertex(width*0.75, width*(0.025));
  curveVertex(width*0.85, width*0.1);
  curveVertex(width*1, width*(-0.01));
  vertex(width*1, width*0.5);
  vertex(width*-1, width*0.5);
  endShape(CLOSE);
  pop();
  
  }
  
  
  move(){
    
    if (this.xPos <= width){
      this.xPos += width * 0.0025;
    } else if (this.xPos > width){
      this.xPos = 0;
    }
    
  }
}