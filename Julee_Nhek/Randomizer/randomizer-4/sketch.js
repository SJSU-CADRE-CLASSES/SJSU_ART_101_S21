//wish you were here with me

let owl = [{
    name: "a rectangle?",
    color: "do you see"
    }, {
    name: "a cube?",
    color: "do you see"
    }, {
    name: "a pointed oval?",
    color: "do you see"
    }, {
    name: "a sphere?",
    color: "do you see"
    }, {
    name: "hearts?",
    color: "do you see"
    }, {
    name: "triangles?",
    color: "do you see"
    }, {
    name: "cylinders?",
    color: "do you see"
    }, {
    name: "hexagons?",
    color: "do you see"
    }, {
    name: "a polygon?",
    color: "do you see"
    }];

    let randomIndex;
    let animating = false;
    let avo = [];
    let imageCounter = 0;
    let button;
    let cnv;



    function preload(){
      for (let i = 0; i <=9; i++){
        avo[i] = loadImage(`assets/avo_${i}.jpg`);
      }
      song = loadSound('assets/whoosh.mp3');

    }

    function setup() {
      cnv = createCanvas(600, 600);
      song.loop();
      cnv.parent("#canvasDiv");
      c1 = color(144,166,160);
      c2 = color(243,210,204);
      setGradient(c1, c2);
      textSize(32);
      imageMode(CENTER);
      frameRate(12);
      textFont("'Cutive Mono', monospace;");
      text("How to See Shapes Aesthetically", 80, 250);
      button = select("#randButton");
      button.mousePressed(buttonPressed);
      button.class("randomizerButton");
      button2 = select("#restart");
      button2.class("restart");

     }

     function setGradient(c1, c2) {
  // noprotect
    noFill();
    for (var y = 0; y < height; y++) {
    var inter = map(y, 0, height, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }
   }

    function draw() {
      /////////////////////shape//////////////////////
      ellipse(mouseX, mouseY, 30, 30);
      ///////////////////////////////////////////////

      if(animating == true){
        clear();
        image(avo[imageCounter], width/2, height/2);

        if (imageCounter < avo.length -1) {
        imageCounter++;
        console.log(imageCounter);
      } else {
        imageCounter = 0;
      }
      }

    }



    function randomizer(){
      animating = false;
        if (owl[0]){


        clear();
        randomIndex = int(random(owl.length));
        image(random(avo), width/2, height/2);
        text(`${owl[randomIndex].color} ${owl[randomIndex].name}`, 170, height-20);
        owl.splice(randomIndex, 1);
      } else {
        c1 = color(243,210,204);
        c2 = color(144,166,160);
        setGradient(c1, c2);
        text("End of Lesson!", 80, 250)
        text("How many did you see correct?", 80, 290)

      }
    }

    function buttonPressed() {
      animating = true;
      setTimeout(randomizer, 2000);


    }
