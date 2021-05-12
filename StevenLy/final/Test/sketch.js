let people = [{
  name: "You",
  color: "been stabbed."
}, {
  name: "David",
  color: "had been robbed."
}, {
  name: "Justin",
  color: "been struck to his head from behind!"
}, {
  name: "Abdal",
  color: "had been racially profiled."
}, {
  name: "Coleen",
  color: "verbally harrassed!"
}, {
  name: "Jae",
  color: "got beaten up."
}];

let crimes = [];

function preload() {

  for (let i = 0; i <= 15; i++) {
    crimes[i] = loadImage(`assets/crime_${i}.jpg`)
  }

}

function setup() {
  createCanvas(1600, 900);

  text("Press to get harrassed!", 800, 450);
}

function draw() {
  if (animating == true) {
  clear();
  image(crimes[imageCounter], width / 2, height / 2);

  if (imageCounter < crimes.length - 1) {
    imageCounter++;
  } else {
    imageCounter = 0;
  }
}

}
