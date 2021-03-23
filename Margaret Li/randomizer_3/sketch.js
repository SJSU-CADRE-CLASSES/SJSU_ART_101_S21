let plastics = [];

let animals = [{
    name: "cardinal",
    thing: "plastic bottles"
  },
  {
    name: "pelican",
    thing: "plastic cups"
  },
  {
    name: "kangaroo",
    thing: "kazoos"
  },
  {
    name: "sea turtle",
    thing: "straws"
  },
  {
    name: "squirrel",
    thing: "streamers"
  },
  {
    name: "peacock",
    thing: "plastic utensils"
  },
  {
    name: "sea lion",
    thing: "soda cans"
  },
  {
    name: "shark",
    thing: "styrofoam plates"
  }
];

let button;
let randomIndex;
let animating = false;
let img;
let imageCounter = 0;

function preload() {
  for (let i = 0; i <= 15; i++) {
    plastics[i] = loadImage(`pictures/plastics_${i}.jpg`)
  }
}

function setup() {
  createCanvas(500, 500);
  background(140, 130, 80);
  textSize(28);
  textStyle(BOLD);
  fill(0);
  imageMode(CENTER);
  frameRate(12);
  text("Plastics harm animals!", 100, 300);

  //click the button
  button = createButton("Click to randomize");

  button.mousePressed(buttonPressed);
}

function draw() {
  if (animating == true) {
    clear();

    //images of plastics
    imageCounter %= plastics.length;
    image(plastics[imageCounter], width / 2, height / 2);
    if (imageCounter < plastics.length - 1) {
      imageCounter++;
    } else {
      imageCounter = 0;
    }
  }
}

function randomizer() {
  animating = false;
  if (animals[0]) {

    clear();
    randomIndexAnimals = int(random(animals.length));
    randomIndexPlastics = int(random(plastics.length));

    image(plastics[randomIndexPlastics], width * 0.5, height * 0.5);
    text(`The ${animals[randomIndexAnimals].name} dislikes this.`, width * 0.15, height * 0.82);

    animals.splice(randomIndexAnimals, 1);

  } else {
    background(80, 180, 80);
    text("Don't litter!", 150, 300);
  }
}

function buttonPressed() {
  animating = true;
  setTimeout(randomizer, 1000);
}