// TODAY I WANT TO EAT CHOCOLATE
//update 040321

let randomIndex;
let animating = false;

let imageCounter = 0;
let onions = [];

let startRandomizerButton;
let addMoredButton;

let firstTime = true;

let cnv;

let nameInputs = [];

let onion = [];


function preload() {
  for (let i = 0; i <= 15; i++) {
    onions[i] = loadImage(`assets/onion_${i}.JPG`);
  }
}


function setup() {

  cnv = createCanvas(350, 450);
  cnv.parent("#canvasDiv");

  background(200);
  frameRate(8);
  textFont('Arial Black');

  imageMode(CENTER);

  textSize(50);

  text("PLAY ME!", 40, 230);

  startRandomizerButton = select('#randButton');
  startRandomizerButton.mousePressed(buttonPressed);

  addMoredButton = select('#addMoredButton');
  addMoredButton.mousePressed(addAnotherInput);

  // button.class("randomizerButton");

for (let i = 0; i < 3; i++) {
  nameInputs.push(createInput());
  nameInputs[nameInputs.length - 1].parent("#inputFields");
  }
}


function draw() {
  if (animating == true) {
   clear();
    image(onions[imageCounter], width/ 2, height/ 2);
    image(random(onions), width/ 2, height/ 2);

    if (imageCounter < onions.length - 1) {
      imageCounter++;
      console.log(imageCounter);
    } else {
      imageCounter = 0;
    }


  }
}

function addAnotherInput() {
  nameInputs.push(createInput());
  nameInputs[nameInputs.length - 1].parent("#inputFields");
}

function randomizer() {
  animating = false;
 clear();
  if (onion[0]) {
    // background(random(55), random(155), random(255));
    randomIndex = int(random(onion.length));

    image(random(onion), width/ 2, height/ 2);
    text(onion[randomIndex], width/ 2, height - 55);
    onion.splice(randomIndex, 1);
  } else {
    background('#ff61e5');
    text("FIN", 120, 230);
    textAlign(CENTER);
  }
}

function buttonPressed() {
  if (firstTime) {
    for (let i = 0; i < nameInputs.length; i++) {
      onion.push(nameInputs[i].value());
    }
    firstTime = false;
  }

  setTimeout(randomizer, 2000);
  animating = true;

}
