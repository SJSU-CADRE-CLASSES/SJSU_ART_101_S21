let state = 'title';
let cnv;
let points = 0;
let lives = 3;
let w = 600;
let h = 600;
let player;
let enemies1 = [];
let enemies2 = [];
let enemies3 = [];
let projectiles = [];
let playerImg;
let enemy1Img;
let enemy2Img;
let enemy3Img;


//..........................................................
// ....................PRELOAD FUNCTION....................
function preload(){
  // stil images
  playerImg = loadImage('assets/tank.png');
  enemy1Img = loadImage('assets/zombie-1.gif');
  enemy2Img = loadImage('assets/zombie-2.gif');
  enemy3Img = loadImage('assets/zombie-3.gif');

}

//..........................................................
// ....................SETUP FUNCTION....................
function setup() {
  cnv = createCanvas(w, h);
  frameRate(60);

  imageMode(CENTER);
  rectMode(CENTER);

  textFont('monospace');

  player = new Player();
  projectiles.push(new Projectile());

  // coins[0] = new Coin();
  enemies1.push(new Enemy1());
  enemies2.push(new Enemy2());
  enemies3.push(new Enemy3());



}

//..........................................................
// ....................DRAW FUNCTION....................
function draw() {

  switch (state) {
    case 'title':
      title();
      cnv.mouseClicked(titleClicked);
      break;
    case 'lvl 1 title':
      titleLvl1();
      cnv.mouseClicked(titleLvl1Clicked);
      break;
    case 'lvl 1':
      level1();
      break;
    case 'lvl 2 title':
      titleLvl2();
      cnv.mouseClicked(titleLvl2Clicked);
      break;
    case 'lvl 2':
      level2();
      break;
    case 'lvl 3 title':
      titleLvl3();
      cnv.mouseClicked(titleLvl3Clicked);
      break;
    case 'lvl 3':
      level3();
      break;
    // case 'you win':
    //   youWin();
    //   cnv.mouseClicked(youWinClicked);
    //   break;
    case 'game over':
      gameOver();
      cnv.mouseClicked(gameOverClicked);
      break;
    default:
      break;
  }

}

//..........................................................
// ....................MOVE FUNCTION....................
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    player.direction = 'left';
  } else if (keyCode === RIGHT_ARROW) {
    player.direction = 'right';
  // } else if (keyCode === UP_ARROW) {
  //   player.direction = 'up';
  // } else if (keyCode === DOWN_ARROW) {
  //   player.direction = 'down';
  } else if (key === ' ') {
    projectiles.push(new Projectile());
  }

}

function keyReleased() {
  if (keyCode === LEFT_ARROW) {
    if (player.direction == 'left') {
    player.direction = 'still';
    }
  } else if (keyCode === RIGHT_ARROW ){
    if (player.direction == 'right') {
    player.direction = 'still';
    }
  } else if (keyCode === UP_ARROW) {
    if (player.direction == 'up') {
    player.direction = 'still';
    }
  } else if (keyCode === DOWN_ARROW ){
    if (player.direction == 'down') {
    player.direction = 'still';
    }
  }
}

//..........................................................
// ....................TITLE PAGE....................
function title() {
  background(10);
  textSize(70);
  fill(200);
  textAlign(CENTER);
  text('The Last Stand', w / 2, h / 4);
  textSize(20);
  text('Defend your base from ZOMBIE WAVES', w / 2, h / 2);
  textSize(15);
  text(`P.S.- Don't let the zombies pass you or let them hit as well.`, w / 2, h / 1.75);
  textSize(20);
  text('Good luck, soldier!', w / 2, h / 1.5);
  textSize(30);
  text('[Click] to Start', w / 2, h / 1.25);
}


function titleClicked() {
  console.log('canvas is clicked on title page');
  state = 'lvl 1 title';
}

//..........................................................
// ....................TITLE LVL 1 PAGE....................

function titleLvl1() {
  background(10);
  textSize(70);
  fill(200);
  textAlign(CENTER);
  text('LEVEL 1', w / 2, h / 4);
  textSize(20);
  text('Normal ZOMBIE', w / 2, h / 2);
  image(enemy1Img, w*.5, h*.6, 50,50);
  textSize(15);
  text(`"Slow, A Lot"`, w / 2, h *.7  );
  textSize(30);
  text('[Click] to Start level 1', w / 2, h / 1.25);
}


function titleLvl1Clicked() {
  state = 'lvl 1';
}

//..........................................................
// ....................LEVEL 1....................
function level1() {
  background(121, 133, 85);
  textSize(20);


  //................PROJECTILES HERE................
  for (let i = 0; i < projectiles.length; i++){
      projectiles[i].display();
      projectiles[i].move();
  }

  //................PLAYER HERE................
    player.display();
    player.move();

  //................ENEMIES HERE................

    //................spawn mutiple enemies................
  if (random(1) <= 0.035){
    enemies1.push(new Enemy1());
  }


    // iterating through enemies array to display and move them

          // Method 1:................using for loop................
  for (let j = 0; j < enemies1.length; j++){
      enemies1[j].display();
      enemies1[j].move();
  }
  // for (let j = 0; j < enemies1.length; j++){
  //     enemies1[j].display();
  //     enemies1[j].move();
  // }

          // Method 2:................using forEach................
      // coins.forEach(function(money){
      //   money.display();
      //   money.move();
      // });

          // Method 3:................using for of loop................
      // for (let coin of coins){
      //   coin.display();
      //   coin.move();
      // }


  //................COLLISION HERE................

        //................ENEMIES 1................

  for(let i = projectiles.length -1; i >= 0; i --){

  // check for COLLISION, if there is a collision increase points by 1 AND splice that enemy out of the array
  // need to iterate backwards through array
    for (let j = enemies1.length - 1; j >= 0; j--){
      // Hit the enemy
      if (projectiles[i] && dist(projectiles[i].x, projectiles[i].y, enemies1[j].x, enemies1[j].y) <= (projectiles[i].r + enemies1[j].r) / 2){
        points++;
        enemies1.splice(j, 1);
        projectiles.splice(i, 1);
        console.log('enemy1 killed: ' + points);
      }
      // Enemy attacks base
      else if (enemies1[j].y > h) {
        enemies1.splice(j, 1);
        lives--;
        console.log('enemy1 attacked your base');
      }
      // Enemy attacks player
      else if (dist(player.x, player.y, enemies1[j].x, enemies1[j].y) <= (player.r + enemies1[j].r) / 2) {
        enemies1.splice(j, 1);
        lives--;
        console.log('enemy1 attacked you');
      }
    }

  }


  //................DISPLAY POINTS................
  text(`Killed: ${points}`, w / 6, h / 10);
  // ${points} =  + points

  //................DISPLAY LEVEL................
  push();
  textSize(30);
  text(`LEVEL: 1`, w / 2, h / 10);
  pop();

  //................DISPLAY LIVES................
  text(`Lives: ${lives}`, w / 1.25, h / 10);

  //................POINTS CHECKING................
  // check points value to win or lose
  if (points >= 50){
    state = 'lvl 2 title';
    enemies1 = [];
    enemies2 = [];
    projectiles = [];
  }
  if (lives <= 0){
    state = 'game over';
  }


}

//..........................................................
// ....................TITLE LVL 2 PAGE....................

function titleLvl2() {
  background(10);
  textSize(70);
  fill(200);
  textAlign(CENTER);
  text('LEVEL 2', w / 2, h / 4);
  textSize(20);
  text('Fury ZOMBIE', w / 2, h / 2);
  image(enemy2Img, w*.5, h*.6, 50, 50);
  textSize(15);
  text(`"Small, Fast"`, w / 2, h * .7 );
  textSize(30);
  text('[Click] to Start level 2', w / 2, h / 1.25);
}


function titleLvl2Clicked() {
  state = 'lvl 2';
}

//..........................................................
// ....................LEVEL 2....................
function level2() {
  background(121, 133, 85);
  textSize(20);




  //................PROJECTILES HERE................
  for (let i = 0; i < projectiles.length; i++){
      projectiles[i].display();
      projectiles[i].move();
  }

  //................PLAYER HERE................
    player.display();
    player.move();

  //................ENEMIES HERE................

    //................spawn mutiple enemies................
  if (random(1) <= 0.025){
    enemies1.push(new Enemy1());
  }
  if (random(1) <= 0.003){
    enemies2.push(new Enemy2());
  }

    // iterating through enemies array to display and move them

          // Method 1:................using for loop................
  for (let j = 0; j < enemies1.length; j++){
      enemies1[j].display();
      enemies1[j].move();
  }
  for (let k = 0; k < enemies2.length; k++){
      enemies2[k].display();
      enemies2[k].move();
  }

  //................COLLISION HERE................

        //................ENEMIES 1................

  for(let i = projectiles.length -1; i >= 0; i --){

  // check for COLLISION, if there is a collision increase points by 1 AND splice that enemy out of the array
  // need to iterate backwards through array
    for (let j = enemies1.length - 1; j >= 0; j--){
      // Hit the enemy
      if (projectiles[i] && dist(projectiles[i].x, projectiles[i].y, enemies1[j].x, enemies1[j].y) <= (projectiles[i].r + enemies1[j].r) / 2){
        points++;
        enemies1.splice(j, 1);
        projectiles.splice(i, 1);
        console.log('enemy1 killed: ' + points);
      }
      // Enemy attacks base
      else if (enemies1[j].y > h) {
        enemies1.splice(j, 1);
        lives--;
        console.log('enemy1 attacked your base');
      }
      // Enemy attacks player
      else if (dist(player.x, player.y, enemies1[j].x, enemies1[j].y) <= (player.r + enemies1[j].r) / 2) {
        enemies1.splice(j, 1);
        lives--;
        console.log('enemy1 attacked you');
      }
    }

  }


        //................ENEMIES 2................

  for(let i = projectiles.length -1; i >= 0; i --){
    for (let k = enemies2.length - 1; k >= 0; k--){
      // Hit the enemy
      if (projectiles[i] && dist(projectiles[i].x, projectiles[i].y, enemies2[k].x, enemies2[k].y) <= (projectiles[i].r + enemies2[k].r) / 2){
        points++;
        enemies2.splice(k, 1);
        projectiles.splice(i, 1);
        console.log('enemy2 killed: ' + points);
      }
      // Enemy attacks base
      else if (enemies2[k].y > h) {
        enemies2.splice(k, 1);
        lives--;
        console.log('enemy2 attacked your base');
      }
      // Enemy attacks player
      else if (dist(player.x, player.y, enemies2[k].x, enemies2[k].y) <= (player.r + enemies2[k].r) / 2) {
        enemies2.splice(k, 1);
        lives--;
        console.log('enemy2 attacked you');
      }
    }

  }

  //................DISPLAY POINTS................
  text(`Killed: ${points}`, w / 6, h / 10);
  // ${points} =  + points

  //................DISPLAY LEVEL................
  push();
  textSize(30);
  text(`LEVEL: 2`, w / 2, h / 10);
  pop();


  //................DISPLAY LIVES................
  text(`Lives: ${lives}`, w / 1.25, h / 10);

  //................POINTS CHECKING................
  // check points value to win or lose
  if (points >= 100){
    state = 'lvl 3 title';
    enemies1 = [];
    enemies2 = [];
    enemies3 = [];
    projectiles = [];
  }
  if (lives <= 0){
    state = 'game over';
  }


}

//..........................................................
// ....................TITLE LVL 3 PAGE....................

function titleLvl3() {
  background(10);
  textSize(70);
  fill(200);
  textAlign(CENTER);
  text('LEVEL 3', w / 2, h / 4);
  textSize(20);
  text('CHALLENGE MODE: ENDLESS WAVES', w / 2, h * .35);
  textSize(20);
  text('Crazy ZOMBIE', w / 2, h / 2);
  image(enemy3Img, w*.5, h*.6, 50, 50);
  textSize(15);
  text(`"Super Fast (side to side)"`, w / 2, h * .7 );
  textSize(30);
  text('[Click] to Start level 3', w / 2, h / 1.25);
}


function titleLvl3Clicked() {
  state = 'lvl 3';
}

//..........................................................
// ....................LEVEL 3....................
function level3() {
  background(121, 133, 85);
  textSize(20);




  //................PROJECTILES HERE................
  for (let i = 0; i < projectiles.length; i++){
      projectiles[i].display();
      projectiles[i].move();
  }

  //................PLAYER HERE................
    player.display();
    player.move();

  //................ENEMIES HERE................

    //................spawn mutiple enemies................
  if (random(1) <= 0.02){
    enemies1.push(new Enemy1());
  }
  if (random(1) <= 0.005){
    enemies2.push(new Enemy2());
  }
  if (random(1) <= 0.0025){
    enemies3.push(new Enemy3());
  }



    // iterating through enemies array to display and move them

          // Method 1:................using for loop................
  for (let j = 0; j < enemies1.length; j++){
      enemies1[j].display();
      enemies1[j].move();
  }
  for (let k = 0; k < enemies2.length; k++){
      enemies2[k].display();
      enemies2[k].move();
  }
  for (let m = 0; m < enemies3.length; m++){
      enemies3[m].display();
      enemies3[m].move();
  }


  //................COLLISION HERE................

        //................ENEMIES 1................

  for(let i = projectiles.length -1; i >= 0; i --){

  // check for COLLISION, if there is a collision increase points by 1 AND splice that enemy out of the array
  // need to iterate backwards through array
    for (let j = enemies1.length - 1; j >= 0; j--){
      // Hit the enemy
      if (projectiles[i] && dist(projectiles[i].x, projectiles[i].y, enemies1[j].x, enemies1[j].y) <= (projectiles[i].r + enemies1[j].r) / 2){
        points++;
        enemies1.splice(j, 1);
        projectiles.splice(i, 1);
        console.log('enemy1 killed: ' + points);
      }
      // Enemy attacks base
      else if (enemies1[j].y > h) {
        enemies1.splice(j, 1);
        lives--;
        console.log('enemy1 attacked your base');
      }
      // Enemy attacks player
      else if (dist(player.x, player.y, enemies1[j].x, enemies1[j].y) <= (player.r + enemies1[j].r) / 2) {
        enemies1.splice(j, 1);
        lives--;
        console.log('enemy1 attacked you');
      }
    }

  }


        //................ENEMIES 2................

  for(let i = projectiles.length -1; i >= 0; i --){
    for (let k = enemies2.length - 1; k >= 0; k--){
      // Hit the enemy
      if (projectiles[i] && dist(projectiles[i].x, projectiles[i].y, enemies2[k].x, enemies2[k].y) <= (projectiles[i].r + enemies2[k].r) / 2){
        points++;
        enemies2.splice(k, 1);
        projectiles.splice(i, 1);
        console.log('enemy2 killed: ' + points);
      }
      // Enemy attacks base
      else if (enemies2[k].y > h) {
        enemies2.splice(k, 1);
        lives--;
        console.log('enemy2 attacked your base');
      }
      // Enemy attacks player
      else if (dist(player.x, player.y, enemies2[k].x, enemies2[k].y) <= (player.r + enemies2[k].r) / 2) {
        enemies2.splice(k, 1);
        lives--;
        console.log('enemy2 attacked you');
      }
    }

  }


        //................ENEMIES 3................

  for(let i = projectiles.length -1; i >= 0; i --){
    for (let m = enemies3.length - 1; m >= 0; m--){
      // Hit the enemy
      if (projectiles[i] && dist(projectiles[i].x, projectiles[i].y, enemies3[m].x, enemies3[m].y) <= (projectiles[i].r + enemies3[m].r) / 2){
        points++;
        enemies3.splice(m, 1);
        projectiles.splice(i, 1);
        console.log('enemy3 killed: ' + points);
      }
      // Enemy attacks base
      else if (enemies3[m].y > h) {
        enemies3.splice(m, 1);
        lives--;
        console.log('enemy3 attacked your base');
      }
      // Enemy attacks player
      else if (dist(player.x, player.y, enemies3[m].x, enemies3[m].y) <= (player.r + enemies3[m].r) / 2) {
        enemies3.splice(m, 1);
        lives--;
        console.log('enemy3 attacked you');
      }
    }

  }


  //................DISPLAY POINTS................
  text(`Killed: ${points}`, w / 6, h / 10);
  // ${points} =  + points

  //................DISPLAY LEVEL................
  push();
  textSize(30);
  text(`LEVEL: 3`, w / 2, h / 10);
  pop();

  //................DISPLAY LIVES................
  text(`Lives: ${lives}`, w / 1.25, h / 10);

  //................POINTS CHECKING................
  // check points value to win or lose

  // if (points >= 150){
  //   state = 'you win';
  // }
  if (lives <= 0){
    state = 'game over';
  }


}

//..........................................................
// .................... YOU WIN ....................

// function youWin() {
//   background(23, 176, 115);
//   textSize(70);
//   fill(0);
//   textAlign(CENTER);
//   text('YOU WIN (^o^)', w / 2, h / 6);
//   textSize(50);
//   text('YOUR SCORE: ' + points, w / 2, h / 2);
//   textSize(30);
//   text('click anywhere to restart', w / 2, h / 1.25);
// }
//
// function youWinClicked() {
//   state = 'title';
//   points = 0;
//   lives = 3;
//
//   enemies1 = [];
//   enemies2 = [];
//   enemies3 = [];
//   projectiles = [];
// }

//..........................................................
// .................... GAME OVER ....................
function gameOver() {

  background(10);
  textSize(70);
  fill(200);
  textAlign(CENTER);
  text('!GAME OVER!', w / 2, h / 6);
  textSize(50);
  text('YOUR SCORE: ' + points, w / 2, h / 2);
  textSize(30);
  text('[Click] to restart', w / 2, h / 1.25);
}

function gameOverClicked() {
  state = 'title';
  points = 0;
  lives = 3;

  enemies1 = [];
  enemies2 = [];
  enemies3 = [];
  projectiles = [];
}
