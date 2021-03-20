let catchMe = [{
  name: "Nope! ",
  color: "I'm here."
}, {
  name: "Too bad... ",
  color: "I'm over here!"
}, {
  name: "Oops! ",
  color: "Miss again?"
}, {
  name: "Hehehe... ",
  color: "About to give up?"
}, {
  name: "Too slow... ",
  color: "Next time!"
}, {
  name: "Faster! ",
  color: "Try one more time!"
}];

let randomIndex1;
let randomIndex2;
let animating = false;
let run;



function setup() {
  createCanvas(400, 400);
  background(220);
  translate(width*0.5, width*0.5);
  textSize(16);
  textStyle(BOLD);
  text("Try to catch me IF YOU CAN!",width*-0.3,0);

  run = new Run(width * 0.1, height * 0.5,50);

}

function draw() {
  if (animating == true){
    background(random(200,255));

    run.display();
    run.move();

  }
}



function randomizer(){
  animating = false;
  if (catchMe[0]) {
    background(random(200,255));
    randomIndex1 = int(random(catchMe.length));
    randomIndex2 = int(random(catchMe.length));
    text(`${catchMe[randomIndex1].name}
${catchMe[randomIndex2].color}`, random(width*0, width*0.6), random(width*0.1, width*0.9));
    catchMe.splice(randomIndex1,1);
  } else {
    background(random(200,255));
    text("Uugh...U...caught me...", width*0.25, width*0.5);
  }
}

function mousePressed() {
  animating = true;
  setTimeout(randomizer, 1500);
  // 1000 = 1s
}
