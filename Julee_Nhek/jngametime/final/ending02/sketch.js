let bg;
let cruisedog;
let time;
let replay;




let posX = 0;
let posY = 0;


function preload() {
  song = loadSound("assets/vava.mp3");
  bg = loadImage("assets/sunsetcruise.png");
  cruisedog = loadImage("assets/cruisedog.png");
  time = loadImage("assets/time.png");
  replay = loadImage("assets/replay.png")


}

function setup() {
  createCanvas(1000, 500);
  textFont("Fredericka the Great");
  song.loop();
}

function draw() {

  background(53, 70, 57);
  lvl1();



}


function lvl1() {

  image(bg, 1, 1, 1000, 500);
  image(cruisedog, 550, 230, 100, 50);

  image(time, posX, 20, 60, 50);

  posX += 1;
  posY += 1;

  if (posX > 1000) {
    background(53, 70, 57);
    fill(255);
    textSize(25);
    text('"Living the Pug Life 🐶"', 390, 50);

    image(replay, 450, 210, 150, 120);
    text('Play Again', 450, 380);
    textSize(10);
    text('Song: Florina - Va Va Vis', 120, 480);


  }

}
