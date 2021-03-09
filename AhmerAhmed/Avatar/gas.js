//function creates the circles of the "gas mask"
class MyGas{
  constructor(x = width, y = height){
    this.x = x;
    this.y = y;
  }
  
  leftgas(){
    //set color to respond to audio
    //setting map to get the blue colors to vary
    let r = (map(micLevel, 0, .13, 0, 133));
    let g = (map(micLevel, 0, .13, 0, 255));
    let b = (map(micLevel, 0, .13, 0, 245));

    //blue circles of the mask
    noStroke();
    fill(r, g, b);
    ellipse(x * .33, y * .617, 80, 80);

    //black circles of the mask
    stroke(1);
    strokeWeight(2);
    fill(30);
    ellipse(x * .32, y * .62, x*.185, y*.2);
  }
  
  rightgas(){
    //set color to respond to audio
    //setting map to get the blue colors to vary
    let r = (map(micLevel, 0, .13, 0, 133));
    let g = (map(micLevel, 0, .13, 0, 255));
    let b = (map(micLevel, 0, .13, 0, 245));

    //blue circles of the mask
    noStroke();
    fill(r, g, b);
    ellipse(x * .67, y * .617, 80, 80);

    //black circles of the mask
    stroke(1);
    strokeWeight(2);
    fill(30);
    ellipse(x * .68, y * .62, x*.185, y*.2);
  }
}