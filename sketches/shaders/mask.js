let maskShader;
let img;
let video_src;
let video_on;
let mask;

function preload() {
  video_src = createVideo(['/VisualComputing/sketches/shaders/images/mandrill.webm']);
  video_src.hide(); // by default video shows up in separate dom
  maskShader = readShader('/VisualComputing/sketches/shaders/mask.frag', { varyings: Tree.texcoords2 });
  img = loadImage('/VisualComputing/sketches/shaders/images/leaves.jpg');
 
}

function setup() {
  // shaders require WEBGL mode to work
  createCanvas(650, 500, WEBGL);
  noStroke();
  textureMode(NORMAL);
  video_on = createCheckbox('video', false);
  video_on.style('color', 'white');
  
  video_on.changed(() => {
    if (video_on.checked()) {
      maskShader.setUniform('texture', video_src);
      video_src.loop();
    } else {
      maskShader.setUniform('texture', img);
      video_src.pause();
    }
  });
  video_on.position(10, 30);
  //Adding kernels Checkboxes
  mask = createCheckbox('Ridges', false);
  mask.position(10, 10);
  mask.style('color', 'white');

  //Checkboxes above
  shader(maskShader);
  maskShader.setUniform('texture', img);
  emitTexOffset(maskShader, img, 'texOffset');
}

function draw() {
  background(0);
  if (mask.checked()) {
    maskShader.setUniform('mask', [-1, -1, -1, -1, 8, -1, -1, -1, -1]);
  }
  else {
    maskShader.setUniform('mask', [0, 0, 0, 0, 1, 0, 0, 0, 0]);
  }
  quad(-width / 2, -height / 2, width / 2, -height / 2, width / 2, height / 2, -width / 2, height / 2);
  push();
  stroke(255,0,0);
  noFill();
  pop(); 
}