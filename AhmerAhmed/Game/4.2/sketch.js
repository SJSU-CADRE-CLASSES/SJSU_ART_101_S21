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

var checker = 1;

r = 60;
x = 800 / 2;
y = 800 - r;
speed = 5;

let state = 'title';
let cnv;
let titleImage;
let basicSong;

let mob;

let merchantbuy;
let merchantsell;
let merchantleave;

//preload the background images
function preload() {
  titleImage = loadImage(`bgs/Title.jpg`);
  basicSong = loadSound(`base.mp3`);
}

//create the canvas with cnv variable
function setup() {
  cnv = createCanvas(800, 800);

  money = 26;
  hpotion = 2;
  enemy = int(random(1, 6));

  if (enemy == 1) {
    move = "Giant Bear";
    ehp = 90;
  } else if (enemy == 2) {
    mob = "Dark Wolf";
    ehp = 115;
  } else if (enemy == 3) {
    mob = "Goblin";
    ehp = 175;
  } else if (enemy == 4) {
    mob = "Zombie";
    ehp = 140;
  } else if (enemy == 5) {
    mob = "Skeleton";
    ehp = 200;
  }
}

//changes the states of the game to different stages
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
    case 'area 1':
      areaOne();
      moveToAreaTwo();
      break;
    case 'merchant':
      merchant();
      cnv.mouseClicked(noClick);
      break;
    case 'dead1':
      deadOne();
      cnv.mouseClicked(noClick);
      break;
    case 'dead2':
      middleWoods();
      cnv.mouseClicked(noClick);
      break;
    case 'dead3':
      deadEnd();
      cnv.mouseClicked(noClick);
      break;
    case 'dead4':
      youDie();
      cnv.mouseClicked(noClick);
      break;
    case 'fight':
      fightLead();
      cnv.mouseClicked(noClick);
      break;
    default:
      break;
  }
}

function noClick() {}

//shows the title
function title() {
  //basicSong.play();
  image(titleImage, 0, 0);
  fill(225);
  textSize(150);
  text("Purgatory", 76, 200);
  textSize(40);
  text("Click anywhere to begin.", 200, 750);
}

//goes to introscene when screen is clicked
function titleClick() {
  state = 'intro';
}

//shows introscene
function introScene() {
  clear();
  background(0);

  textSize(30);
  fill(255);
  text("Welcome 'Seaker' to the world of Superitor. Your adventure", 10, 50);
  text("adventure begins here. Here, you will encounter both friend", 10, 110)
  text("Here, you will encounter both friend and foe on your grand ", 10, 170);
  text("journey. Be warry of your surroundings and trust only those", 10, 230);
  text("who have shown they will ally with you.", 150, 290);

  textSize(26);
  text("You will begin with " + hpotion + " health potions, ", 190, 450);
  text("A sword, ", 340, 530);
  text("And " + money + " coins in your pouch.", 230, 590)

  textSize(22);
  text("Use WASD to move your character.", 220, 680);
  text("Click anywhere on screen to continue.", 210, 710)
}

//goes to area 1 when screen is clicked
function introClick() {
  state = 'area 1';
}

//creates player(circle) and allows movement inside the canvas
function areaOne() {
  clear();
  background(77, 48, 11);

  //player movement
  if (keyIsDown(UP_ARROW)) {
    y -= 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    y += 5;
  }
  if (keyIsDown(LEFT_ARROW)) {
    x -= 5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
  }

  //putting ellipse after the movement allows a nice looking effect when trying to move outside the canvas
  ellipse(x, y, r, r);

  //restricts movement to keep player inside canvas
  if (x <= 10) {
    x = 10;
  }
  if (x >= 790) {
    x = 790;
  }
  if (y <= 10) {
    y = 10;
  }
  if (y >= 790) {
    y = 790;
  }

  //rectangles to move to different locations
  //left rectangle
  push();
  fill(25, 25, 25, 90);
  rect(0, 440, 80, 120)
  pop();

  //right rectangle
  push();
  fill(25, 25, 25, 90);
  rect(720, 305, 80, 120)
  pop();

  //top triangle
  push();
  fill(25, 25, 25, 90);
  rect(320, 0, 120, 80)
  pop();
}

function moveToAreaTwo() {
  //top move
  if (y >= 0 && y <= 30 && x >= 350 && x <= 415) {
    state = 'title';
    x = 800 / 2;
    y = 800 - r;
  }

  //left move
  if (y >= 470 && y <= 530 && x >= 0 && x <= 50) {
    state = 'merchant';
    x = 800 / 2;
    y = 800 - r;
  }

  //right move
  if (y >= 335 && y <= 395 && x >= 750 && x <= 800) {
    state = 'dead1';
    x = 800 / 2;
    y = 800 - r;
  }
}

function merchant() {
  clear();
  background(153, 109, 54);

  merchantbuy = createButton("BUY");
  merchantbuy.position(0, 0);
  merchantbuy.mousePressed(merchBuy);

  merchantsell = createButton("SELL");
  merchantsell.position(400, 0);
  merchantsell.mousePressed(merchSell);

  merchantleave = createButton("LEAVE");
  merchantleave.position(0, 400);
  merchantleave.mousePressed(merchLeave);

  text("What would you like to do today?", 50, 50);

  if (checker == 4) {
    clear();
    background(153, 109, 54);
    merchantbuy.remove();
    merchantsell.remove();
    merchantleave.remove();
    text("Thank you for visiting the store. Come again.", 100, 100)
    setTimeout(waitLeaveMerch, 5000);
    x = 120;
    y = 495;
  } else if (checker == 3) {
    hpotion = 0;
    money = 31;
    text("Thank you for your patronage. You now have " + hpotion + " health potions left.", 100, 100);
    text("You now have " + money + " coins left.", 110, 150);
    text("Please have safe travels and come again.", 100, 200);
    setTimeout(waitLeaveMerch, 5000);
    x = 120;
    y = 495;
  } else if (checker == 2) {
    hpotion = 4;
    money = 22;
    text("Thank you for your patronage. You now have " + hpotion + " health potions left.", 100, 100);
    text("You now have " + money + " coins left.", 110, 150);
    text("Please have safe travels and come again.", 100, 200);
    setTimeout(waitLeaveMerch, 5000);
    x = 120;
    y = 495;
  }
}

function merchBuy() {
  checker = 2;
}

function merchSell() {
  checker = 3;
}

function merchLeave() {
  checker = 4;
}

function waitLeaveMerch() {
  state = 'area 1';
}

function deadOne() {
  clear();
  background(0);

  push();
  fill(112, 0, 0);
  textSize(30);
  text("You have chosen to go the right.", 15, 300);
  text("After walking through thick woods a clearing appears.", 15, 350)
  setTimeout(moveWoods, 6000);
  pop();
}

function moveWoods() {
  state = 'dead2'
}

function middleWoods() {
  clear();
  background(10);

  push();
  fill(112, 0, 0);
  textSize(30);
  text("Walking into the middle you are surrounded by", 15, 300)
  text("The creatures of the forest.", 15, 350)
  setTimeout(moveDead, 6000);
  pop();
}

function moveDead() {
  state = 'dead3';
}

function deadEnd() {
  clear();
  background(5);

  push();
  fill(112, 0, 0);
  textSize(30);
  text("The creatures slaughter you, nothing is left of your body.", 15, 300)
  text("Only blood is left on the ground where you once lay.", 15, 350)
  setTimeout(moveDie, 8000);
  pop();
}

function moveDie() {
  state = 'dead4';
}

function youDie() {
  clear();
  background(0);

  push();
  fill(112, 0, 0);
  textSize(300);
  text("You", 100, 200)
  text("Are", 100, 500);
  text("Dead", 50, 800)
  pop();
}

function fightLead() {

}
