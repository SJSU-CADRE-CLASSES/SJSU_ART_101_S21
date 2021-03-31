// TODAY I WANT TO EAT CHOCOLATE
let randomIndex;
let animating = false;
let mm = [];
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

function preload(){
  for (let i = 0, i <= 15, i++){
    mm[i] = loadImage(`assets/mm_${i}.jpg`)
  }
}

function setup() {
  createCanvas(350, 450);
  background(200);

  textSize(30);

  text("PINCH ME NOW!", 50, 50);
  console.log(mm);
}

function draw() {

  if(animating == true){
    ellipse(random(width), random(height), random(50, 200))
  }
}

function randomizer() {
  animating = false;
  if (mm[0]){
    background(random(55), random(155),random(255));
    randomIndex = int(random(mm.length));
    // text(mm[randomIndex].name, + "'s my fav color" + mm.[randomIndex].color, 50, 50);
    text(`${mm[randomIndex].name}'s my fav color is
    ${mm[randomIndex].color}`, 50, 50);
    mm.splice(randomIndex, 1);
    // translate(0,0);
    // textAlign(CENTER);

  } else {
    background(255, 0, 0);
    text("HUHM! IT'S OVER!", 50, 50);
  }
}

function mousePressed(){
  setTimeout(randomizer, 2000);
  animating = true;

}
