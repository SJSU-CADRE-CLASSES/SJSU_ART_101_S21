// pandas gang (arrays)
let pandas = [{
  name: "You",
  color: "awesome car!"
}, {
  name: "David",
  color: "deported model car!"
}, {
  name: "Justin",
  color: "limited edition car!"
}, {
  name: "Abdal",
  color: "used car!"
}, {
  name: "Collin",
  color: "brand new car!"
}, {
  name: "Jae",
  color: "salvage title car!"
}];

let randomIndex;
let animating = false;
let cars = [];
let imageCounter = 0;
let button;
let cnv;
let nameInput;

function preload() {

  for (let i = 0; i <= 15; i++) {
    cars[i] = loadImage(`assets/car_${i}.jpg`)
  }

}

function setup() {
  cnv = createCanvas(1280, 780);
  cnv.parent("#canvasDiv");
  background(149,200,216);

  textSize(40);
  textFont('Courier new');
  textAlign(CENTER);
  textStyle(BOLD);
  stroke(50);
  strokeWeight(5);
  fill(0,171,240)
  imageMode(CENTER);
  frameRate(5);

  text("FREE JAPANESE DEPORTED CARS!", 600, 400)

  // button = createButton("Click To Randomize");
  button = select('#randButton');
  button.mousePressed(buttonPressed);
  button.class("randomizerButton");

  // *notes for myself*
  // console.log(pandas[2].color);
  // console.log("initial array is ");
  // console.log(pandas);

  // pandas.shift();
  // console.log("array after shift ");
  // console.log(pandas);

  // pandas.splice (4, 1), x = the one you want to remove in arrays, y = how many you want in the parameter to remove

  // pandas.unshift("ha");
  // console.log("array after unshift ");
  // console.log(pandas);

}

function draw() {

  if (animating == true) {
    clear();
    image(cars[imageCounter], width / 2, height / 2);

    if (imageCounter < cars.length - 1) {
      imageCounter++;
    } else {
      imageCounter = 0;
    }
  }

}

function randomizer() {
  animating = false;

  if (pandas[0]) {
    // background(random(200, 255));
    // random index = pulling a random integer to the length of the array
    clear();
    randomIndex = int(random(pandas.length));
    // using text to sub integer for the name of panda
    image(random(cars), width / 2, height / 2);
    text(`${pandas[randomIndex].name} won this ${pandas[randomIndex].color}`, 550, 700);
    // text(pandas[randomIndex].name + "'s favorite color is " + pandas[randomIndex].color, 50, 50);
    // not letting it to repeat
    pandas.splice(randomIndex, 1);
  } else {
    background(random(200, 255));
    text("No more cars left to giveaway!", 600, 400);
  }
}

function buttonPressed() {
  animating = true;
  setTimeout(randomizer, 2000);


  //  if (pandas[0]){
  //    background(random(200, 255));
  // random index = pulling a random integer to the length of the array
  //    randomIndex = int(random(pandas.length));
  // using text to sub integer for the name of panda
  //    text(pandas[randomIndex].name, 50, 50);
  // not letting it to repeat
  //    pandas.splice(randomIndex, 1);
  //} else {
  //  background(random(200, 255));
  //  text("nothing left!", 50, 50);
  //}
}
