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

function setup() {
  createCanvas(400, 400);
  background(220);
  translate(width*0.5, width*0.5);
  textSize(16);
  textStyle(BOLD);
  text("Try to catch me IF YOU CAN!",width*-0.25,0);


}

function draw() {
  
}

function mousePressed() {
  background(random(200,255));
  randomIndex1 = int(random(catchMe.length));
  randomIndex2 = int(random(catchMe.length));
  text(catchMe[randomIndex1].name +
       catchMe[randomIndex2].color, random(width*0, width*0.6), random(width*0.1, width*0.9));
}