class Crystals{
    constructor() {
    this.x = random(mouseX, 500);
    this.y = random(mouseY, 500);
    this.diameter = random(50, 300);
    this.speed = 200;
    this.rotation = 90;
    this.width = 200;
    this.height = 200;
    this.scale = 2;
    this.x1 = random(width);
    this.y1 = random(height);
    this.x2 = random(width);
    this.y3 = random(height);
    this.x3 = random(width);
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
    var color_select = ["#666699", "#33cccc", "#ff5500", "#00ff55", "#ff0000"]
    fill(random(color_select))
    frameRate(5)
    noStroke();
    // push();
    ellipse(this.x, this.y, this.diameter, this.diameter);
    // rectMode(CORNER);
    // triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3)    
    // pop();
  }
  }