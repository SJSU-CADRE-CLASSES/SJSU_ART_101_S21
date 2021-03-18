//wish you were here with me

let owl = [{
    name: "owlena",
    color: "pink"
    }, {
    name: "seer",
    color: "violet"
    }, {
    name: "hammy",
    color: "cream"
    }, {
    name: "waves",
    color: "turquoise"
    }, {
    name: "moon",
    color: "opal"
    }, {
    name: "gem",
    color: "sea green"
    }];

    let randomIndex;
    let animating = false;
    // let counter = 0;

    function setup() {
      createCanvas(600, 600);
      background(220);
      textSize(32);

      text("click to randomize", 50, 50);


      // setTimeout(changeBackground, 1000);
     }

    function draw() {

      if(animating == true){
        ellipse(random(width), random(height), random(50, 200));
      }
    }

    // function changeBackground(){
    //   if (counter <=5){
    //     counter++;
    //     console.log(counter)
    //   background(random(255), random(255), random(255));
    //   setTimeout(changeBackground, 1000);
    // } else{
    // }


    function randomizer(){
      animating = false;
        if (owl[0]){
        // this displays random name and splices it out of array
        background(random(212, 180, 209));
        randomIndex = int(random(owl.length));
        text(`${owl[randomIndex].name}'s theme color is ${owl[randomIndex].color}`, 50, 50);
        //text(owl[randomIndex].name + "'s theme color is " + owl[randomIndex].color, 50, 50);
        owl.splice(randomIndex, 1);
      } else {
        background(random(212, 180, 209));
        text("nothing left!", 50, 50)
      }
    }

    function mousePressed() {
      animating = true;
      setTimeout(randomizer, 2000);


    }
