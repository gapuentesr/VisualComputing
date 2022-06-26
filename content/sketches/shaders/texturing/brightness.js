let brightnessShader;
let img;
let grey_scale;

function preload() {
  brightnessShader = readShader('/VisualComputing/sketches/shaders/texturing/brightness.frag', { varyings: Tree.texcoords2 });
  // image source: https://en.wikipedia.org/wiki/HSL_and_HSV#/media/File:Fire_breathing_2_Luc_Viatour.jpg
  img = loadImage('/VisualComputing/sketches/shaders/images/fire_breathing.jpg');
}

function setup() {
  createCanvas(700, 500, WEBGL);
  noStroke();
  textureMode(NORMAL);
  shader(brightnessShader);
  grey_scale = createCheckbox('luma', false);
  grey_scale.position(10, 10);
  grey_scale.style('color', 'white');
  grey_scale.input(() => brightnessShader.setUniform('grey_scale', grey_scale.checked()));
  brightnessShader.setUniform('texture', img);
}

function draw() {
  background(0);
  quad(-width / 2, -height / 2, width / 2, -height / 2, width / 2, height / 2, -width / 2, height / 2);
}