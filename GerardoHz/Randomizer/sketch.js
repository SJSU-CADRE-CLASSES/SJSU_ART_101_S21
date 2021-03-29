 //Drifter cars
let carros = [];
let cars = [{name: "supra", color:"black"},{name:"nissan 240", color: "blue"},{name: "foxbody", color: "white"},{name: "lexus", color: "olive"}, {name: "miata", color: "orange"}];

let randomIndex;
let animating = false;
let img;
let imageCounter = 0;

function preload (){

for (let i = 0; i <= 6; i++) {
  carros[i] = loadImage(`pictures/car${i}.jpg`)
}

}


function setup () {
createCanvas (600, 600);
background(200);
textSize (32);
text("click to randomize",50,50);
console.log(carros);
}
function draw () {

if (animating == true){

image(car[0],0,0);
}

}
function randomizer(){if (cars[0]){
  animating = false;
background(random(200, 255));

randomIndex = int(random(cars.length));

text(`${cars[randomIndex].name} 's looks better in
${cars[randomIndex].color}`, 100, 100);

cars.splice(randomIndex, 1);
}else {
background(random(200, 255))
text("nothing left", 200,200);
}

}

function mousePressed() {
  animating = true;
  setTimeout(randomizer, 2000);

}
