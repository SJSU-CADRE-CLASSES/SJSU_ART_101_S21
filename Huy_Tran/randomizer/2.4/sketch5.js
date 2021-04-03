// TODAY I WANT TO EAT CHOCOLATE
//update 040321

//------------------------< START DEFINE VARIABLES >-----------------------//
let randomIndex;
let animating = false;

let imageCounter = 0; // Beginning img
let onions = []; //Empty variable for loading imgs from lib.

let startRandomizerButton;
let addMoredButton;

let firstTime = true; //Adding variable for eliminating the loop.

let cnv; //Define variable canvas.

let nameInputs = [];

let onion = []; //Empty variable for adding user's input.
//----------------------------------$$$-------------------------------------//


///-------------------------< START LOADNG IMGS >-------------------------///
function preload() {
  for (let i = 0; i <= 15; i++) {
    onions[i] = loadImage(`assets/onion_${i}.JPG`);
  }
}
//----------------------------------***-------------------------------------//


//--------------------------START SETUP--------------------------//
function setup() {
  cnv = createCanvas(350, 450);
  cnv.parent("#canvasDiv"); //Assign class to define in CSS

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

  for (let i = 0; i < 2; i++) {
    nameInputs.push(createInput());
    nameInputs[nameInputs.length - 1].parent("#inputFields");
  }
}
//----------------------------------***-------------------------------------//


//--------------------------START DRAW LOOP--------------------------//
function draw() {
  if (animating == true) {
    image(onions[imageCounter], width / 2, height / 2);
    image(random(onions), width / 2, height / 2);

    if (imageCounter < onions.length - 1) {
      imageCounter++;
      console.log(imageCounter);
    } else {
      imageCounter = 0;
    }
  }
}
//--------------------------------*< | >*-----------------------------------//


//-------------------------DEFINE FUNCTION #BUTTON-------------------------//
function addAnotherInput() {
  nameInputs.push(createInput());
  nameInputs[nameInputs.length - 1].parent("#inputFields");
}
//--------------------------------*OO | OO*-----------------------------------//

//------------------------DEFINE FUNCTION RANDOMIZER------------------------//
function randomizer() {
  animating = false;
  clear();
  if (onion[0]) {
    randomIndex = int(random(onions.length));

    image(random(onions), width / 2, height / 2);
    text(onions[randomIndex], width / 2, height - 55);
    onion.splice(randomIndex, 1);
  } else {
    background('#ff61e5');
    text("FIN", 120, 230);
    textAlign(CENTER);
  }
}
//-------------------------------*<> X <>*----------------------------------//

//-----------------------DEFINE FUNCTION BUTTON STATE-----------------------//
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
//-------------------------------<HOHOHO>----------------------------------//
