let maskShader;
let img;
let video_src;
let video_on;
let mask;

function preload() {
  video_src = createVideo(['/VisualComputing/sketches/shaders/images/mandrill.webm']);
  video_src.hide(); // by default video shows up in separate dom
  maskShader = readShader('/VisualComputing/sketches/shaders/image_processing/mask.frag', { varyings: Tree.texcoords2 });
  img = loadImage('/VisualComputing/sketches/shaders/images/lion.jpg');
}

function setup() {
  // shaders require WEBGL mode to work
  createCanvas(650, 500, WEBGL);
  noStroke();
  textureMode(NORMAL);
  video_on = createCheckbox('Video', false);
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
  video_on.position(580, 15);

  //Adding kernels Checkboxes
  selMask = createSelect();
  selMask.option("Identity", 0);
  selMask.option("Ridges", 1);
  selMask.option("Sharpen", 2);
  selMask.option("Blur", 3);
  selMask.option("Brightness", 4);
  selMask.changed(changeMask);

  selMask.position(20, 15);

  //Checkboxes above
  shader(maskShader);
  maskShader.setUniform('texture', img);
  maskShader.setUniform('mask', [0, 0, 0, 0, 1, 0, 0, 0, 0]);
  emitTexOffset(maskShader, img, 'texOffset');
}

function draw() {
  background(0);
  quad(-width / 2, -height / 2, width / 2, -height / 2, width / 2, height / 2, -width / 2, height / 2);
  push();
  stroke(255,0,0);
  noFill();
  pop(); 
}

function changeMask(){
  let mask = selMask.value();

  if(mask == 0){
    maskShader.setUniform('mask', [0, 0, 0, 0, 1, 0, 0, 0, 0]);
  } 
  else if(mask == 1){
    maskShader.setUniform('mask', [-1, -1, -1, -1, 8, -1, -1, -1, -1]);
  }
  else if(mask == 2){
    maskShader.setUniform('mask', [0, -1, 0, -1, 5, -1, 0, -1, 0]);
  }
  else if(mask == 3){
    maskShader.setUniform('mask', [1/9, 1/9, 1/9, 1/9, 1/9, 1/9, 1/9, 1/9, 1/9]);
  }
  if(mask == 4){
    maskShader.setUniform('mask', [1, 1, 1, 1, 1, 1, 1, 1, 1]);
  }
}