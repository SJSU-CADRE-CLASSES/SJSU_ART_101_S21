//wish you were here with me

let owl = [{
    name: "rectangle",
    color: "iridescent"
    }, {
    name: "cube",
    color: "pink"
    }, {
    name: "marquise",
    color: "clear"
    }, {
    name: "sphere",
    color: "violet"
    }, {
    name: "hearts",
    color: "transparent pink"
    }, {
    name: "triangles",
    color: "pastel"
    }];

    let randomIndex;
    let animating = false;
    let avo = [];
    let imageCounter = 0;
    let button;


    function preload(){
      for (let i = 0; i <=6; i++){
        avo[i] = loadImage(`assets/avo_${i}.jpg`);
      }
    }

    function setup() {
      createCanvas(600, 600);
      background(223,166,164);
      textSize(24);
      imageMode(CENTER);
      frameRate(8);
      textFont("'Molle', cursive");
      text("How to See Shapes Aesthetically", 50, 50);

      button = createButton("click to see shape");
      button.mousePressed(buttonPressed);

     }

    function draw() {

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
        text(`${owl[randomIndex].color} ${owl[randomIndex].name}`, width/2, height-50);
        owl.splice(randomIndex, 1);
      } else {
        background(random(212, 180, 209));
        text("nothing left!", 50, 50)
      }
    }

    function buttonPressed() {
      animating = true;
      setTimeout(randomizer, 2000);


    }
