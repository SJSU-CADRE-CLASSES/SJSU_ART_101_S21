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
var sound = 1;
var dmg;

var checker = 1;
var r = 60;
var x = 800 / 2;
var y = 800 - r;
var speed = 5;
var counter;
var runchance;

let state = 'title';
let cnv;

let mob;

let merchantbuy;
let merchantsell;
let merchantleave;

//preload the background images
function preload() {
  titleImage = loadImage(`bgs/Title.jpg`);
  die = loadImage(`bgs/Die.jpg`);
  live = loadImage(`bgs/Live.jpg`);
  intro = loadImage(`bgs/Intro.jpg`);
  search = loadImage(`bgs/Search.jpg`);
  blood = loadImage(`bgs/Blood.jpg`);
  shop = loadImage(`bgs/Shop.jpg`);
  found = loadImage(`bgs/Found.jpg`);
  fight = loadImage(`bgs/Fight.jpg`);

  basicSong = loadSound(`base.mp3`);
  sephiroth = loadSound(`Sephiroth.mp3`);
  bleach = loadSound(`Bleach.mp3`);

  bleach.setVolume(.5);
  sephiroth.setVolume(.25);
}

//create the canvas with cnv variable
function setup() {
  cnv = createCanvas(800, 800);

  money = 26;
  hpotion = 2;
  enemy = int(random(1, 6));

  if (enemy == 1) {
    mob = "Giant Bear";
    ehp = 90;
    dmg = 2;
  } else if (enemy == 2) {
    mob = "Dark Wolf";
    ehp = 115;
    dmg = 4;
  } else if (enemy == 3) {
    mob = "Goblin";
    ehp = 175;
    dmg = 8;
  } else if (enemy == 4) {
    mob = "Zombie";
    ehp = 140;
    dmg = 5;
  } else if (enemy == 5) {
    mob = "Skeleton";
    ehp = 200;
    dmg = 10;
  }

  basicSong.play();
  basicSong.setVolume(.25);
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
    case 'buy':
      merchBuy();
      cnv.mouseClicked(noClick);
      break;
    case 'leave':
      merchLeave();
      cnv.mouseClicked(noClick);
      break;
    case 'sell':
      merchSell();
      cnv.mouseClicked(noClick);
      break;
    case 'dead1':
      deadOne();
      cnv.mouseClicked(noClick);
      basicSong.stop();
      if (!bleach.isPlaying()) {
        bleach.play();
      }
      if (bleach.isPlaying()) {}
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
      fightOne();
      cnv.mouseClicked(noClick);
      basicSong.stop();
      if (!sephiroth.isPlaying()) {
        sephiroth.play();
        sephiroth.setVolume(.35);
      }
      if (sephiroth.isPlaying()) {}
      break;
    case 'fight2':
      fightTwo();
      cnv.mouseClicked(noClick);
      break;
    case 'fight3':
      fightThree();
      cnv.mouseClicked(noClick);
      break;
    case 'fight4':
      fightFour();
      cnv.mouseClicked(noClick);
      break;
    case 'fight5':
      fightFive();
      cnv.mouseClicked(noClick);
      break;
    case 'fight6':
      fightSix();
      cnv.mouseClicked(noClick);
      break;
    case 'attack':
      attack();
      cnv.mouseClicked(noClick);
      break;
    case 'slash':
      slash();
      cnv.mouseClicked(noClick);
      break;
    case 'stab':
      stab();
      cnv.mouseClicked(noClick);
      break;
    case 'magic':
      magic();
      cnv.mouseClicked(noClick);
      break;
    case 'thunder':
      thunder();
      cnv.mouseClicked(noClick);
      break;
    case 'fire':
      fire();
      cnv.mouseClicked(noClick);
      break;
    case 'block':
      block();
      cnv.mouseClicked(noClick);
      break;
    case 'run':
      run();
      cnv.mouseClicked(noClick);
      break;
    case 'win':
      fightWin();
      cnv.mouseClicked(noClick);
      break;
    case 'lose':
      fightLose();
      cnv.mouseClicked(noClick);
      break;
    case 'the end':
      credits();
      noClick();
    default:
      break;
  }
}

//makes it so no chanes happen to the canvas, on some stages, when clicked
function noClick() {}

//shows the title
function title() {
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
  image(intro, 0, 0);

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
  image(search, 0, 0);

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
}

//changes stage
function moveToAreaTwo() {
  //top move
  if (y >= 0 && y <= 30 && x >= 350 && x <= 415) {
    state = 'fight';
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

//buttons to use the merchant
function merchant() {
  clear();
  image(shop, 0, 0);

  textSize(50);
  text("What would you like to do today?", 50, 700);

  //buy
  push();
  fill(255, 255, 255, 20)
  beginShape;
  vertex(0, 650);
  vertex(0, 600);
  vertex(267, 600);
  vertex(267, 650);
  endShape(CLOSE);
  pop();

  //leave
  push();
  fill(255, 255, 255, 20)
  beginShape;
  vertex(267, 650);
  vertex(267, 600);
  vertex(534, 600);
  vertex(534, 650);
  endShape(CLOSE);
  pop();

  //sell
  push();
  fill(255, 255, 255, 20)
  beginShape;
  vertex(534, 650);
  vertex(534, 600);
  vertex(800, 600);
  vertex(800, 650);
  endShape(CLOSE);
  pop();

  text("BUY", 80, 642);
  text("LEAVE", 320, 642)
  text("SELL", 620, 642);

  if (mouseX <= 267 && mouseX >= 0 && mouseY <= 650 && mouseY >= 600) {
    if (mouseIsPressed) {
      state = 'buy'
    }
  }
  if (mouseX <= 534 && mouseX >= 267 && mouseY <= 650 && mouseY >= 600) {
    if (mouseIsPressed) {
      state = 'leave'
    }
  }
  if (mouseX <= 800 && mouseX >= 534 && mouseY <= 650 && mouseY >= 600) {
    if (mouseIsPressed) {
      state = 'sell';
    }
  }
}

//buy from the merchant
function merchBuy() {
  hpotion = 4;
  money = 22;
  textSize(26);
  text("Thank you for your patronage. You now have " + hpotion + " health potions left.", 10, 100);
  text("You now have " + money + " coins left.", 10, 150);
  text("Please have safe travels and come again.", 10, 200);
  setTimeout(waitLeaveMerch, 5000);
  x = 120;
  y = 495;
}

//sell to the merchant
function merchSell() {
  hpotion = 0;
  money = 31;
  textSize(26);
  text("Thank you for your patronage. You now have " + hpotion + " health potions left.", 10, 100);
  text("You now have " + money + " coins left.", 10, 150);
  text("Please have safe travels and come again.", 10, 200);
  setTimeout(waitLeaveMerch, 5000);
  x = 120;
  y = 495;
}

//leave the merchant
function merchLeave() {
  clear();
  image(shop, 0, 0);
  textSize(26);
  text("Thank you for visiting the store. Come again.", 10, 100)
  setTimeout(waitLeaveMerch, 5000);
  x = 120;
  y = 495;
}

//chanes stage back to area 1
function waitLeaveMerch() {
  state = 'area 1';
}

//dead if go to right
function deadOne() {
  clear();
  image(blood, 0, 0);

  push();
  fill(112, 0, 0);
  textSize(30);
  text("You have chosen to go the right.", 15, 300);
  text("After walking through thick woods a clearing appears.", 15, 350)
  setTimeout(moveWoods, 6000);
  pop();
}

//changes stage
function moveWoods() {
  state = 'dead2'
}

//changes text on stage for right area
function middleWoods() {
  clear();
  image(blood, 0, 0);

  push();
  fill(112, 0, 0);
  textSize(30);
  text("Walking into the middle you are surrounded by", 15, 300)
  text("The creatures of the forest.", 15, 350)
  setTimeout(moveDead, 6000);
  pop();
}

//changes stage
function moveDead() {
  state = 'dead3';
}

//changes text on stage for right area
function deadEnd() {
  clear();
  image(blood, 0, 0);

  push();
  fill(112, 0, 0);
  textSize(30);
  text("The creatures slaughter you, nothing is left of your body.", 15, 300)
  text("Only blood is left on the ground where you once lay.", 15, 350)
  setTimeout(moveDie, 8000);
  pop();
}

//changes stage
function moveDie() {
  state = 'dead4';
}

//changes text on stage for right area
function youDie() {
  clear();
  image(blood, 0, 0);

  push();
  fill(112, 0, 0);
  textSize(300);
  text("You", 100, 200)
  text("Are", 100, 500);
  text("Dead", 50, 800)
  pop();

  setTimeout(moveCredit, 10000);
}

//begins fight scene at the top
function fightOne() {
  clear();
  image(found, 0, 0);

  textSize(25);
  fill(255);
  text("Walking forward you come across a mass of bodies and a broken", 40, 700);
  text("carriage", 40, 750)

  setTimeout(fightOneTwo, 7000);
}

//changes stage
function fightOneTwo() {
  state = 'fight2'
}

//changes text on stage for the fight area
function fightTwo() {
  clear();
  image(found, 0, 0);

  textSize(25);
  fill(255);
  text("Going around the carriage you witness the site of a(n) " + mob, 40, 700);
  text("consuming the spralled bodies.", 40, 750);

  setTimeout(fightTwoThree, 7000);
}

//changes stage
function fightTwoThree() {
  state = 'fight3';
}

//changes text on stage for the fight area
function fightThree() {
  clear();
  image(found, 0, 0);

  textSize(25);
  fill(255);
  text("Stepping backwards to avoid a confrontation with the beast you", 40, 700);
  text("accidently kick a piece of broken off wood.", 40, 750);

  setTimeout(fightThreeFour, 7000);
}

//changes stage
function fightThreeFour() {
  state = 'fight4';
}

//changes text on stage for the fight area
function fightFour() {
  clear();
  image(found, 0, 0);

  textSize(25);
  fill(255);
  text("Looking up from what you just stepped on, you notice the beast", 40, 700);
  text("looking at you. Before you know it, the " + mob + " is rushing you.", 40, 750);

  setTimeout(fightFourFive, 7000);
}

//changes stage
function fightFourFive() {
  state = 'fight5'
}

//changes text on stage for the fight area
function fightFive() {
  clear();
  image(found, 0, 0);

  textSize(25);
  fill(255);
  text("You rush to pull out your sword and block its first attack. Now", 40, 700);
  text("the real fight begins.", 40, 750);

  setTimeout(fightFiveReal, 7000);
}

//changes stage
function fightFiveReal() {
  state = 'fight6';
}

//begins the button functions for the fight to take place
function fightSix() {
  clear();
  image(fight, 0, 0);

  counter = 0;

  if (php > 1) {
    actionChoice();
  } else if (php <= 0) {
    state = 'lose';
  } else if (ehp <= 0) {
    state = 'win';
  }
}

//creates the different choices and let's you pick
function actionChoice() {
  fill(64, 0, 0, 80);
  beginShape();
  vertex(0, 700);
  vertex(0, 750);
  vertex(400, 750);
  vertex(400, 700);
  endShape(CLOSE);

  beginShape();
  vertex(0, 750);
  vertex(0, 800);
  vertex(400, 800);
  vertex(400, 750);
  endShape(CLOSE);

  beginShape();
  vertex(400, 800);
  vertex(800, 800);
  vertex(800, 750);
  vertex(400, 750);
  endShape(CLOSE);

  beginShape();
  vertex(400, 750);
  vertex(400, 700);
  vertex(800, 700);
  vertex(800, 750);
  endShape(CLOSE);

  push();
  textSize(30);
  fill(181, 0, 0);
  text("ATTACK", 150, 735);
  text("BLOCK", 155, 785);
  text("MAGIC", 550, 735);
  text("RUN", 570, 785);
  pop();

  if (mouseX <= 400 && mouseX >= 0 && mouseY <= 750 && mouseY >= 700) {
    if (mouseIsPressed) {
      state = 'attack';
    }
  }
  if (mouseX <= 800 && mouseX >= 400 && mouseY <= 750 && mouseY >= 700) {
    if (mouseIsPressed) {
      state = 'magic';
    }
  }
  if (mouseX <= 400 && mouseX >= 0 && mouseY <= 800 && mouseY >= 750) {
    if (mouseIsPressed) {
      state = 'block';
    }
  }
  if (mouseX <= 800 && mouseX >= 400 && mouseY <= 800 && mouseY >= 750) {
    if (mouseIsPressed) {
      state = 'run';
    }
  }
}

//creates the 2 types of attacks
function attack() {
  clear();
  image(fight, 0, 0);
  fill(64, 0, 0, 80);
  beginShape();
  vertex(0, 750);
  vertex(0, 800);
  vertex(400, 800);
  vertex(400, 750);
  endShape(CLOSE);

  beginShape();
  vertex(800, 750);
  vertex(800, 800);
  vertex(400, 800);
  vertex(400, 750);
  endShape(CLOSE);

  push();
  textSize(30);
  fill(181, 0, 0);
  text("SLASH", 150, 785);
  text("STAB", 590, 785);
  pop();

  if (mouseX <= 400 && mouseX >= 0 && mouseY <= 800 && mouseY >= 750) {
    if (mouseIsPressed) {
      state = 'slash';
    }
  }
  if (mouseX <= 800 && mouseX >= 400 && mouseY <= 800 && mouseY >= 750) {
    if (mouseIsPressed) {
      state = 'stab';
    }
  }
}

function slash() {
  if (counter == 0) {
    clear();
    image(fight, 0, 0);
    ehp = ehp - 15;
    php = php - dmg
    textSize(25);
    fill(255);
    text("You have dealt 15 damage to the beast. It now has " + ehp + " hp left.", 40, 700);
    text("You have taken " + dmg + " damage from the beast. You now have " + php + " hp left.", 40, 750);
    counter = 1;
    setTimeout(stateFight, 5000);
  }
}

function stab() {
  if (counter == 0) {
    clear();
    image(fight, 0, 0);
    ehp = ehp - 10;
    php = php - dmg
    textSize(25);
    fill(255);
    text("You have dealt 10 damage to the beast. It now has " + ehp + " hp left.", 40, 700);
    text("You have taken " + dmg + " damage from the beast. You now have " + php + " hp left.", 40, 750);
    counter = 1;
    setTimeout(stateFight, 5000);
  }
}

//creates the 2 types of magic attack
function magic() {
  clear();
  image(fight, 0, 0);
  fill(64, 0, 0, 80);
  beginShape();
  vertex(0, 750);
  vertex(0, 800);
  vertex(400, 800);
  vertex(400, 750);
  endShape(CLOSE);

  beginShape();
  vertex(800, 750);
  vertex(800, 800);
  vertex(400, 800);
  vertex(400, 750);
  endShape(CLOSE);
  push();
  textSize(30);
  fill(181, 0, 0);
  text("THUNDER", 130, 785);
  text("FIRE", 590, 785);
  pop();

  if (mouseX <= 400 && mouseX >= 0 && mouseY <= 800 && mouseY >= 750) {
    if (mouseIsPressed) {
      state = 'thunder';
    }
  }
  if (mouseX <= 800 && mouseX >= 400 && mouseY <= 800 && mouseY >= 750) {
    if (mouseIsPressed) {
      state = 'fire';
    }
  }
}

function thunder() {
  if (counter == 0) {
    if (mana >= 25) {
      clear();
      image(fight, 0, 0);
      ehp = ehp - 25;
      php = php - dmg;
      mana = mana - 25;
      textSize(25);
      fill(255);
      text("You have dealt 25 damage to the beast. It now has " + ehp + " hp left.", 40, 700);
      text("You took " + dmg + " damage while casting. You now have " + php + " hp left.", 40, 750);
      text("You used 25 mana. You now have " + mana + " mana left.", 40, 795);
      counter = 1;
      setTimeout(stateFight, 5000);
    } else if (mana < 25) {
      text("You don't have enough mana (25 needed) to use this spell anymore.", 40, 700);
    }
  }
}

function fire() {
  if (counter == 0) {
    if (mana >= 20) {
      clear();
      image(fight, 0, 0);
      ehp = ehp - 20;
      php = php - dmg;
      mana = mana - 20;
      textSize(25);
      fill(255);
      text("You have dealt 20 damage to the beast. It now has " + ehp + " hp left.", 40, 700);
      text("You have taken " + dmg + " damage from the beast. You now have " + php + " hp left.", 40, 750);
      text("You used 20 mana. You now have " + mana + " mana left.", 40, 795);
      counter = 1;
      setTimeout(stateFight, 5000);
    } else if (mana < 20) {
      text("You don't have enough mana (20 needed) to use this spell anymore.", 40, 700);
    }
  }
}

function block() {
  clear();
  image(fight, 0, 0);
  if (counter == 0) {
    php = php - (dmg / 2);
    mana = mana + 15;
    counter = 1;
  }

  textSize(25);
  fill(255);
  text("You quickly pull up your sword as the beast rushes you managing", 40, 700);
  text("to block its attack. ' You take " + dmg / 2 + " damage, you now have " + php + " hp.'", 40, 750);
  text("Waiting has allowed you to gain 15 mana.", 40, 795);

  setTimeout(stateFight, 7000);
}

function run() {
  runchance = int(random(1, 5));
  if (counter == 0) {
    if (runchance <= 3) {
      setTimeout(fightWin, 0);
      counter = 1;
    } else if (runchance > 3) {
      setTimeout(stateFight, 0);
      counter = 1;
    }
  }
}

//changes stage back to choices
function stateFight() {
  state = 'fight6';
}

//scene if you win the fight
function fightWin() {
  clear();
  image(live, -400, -400);
  textSize(40);
  fill(0);
  text("You have bested the " + mob + " and killed it.", 22, 300);

  setTimeout(moveCredit, 10000);
}

//scene if you lose the fight
function fightLose() {
  clear();
  image(die, -400, -400)
  textSize(40);
  fill(255);
  text("Even being careful you could not", 110, 200);
  text("best the " + mob + " and have succumbed", 40, 300);
  text("to the wounds of battle.", 200, 400);
  text("On this day you DIED.", 210, 500);

  setTimeout(moveCredit, 10000)
}

//changes stage to credits
function moveCredit() {
  state = 'the end';
}

function credits() {
  clear();
  background(0);
  fill(140, 255, 251);
  textSize(30);
  text("First song is by my brother :)", 220, 100);
  text("Death song is Soundscape to Ardor from Bleach.", 80, 250);
  text("Fight song is Advent: 'One-Winged Angel'", 150, 400);
  text("Art is by me, 'Ahmer Ahmed'", 240, 550);
}
