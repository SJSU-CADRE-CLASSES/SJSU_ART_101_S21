
var axiom = "F";
var sentences = [];
var rules = [];
rules[0] = {
  a: "F",
  b: "FF+[+F-F-F]-[-F+F+F]"
}

var trees = [];

class Tree {
  constructor (x, y, s, age) {
    this.x = x;
    this.y = y;
    this.s = s;
    this.angle = random(20, 40);
    this.color = [random(50, 100), random(180), random(50, 70)];
    this.age = 3;
  }

  display() {
      var sentence;
      sentence = sentences[this.age];
      //console.log(`age=${this.age}`);
      push();
      angleMode(DEGREES);
      translate(this.x, this.y);
      stroke(this.color);
      strokeWeight(5);

      for (let i=0; i<sentence.length; i++){
        var current = sentence.charAt(i);
        switch(current) {
          case "F": line(0, 0, 0, -this.s);
            translate(0,-this.s); break;
          case "+": rotate(this.angle); break;
          case "-": rotate(-this.angle); break;
          case "[": push(); break;
          case "]": pop(); break;
          default: break;
        }
      }
      pop();
    }
}

function generate(sentence) {
  var nextSentence = "";
  for (let i=0; i < sentence.length; i++) {
    var current = sentence.charAt(i);
    var found = false;
    for (let j=0; j < rules.length; j++) {
      if (current == rules[j].a) {
        found = true;
        nextSentence += rules[j].b;
        break;
      }
    }
    if (!found) {
      nextSentence += current;
    }

  }
  sentence = nextSentence;
  //createP(sentence);
  return nextSentence;
}

function tree_setup() {
  sentences.push(axiom);
  //createP(axiom);
  for (i=0; i<3; i++) {
    nextSentence = generate(sentences[i]);
    //createP(nextSentence);
    sentences.push(nextSentence);
  }

  w = windowWidth;
  h = windowHeight;

  //trees in the back
  trees.push(new Tree(w*0.35, h*0.3, 10));
  trees.push(new Tree(w*0.65, h*0.3, 10));

  //trees in the front
  trees.push(new Tree(w*0.2, h*0.55, 13));
  trees.push(new Tree(w*0.5, h*0.6, 15));
  trees.push(new Tree(w*0.8, h*0.55, 13));
}

function tree_display() {
  for (let i=0; i<trees.length; i++) {
    trees[i].display();
  }
}
