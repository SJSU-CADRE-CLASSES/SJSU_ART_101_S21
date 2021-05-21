let array = []
let backgroundColor = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(backgroundColor);

  strokeWeight(5);
  noFill();

}

function draw() {

  if (mouseIsPressed){
    backgroundColor-= 1;
    background(backgroundColor);
    //line(mouseX, mouseY, pmouseX, pmouseY);
    array.push([mouseX, mouseY]);
    
    beginShape();
    for (let i = 0; i < array.length; i++){
      curveVertex(array[i][0], array[i][1])
    }
    endShape();
  } 
}

function keyTyped(){

  if (key === 's'){
    saveCanvas('fileName', 'png');
  } else if (key === 'd'){
    
    background(255);
    
    beginShape();
    for (let i = 0; i < array.length; i++){
      curveVertex(array[i][0], array[i][1])
    }
    endShape();
  }
  
  return false;
  
}
  
function mousePressed() {
  array = [];
  backgroundColor = 255;
}
