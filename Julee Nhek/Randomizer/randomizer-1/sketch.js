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
    color: "sparkle"
    }];

    let randomIndex;


    function setup() {
      createCanvas(600, 600);
      background(220);
    }

    function draw(){

    }

    function mousePressed() {
      background(random(212, 180, 209))
      randomIndex = int(random(owl.length));
      text(owl[randomIndex].name, 50, 50);
      owl.splice(randomIndex, 1);
    }
