let noiseOffset = 0.0;
let strokeWidth = 5;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20, 250, 20);
}

function draw() {

  background(20, 250, 20, 3);
  strokeWeight(strokeWidth);

  noiseOffset += 0.05;
  strokeWidth = noise (noiseOffset) * 20;

   if (mouseIsPressed) {
     line(mouseX, mouseY, pmouseX, pmouseY);

   }
    else {}
}

function keyTyped(){

  if (key === 'c') {
    //clear image
    clear();
  }


  return false;
}
