let video;
let poseNet;
let pose;
let bubbleNose;
let bubbleRArm;
let bubbleLArm;
let bubbleREye;
let bubbleLEye;
let bubbleREar;
let bubbleLEar;
let bubbleRShoulder;



let bubbles = [];
let monoSynth;

//////////////////////////////////////////////

function setup() {
  createCanvas(600, 400);
  monoSynth = new p5.MonoSynth();

  //pose detection set up
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelReady);
  poseNet.on('pose', gotPoses);

  //ellipse set up
  bubbleNose = new Bubble(200, 200, 10, 10, 255);
  bubbleRArm = new Bubble(200, 200, 10, 10, 255);
  bubbleLArm = new Bubble(200, 200, 10, 10, 255);
  bubbleREye = new Bubble(200, 200, 10, 10, 255);
  bubbleLEye = new Bubble(200, 200, 10, 10, 255);
  bubbleREar = new Bubble(200, 200, 10, 10, 255);
  bubbleLEar = new Bubble(200, 200, 10, 10, 255);
  bubbleRShoulder = new Bubble(200, 200, 10, 10, 255);

  for (let i = 0; i <= 120; i++) {
    bubbles[i] = new Bubble(200, 200, 1, 30, 255);
  }
}

/////////////////////////////////////poseNet setup
function gotPoses(poses) {
  if (poses.length > 0) {
    pose = poses[0].pose;
    skeleton = poses[0].skeleton;
  }
}

function modelReady() {
  console.log('model ready');
}
//////////////////////////////////////////////////


function draw() {
  background(0);
  image(video, 0, 0);
  userStartAudio();

  if (pose) {

    ////////////////////circle component
    for (let i = 0; i <= 120; i++) {
      bubbles[i].show();
      bubbles[i].fall();

      if (bubbleNose.intersects(bubbles[i])) {
        background('rgba( 214,12,2 , 0.3 )');
        monoSynth.play('Eb4', 1, 0, 1 / 8);

      } else if (bubbleRArm.intersects(bubbles[i])) {
        background('rgba( 239,165,28 , 0.3 )');
        monoSynth.play('F4', 1, 0, 1 / 8);

      } else if (bubbleLArm.intersects(bubbles[i])) {
        background('rgba( 255,217,0 , 0.3)');
        monoSynth.play('G4', 1, 0, 1 / 8);

      } else if (bubbleREye.intersects(bubbles[i])) {
        background('rgba( 0,122,16 , 0.3 )');
        monoSynth.play('Ab4', 1, 0, 1 / 8);

      } else if (bubbleLEye.intersects(bubbles[i])) {
        background('rgba( 3,46,198 , 0.3)');
        monoSynth.play('Bb4', 1, 0, 1 / 8);

      } else if (bubbleREar.intersects(bubbles[i])) {
        background('rgba( 115,14,204 , 0.3)');
        monoSynth.play('C5', 1, 0, 1 / 8);

      } else if (bubbleLEar.intersects(bubbles[i])) {
        background('rgba( 115,14,204 , 0.3 )');
        monoSynth.play('D5', 1, 0, 1 / 8);

      } else if (bubbleRShoulder.intersects(bubbles[i])) {
        background('rgba( 28,21,27 , 0.3)');
        monoSynth.play('Eb5', 1, 0, 1 / 8);
      }
    }


    bubbleNose.show();
    bubbleNose.x = pose.nose.x;
    bubbleNose.y = pose.nose.y;

    bubbleRArm.show();
    bubbleRArm.x = pose.rightWrist.x;
    bubbleRArm.y = pose.rightWrist.y;

    bubbleLArm.show();
    bubbleLArm.x = pose.leftWrist.x;
    bubbleLArm.y = pose.leftWrist.y;

    bubbleREye.show();
    bubbleREye.x = pose.rightKnee.x;
    bubbleREye.y = pose.rightKnee.y;

    bubbleLEye.show();
    bubbleLEye.x = pose.leftKnee.x;
    bubbleLEye.y = pose.leftKnee.y;

    bubbleREar.show();
    bubbleREar.x = pose.rightEar.x;
    bubbleREar.y = pose.rightEar.y;

    bubbleLEar.show();
    bubbleLEar.x = pose.leftEar.x;
    bubbleLEar.y = pose.leftEar.y;

    bubbleRShoulder.show();
    bubbleRShoulder.x = pose.rightShoulder.x;
    bubbleRShoulder.y = pose.rightShoulder.y;



  }
}
