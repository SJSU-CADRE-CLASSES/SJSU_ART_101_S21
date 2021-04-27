
function setup() {
  stroke(0);
  createCanvas(windowWidth, windowHeight);
  background(20, 100,150);
  frameRate(10);
rectMode(CENTER);
}

function keyTyped(){
  if (key === 's'){
    //save this image
    saveCanvas('Air', 'png');
  } else if (key === 'c'){
    for (let i = 0; i < 1000; i++) {
      let r = random(0, windowWidth);
       stroke(255);
      line(windowWidth, i, 0 + r, i);
  }
  return false;
}

function draw() {
  if (mouseIsPressed) {
    //stroke(map(mouseX, 0, 600, 0, 255, true));
    stroke(255);
    line(mouseX, mouseY, pmouseX, pmouseY);
}
}

}
