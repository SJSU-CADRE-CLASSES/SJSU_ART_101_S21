// TODAY I WANT TO EAT CHOCOLATE
//update 040221
let randomIndex;
let animating = false;

let imageCounter = 0;
let chocos = [];

let startRandomizerButton;
let addMoredButton;

let firstTime = true;

let cnv;

let nameInputs = [];

  let mm = [];


function preload() {
  for (let i = 0; i <= 5; i++) {
    chocos[i] = loadImage(`assets/mm_${i}.JPG`);
  }
}


function setup() {
  // createCanvas(350, 450);

  cnv = createCanvas(350, 450);
  cnv.parent("#canvasDiv");

  background(200);
  frameRate(8);
  textFont('Arial Black');

  imageMode(CENTER);

  textSize(20);

  text("PINCH ME NOW!", 50, 50);

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
    // ellipse(random(width), random(height),
    // random(50, 200))
//    clear();
    // image(chocos[imageCounter], width/ 2, height/ 2);
    image(random(chocos), width/ 2, height/ 2);

    if (imageCounter < chocos.length - 1) {
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
  if (mm[0]) {
    // background(random(55), random(155), random(255));
    randomIndex = int(random(mm.length));

    image(random(mm), width/ 2, height/ 2);
    text(mm[randomIndex], width/ 2, height - 55);
    mm.splice(randomIndex, 1);
  } else {
    background(255, 0, 0);
    text("HUHM! IT'S OVER!", 50, 50);
  }
}

function buttonPressed() {
  if (firstTime) {
    for (var i = 0; i < nameInputs.length; i++) {
      mm.push(nameInputs[i].value());
    }
    firstTime = false;
  }

  setTimeout(randomizer, 2000);
  animating = true;

}
