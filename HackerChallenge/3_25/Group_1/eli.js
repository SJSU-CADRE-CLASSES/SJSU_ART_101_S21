class eli {
  constructor(_xPos,_yPos) {
    this.xPos = _xPos;
    this.yPos = _yPos;
  }

  display() {
    // translate(mouseX,mouseY);
    push();
    fill(random(255));
    ellipse(this.xPos,this.xPos,50);
    pop();
    push();
    // fill(random(255));
    ellipse(width,this.yPos,50);
    pop();
    push();
    // fill(random(255));
    ellipse(this.xPos,height,50);
    pop();
  }
   move(){
  this.xPos = mouseX;
  this.yPos = mouseY;
}
}

