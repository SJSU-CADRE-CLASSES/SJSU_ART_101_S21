
let array = []
let noiseOffset = 0.0;
let strokeWidth = 6;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // background(60,179,113);


  noFill();

}

function draw() {

  background(60,179,113, 5);
  strokeWeight(strokeWidth);

  noiseOffset += 0.05;
  strokeWidth = noise(noiseOffset) * 200;


if (mouseIsPressed){
  stroke(map(mouseX, 0, 600, 0, 255, true))
  line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
  line(mouseX, mouseY, pmouseX, pmouseY);

  }
}


function keyTyped(){

 if (key == 's'){
   //save this image
   saveCanvas('fileName', 'png');
 } else if (key == 'c'){
clear();

beginShape();
  for(let i = 0; i < array.length; i++){
  // line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
  curveVertex (array[i][0], array[i][1])
}

endShape();


 }

return false;

}
