
let array = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

  strokeWeight(2);
  noFill();

}

function draw() {

if (mouseIsPressed){
  line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
  line(mouseX, mouseY, pmouseX, pmouseY);

  }
}


function keyTyped(){

 if (key == 's'){
   //save this image
   saveCanvas('fileName', 'png');
 } else if (key == 'd'){
//display image

beginShape();
  for(let i = 0; i < array.length; i++){
  // line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
  curveVertex (array[i][0], array[i][1])
}

endShape();


 }

return false;

}
