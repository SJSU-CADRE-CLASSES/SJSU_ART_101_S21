let array = [];

function setup(){
  createCanvas(windowWidth,windowHeight);
background(255);

  strokeWeight(20);
  noFill();
}

function draw() {
  //! meaning NOT
if(mouseIsPressed){
  // stroke(map(mouseX,0,600, 0,255, true),0, map(mouseX,0,600, 0,255, true));
  // line(mouseY, mouseX, pmouseX, pmouseY);
  //push = adding something at the end of the array
  array.push([mouseX, mouseY]);
}

}

function keyTyped(){

  if (key === 's'){
    //save this image
    saveCanvas('fileName', 'png');

  } else if (key === 'd'){

    beginShape();
    for(let i = 0; i < array.length - 1; i++){
      curveVertex(array[i][0], array[i][1]);
    }
    endShape();
  }
  return false;
}
