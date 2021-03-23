// TODAY I WANT TO EAT CHOCOLATE
//MAR2321
let randomIndex;

let mm = [{
  name: "ROD",
  color: "yummy red"
}, {
  name: "YOH",
  color: "sweetie yellow"
}, {
  name: "GOH",
  color: "hero green"
}, {
  name: "BOH",
  color: "knight blue"
}, {
  name: "NOH",
  color: "dragon brown"
}, {
  name: "ORH",
  color: "energy orange"
}];

function setup() {
  createCanvas(350, 450);
  background(200);

  textSize(30);

  text("PINCH ME NOW!", 50, 50);

}

function draw() {
}

function mousePressed(){
  if (mm[0]){
    background(random(55), random(155),random(255));
    randomIndex = int(random(mm.length));
    text(mm[randomIndex].name, 50, 50);
    mm.splice(randomIndex, 1);

  } else {
    background(255, 0, 0);
    text("HUHM! IT'S OVER!", 50, 50);
  }
}
