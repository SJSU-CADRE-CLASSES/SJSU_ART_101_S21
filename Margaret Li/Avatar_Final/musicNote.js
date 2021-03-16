//draw music notes falling
class MusicNotes {
  
  constructor(x, y, a, s) {
    this.x = x;
    this.y = y;
    this.a = a;
    this.s = s;
  }
  
  move(y, a) {
    //incrementing a variable
    this.y += 10;
    this.a += 5;
    //make notes fall again
    if (this.y >= height) {
      this.y = -this.y;
    }
  }
  
  display(x, y, a, s) {
    push();
    translate(this.x, this.y, this.a);
    rotate(this.a);
    scale(this.s);
    
    //pastel colors for music notes
    stroke(random(100, 255),random(100, 255), random(128,255));
    strokeWeight(1);
    line(0, 0, 0, -30);
    line(0, -30, 6, -25);
    fill(random(100, 255), random(100, 255), random(128,255));
    noStroke();
    ellipse(-7.5, 0, 15, 10);
    pop();
  }
}