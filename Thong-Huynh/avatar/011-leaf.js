class Leaf {
  constructor(_xPos,_yPos,_size,_rotation) {
    this.xPos = _xPos;
    this.yPos = _yPos;
    this.size = _size;
    this.rotation = _rotation;
  }

  display(a,b,c,o) {
  push();
  fill(a ,b, c, o);
  noStroke();
  translate(this.xPos, this.yPos);
  rotate(this.rotation);
  scale(this.size);
  beginShape();

  vertex(width * - 0.035,width * 0.45);
  vertex(width * 0.035,width * 0.45);

  curveVertex(width * 0.03,width * 0.3);
  vertex(width * 0.3,width * 0.35);
  vertex(width * 0.275,width * 0.29);
  vertex(width * 0.4,width * 0.25);//point
  vertex(width * 0.275,width * 0.21);
  vertex(width * 0.3,width * 0.15);
  
  vertex(width * 0.075,width * 0.23);
  vertex(width * 0.14,width * 0.175);

  vertex(width * 0.42,width * 0.075);
  vertex(width * 0.4,width * 0.005);
  vertex(width * 0.475,width * -0.13);//point
  vertex(width * 0.32,width * -0.1);
  vertex(width * 0.275,width * -0.15);
  vertex(width * 0.12,width * 0.0);

  vertex(width * 0.2,width * -0.3);
  vertex(width * 0.08,width * -0.3);
  vertex(width * .0,width * -0.45);//midpoint
  vertex(width * -0.08,width * -0.3);
  vertex(width * -0.2,width * -0.3);
  vertex(width * -0.12,width * 0.0);
  
  vertex(width * -0.275,width * -0.15);
  vertex(width * -0.32,width * -0.1);
  vertex(width * -0.475,width * -0.13);//point
  vertex(width * -0.4,width * 0.005);
  vertex(width * -0.42,width * 0.075);
  
  vertex(width * -0.14,width * 0.175);
  vertex(width * -0.075,width * 0.23);

  vertex(width * -0.3,width * 0.15);
  vertex(width * -0.275,width * 0.21);
  vertex(width * -0.4,width * 0.25);//point
  vertex(width * -0.275,width * 0.29);
  vertex(width * -0.3,width * 0.35);
  vertex(width * -0.03,width * 0.3);

  
  endShape(CLOSE);
  pop();
  }
  
  
  move(d1,d2){
    
    this.rotation++;
    
    if (this.xPos >= 0){
      this.xPos -= width * 0.005 - d1;
    } else if (this.xPos < width){
      this.xPos = width ;
    }
    
    if (this.yPos <= height){
      this.yPos += width * .0075 - d2;
    } else {
      this.yPos = 0;
    }
  }
}