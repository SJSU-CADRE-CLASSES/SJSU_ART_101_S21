//use remove() to exit the code
var plvl = 1;
var php = 95 + (plvl * 5);
var pexp = 0;
var ehp;
var hpotion;
var mana = 100;
var stamina = 100;
var life;
var money;
var enemy;
var php_pnt;
var mob;

var points = 0;

let state = 'title';
let cnv;

function setup() {
  cnv = createCanvas(800, 800);

  background(0);
  fill(255);
}

function draw() {
  switch (state) {
    case 'title':
      title();
      cnv.mouseClicked(titleClick);
      break;
    case 'intro':
      introScene();
      cnv.mouseClicked(introClick);
      break;
    case 'win':
      winYou();
      cnv.mouseClicked(winClick);
    default:
      break;
  }
}

function keyPressed() {
  if (keyCode === SHIFT) {
    clear();
    background(0);
    console.log("shift has been clicked")
  }
}

function title() {
  fill(225);
  textSize(100);
  text("This is the TITLE", 10, 300);
  textSize(50);
  text("Click anywhere to begin.", 130, 400);
}

function titleClick() {
  state = 'intro';
}

function introScene() {
  clear();
  background(0);
  textSize(22);
  fill(255);
  text("Welcome Seaker to the world of Superitor. Your new adventure begins here.", 10, 50);
  text("Please hit 'SHIFT' to continue.", 40, 80);
  textSize(20);
  text("Cick to gain points", 40, 110);
}

function introClick() {
  state = 'intro';
  points++

  console.log('points = ' + points);

  if(points >= 10){
    state = 'win';
  }
}

function winYou(){
  clear();
  background(0);
  textSize(100);
  text("YOU HAVE WON!!", 10, 300);
  text("Click to restart.", 50, 400);
}

function winClick(){
  points = 0;
  state = 'intro';
}
