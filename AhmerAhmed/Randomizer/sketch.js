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
}]

function setup() {
  /* colors
  orange - 255, 200, 156
  pink - 255, 89, 225
  blue - 145, 255, 251
  */

  createCanvas(400, 400);
  background(0);

  fill(255)
  text("click to change the artists and the songs", 50, 300)
  for(let i=0; i<7; i++){
    let rando = int(random(5));
    console.log("artist is " + songs[rando].name, ", song name is " + songs[rando].song);
    fill(255, 200, 156);
    text("artist: ", 10, 50+i*15);
    text("song: ", 160, 50+i*15);
    fill(255, 89, 225);
    text(songs[rando].name, 50, 50+i*15);
    fill(145, 255, 251);
    text(songs[rando].song, 200, 50+i*15);
  }
}

function draw() {

}

function mousePressed(){
  background(0);

  fill(255)
  text("click to change the artists and the songs", 50, 300)

  for(let i=0; i<7; i++){
    let rando = int(random(5));
    console.log("artist is " + songs[rando].name, ", song name is " + songs[rando].song);
    fill(255, 200, 156);
    text("artist: ", 10, 50+i*15);
    text("song: ", 160, 50+i*15);
    fill(255, 89, 225);
    text(songs[rando].name, 50, 50+i*15);
    fill(145, 255, 251);
    text(songs[rando].song, 200, 50+i*15);
  }
}
