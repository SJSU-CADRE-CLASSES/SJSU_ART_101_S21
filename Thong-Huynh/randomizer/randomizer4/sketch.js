let scene = [];

let randomIndex1;

let animating = false;

let cop = [];
let imageCounter = 0;
let x;
let y;
let surrender;
let startRandomizerButton;
let addMoreButton;
let cnv;
let nameInputs = [];
let firstTime = true;
let t;

function preload(){

  for (let i = 0; i <= 5; i++){
    // trolls[i] = loadImage("assets/chasing (" + i + ").jpg"); (the same as under)
    cop[i] = loadImage(`assets/cop (${i}).png`);
  }
  surrender = loadImage(`assets/cop (6).png`);
}


function setup() {
  cnv = createCanvas(600, 600);
  cnv.parent("#canvasDiv");
  // background(220);
  background(random(200,255),random(200,255),random(200,255));
  translate(width*0.5, height*0.5);
  textSize(18);
  textStyle(BOLD);
  text(`You are a well-known DETECTIVE,
      currently investigating a SERIAL KILLER case
      in which a suspect is hiding his LAST HOSTAGE.

Your MISSION is to find out where he keeps the hostage
      by using your INTERROGATION SKILL.`,width*-0.45,height*-0.4);
  image(cop[0], width*-0.45, height*-0.2);

  // button = createButton("click to interrogate");
  startRandomizerButton = select("#randButton");
  startRandomizerButton.mousePressed(buttonPressed);
  // button.class("randomizerButton");

  addMoreButton = select("#addMoreButton");
  addMoreButton.mousePressed(addAnotherInput);

  for (let i = 0; i < 3; i++) {
    nameInputs.push(createInput());
    nameInputs[nameInputs.length - 1].parent("#inputFields");
  }

  imageMode(CENTER);
  frameRate(18);


}

function draw() {
  if (animating == true){

    clear();
    background(random(200,255));

    image(cop[imageCounter], random(width), random(height));

    if (imageCounter < cop.length - 1){
    imageCounter++;
  } else {
    imageCounter = 0;
  }

  }
}

function addAnotherInput(){
  nameInputs.push(createInput());
  nameInputs[nameInputs.length - 1].parent("#inputFields");
}

function randomizer(){
  animating = false;
  if (scene[0]) {
    clear();
    background(random(200,255),random(200,255),random(200,255));
    randomIndex1 = int(random(scene.length));


    x = width*0.2;
    y = height*0.2;

    t = random(cop);
    image(t, x + width*0.3, y + height*0.4);
    if (t == cop[1]){
    text(`You SMASHED the suspect's HANDS with a
                                ${scene[randomIndex1]}`, x, y);
  } else if (t == cop[2]){
    text(`You CRUSHED the suspect's FEET with a
                                ${scene[randomIndex1]}`, x, y);
  } else if (t == cop[3]){
    text(`You PIERCED the suspect's EARS with a
                                ${scene[randomIndex1]}`, x, y);
  } else if (t == cop[4]){
    text(`You PUNCHED the suspect's FACE with a
                                ${scene[randomIndex1]}`, x, y);
  } else if (t == cop[5]){
    text(`You ELECTRIFIED the suspect with a
                                ${scene[randomIndex1]}`, x, y);
  } else if (t == cop[0]){
    text(`You deal NO DAMAGE to the suspect with a
                                ${scene[randomIndex1]}`, x, y);
  }

    scene.splice(randomIndex1,1);
  } else {
    background(random(200,255),random(200,255),random(200,255));
    text(`Thanks to your MASTER INTERROGATION SKILL,
      the suspect SCREAMS in pain and BEGS for forgiveness;
      at the same time, you got HINTS to rescue the hostage.

Congratulations!`, width*0.05, height*0.1);
    image(surrender, width*0.5, height*0.6);
  }
}

function buttonPressed() {

if (firstTime) {
  for (let i = 0; i < nameInputs.length; i++){
    scene.push(nameInputs[i].value());
  }
  firstTime = false;
}
  animating = true;
  setTimeout(randomizer, 1500);
  // 1000 = 1s
}
