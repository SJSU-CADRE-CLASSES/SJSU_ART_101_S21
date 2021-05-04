let array = []

function setup() {
  createCanvas(600, 600);
  background(255);

  strokeWeight(5);

}

function draw() {

  if (mouseIsPressed){
    line(mouseX, mouseY, pmouseX, pmouseY);
    array.push([mouseX, mouseY]);
  } 
}

function keyTyped(){

  if (key === 's'){
    saveCanvas('fileName', 'png');
  } else if (key === 'd'){
    for(let i=0; i < array.length - 1; i++){
      line(array[i][0]), array[i][1], array[i+1][0], array[i+1][1];
    }
  }
  
  return false;
  
}
  
