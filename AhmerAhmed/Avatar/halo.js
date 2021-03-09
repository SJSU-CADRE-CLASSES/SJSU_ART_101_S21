class MyHalo{
  constructor(x = width, y = height, z = 0, move = false){
    this.x = x;
    this.y = y;
    this.z = z;
    this.move = move;
  }
  display(){
    //color change
    //setting map to get the blue colros to vary
    let r = map(micLevel, 0, .13, 19, 133);
    let g = map(micLevel, 0, .13, 19, 255);
    let b = map(micLevel, 0, .13, 19, 245);

    strokeWeight(8);
    stroke(r,g,b)
    noFill();
    ellipse(x*.5, z, 350, 40)

    //allows halo to move within y range of 0 and 8 making it so it doesn't touch the     head or go
    if (move == false){
      z=z+.05;
    }
    if(move == true){
      z=z-.05;
    }
    if(z>10){
      move = true;
    }
    if(z<0){
      move = false;
    }
  }
}