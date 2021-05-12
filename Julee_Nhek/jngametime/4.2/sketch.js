let video;
let poseNet;
let pose;
let skeleton;
var img;
var frenchbulldog;


function setup() {
  createCanvas(600, 600);
  
  frenchbulldog = loadImage('frenchie.png');

  
  video = createCapture(VIDEO);
  
  video.hide();
  
  poseNet = ml5.poseNet(video, modelLoaded);
  
  poseNet.on('pose', gotPoses);
}

function gotPoses(poses) {
  console.log(poses);
  if (poses.length > 0) {
    pose = poses[0].pose;
    skeleton = poses[0].skeleton;
  }
}

function mousePressed() {
  img.resize(5, 5);
}

function modelLoaded() {
  console.log('poseNet ready');
}

function draw() {
  image(video, 0, 0);

  if (pose){
  
  let eyeR = pose.rightEye;
  let eyeL = pose.leftEye;
  
  let d = dist(eyeR.x, eyeR.y, eyeL.x, eyeL.y);  
    
  
  
  
  // fill(187,193,208);
  image(frenchbulldog,pose.nose.x, pose.nose.y, d);
    
  // fill(214,213,221);
  // image(frenchbulldog,pose.rightWrist.x, pose.rightWrist.y, 32);
  // image(frenchbulldog,pose.leftWrist.x, pose.leftWrist.y, 32);
    
  for (let i = 0; i < pose.keypoints.length; i++){
    let x = pose.keypoints[i].position.x;
    let y = pose.keypoints[i].position.y;
    fill(245,229,233);
    ellipse(x, y, 20, 20);
  }
  
    for (let i = 0; i < skeleton.length; i++){
      let a = skeleton[i][0];
      let b = skeleton[i][1];
      noStroke();
      line(a.position.x, a.position.y, b.position.x, b.position.y);
      
    }
  
}


  

}








