let array = [];
let noiseOffset = 0.0;
let strokeWidth = 5;


function setup(){
  createCanvas(windowWidth,windowHeight);
background(255);

  noFill();
}

function draw() {
  //! meaning NOT
  background(255, 50, 50, 5);
  strokeWeight(strokeWidth);

  noiseOffset += 0.05;
  strokeWidth = noise(noiseOffset) * 100;



  stroke(map(mouseX,0,600, 0,255, true), map(mouseX,0,600, 0,100, true), map(mouseX,0,600, 0,255, true));
  line(mouseY, mouseX, pmouseX, pmouseY);
  //push = adding something at the end of the array
  //array.push([mouseX, mouseY]);

}

function keyTyped(){

  if (key === 's'){
    //save this image
    saveCanvas('fileName', 'png');

  } else if (key === 'c'){
    clear();
  }
  return false;
}
