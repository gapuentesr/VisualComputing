// texture
let img;
// check boxes
let toggle_3d_gui;
let auto_rotate;
// select
let mode;
// 3d gui
let color1;
let color2;

let easycam;
let foreshortening = true;

// bulls shape
let circled = false;

// resume animation
let frames = 0;

// spaces
let sphere1;
let sphere2;

function preload() {
  img = loadImage('/sketches/shaders/fire_breathing.jpg');
}

function setup() {
  createCanvas(600, 450, WEBGL);
  textureMode(NORMAL);
  toggle_3d_gui = createCheckbox('toggle 3d gui', true);
  toggle_3d_gui.style('color', 'yellow');
  toggle_3d_gui.position(10, 10);
  toggle_3d_gui.changed(() => {
    if (toggle_3d_gui.checked()) {
      color1.show();
      color2.show();
    }
    else {
      color1.hide();
      color2.hide();
    }
  });
  auto_rotate = createCheckbox('auto rotate', true);
  auto_rotate.style('color', 'magenta');
  auto_rotate.position(10, 30);
  mode = createSelect();
  mode.position(10, 60);
  mode.option('Fill');
  mode.option('Wiredframe');
  mode.option('Texture');
  mode.value('Texture');
  color1 = createColorPicker('cyan');
  color2 = createColorPicker('magenta');
  easycam = createEasyCam();
  let state = {
    distance: 250,           // scalar
    center: [0, 0, 0],       // vector
    rotation: [0, 0, 0, 1],  // quaternion
  };
  easycam.setState(state, 1000); // animate to state over the period of 1 second
}

function draw() {
  background(100);
  push();
  strokeWeight(2);
  stroke('orange');
  grid();
  pop();
  axes();
  rotateZ(frames * 0.01);
  rotateX(frames * 0.01);
  rotateY(frames * 0.01);
  if (auto_rotate.checked()) {
    frames++;
  }
  axes(30);
  push();
  switch (mode.value()) {
    case 'Fill':
      fill(255, 0, 0);
      break;
    case 'Wiredframe':
      noFill();
      stroke(0, 255, 255);
      break;
    default:
      noStroke();
      texture(img);
  }
  cylinder(20, 90);
  pop();
  push();
  translate(-70, 50);
  rotateY(frames * 0.01);
  sphere1 = mMatrix();
  axes(30);
  noStroke();
  fill(color1.color());
  sphere(15);
  pop();
  push();
  translate(70, -50);
  rotateZ(frames * 0.01);
  sphere2 = mMatrix();
  axes(30);
  noStroke();
  fill(color2.color());
  sphere(15);
  pop();
  if (toggle_3d_gui.checked()) {
    let sphere1Projection = treeLocation([0, 0, 0], { from: sphere1, to: 'SCREEN' });
    beginHUD();
    color1.position(sphere1Projection.x, sphere1Projection.y);
    endHUD();
    let sphere2Projection = treeLocation([0, 0, 0], { from: sphere2, to: 'SCREEN' });
    beginHUD();
    color2.position(sphere2Projection.x, sphere2Projection.y);
    endHUD();
  }
}

function keyPressed() {
  if (key === 'b') {
    circled = !circled;
  }
  if (key === 'p') {
    foreshortening = !foreshortening;
    foreshortening ? perspective() : ortho();
  }
}

function mouseWheel(event) {
  //comment to enable page scrolling
  return false;
}