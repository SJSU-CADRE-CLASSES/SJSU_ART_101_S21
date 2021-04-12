let array = [];

function setup(){
  createCanvas(600,600);
  background(220);

  strokeWeight(20);
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
    //display image
    // console.log(array[0]);
    // console.log(array[0][1]);
    for(let i = 0; i < array.length - 1; i++){
      console.log(i);
      curveVertex(array[i][0], array[i][1]);
    }
  }
  return false;
}
