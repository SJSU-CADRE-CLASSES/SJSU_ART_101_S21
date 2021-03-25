let newValue = (65, 110, 70);
let randColor = newValue;

class tester {
  //Setting up the constructor function and variables
  constructor(_xLocation, _yLocation, _rotation, _size) {
    this.xLocation = _xLocation;
    this.yLocation = _yLocation;
    this.rotation = _rotation;
    this.size = _size;
  }
  //Setting up the display function

  display() {

    //Assigning variables
    translate(this.xLocation, this.yLocation);
    rotate(this.rotation);
    scale(this.size);

    //Creating the colors
    push();
    stroke(randColor);
    strokeWeight(7);
    fill(randColor);
    
  beginShape()
  vertex(width*.4, height*.5)
  vertex(width*.4, height*.6)
  vertex(width*.3, height*.7)
  vertex(width*.2, height*.6)
  vertex(width*.2, height*.5)
  vertex(width*.25, height*.45)
  vertex(width*.3, height*.45)
  vertex(width*.35, height*.45)
  endShape(CLOSE);
    
    
    pop()
    
  }
  //setting up the move function
  move() {
    if (this.xLocation <= height) {
      this.xLocation++;
    } else {
      this.xLocation = 0;
    }
  }
}