//use remove() to exit the code
var plvl = 1;
var php = 95 + (plvl*5);
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
var name = 1;
var counter = 1;

function setup() {
  createCanvas(800, 800);
  background(0);
  fill(255);

  introScene();
}

function draw() {

}

function keyTyped(){

}

function keyPressed(){
    if (keyCode === SHIFT){
    clear();
    background(0);
  }
}

function endBattle(){

}

function playerName(){
  console.log(player.value());
}

function introScene(){
  textSize(24);
  fill(255);
  text("Welcome Seaker to the world of Superitor. Your new adventure begins here.", 10, 50);
  text("Please hit 'SHIFT' to continue.", 40, 80);
}

function scenes(){
  if(counter == 1){
    introScene();
  }
  if(counter == 2){
    clear();
    background(0);
    text("new stuff happening", 25, 60);
  }
  if(counter == 3){
    clear();
    background(0);
    text("wow this is thingy", 50, 50)
  }
  if(counter>=4){
    clear();
    background(255);
  }
}

function mousePressed(){
  counter += 1;
  console.log(counter);
  scenes();
}
