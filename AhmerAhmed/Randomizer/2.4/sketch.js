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

//variables
let rando;
let animating = false;
let move = false;
let counter = 0;
var song;
let cover = [];
let randoHolder;
let button;

//functino preload to load the song and the images
function preload() {
  song = loadSound("Xeuphoria.mp3", loaded);

  //order is the order of the songs in the songs array
  for (let i = 0; i <= 8; i++) {
    cover[i] = loadImage(`assets/cover${i}.JPG`);
  }
}

//setup to show the first page
function setup() {
  /* colors
  orange - 255, 200, 156
  pink - 255, 89, 225
  blue - 145, 255, 251
  */
  createCanvas(700, 600);
  background(0);

  textSize(32);

  //creating the button and causing actions when pressed
  button = createButton("Show a new Songs");
  button.mousePressed(buttonPressed);

  //the entry text when first looking at the program
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

//function plays the song
function loaded() {
  song.play();
}

//function randomizes the output of the artist names and their songs along with the images
function randomizer() {
  background(0);

  //if the array is full then there will be outputs
  if (songs[0]) {

    //as long as the counter is less than the specified number then it will output the information
    if (counter <= songs.length * 2) {
      rando = int(random(9));

      //if the random number is the same as last time it will tell you
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
      counter++;
      randoHolder = rando;
    }

    //if the counter reaches a certain number then the code will end with nothing left
    else {
      push();
      textSize(72);
      fill(255, 0, 0);
      text("All Songs Displayed :)", 125, 290);
      pop();
    }
    noFill();

    //if the array is empty then it says nothing is left
  } else {
    push();
    textSize(72);
    fill(255, 0, 0);
    text("nothing left!", 125, 290);
    pop();
  }
}

//causes a pause before showing new data, like its loading, after the button is pressed
function buttonPressed() {
  animating = true;
  if (counter == 0) {
    setTimeout(randomizer, 2800);
    counter++;
  } else {
    setTimeout(randomizer, 1000);
  }
}
