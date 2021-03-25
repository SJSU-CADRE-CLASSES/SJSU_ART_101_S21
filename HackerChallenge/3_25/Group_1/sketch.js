let a,b,c;
let ELI;

function setup() {
  createCanvas(400, 400);
  background(220);
  
  ELI = new eli();
}

function draw() {
  
  background(a,b,c);
  // translate(mouseX,mouseY);
  ELI.display();
  ELI.move();
}

function mousePressed() {
  if (mouseX < width*0.5){
    a = 210;
    b = 27;
    c = 98;
    fill(40);
  } else {
    fill(255);
    a = 220;
    b = 220;
    c = 220;
  }
}