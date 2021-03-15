class Flower {
  constructor(_xPos, _yPos, _size,_rotation) {
    this.xPos = _xPos;
    this.yPos = _yPos;
    this.size = _size;
    this.rotation = _rotation;
  }

  display(a,b,c) {
    
    
    push();
    translate(this.xPos , this.yPos);
    
    rotate(this.rotation);
      fill(a,b,c,75);
      circle(0, 0 + width*0.025, width * (this.size) + 20);
      circle(0, 0 - width*0.025, width * (this.size) + 20);


      circle(0 - width*0.025, 0, width * (this.size) + 20);
      circle(0 + width*0.025, 0, width * (this.size) + 20);

      push();
      rotate(45);
      circle(0 + width * 0.025, 0 , width * (this.size) + 30);
      circle(0 - width * 0.025, 0 , width * (this.size) + 30);
      pop();

      push();
      rotate(45);
      circle(0, 0 + width*0.025, width * (this.size) + 30);
      circle(0, 0 - width*0.025, width * (this.size) + 30);
      pop();

      noStroke();
      fill(252, 245, 252,255);
      circle(0, 0, width * (this.size)-10);
    
    pop();
  }


  move(d) {
    
    this.rotation +=8;

    if (this.xPos >= 0) {
      this.xPos -= width * 0.005 - d;
    } else if (this.xPos < width) {
      this.xPos = width;
    }

    if (this.yPos <= height) {
      this.yPos += width * 0.005;
    } else {
      this.yPos = 0;
    }
  }
}