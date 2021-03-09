//class creates the head
class MyHead{
  constructor(x = width, y = height){
    this.x = x;
    this.y = y;
  }
  display(){
    fill(40);
  
  //arc of head
  strokeWeight(3);
  arc(200, 85, 296, 70, PI, TWO_PI);
  
  //head shape
  strokeWeight(3);
  beginShape();
  vertex(x * .87, y * .21);
  vertex(x * .78, y * .6);
  vertex(x * .53, y * .803);
  vertex(x * .47, y * .803);
  vertex(x * .22, y * .6);
  vertex(x * .13, y * .21);
  endShape();
  }
}