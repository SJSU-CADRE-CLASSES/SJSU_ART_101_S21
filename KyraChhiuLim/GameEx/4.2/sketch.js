
let video;
let poseNet;
let pose;

function setup() {
  createCanvas(640, 350);
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoad);
  poseNet.on('pose', gotPoses);

}

function gotPoses(poses){
  if (poses.length > 0){
    pose = poses[0].pose;
    skeleton = poses[0].skeleton;

  }

}

function modelLoad(){
  console.log('poseNet ready');
}


function draw() {
  image(video, 0,0);

  if (pose){
    let eyeR = pose.rightEye;
    let eyeL = pose.leftEye;
    let d = dist(eyeR.x, eyeR.y, eyeL.x, eyeL.y);
    fill (255, 0, 200);
    ellipse(pose.nose.x,pose.nose.y, d);

    fill(0,0,255)
    ellipse(pose.rightWrist.x, pose.rightWrist.y, 32);
    ellipse(pose.leftWrist.x, pose.leftWrist.y, 32);

    for (let i = 0; i < pose.keypoints.length; i++){
      let x = pose.keypoints[i].position.x;
      let y = pose.keypoints[i].position.y;
      fill (0,250,0);
      ellipse (x,y,16,16);

    for (let i= 0; i < skeleton.length; i++){
      let a= skeleton [i][0];
      let b = skeleton [i][1];
      strokeWeight(2);
      stroke(255);
      line(a.position.x, a.position.y, b.position.x, b.position.y)
    }

    }

  }
}
