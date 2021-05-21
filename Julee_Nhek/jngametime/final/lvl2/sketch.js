let night;
let frenchie;
let ny;
let macaron;
let ice;

let posX = 0;
let posY = 0;


function preload() {
  night = loadImage("assets/nightsky.png");
  frenchie = loadImage("assets/frenchie.png");
  ny = loadImage("assets/liberty.png");
  macaron = loadImage("assets/macaron.png");
  ice = loadImage("assets/italianice.png");


}

function setup() {
  createCanvas(1000, 500);
  textFont("Fredericka the Great");
}

function draw() {

  background(53, 70, 57);
  lvl1();



}

function mousePressed() {

  hat.clicked();

}

function title() {


  background(53, 70, 57);
  textSize(80);
  fill(255);
  textAlign(CENTER);
  text('Off to Paris', w / 2, h / 5);


  textSize(30);
  text('click anywhere to start', w / 2, h / 2);
}

function titleMouseClicked() {
  console.log('canvas is clicked on title page');
  state = 'level 1'

}



function lvl1() {
  fill(255)
  textSize(18);
  text('New York, 63°F, 3:54 AM', posX, 210, 410);
  image(night, posX, 10, 450, 200);
  image(frenchie, posX, 400, 100, 100);
  image(ny, 500, 120, 150, 400);




  posX += 1;
  posY += 1;

  if (posX > 500) {
    background(53, 70, 57);
    fill(255)
    textSize(20);
    text('You are on your way to New York and got hungry, which dessert did you get?', 120, 50);

    image(macaron, 150, 110, 200, 300);
    text('Macaron', 210, 400);

    image(ice, 550, 160, 300, 200);
    text('Italian Ice', 660, 400);

  }


}
