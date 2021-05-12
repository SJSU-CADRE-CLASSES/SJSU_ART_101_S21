
// 3 variables to create a complete gif link (where you will see datas from a query - search term)
var api = "https://api.giphy.com/v1/gifs/search?";
var apiKey = "&api_key=gcaoIb9CTymckU90QO0UPei9ayAQ7HsJ";
var query = "&q=cherry+blossom";
// change words after &q= to look for the gif you want


let state = 'title';
let cnv;
let points = 0;
let w = 600;
let h = 600;
// let x = 50;
let player;
let coin;




// setup by creating a canvas so the gifs will flow through page
// combine 3 vars above to 1 link - gif data link
function setup() {
  cnv = createCanvas(w, h);
  var url = api + apiKey + query;
  loadJSON(url, gotData);

  textFont('monospace');

  player = new Player();

  coin = new Coin();
}


// retreive data from the gif data link
// create number of images based on the amout of gifs the gif data link has
function gotData(giphy) {
  for (var i = 0; i < giphy.data.length; i++){
    createImg(giphy.data[i].images.original.url);
  }
}

function draw() {

  switch (state) {
    case 'title':
      title();
      cnv.mouseClicked(titleClicked);
      break;
    case 'lvl 1':
      //execute code
      level1();
      cnv.mouseClicked(level1Clicked);

      if (coin.move === player.move){
        points += 1;
      } else{

      }


      break;
    case 'you win':
      youWin();
      cnv.mouseClicked(youWinClicked);
      break;
    default:
      break;
  }



}


function keyPressed(){
  if (keyCode === LEFT_ARROW){
    player.direction = 'left';
  } else if (keyCode === RIGHT_ARROW) {
    player.direction = 'right';
  } else if (keyCode === UP_ARROW) {
    player.direction = 'up';
  } else if (keyCode === DOWN_ARROW) {
    player.direction = 'down';
  } else if (key == ' ') {
    player.direction = 'still';
  }
}


function title() {
  background(10);
  textSize(80);
  fill(200);
  textAlign(CENTER);
  text('MY GAME', w/2, h/5);
  textSize(40);
  text('click anywhere to start', w/2, h/2);
}


function titleClicked() {
    console.log('canvas is clicked on title page');
    state = 'lvl 1';
}

//......................................

function level1() {
  background(133,123,150);
  fill(250,200,10);
  textSize(20);
  text(`click for points
use up,down,left,right to move
spacebar to stop`,w/2,h/2);
  text(`point:` + points, w/2, h/3);
  // circle(x,50,20);
  push();
    player.display();
    player.move();
  pop();

  push();
  fill(129,34,56);
  coin.display();
  coin.move();
  pop();
}

function level1Clicked() {
    points += 1;
    console.log('points = '+ points);
    // x = x + 10;

    if (points >= 10){
      state = 'you win';
    }
}

//......................................

function youWin(){
  background(200,150,152);
  textSize(80);
  fill(0);
  textAlign(CENTER);
  text('YOU WIN', w/2, h/6);
  textSize(40);
  text('click anywhere to restart', w/2, h/2);
}

function youWinClicked(){
  state = 'title';
  points = 0;
}
