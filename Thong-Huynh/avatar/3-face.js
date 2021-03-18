class Face {
  constructor() {
  }

  display() {
    
  //teeth
  push();
  fill(230);
  translate(width * .5, height * .9);  
  beginShape();
  rectMode(CENTER);
  rect(0, 0, width * 0.15, height * 0.015);
  endShape(CLOSE);
  pop();  
    
  //head
  beginShape();
  vertex(width * .2, height * .4);
  vertex(width * .35, height * .3);
  vertex(width * .65, height * .3);
  vertex(width * .8, height * .4);
  vertex(width * .6, height * .9);
  vertex(width * .4, height * .9);
  endShape(CLOSE);
    

  }
}
