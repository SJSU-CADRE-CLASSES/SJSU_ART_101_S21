//------LET DRAW SUNFLOWER TO SHINE MY LIFE-------//

let t;
const frames = 5000;

function setup() {
  const size = min(window.innerWidth, window.innerHeight);
  // createCanvas(size, size);
  createCanvas(width * 5, height * 5);
  noStroke();
  colorMode(RGB, 1);
}

function cosn(v) {
  return cos(v * TWO_PI) * 0.5 + 0.5;
}

function invCosn(v) {
  return 1 - cosn(v);
}
//Refeferen site: https://www.invisionapp.com/inside-design/golden-ratio-designers/
const radius = Math.sqrt(0.5); //--Draw the length of radius from center to edge of canvas.
const dotSize = 0.2; //--Set the initial circle size.
const PHI = (1 + Math.sqrt(5)) / 2; //--Draw the golden ratio formula ( PHI = 1+squareroot(5) /2 ).

function draw() {
  scale(width, height);
  t = mouseX / width;
  t = mouseY / height;

  // t = fract(frameCount / frames);
  background(0);

  const count = 1000 * invCosn(t); //--ZOOM OUT and inverse the animation
  for (let i = 1; i < count; i++) {
    // circle manipulated the spiral outward
    const f = i / count; //fraction
    const angle = i * PHI;
    const dist = f * radius;

    const x = 0.5 + cos(angle * TWO_PI) * dist;
    const y = 0.5 + sin(angle * TWO_PI) * dist;

    const sig = pow(cosn(f - t * 6), 2);
    const r = f * sig * dotSize;

    const hue = fract(t + f * 0.5);
    const sat = 1;
    const light = 0.6 * sig + 0.25;
    const clr = color(hue, sat, light);
    fill(clr);

    rect(x, y, r);

  }
}

////---------------------------CAPTURE FAV PATTERN--------------------------///
function keyTyped() {
  //Save canvas to file name
  if (key === 's') {
    //save current drawing
    saveCanvas('WOOHOO, NICE PATTERN', 'png');

  } else if (key === 'd') {
    //display image
    background(200);

    beginShape();
    for (var i = 0; i < array.length; i++) {
      // line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
      curveVertex(array[i][0], array[i][1]);
    }
    endShape();
  } else if (key === 'c') {
    clear();
    // drawGrid();
  }
  return false;
}
