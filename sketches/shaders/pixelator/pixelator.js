let pixelatorShader;
let img;

function preload() {
  pixelatorShader = readShader('/VisualComputing/sketches/shaders/pixelator/mask.frag', { varyings: Tree.texcoords2 });
  img = loadImage('/VisualComputing/sketches/shaders/images/lion.jpg');
}

function setup() {
  createCanvas(640, 500, WEBGL);
  noStroke();
  textureMode(NORMAL);
  shader(pixelatorShader);
  pixelatorShader.setUniform('texture', img);

  size = createSlider(1, 500, 100, 5);
  size.style('width', '500px');
  size.position(70, 490);
}

function draw() {
  background(0);
  pixelatorShader.setUniform('size', size.value());
  quad(-width / 2, -height / 2, width / 2, -height / 2, width / 2, height / 2, -width / 2, height / 2);
}