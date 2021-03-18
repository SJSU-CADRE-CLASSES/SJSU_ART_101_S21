let scale;  
let mic;
let angleCarrot = 0;
let space = 0.5;
let duckX = 0
let fr = 30; //starting FPS
let bunny1;

function setup() 
  {  
  createCanvas(400, 400);
  mic = new p5.AudioIn();
  mic.start();
  frameRate(fr); // Attempt to refresh at starting FPS
  }

function draw() 
  {
  //blossom
  angleMode(RADIANS);
  background(179, 255, 191);
  let t = frameCount / 50; //updates time
  
  //blossom color
  fill(255,212,204);
  noStroke();
  
  //blossom loop start
  for (var i = 0; i < 1; i++) 
  {
    petals.push(new petal()); //append petal object
  } //random number of petals each frame

  //loop through petals
  for (let blossom of petals) 
  {
    blossom.update(t); //update petal position
    blossom.display(); //draw petal
  }

  scale = map(mic.getLevel(), 0, 0.5, 60, 150); 
  angleEye = map(mouseX, 0, 400, 360, 361);
  bunny1 = new Bunny (220, 160, 220, angleEye, scale);

  angleMode(DEGREES);
  frameRate(fr);
  
  
  bunny1.display();
  drawCarrot(angleCarrot);
  drawDuck(width*0.0);
  }

function mousePressed()
  {
    // if the position of the mouse is inside this region then do this
    if(mouseX > 200 && mouseX < 390 && mouseY < 300 && mouseY > 50 )

    {
      if (space >0.5)
        {
          angleCarrot=0
          space=0.5;
        }
      else
        {
          space=10;
          angleCarrot=20
        }
    }

  }

function drawCarrot(rotation)
  {
    fill (255, 128, 0);
    
    push();
    rotate(rotation);
    translate(0 , -20);
    triangle(310, 150, 380, 150, 345, 300);       
    pop();
  
    fill (0, 255, 0); 
    
    push();
    rotate(rotation);
    triangle(310,130,330,130,300,100);
    triangle(320,130,380, 130, 350, 90);
    translate(50,0);
    triangle(310,130,330,130,335,100);
    pop();

  }

function drawDuck ()
  {
   push();
  
  if (duckX >= width+50) { duckX = -50;
    }
  else {
    duckX = duckX + 2;
  } 
  
  translate(0, 10)
  fill (255,238,153);
  circle(duckX + width *0.0, height * 0.9, 50);
  fill(255, 128, 0)
  triangle(duckX + 25, 360, duckX + 25, 370, duckX + 40, 365);
  fill(20);
  circle(duckX + width *0.04, height * 0.89, 5);
  pop();
}