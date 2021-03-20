class Polkadots {
  constructor(_xPos, _yPos, _rotation) {
  this.xPos = _xPos;
  this.yPos = _yPos;
  this.rotation = _rotation; 
  }
  
  display() {
  //draw bone
  noStroke();
  push();
  translate(this.xPos, this.yPos);
  rotate(this.rotation);
  fill(139, 220, 232);
  circle(width * .1, height * .9, height * .05);
  circle(width * .5, height * .95, height * .05);
  circle(width * .9, height * .9, height * .05);
  circle(width * .3, height * .8, height * .05);
  circle(width * .7, height * .5, height * .05);
  circle(width * .1, height * .1, height * .05);
  fill(230, 203, 245);
  circle(width * .9, height * .2, height * .05);
  circle(width * .3, height * .15, height * .05);
  circle(width * .3, height * .7, height * .05);
  circle(width * .8, height * .3, height * .05);
  circle(width * .4, height * .4, height * .05);
  circle(width * .9, height * .9, height * .05);
  circle(width * .1, height * .1, height * .05);
  circle(width * .3, height * .3, height * .05);
  fill(232, 248, 250);
  circle(width * .9, height * .1, height * .05);
  circle(width * .7, height * .2, height * .05);
  circle(width * .6, height * .5, height * .05);
  circle(width * .2, height * .4, height * .05);
  pop();
  }
   
 move(){
  if (this.yPos <= height){
  this.yPos += 2;
  } else if (this.yPos > height) {
  this.yPos = 0;
}
}
}