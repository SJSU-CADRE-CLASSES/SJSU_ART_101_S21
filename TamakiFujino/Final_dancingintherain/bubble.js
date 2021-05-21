class Bubble {
  constructor(x, y, w, h) {
    this.x = random(0,width);
    this.y = random(-200,-100);
    this.w = w;
    this.h = h;

    this.z = random(0,20);
    this.yspeed = map(this.z,0,20,4,10);
  }



  intersects(other) {
    let d = dist(this.x, this.y, other.x, other.y);
    return d < this.w + other.w;
  }

  fall(){
      this.y = this.y + this.yspeed;
      var g = map(this.z,0,20,0,0.2);
      this.yspeed = this.yspeed + g;
      if(this.y > height){
          this.y = random(-200,-100);
          this.yspeed = random(4,10);
      }
  }


  show() {
    var l = map(this.z,0,20,10,20);
    var thickness = map(this.z,0,20,1,2);
    stroke(255);
    strokeWeight(1);
    ellipse(this.x, this.y, this.w, this.h);
  }
}
