let monsters = [{
  name: "Frankenstein",
  color: "Green"
}, {
  name: "Werewolf",
  color: "Grey"
}, {
  name: "Vampire",
  color: "Red"
}, {
  name: "Mummy",
  color: "Yellow"
}, {
  name: "Robot",
  color: "Silver"
}];

let randomIndex;

function setup() {
  createCanvas(600, 600);
  background(220);

}

function draw() {

}

function mousePressed() {
  background(220);
  randomIndex = int(random(monsters.length));
  text(monsters[randomIndex].name, 50, 50);
  monsters.splice(randomIndex, 1);
}