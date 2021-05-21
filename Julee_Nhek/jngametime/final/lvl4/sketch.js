let parissky;
let frenchie;
let france;
let date;
let cruise;

let posX = 0;
let posY = 0;


function preload() {
  parissky = loadImage("assets/parissky.png");
  frenchie = loadImage("assets/frenchie.png");
  france = loadImage("assets/eiffel.png")
  date = loadImage("assets/date.png")
  cruise = loadImage("assets/setsun.png")

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
  fill(255);
  textSize(18);
  text('Paris, France 55°F, 1:56 PM', posX, 210, 410);
  image(parissky, posX, 10, 530, 200);
  image(frenchie, posX, 400, 100, 100);
  image(france, 700, 98, 200, 400);

  posX += 1;
  posY += 1;

  if (posX > 700) {
    background(53, 70, 57);
    fill(255)
    textSize(20);
    text('Which ending do you want to see? ', 350, 50);

    image(date, 150, 110, 250, 250);
    text('On a date', 210, 400);

    image(cruise, 550, 90, 350, 300);
    text('Sunset Cruise', 660, 400);

  }




}
