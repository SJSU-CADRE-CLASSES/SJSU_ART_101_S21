'use strict'
var video;
let whitenoise;

function preload() {
  whitenoise = loadSound('media/whitenoise.mp3');

}

function setup() {
  canvas = createCanvas(600, 350, WEBGL);
  background(51);
  canvas.id('p5canvas');
  video = createCapture(VIDEO);
  video.hide();
  video.size(600, 350);
  video.id('p5video');

  //whitenoise.loop();

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
