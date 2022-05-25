let colorKeypoints;
let colorSkeleton;
let depth;
let brush;

let easycam;
let state;

let escorzo;
let points;
let record;

//Variables PoseNet
let video;
let poseNet;
let pose;
let skeleton;


function setup() {
  createCanvas(640, 480, WEBGL);
  // easycam stuff
  let state = {
    distance: 250,           // scalar
    center: [0, 0, 0],       // vector
    rotation: [1, 0, 0, 0],  // quaternion
  };
  easycam = createEasyCam();
  easycam.state_reset = state;   // state to use on reset (double-click/tap)
  easycam.setState(state, 2000); // now animate to that state
  escorzo = true;
  perspective();

  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);

  // brush stuff
  points = [];
  depth = createSlider(0, 1, 0.05, 0.05);
  depth.position(10, 10);
  depth.style('width', '580px');
  colorKeypoints = createColorPicker('#ed225d');
  colorSkeleton = createColorPicker('#ffffff');
  colorKeypoints.position(width - 70, 40);
  colorSkeleton.position(width - 70, 70);
  // select initial brush
  brush = sphereBrush;
}

//Captura Poses
function gotPoses(poses) {
  if (poses.length > 0) {
    pose = poses[0].pose;
    skeleton = poses[0].skeleton;
  }
}

//Mensaje de carga del modelo
function modelLoaded() {
  console.log('Modelo PoseNet cargado y listo');
}


function draw() {
  update();
  background(120);
  push();
  strokeWeight(0.8);
  stroke('magenta');
  grid({ dotted: false });
  pop();
  axes();
  for (const point of points) {
    push();
    translate(point.worldPosition);
    brush(point);
    pop();
  }

  image(video, -300, -300);

  if (pose) {
    for (let i = 0; i < pose.keypoints.length; i++) {
      let x = pose.keypoints[i].position.x - 300;
      let y = pose.keypoints[i].position.y - 300;
      fill(colorKeypoints.color());
      ellipse(x, y, 10, 10);
    }

    for (let i = 0; i < skeleton.length; i++) {
      let a = skeleton[i][0];
      let b = skeleton[i][1];
      strokeWeight(2);
      stroke(colorSkeleton.color());
      line(a.position.x - 300, a.position.y - 300, b.position.x - 300, b.position.y - 300);
    }
  }
}

function update() {
  let dx = abs(mouseX - pmouseX);
  let dy = abs(mouseY - pmouseY);
  speed = constrain((dx + dy) / (2 * (width - height)), 0, 1);
  if (record) {
    points.push({
      worldPosition: treeLocation([mouseX, mouseY, depth.value()], { from: 'SCREEN', to: 'WORLD' }),
      colorKeypoints: colorKeypoints.color(),
      speed: speed
    });
  }
}

function sphereBrush(point) {
  push();
  noStroke();
  // TODO parameterize sphere radius and / or
  // alpha channel according to gesture speed
  fill(point.colorKeypoints);
  sphere(1);
  pop();
}

function keyPressed() {
  if (key === 'r') {
    record = !record;
  }
  if (key === 'p') {
    escorzo = !escorzo;
    escorzo ? perspective() : ortho();
  }
  if (key == 'c') {
    points = [];
  }
}

function mouseWheel(event) {
  //comment to enable page scrolling
  return false;
}