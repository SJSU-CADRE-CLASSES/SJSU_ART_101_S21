function setup() {

  let mirror;
  let m = false;
  createCanvas(1000, 600);
  background(255);
  frameRate(10);

  strokeWeight(5);
rectMode(CENTER);
  textAlign(CENTER);
  text("|  START  |", width/2, 20);
  text("|   END   |", width/2, 580);

}

function keyTyped(){
  if (key === 'o'){
    //save this image
    saveCanvas('Maze', 'png');
  }
  else if (key === 'm'){
    //enable mirroring
    m = true;
  }
  return false;
}

function mirror(){
  if (m == true){
    line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
} else (m = false);
}

function keyIsPressed(){
  //WASD controls, start at "start"
}

function draw() {
  if (mouseIsPressed) {
    //stroke(map(mouseX, 0, 600, 0, 255, true));
    line(mouseX, mouseY, pmouseX, pmouseY);
  //  mirror();
}
}
