'use strict'
var video;

function setup() {
  canvas = createCanvas(640, 350, WEBGL);
  canvas.id('p5canvas');
  video = createCapture(VIDEO);
  video.hide();
  video.size(640, 350);
  video.id('p5video');


  let seriously = new Seriously();
  var src = seriously.source('#p5video');
  var target = seriously.target('#p5canvas');

  var nightvision = seriously.effect('nightvision');
  nightvision.source = src;
  target.source = nightvision;


  seriously.go();
}
