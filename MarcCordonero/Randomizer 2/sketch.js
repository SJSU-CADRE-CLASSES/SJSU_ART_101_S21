// Plants that i currently own
let plants = [{
  commonName: "Ogre's Ear",
  scientificName: "Crassula Ovata Monstruosa"
}, {
  commonName: "Lucky bamboo",
  scientificName: "Dracaena Sanderiana"
}, {
  commonName: "Mickey Mouse Cactus",
  scientificName: "Opuntia Microdasys"
}, {
  commonName: "Hoya Heart",
  scientificName: "hoya kerriificus "
}, {
  commonName: "Ficus Ginseng",
  scientificName: "ficus retusa"
}, {
  commonName: "Money Tree",
  scientificName: "Pachira aquatica"
}, {
  commonName: "Coconut Tree",
  scientificName: "Cocos Nucifera"
}];
let randomIndex;
let animating = false;


function setup() {
  createCanvas(600, 600);
  background(200);
  textSize(30);

  text("click to randomize", 150, 300);



}

function draw() {

  if (animating == true) {
    ellipse(random(width), random(height), random(25, 100));
  }
}


function randomizer() {
  animating = false;

  if (plants[0]) {

    // this displays  random names and splices it out of array
    background(random(200, 255));
    randomIndex = int(random(plants.length))
    text(`The ${plants[randomIndex].commonName}'s
scientific name is
${plants[randomIndex].scientificName}`, 150, 300);
    plants.splice(randomIndex, 1);
    // text(plants[randomIndex].commonName + "'s scientific name is " + plants[randomIndex].scientificName, 50, 300);
    // plants.splice(randomIndex, 1);
  } else {
    background(random(200, 255));
    text("nada mas!", 150, 300);
  }
}

function mousePressed() {
  animating = true;
  setTimeout(randomizer, 2000)

}
