let angle = 0;

function setup() {
  song = loadSound('assets/ping.mp3');
  createCanvas(windowWidth, windowHeight);
  background(255);

}



function draw() {

  noStroke();
  fill(10);
  // Draw only when mouse is pressed
  if (mouseIsPressed === true) {
    angle += 1500;
    let val = cos(radians(angle)) * 12.0;
    for (let a = 0; a < 360; a += 75) {
      let xoff = cos(radians(a)) * val;
      let yoff = sin(radians(a)) * val;
      fill(255,128,0);
      ellipse(mouseX + xoff, mouseY + yoff, val, val);
    }
    fill(255,184,41);
    ellipse(mouseX +3, mouseY+3, 2, 5);
    ellipse(mouseX -2, mouseY+2, 2, 5);
    ellipse(mouseX +1 , mouseY +-1, 2, 5);
  }
  fill(55, 143, 80);
  noStroke();
  x1=0;
  y1=1000;
  x2=10;
  y2=800;
  x3=20;
  y3=1000;
  while(x1 < windowWidth +30)
  {
    triangle(x1, y1, x2, y2, x3, y3);
    x1+=20;
    x2+=20;
    x3+=20
  }
}

function mousePressed() {
  song.play();


}
