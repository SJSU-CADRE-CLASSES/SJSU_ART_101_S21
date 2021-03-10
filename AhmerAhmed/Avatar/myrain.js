class MyRain{
  constructor(thisx, r, p, w, move = false){
    this.x = thisx;
    this.w = w;
    this.r = r;
    this.p = p;
    this.move = move;
  }
  display(){
    fill(255);
    noStroke();
    fill(133,255,245);
    ellipse(this.x*this.r, this.w, 2, 8)
    
    if (this.w<=1000){
      this.w=this.w-this.p;
    }
    if(this.w <= -45){
      this.w = random(401,500);
      this.p = random(1,3);
      this.r = random(0,1);
    }
  }
  
  return(){
    return this.w;
  }
}