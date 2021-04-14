//fish drawings
let fishes = [];

//bird drawings
let birds = [];

//images of plastic litters
let plastics = [];

//animal names
let animals = [];

//for users to trigger the scrambling animals and pictures
let buttonRandomizer;

//for adding more animal names
let addMoreButton;

let randomIndex;
let animating = false;
let img;
let imageCounter = 0;
let cnv;

//blanks to add more items
let nameInputs = [];

//for beginning scene
let firstTime = [];

//for end scene
let final = false;

let yoff = 0.0; // 2nd dimension of perlin noise

function preload() {
  for (let i = 0; i <= 13; i++) {
    plastics[i] = loadImage(`pictures/plastics_${i}.jpg`);
  }
}

function setup() {

  //blue background
  background(0, 140, 255);

  cnv = createCanvas(500, 500);
  cnv.parent("#canvasDiv");

  //click the button
  buttonRandomizer = select("#randButton");
  buttonRandomizer.mousePressed(buttonPressed);

  //"add more animals"
  addMoreButton = select("#addMoreButton");
  addMoreButton.mousePressed(addInput);

  for (let i = 0; i < 3; i++) {
    nameInputs.push(createInput());
    nameInputs[i].parent("#inputFields");
  }

  //create 6 fishes at random locations
  for (let i = 0; i <= 5; i++) {
    fishes[i] = new Fishes(random(0, width), random(0, height));
  }

  //create 6 fishes at random locations
  for (let i = 0; i <= 5; i++) {
    birds[i] = new Birds(random(0, width), random(0, height));
  }
}

function draw() {
  //text style for entire composition
  imageMode(CENTER);
  textSize(28);
  textStyle(BOLD);

  push();
  //beginning scene with fishes in water
  if (firstTime) {
    drawWaves();
    for (i = 0; i < fishes.length; i++) {
      fishes[i].display();
      fishes[i].move();
    }
    frameRate(4);

    textSize(28);
    textStyle(BOLD);
    fill(0);
    text("Enter animals names.", 100, 150);
    text("Click the randomizer.", 100, 200);
  }
  pop();

  //start animating after user presses randomizer button
  if (animating == true) {
    clear();

    //dark blue background
    background(80, 180, 80);

    //images of plastics
    imageCounter %= plastics.length;

    image(plastics[imageCounter], width / 2, height / 2);
    if (imageCounter < plastics.length - 1) {
      imageCounter++;
    } else {
      imageCounter = 0;
    }
  }
  //start animating end scene with birds flying after all animals are displayed
  if (final) {
    //medium/light colored bkg to contrast with black text
    background(random(100, 255), random(100, 255), random(100, 255));
    for (i = 0; i < birds.length; i++) {
      birds[i].display();
      birds[i].move();
    }
    textSize(28);
    //black text
    fill(0);
    text("Don't litter!", width * 0.25, height * 0.5);
    text("Protect the animals.", width * 0.25, height * 0.6);
  }
}

//draw waves for first scene
function drawWaves() {

  //blue background for sky
  background(0, 200, 245);

  //cyan waves for water
  fill(170, 295, 330);
  noStroke();

  //make the waves move
  //draw a polygon with wave points
  beginShape();

  let xoff = 0;

  // Iterate over horizontal pixels
  for (let x = 0; x <= width; x += 10) {
    // Calculate a y value according to noise, map

    //2D Noise
    let y = map(noise(xoff, yoff), 0, 1, 200, 300);
    vertex(x, y);
    // Increment x dimension for noise
    xoff += 0.1;
  }

  // increment y dimension for noise
  yoff += 0.1;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
}

//for users to add additional animals
function addInput() {
  nameInputs.push(createInput());
  nameInputs[nameInputs.length - 1].parent("#inputFields");
}

//randomly pick one animal from animal collections for animation
//remove the animals from the collection after animation
//after all animals are removed, flag the animation is done
function randomizer() {

  animating = false;

  //for randomizing items from blanks and images
  if (animals[0]) {

    clear();

    //dark blue background
    background(0, 0, 180);
    randomIndexAnimals = int(random(animals.length));
    randomIndexPlastics = int(random(plastics.length));

    //images of plastics
    image(plastics[randomIndexPlastics], width * 0.5, height * 0.5);

    //random visible colors for the display text
    fill(random(100, 240), random(100, 180), random(100, 240));
    //add items from blanks to sentence
    text(`This plastic harms the ${animals[randomIndexAnimals]}.`, width * 0.15, height * 0.82);
    animals.splice(randomIndexAnimals, 1);

  } else {
    //end scene
    final = true;
  }
}

//call back function for randomizer after button pressed
function buttonPressed() {

  //beginning scene
  if (firstTime) {
    for (let i = 0; i < nameInputs.length; i++) {
      animals.push(nameInputs[i].value());
    }
  //others
    firstTime = false;
  }

  animating = true;
  setTimeout(randomizer, 1000);
}
