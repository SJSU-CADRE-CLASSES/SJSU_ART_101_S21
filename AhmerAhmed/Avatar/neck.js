//class creates the shape for the neck
class MyNeck {
  constructor(x = width, y = height){
    this.x = x;
    this.y = y;
  }
  display() {
    fill(25);
  
  stroke(1);
  
  strokeWeight(3);
  
  beginShape();
  vertex(x * .05, y * 1);
  vertex(x * .3, y * .9);
  vertex(x * .3, y * .6);
  vertex(x * .7, y * .6);
  vertex(x * .7, y * .9);
  vertex(x * .95, y * 1);
  endShape();
  }
}