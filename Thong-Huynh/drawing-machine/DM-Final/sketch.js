let w = 5;
let bkg = 200;
let timer = 60;
let value = 255;
// let a = 255;
let prompts = [{
  adj: "cute",
  noun: "cat",
  verb: "boxing"
}, {
  adj: "spiky",
  noun: "dog",
  verb: "sleeping"
}, {
  adj: "masculine",
  noun: "dinosaur",
  verb: "stomping"
}, {
  adj: "bouncy",
  noun: "slime",
  verb: "boxing"
}, {
  adj: "fat",
  noun: "alien",
  verb: "flying"
}, {
  adj: "angry",
  noun: "bird",
  verb: "running"
}]

let randomIndex1;
let randomIndex2;
let randomIndex3;

// .......................................................

function setup() {
  // createCanvas(windowWidth*0.625, windowHeight*0.625);
  createCanvas(700, 700);
  background(bkg);
  textFont('monospace');

  // console.log(prompts.length);

  push();
    noStroke();
    fill(0);
    rect(width*0,height*0,width,100);
  pop();

  push();
    fill(255);
    randomIndex1 = int(random(prompts.length));
    randomIndex2 = int(random(prompts.length));
    randomIndex3 = int(random(prompts.length));
    // randomIndex3 = int(random(0,5));
    // console.log(prompts[randomIndex].noun);

    textSize(20);
    textAlign(CENTER, CENTER);

    text(prompts[randomIndex1].adj,width*0.55,height*0.065);
    prompts.splice(randomIndex1, 1);

    text(prompts[randomIndex2].noun,width*0.7,height*0.065);
    prompts.splice(randomIndex2, 1);

    text(prompts[randomIndex3].verb,width*0.85,height*0.065);
    prompts.splice(randomIndex3, 1);

  pop();

  strokeWeight(w);
  frameRate(60);



}

// .......................................................

function draw() {

  push();
    noStroke();
    fill(0);
    rect(width*0,height*0,width*0.4,100);
  pop();

// /////////////////////////////////////////////////////////

  push();
    noStroke();
    fill(value);
    textAlign(CENTER,CENTER);
    textSize(65);
    text(timer, width*0.2, height*0.055);


    if (frameCount % 75 == 0 && timer > 0){
      timer--;
    }
    if (timer == 0){
      textSize(20);
      text(`!!! TIME'S UP !!!`, width*0.2, height * 0.1);
    }
  pop();

// /////////////////////////////////////////////////////////

  if (mouseIsPressed == true){
    noCursor();
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
  else {
    cursor(CROSS);
  }



}

// .......................................................

function keyTyped(){

  console.log(`key ${key} is being typed`);

  if (key === 's') {
    // save this image
    saveCanvas('QAC', 'png');

  } else if (keyIsDown(107) || keyIsDown(187)) {
    // INCREASE stroke width
    w += 3;
    strokeWeight(w);

  } else if (keyIsDown(109) || keyIsDown(189)) {
    // DECREASE stroke width
    w -= 3;
    strokeWeight(w);

  // } else if (key === 'c') {
  //   //CLEAR Canvas
  //   clear();
  //   background(bkg);

  } else if (key === 'e'){
    // Eraser
    stroke(bkg);

  } else if (key === '1'){
    // BLACK (DRAW CONT.)
    stroke(0,0,0);

  } else if (key === '2'){
    // WHITE.
    stroke(255,255,255);

  } else if (key === '3'){
    // RED.
    stroke(224, 69, 58);

  } else if (key === '4'){
    // GREEN.
    stroke(101, 176, 60);

  } else if (key === '5'){
    // BLUE.
    stroke(52, 110, 209);

  } else if (key === '6'){
    // YELLOW.
    stroke(255, 250, 25);

  }

  return false;
}

function keyPressed() {
  if (keyCode === 90) {
    value = 0;
  } else if (keyCode === 88) {
    value = 255;
  }
}
  // else if (key === '['){
  //   // LOWER Opacity.
  //   a -= 30;
  //   strokeOpacity(a);
  //
  // } else if (key === ']'){
  //   // Higher Opacity.
  //   a += 30;
  //   strokeOpacity(a);
  //
  // }





//..........................................................



// stroke(map(mouseX, 0, width, 0, 255, true));
// line(mouseX, mouseY, pmouseX, pmouseY);

// line(mouseY, mouseX, pmouseY, pmouseX);

// stroke(150,255,150);
// line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);

// line(height - mouseY, width - mouseX, height - pmouseY,  width - pmouseX);

// stroke(255,150,150);
// line(height - mouseY, mouseX, height - pmouseY, pmouseX);

// line( width - mouseX, mouseY, width - pmouseX, pmouseY);

// stroke(150,150,255);
// line( mouseY, width - mouseX, pmouseY, width - pmouseX);

// line(mouseX, height - mouseY, pmouseX, height - pmouseY);
