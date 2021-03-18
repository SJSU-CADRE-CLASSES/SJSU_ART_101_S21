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
let rando;

function setup() {
  /* colors
  orange - 255, 200, 156
  pink - 255, 89, 225
  blue - 145, 255, 251
  */

  createCanvas(600, 600);
  background(0);

  rando = int(random(songs.length));

  textSize(32);

  fill(255)
  text("Welcome to the song generator!!", 75, 300);
  text("click to change the artists and the songs", 20, 530)
}

function mousePressed(){
  background(0);

  if(songs[0]){
    fill(255)
    text("click to change the artists and the songs", 20, 530)
    rando = int(random(songs.length));
    fill(255, 200, 156);
    text("artist: ", 60, 200);
    text("song: ", 60, 250);
    fill(255, 89, 225);
    text(songs[rando].name, 150, 200);
    fill(145, 255, 251);
    text(songs[rando].song, 150, 250);
    songs.splice(rando, 1);
  }
  else{
    push();
    textSize(72);
    fill(255, 0, 0);
    text("nothing left!", 125, 300);
    pop();
  }
}


//outputting all at once then re-randomizing the list
/*for(let i=0; i<7; i++){
  rando = int(random(5));
  console.log("artist is " + songs[rando].name, ", song name is " + songs[rando].song);
  fill(255, 200, 156);
  text("artist: ", 10, 50+i*15);
  text("song: ", 160, 50+i*15);
  fill(255, 89, 225);
  text(songs[rando].name, 50, 50+i*15);
  fill(145, 255, 251);
  text(songs[rando].song, 200, 50+i*15);
}*/
