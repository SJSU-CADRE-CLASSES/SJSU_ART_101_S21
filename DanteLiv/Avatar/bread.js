class BackgroundBread {
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
    stroke(247, 197, 111);
    strokeWeight(7);
    fill(255, 239, 161);

    //creating the bread shape
    beginShape();
    vertex(width * .9, height * .2);
    vertex(width * .97, height * .3);
    vertex(width * .9, height * .4);
    vertex(width * .9, height * .65);
    vertex(width * .6, height * .65);
    vertex(width * .6, height * .4);
    vertex(width * .53, height * .3);
    vertex(width * .6, height * .2);
    vertex(width * .75, height * .22);
    endShape(CLOSE);
    pop();
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