// Plants that i currently own
let plants = [
  {
    commonName: "Ogre's Ear",
    scientificName:"Crassula Ovata Monstruosa"
  }, {
    commonName: "Lucky bamboo",
    scientificName: "Dracaena Sanderiana"
  }, {
    commonName: "Mickey Mouse Cactus",
    scientificName: "Opuntia Microdasys"
  }, {
    commonName:"Hoya Heart",
    scientificName: "hoya kerriificus "
  }, {
    commonName:"Ficus Ginseng",
    scientificName: "ficus retusa"
  }, {
    commonName:"Money Tree",
    scientificName: "Pachira aquatica"
  }, {
    commonName:"Coconut Tree",
    scientificName: "Cocos Nucifera"
  }];
let randomIndex;

function setup() {
  createCanvas(600,600);
  background(200);

}

function draw() {

}

function mousePressed() {
  background(random(200, 255));
  randomIndex = int(random(plants.length))
  text(plants[randomIndex].commonName, 50,50);
  plants.splice(randomIndex, 1);
}
