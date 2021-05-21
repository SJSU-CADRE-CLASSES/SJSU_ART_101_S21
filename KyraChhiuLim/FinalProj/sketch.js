'use strict'
var video;
let whitenoise;
let combined;

function preload() {
  whitenoise = loadSound('media/whitenoise.mp3');
  combined = loadSound('media/combined.mp3');
}

function setup() {
  canvas = createCanvas(600, 350, WEBGL);
  background(51);
  canvas.id('p5canvas');
  video = createCapture(VIDEO);
  video.hide();
  video.size(600, 350);
  video.id('p5video');

  whitenoise.loop();
  combined.loop();

  let seriously = new Seriously();
  var src = seriously.source('#p5video');
  var target = seriously.target('#p5canvas');

  var nightvision = seriously.effect('nightvision');
  nightvision.source = src;
  target.source = nightvision;


  seriously.go();
}

function touchStarted() {
  getAudioContext().resume()
}
