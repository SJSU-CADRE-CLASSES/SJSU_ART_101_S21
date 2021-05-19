let video;
let poseNet;
let pose;
let skeleton;
var img;
var pearl;

function setup() {
  createCanvas(600, 500);
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelReady);
  poseNet.on('pose', gotPoses);

  pearl = loadImage('pearl1.png');
}

function gotPoses(poses) {
  if (poses.length > 0) {
    pose = poses[0].pose;
    skeleton = poses[0].skeleton;
  }
}

function modelReady() {
  console.log('model ready');
}

function draw() {

  image(video, 0, 0);

  // let d = dist(noseX, noseY, eyelX, eyelY);

  if (pose) {
    let eyeR = pose.rightEye;
    let eyeL = pose.leftEye;
    let d = dist(eyeR.x, eyeR.y, eyeL.x, eyeL.y);


    // imageMode(CENTER);


//     ellipse(pose.rightWrist.x, pose.rightWrist.y, 32,32);
//     ellipse(pose.leftWrist.x, pose.leftWrist.y, 32,32);

    for (let i = 0; i < pose.keypoints.length; i++) {
      let x = pose.keypoints[i].position.x;
      let y = pose.keypoints[i].position.y;
      fill (0,255,0);
      ellipse(x,y,16,16);
    }

    for (let i = 0; i < skeleton.length; i++){
      let a = skeleton[i][0];
      let b = skeleton[i][1];
      strokeWeight(3);
      stroke(255);
      line(a.position.x, a.position.y, b.position.x, b.position.y);
    }

      image(pearl, pose.nose.x-50, pose.nose.y-50, d);
  }




}
