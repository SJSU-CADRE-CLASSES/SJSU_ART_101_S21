//artists and songs
let songs = [{
  name: "porter",
  song: "shelter"
}, {
  name: "snail's_house",
  song: "imaginary_express"
}, {
  name: "daft_punk",
  song: "instant_crush"
}, {
  name: "city_girl",
  song: "wii_date"
}, {
  name: "true_damage",
  song: "giants"
}, {
  name: "Lisa",
  song: "Unlasting"
}, {
  name: "Aimer",
  song: "Brave_Shine"
}, {
  name: "OwlCity",
  song: "FireFlies"
}]
let rando;
let animating = false;
let move = false;
let counter = 0;
var song;

function setup() {
  /* colors
  orange - 255, 200, 156
  pink - 255, 89, 225
  blue - 145, 255, 251
  */

  song = loadSound("Xeuphoria.mp3", loaded);

  createCanvas(700, 600);
  background(0);

  rando = int(random(songs.length));

  textSize(32);

  fill(255)
  text("Welcome to the song generator!!", 120, 300);
  push();
  fill(133, 255, 245);
  text("Song in the background is a Shelter remix", 55, 450);
  fill(255, 89, 225);
  text("by Xeuphoria.", 270, 490);
  pop();
  text("click to change the artists and the songs.", 60, 560)

  console.log(songs.lenght);
}

function loaded() {
  song.play();
}

function draw() {
  //noFill();
  if (animating == true) {
    //ellipse(random(width), random(height), random(50, 200))
    fill(133, 255, 245)
    beginShape();
    vertex(width * .18, height * .62) //top
    vertex(width * .2, height * .69)
    vertex(width * .22, height * .71)
    vertex(width * .27, height * .72) //right
    vertex(width * .22, height * .73)
    vertex(width * .2, height * .75)
    vertex(width * .18, height * .82) //bottom
    vertex(width * .16, height * .75)
    vertex(width * .14, height * .73)
    vertex(width * .09, height * .72) //left
    vertex(width * .14, height * .71)
    vertex(width * .16, height * .69)
    endShape(CLOSE);
    if (move == false) {
      width = width + 10;
    }
    if (move == true) {
      width = width - 10;
    }
    if (width > 3000) {
      move = true;
    }
    if (width < .1) {
      move = false;
    }
  }
}

function randomizer() {
  background(0);
  if (songs[0]) {
    for (let i = 0; i < 8; i++) {
      if (counter <= 35) {
        rando = int(random(8));
        fill(255, 200, 156);
        text("artist: ", 20, 50 + i * 35);
        text("song: ", 330, 50 + i * 35);
        fill(255, 89, 225);
        text(songs[rando].name, 110, 50 + i * 35);
        fill(145, 255, 251);
        text(songs[rando].song, 420, 50 + i * 35);
        counter++;
      } else {
        push();
        textSize(72);
        fill(255, 0, 0);
        text("nothing left!", 125, 290);
        pop();
      }
    }
    noFill();
  } else {
    push();
    textSize(72);
    fill(255, 0, 0);
    text("nothing left!", 125, 290);
    pop();
  }
}

function mousePressed() {
  animating = true;
  if (counter == 0) {
    setTimeout(randomizer, 2800);
    counter++;
  } else {
    setTimeout(randomizer, 1000);
  }
}
