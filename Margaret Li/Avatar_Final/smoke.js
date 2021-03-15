//draw smoke floating
class Smoke{
  
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  
  move(x) {
    //make the smoke move across
    this.x += 5;
    //make smoke reappear
    if (this.x >=width) {
      this.x = this.x-width;
    }
  }

  display(x, y) {
    push();
    translate(this.x, this.y);
    fill(70);
    stroke(10);
    strokeWeight(0.5);
    circle(30, 50, 50);
    circle(55, 52, 55);
    circle(80, 55, 45);
    pop();
    
    push();
    translate(this.x, this.y*1.5);
    fill(100);
    stroke(10);
    strokeWeight(0.5);
    circle(35, 75, 50);
    circle(55, 82, 50);
    circle(75, 90, 40);
    pop();
    
    push();
    translate(this.x, this.y*2);
    fill(50);
    stroke(10);
    strokeWeight(0.5);
    circle(40, 90, 60);
    circle(60, 93, 50);
    circle(80, 95, 50);
    pop();
  }
}