var video;
var song;
var spart;
var vScale = 12;
var randomColor;
var city;
function preload() {
    song = loadSound('LetsGoUp.mp3');
    city = loadImage('pixelcity.jpg');
}

function setup() {
  createCanvas(1260, 720);
  song.play();
  song.setVolume(0.1);
pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width/vScale, height/vScale);
  video.hide();
}

function draw() {
    background(city);
  randomColor = color(random(255),random(255),random(255));
  image(video, 0, 0);


  // noStroke();

  video.loadPixels();
loadPixels();

for(var y = 0; y < video.height; y++){

  for(var x = 0; x < video.width; x++){

    var index = (x + y * video.width)*4;
    var r = video.pixels[index+0];
    var g = video.pixels[index+1];
    var b = video.pixels[index+2];


    var bright = (r+g+b)/3

    var threshold = 70;
if (bright > threshold){
          fill(0);

    }else {
      fill(randomColor);
    }
    // fill(bright);
    rect(x*vScale, y*vScale, vScale, vScale);
  }
}

}
function keyTyped() {

  if (key === 's') {
    // save image
    saveCanvas('fileName', 'png')
  }
}
