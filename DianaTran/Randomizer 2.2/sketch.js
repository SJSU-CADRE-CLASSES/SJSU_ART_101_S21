//haikus of locations
let photo = [{
  name: "Night City",
  char: "Human toys and noise and ploys lit by a red light by Mike Wilson "
}, {
  name: "Forest",
  char: "Eucalypt leaves lit by the full mooon are transformed inot twinkling stars by Emma Taylor"
}, {
  name: "Mountians",
  char: "Over the wintry. Forest, winds howl in rage. With no leaves to blow by Natsume Sōseki"
}, {
  name: "Desert",
  char: "The nature-lit light. On dark and dense night, What a ghost-like sight! by Aniruddha Pathak"
}, {
  name: "Ocean",
  char: "Love between us is speech and breath. Loving you is a long river running by Sonia Sanchez"
}];

let randomIndex;
let animating = false;

function setup() {
  createCanvas(400, 400);
  background(220);
textSize(24);

text("Click to begin your journey!", 50, 50);

//setTimeout(changeBackground, 1000);
//setInterval(changeBackground, 1000);
}

function draw() {

  if(animating == true){
     ellipse(random(width), random(height), random(50, 200));
  }

}

//function changeBackground(){
//  background(random(255), (random(255), (random(255));
//}

function randomizer(){
  animating = false;
  if (photo[0]){

    background(220);
    randomIndex = int(random(photo.length));
    text(`${photo[randomIndex].name} - characteristic:
${planets[randomIndex].char}`, 50, 50);
    //text(photo[randomIndex].name + " - characteristic: " + photo[randomIndex].char, 50, 50);
    photo.splice(randomIndex, 1);
  } else {
    background(220);
    text("Your journey has ended", 50, 50);
  }
}

function mousePressed() {
  animating = true;
setTimeout(randomizer, 2000);

}