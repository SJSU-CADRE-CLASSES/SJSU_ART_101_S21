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
let myPlants = [];
let imageCounter = 0;
let button;
let cnv;
let nameInputs;

function preload() {

  for (let i = 0; i <= 6; i++) {
    myPlants[i] = loadImage(`assets/myplants_${i}.jpg`)
  }
}



function setup() {
  cnv = createCanvas(600, 600);
  cnv.parent("#canvasDiv");
  background("darkGreen");
  textSize(15);

  imageMode(CENTER);
  frameRate(8);

  text("LOOK AT MY PLANTS", 150, 300);

 // button = createButton("click to randomize");
 button = select("#randButton")
 button.mousePressed(buttonPressed);
button.class("randomizerButton");


}

function draw() {

  if (animating == true) {
    clear();
    image(myPlants[imageCounter], width / 2, height / 2);
    if (imageCounter < myPlants.length - 1) {
      imageCounter++;
    } else {
      imageCounter = 0;
    }
  }
}


function randomizer() {
  animating = false;

  if (plants[0]) {

    // this displays  random names and splices it out of array
    // background(random(200, 255));
    clear();
    randomIndex = int(random(plants.length))

    image(random(myPlants), width / 2, height / 2);
    text(`The ${plants[randomIndex].commonName}'s scientific name is ${plants[randomIndex].scientificName}`, 50, height - 20);
    plants.splice(randomIndex, 1);
    // text(plants[randomIndex].commonName + "'s scientific name is " + plants[randomIndex].scientificName, 50, 300);
    // plants.splice(randomIndex, 1);
  } else {
    background(random(200, 255));
    text("nada mas!", 50, 50);
  }
}

function buttonPressed() {
  animating = true;
  setTimeout(randomizer, 2000)

}
