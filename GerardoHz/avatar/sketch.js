var mic;
let bgColor = 0;
let ellipseColor = 0;
let squareColor = 0;
let pheonixs=[];

function setup() {
createCanvas(400, 400);
bgColor = random(255);

rectMode(CENTER);
mic = new p5.AudioIn();

mic.start();
//Moving ellipse (mouth)
for (let i =1; i <=12; i++){
pheonixs [i]= new pheonix(random(1,10)* width*0, height*.0*i,i*3,.5+i*.3); }

}

function draw() {

// When pressed background changes color  
background(bgColor);
if (mouseIsPressed) {
bgColor = color(random(255), random(255), random(255));}
   

//Antenna
fill(194,190,203)
rect(200,60, 15, 100);
fill(250,218,94)
ellipse(200, 10, 20, 20);
//Function
hat();
sideburn();
ears();
head();
corner();
eyes();


//Mouth mic input ellipse moving
var vol= mic.getLevel();
fill(0)
ellipse(width*.5,height*.6,130,vol*150);
fill(250)
  
//array group
pheonixs[1].display();
pheonixs[1].move();

pheonixs[2].display();
pheonixs[2].move();
 
pheonixs[3].display();
pheonixs[3].move();
  
pheonixs[4].display();
pheonixs[4].move();
  
pheonixs[5].display();
pheonixs[5].move();
   
pheonixs[6].display();
pheonixs[6].move();

pheonixs[7].display();
pheonixs[7].move();
 
pheonixs[8].display();
pheonixs[8].move();
 
pheonixs[9].display();
pheonixs[9].move();

pheonixs[10].display();
pheonixs[10].move();
   
pheonixs[11].display();
pheonixs[11].move();
   
pheonixs[12].display();
pheonixs[12].move();
  }
    
 // All funtions vertex to call upon later
function hat(){
  
//The hat  
fill(255);
beginShape();
vertex(width * .5,height *.1);
vertex(width* .2,height * .2);
vertex(width* .8, height* .2);
endShape(CLOSE);
//blue triangle
fill(0,0,255);
beginShape();
vertex(width *.5, height * .1);
vertex(width * .4,height * .2);
vertex(width*.6, height *.2);
endShape(CLOSE);
 
  
}



function corner (){
   
//Corner head gold
fill(255,155,0);
beginShape();
vertex(width*.2,height*.2);
vertex(width*.2,height*.3);
vertex(width*.3,height*.2);
endShape(CLOSE);
//right corner  
beginShape();
vertex(width*.7,height*.2);
vertex(width*.8,height*.2);
vertex(width*.8,height*.3);
endShape(CLOSE);
   
  
}

function sideburn(){
    
//side burns
fill(0);
beginShape();
vertex(width*.1,height*.7);
vertex(width*.2,height*.8);
vertex(width*.3,height*.7);
vertex(width*.7,height*.7);
vertex(width*.8,height*.8);
vertex(width*.9,height*.7);
vertex(width*.8,height*.2);
vertex(width*.2,height*.2);
endShape(CLOSE);
  
  
}
function ears (){
  
//Ears
fill(124,10,2);
beginShape();
vertex(width*.14,height*.5);
vertex(width*.18,height*.3);
vertex(width*.82,height*.3);
vertex(width*.86,height*.5);
endShape(CLOSE);
  
  
  
}
function head(){
  
// The head
fill(0,204,153);
beginShape();
vertex(width*.2, height * .2);
vertex(width*.2,height *.5);
vertex(width*.15,height*.5);
vertex(width*.4,height*.8);
vertex(width* .5, height*.7);
vertex(width* .6,height* .8);
vertex(width* .85, height*.5);
vertex(width *.8, height*.5);
vertex(width* .8, height*.2);
endShape(CLOSE);
  
}
function eyes(){
  
//(Eyes)Aviators Glowing
//Black base eyes
fill(0)
beginShape();
vertex(width * .31, height*.48);
vertex(width*.31, height*.31);
vertex(width *.48,height*.31);
endShape(CLOSE);
//Left eye black base
beginShape();
vertex(width*.52, height*.31);
vertex(width*.69,height*.31);
vertex(width*.69,height*.48);
endShape(CLOSE);

//Left glowing eye  
fill( random(80), random(30), random(107), random(250));
beginShape();
vertex(width * .3, height*.5);
vertex(width*.3, height*.3);
vertex(width *.5,height*.3);
endShape(CLOSE);
//right glowing eye  
beginShape();
vertex(width*.5, height*.3);
vertex(width*.7,height*.3);
vertex(width*.7,height*.5);
endShape(CLOSE);
 
//Red pupil left
fill(194,24,20)
beginShape();
vertex(width * .32, height*.46);
vertex(width*.32, height*.32);
vertex(width *.46,height*.32);
endShape(CLOSE);
//Left pupil red
beginShape();
vertex(width*.54, height*.32);
vertex(width*.68,height*.32);
vertex(width*.68,height*.46);
endShape(CLOSE);
  
//Boss mustache Yes!!
fill(139,69,19)
beginShape();
vertex(width*.3,height*.6);
vertex(width*.4,height*.5);
vertex(width*.6,height*.5);
vertex(width*.7,height*.6);
endShape(CLOSE);
  
}
  


 


  