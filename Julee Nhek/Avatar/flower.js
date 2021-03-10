class Flower {
  constructor(_xPos, _yPos, _rotation, _size){
    this.xPos = _xPos;
    this.yPos = _yPos;
    this.rotation = _rotation;
    this.size = _size;
  }
  display(){
    //flower
   //draw petals
     push();
     fill(220,150,161);
     translate(this.xPos, this.yPos);
     rotate(this.rotation);
     scale(this.size);
     ellipse(30, 90, 30, 30);
     ellipse(30, 110, 30, 30);
     ellipse(50, 90, 30, 30);
     ellipse(50, 110, 30, 30);

     //draw middle part
     fill(255, 235, 122);
     ellipse(40, 100, 20, 20);
     pop();
    
  }
  move(){
    //this.angle++ is shorthand for this.angle = this.angle + 1;
    this.rotation ++;
    if (this.yPos <= height * 1.3){
  
    // this.yPos = this.yPos + 2;
    //shorthand below is +=
    this.yPos += 2; 
    } else {
      this.yPos = -height * .7;
    }
  }

}