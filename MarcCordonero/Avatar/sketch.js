let eyeMove;
let eyeMove2;
let mic;
let mouthTalk;
let micLevel;
let value = (65, 110, 70);
let shirtcolor = value;
let circles = [];
function setup() {
  createCanvas(400, 400);
  
  for (var i = 0; i < 50; i++) {
    var x = random(width);
    var y = random(height/3);
    var d = random(1, 20);
    var c = color(218,165,32);
    var s = random(0.2, 3);
  	circles[i] = new DrawCircle(x, y, d, c, s);
  }
  
  angleMode(DEGREES);

  mic = new p5.AudioIn();
  mic.start();
}





function draw() {
  //console.log("mic level " mic.getLevel());
//console.log("mouse x is: " + mouseX);

  background(30);
  
    for (var i = 0; i < circles.length; i++) {
  	circles[i].move();
    circles[i].display();
  }
  
  if (circles.length > 100) {
  	circles.shift();
  }
  
eyeMove = map(mouseX, 0, 400, 205 , 213.5)  
eyeMove2 = map(mouseX, 0, 400, 307 , 314)


  micLevel = mic.getLevel();
mouthTalk = map(- micLevel, 0, .1,222, 205);
  
 
  drawHairmain();  
  drawHead();
  //shirt color  
  fill(shirtcolor)
  drawShirt();
  drawFade();
  drawCurls();
  drawEyes();  
  drawPupil1();
   drawPupil2();
  drawGlasses();
  drawEarring()
  drawBeard();
  drawNose();

  drawMouth();
  
}
function mouseClicked() {
  if (shirtcolor === (65, 110, 70)) {
    shirtcolor = color(random(0, 170), random(0, 170), random(0, 170));
  } 
  else {
    shirtcolor = color(random(0, 170), random(0, 170), random(0, 170));
  }
}


function drawHairmain() {
//hair-main  
  fill(50);
  beginShape()

    vertex(width * .32, height * .15);
    vertex(width * .81, height * .165);
    vertex(width * .79, height * .3);
    vertex(width * .28, height * .3);         
  endShape(CLOSE)
}

function drawHead() {  
  
//Skin Color  
  fill(213, 195, 166) 
    strokeWeight(2)
//neck
  beginShape()
  
    vertex(width * .36, height * .52);
    vertex(width * .365, height * .6);
    vertex(width * .36, height * .71);
    vertex(width * .36, height * .95);
    vertex(width * .65, height * .95);
    vertex(width * .639, height * .8);
    vertex(width * .645, height * .72);
    vertex(width * .645, height * .52);
    vertex(width * .38, height * .4);
  endShape(CLOSE)

//head
  beginShape();
    curveVertex(width * .415, height * .5);
    vertex(width * .445, height * .6);
    vertex(width * .48, height * .66);
    vertex(width * .72, height * .72);
    vertex(width * .795, height * .5);
    vertex(width * .765, height * .3);
    vertex(width * .49, height * .29);
    vertex(width * .49, height * .32);
    vertex(width * .45, height * .35);
    vertex(width * .415, height * .5);
    vertex(width * .45, height * .35);
  endShape()

//ear
  beginShape()
    vertex(width * .38, height * .4);
    vertex(width * .35, height * .39);
    vertex(width * .32, height * .4);
    vertex(width * .315, height * .45);
    vertex(width * .33, height * .485);
    vertex(width * .34, height * .5);
    vertex(width * .345, height * .515);
    vertex(width * .36, height * .52);
    vertex(width * .38, height * .51);
  endShape()
}
  
function drawShirt() {

 
//shirt
 strokeWeight(3)  
  beginShape()
    vertex(width * .36, height * .71);
    vertex(width * .42, height * .8);
    vertex(width * .5, height * .86);
    vertex(width * .6, height * .9);
    vertex(width * .65, height * .85);
    vertex(width * .64, height * .8);
    vertex(width * .73, height * .845);
    vertex(width * .94, height * 1.)
    vertex(width * .02, height * 1.)
    vertex(width * .1, height * .9)
    vertex(width * .2, height * .82)
    vertex(width * .26, height * .8)
    vertex(width * .295, height * .77)
    vertex(width * .36, height * .71);
  endShape()

//shirt Collar  
 noFill()
 strokeWeight(5)
  beginShape()
    curveVertex(width * .36, height * .71);
    vertex(width * .42, height * .8);
    vertex(width * .5, height * .86);
    vertex(width * .6, height * .9);
    vertex(width * .65, height * .85);
    vertex(width * .64, height * .8);
    vertex(width * .64, height * .8);
    vertex(width * .65, height * .85);
    vertex(width * .6, height * .9);
    vertex(width * .5, height * .86)
    vertex(width * .42, height * .8);
    vertex(width * .36, height * .71);
    vertex(width * .295, height * .77)
  endShape()
}
 
function drawFade() {
//hair fade
 fill(55)
 noStroke()
  beginShape();
    vertex(width * .275, height * .29);
    vertex(width * .285, height * .5);
    vertex(width * .365, height * .6);
    vertex(width * .36, height * .52);
    vertex(width * .345, height * .515);
    vertex(width * .34, height * .5);
    vertex(width * .33, height * .485);
    vertex(width * .315, height * .45);
    vertex(width * .32, height * .4);
    vertex(width * .35, height * .39);
    vertex(width * .38, height * .4);
    vertex(width * .4, height * .5);
    vertex(width * .415, height * .5);
    vertex(width * .45, height * .35);
    vertex(width * .49, height * .32);
    vertex(width * .49, height * .29);
    vertex(width * .275, height * .29);
  endShape(CLOSE)
}

function drawCurls() {
//hair Curls  
 fill(50);
 noStroke()  
    
  circle(115,110, 15);
  circle(115,100, 15);
  circle(115, 90, 15);
  circle(120, 80, 20);
  circle(130, 65, 20);
  circle(145, 62, 25);
  circle(160, 55, 22);
  circle(180, 58, 35);
  circle(200, 55, 25);
  circle(210, 59, 25);
  circle(230, 55, 25);
  circle(245, 54, 25);
  circle(255, 55, 25);
  circle(274,55, 30);
  circle(295,58, 27);
  circle(310,58, 30);  
  circle(324,72, 15);
  circle(326,82, 15);
  circle(323,95, 20);
  circle(320,110, 20);
  circle(315,120, 20);
  circle(300,115, 15);
  circle(290,114, 10);
}

function drawEyes() {
//eyes
 fill(48, 33, 19)
  circle(215,170, 35);
  circle(315,170, 25);

  }

function drawPupil1() {
//pupil 1
 fill(213, 195, 166)
  circle(eyeMove,168, 17);

}

function drawPupil2() {
//pupil 2
 fill(213, 195, 166)
  circle(eyeMove2,168, 12);
}

function drawGlasses() {
//Glasses
 stroke(0)
 strokeWeight(4)
 noFill()
  
  beginShape()
    curveVertex(width * .44, height * .4);
    curveVertex(width * .44, height * .4);
    curveVertex(width * .615, height * .4);
    curveVertex(width * .6, height * .49);
  endShape()
  
  beginShape()
    curveVertex(width * .615, height * .4);
    vertex(width * .6, height * .49);
    vertex(width * .46, height * .49);
    vertex(width * .6, height * .49);
  endShape()
  
  beginShape()  
    vertex(width * .46, height * .49);
    vertex(width * .44, height * .4);
  endShape()
   
  beginShape()
    vertex(width * .615, height * .4);
    vertex(width * .6, height * .49);
  endShape()

  beginShape()
    curveVertex(width * .71, height * .4);
    curveVertex(width * .71, height * .4);
    curveVertex(width * .84, height * .4);
    curveVertex(width * .84, height * .49);
  endShape()
  
    beginShape()
    curveVertex(width * .82, height * .48);
    vertex(width * .82, height * .48);
    vertex(width * .73, height * .48);
    vertex(width * .73, height * .4);
  endShape()
  
    beginShape()  
    vertex(width * .73, height * .48);
    vertex(width * .71, height * .4);
  endShape()
  
    beginShape()
    vertex(width * .84, height * .4);
    vertex(width * .82, height * .48);
  endShape()
  
  beginShape()
    curveVertex(width * .61, height * .42);
    curveVertex(width * .61, height * .43);
    curveVertex(width * .66, height * .425);
    curveVertex(width * .71, height * .43);
    curveVertex(width * .71, height * .43);
  endShape()
}  

function drawEarring() {
  
 //earring
    circle(144,198, 8); 
}

function drawBeard() {
  
  //beard
strokeWeight(2)  

  
  line(width * .497, height * .64, width * .48, height * .7);
  line(width * .475, height * .64, width * .46, height * .68);
  line(width * .49, height * .62, width * .474, height * .68);
  line(width * .497, height * .64, width * .48, height * .7);
  line(width * .51, height * .62, width * .489, height * .71);
  line(width * .52, height * .63, width * .5, height * .7);
  line(width * .53, height * .65, width * .51, height * .71);
  line(width * .54, height * .67, width * .528, height * .71);
  line(width * .55, height * .67, width * .535, height * .725);
  line(width * .56, height * .675, width * .55, height * .71);
  line(width * .57, height * .68, width * .56, height * .72);
  line(width * .58, height * .68, width * .57, height * .73);
  line(width * .59, height * .688, width * .58, height * .73);
  line(width * .6, height * .69, width * .59, height * .73);
  line(width * .61, height * .69, width * .6, height * .74);
  line(width * .62, height * .69, width * .615, height * .74);
  line(width * .63, height * .7, width * .625, height * .75);
  line(width * .64, height * .698, width * .635, height * .74);
  line(width * .65, height * .695, width * .65, height * .75);
  line(width * .66, height * .7, width * .665, height * .75);
  line(width * .67, height * .7, width * .68, height * .75);
  line(width * .678, height * .69, width * .695, height * .745);  
  line(width * .69, height * .68, width * .71, height * .75);
  line(width * .7, height * .67, width * .72, height * .75);
  line(width * .714, height * .68, width * .73, height * .74);
  line(width * .728, height * .685, width * .74, height * .73);
  line(width * .74, height * .685, width * .75, height * .72);
  line(width * .75, height * .67, width * .76, height * .71);
  line(width * .758, height * .648, width * .763, height * .69);
  line(width * .765, height * .64, width * .771, height * .67);
  line(width * .773, height * .63, width * .775, height * .65);
  
  
}

function drawNose() {
      strokeWeight(2)
  beginShape()
  curveVertex(width * .64, height * .5)
   curveVertex(width * .66, height * .51)
 curveVertex(width * .69, height * .51)
   curveVertex(width * .70, height * .51)
  curveVertex (width * .72, height * .5);
    curveVertex(width * .64, height * .5)
  endShape()
}
function drawMouth() {
  
  //Skin Color  
  fill(213, 195, 166) 
  
//mouth
  
  //open
  push();
  noStroke()
  fill(0)
  ellipseMode(CENTER);
  ellipse(width * .685, mouthTalk, width * .07, height * .07);
  pop();
  
  push();
  noStroke();
  beginShape();  
  vertex(width * .65, height * .52);
  vertex(width * .72, height * .52);
  vertex(width * .72, height * .59);
  vertex(width * .65, height * .59);
  endShape(CLOSE);
  pop();

  //lip
  strokeWeight(2)
  line(width * .65, height * .59, width * .72, height * .59);
  
}

function DrawCircle( x, y, d, c, s ) {

  this.xPos = x;
  this.yPos = y;
  this.diameter = d;
	this.color = c;
  this.speed = s;
}

