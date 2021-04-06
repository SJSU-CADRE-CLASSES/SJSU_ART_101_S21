//artists and songs
let songs = [{
  name: "Porter",
  song: "Shelter"
}, {
  name: "Snail's_House",
  song: "Imaginary_Express"
}, {
  name: "Daft_Punk",
  song: "Instant_Crush"
}, {
  name: "City_Girl",
  song: "Wii_Date"
}, {
  name: "True_Damage",
  song: "Giants"
}, {
  name: "Lisa",
  song: "Unlasting"
}, {
  name: "Aimer",
  song: "Brave_Shine"
}, {
  name: "OwlCity",
  song: "FireFlies"
}, {
  name: "LilyPichu",
  song: "dreamy_night"
}]
let rando;
let animating = false;
let move = false;
let counter = 0;
var song;
let cover = [];
let randoHolder;
let button;

function preload() {
  song = loadSound("Xeuphoria.mp3", loaded);

  //order is the order of the songs in the songs array
  for (let i = 0; i <= 8; i++) {
    cover[i] = loadImage(`assets/cover${i}.JPG`);
  }
}

function setup() {
  /* colors
  orange - 255, 200, 156
  pink - 255, 89, 225
  blue - 145, 255, 251
  */
  createCanvas(700, 600);
  background(0);

  textSize(32);

  button = createButton("Show a new Songs");
  button.mousePressed(buttonPressed);

  fill(255)
  text("Welcome to the song generator!!", 120, 300);
  push();
  fill(133, 255, 245);
  text("Song in the background is a Shelter remix", 55, 450);
  fill(255, 89, 225);
  text("by Xeuphoria.", 270, 490);
  pop();
  text("click to change the artists and the songs.", 60, 560)
}

function loaded() {
  song.play();
}

function randomizer() {
  background(0);
  if (songs[0]) {
    if (counter <= songs.length * 2) {
      rando = int(random(9));
      if (randoHolder == rando) {
        textSize(12);
        fill(255);
        text("This is a repeat of the last entry.", 250, 590);
      }
      textSize(32);
      fill(255, 200, 156);
      text("artist: ", 20, 50);
      text("song: ", 330, 50);
      fill(255, 89, 225);
      text(songs[rando].name, 110, 50);
      fill(145, 255, 251);
      text(songs[rando].song, 420, 50);
      image(cover[rando], 100, 70);
      console.log("This " + rando + "is " + cover[rando]);
      console.log(counter);
      counter++;
      randoHolder = rando;
    } else {
      push();
      textSize(72);
      fill(255, 0, 0);
      text("nothing left!", 125, 290);
      pop();
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

function buttonPressed() {
  animating = true;
  if (counter == 0) {
    setTimeout(randomizer, 2800);
    counter++;
  } else {
    setTimeout(randomizer, 1000);
  }
}
