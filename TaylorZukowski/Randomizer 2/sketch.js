//cake flavors
let cake = [{
  name: "vanilla", 
  frosting: "chocolate"
}, {
  name: "confetti", 
  frosting: "nutella"
}, {
    name: "carrot", 
  frosting: "cream cheese"
}, {
    name: "lemon", 
  frosting: "vanilla"
}, {
  name: "chocolate", 
  frosting: "peanut butter"
}, {
  name: "red velvet", 
  frosting: "oreo"
}];

let randomIndex;
let animating = false;


function setup() {
  createCanvas(600, 600);
  background(200);
  textSize(32);
  
  text("click to randomize", 175, 50);
  
  
}

function draw() {
  
  if(animating == true){
     noStroke();
  fill(189, 236, 252);
  beginShape();
  vertex(width * .43, height * 1);
  vertex(width * .43, height * .98);
  vertex(width * .57, height * .98);
  vertex(width * .57, height * 1);
  endShape(CLOSE);
  
   noStroke();
  fill(189, 236, 252);
  beginShape();
  vertex(width * .48, height * 1);
  vertex(width * .48, height * .72);
  vertex(width * .52, height * .72);
  vertex(width * .52, height * 1);
  endShape(CLOSE);
  
  noStroke();
  fill(189, 236, 252);
  beginShape();
  vertex(width * .32, height * .72);
  vertex(width * .32, height * .7);
  vertex(width * .68, height * .7);
  vertex(width * .68, height * .72);
  endShape(CLOSE);

  beginShape();
    fill(245, 166, 227);
  vertex(width * .35, height * .7);
  vertex(width * .35, height * .53);
  vertex(width * .65, height * .53);
  vertex(width * .65, height * .7);
  endShape(CLOSE);

   //cake middle
  noStroke();
fill(245, 166, 227);
  beginShape();
  vertex(width * .38, height * .53);
  vertex(width * .38, height * .35);
  vertex(width * .62, height * .35);
  vertex(width * .62, height * .53);
  endShape(CLOSE);

   //cake top
  noStroke();
    fill(245, 166, 227);
  beginShape();
  vertex(width * .41, height * .35);
  vertex(width * .41, height * .2);
  vertex(width * .59, height * .2);
  vertex(width * .59, height * .35);
  endShape(CLOSE);

    
  }

}

function randomizer(){
  animating = false
    if (cake [0]){
 background(random(200, 255));
 randomIndex = int(random(cake.length));
 //text('${cake[randomIndex].name}'s frosting is 
 // ${cake[randomIndex].frosting}', 50, 50);
  text(cake[randomIndex].name + "'s frosting is " +       cake[randomIndex].frosting, 75, 50);
  cake.splice(randomIndex, 1);
} else{
  background(random(200, 255));
  text("nothing left!",100, 50);
}

}

function mousePressed() {
  animating = true;
  setTimeout(randomizer, 1000);
  

}