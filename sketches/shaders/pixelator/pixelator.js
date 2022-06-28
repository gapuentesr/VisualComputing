let lumaShader;
let img;

function preload() {
  lumaShader = readShader('/VisualComputing/sketches/shaders/mask_pixelator.frag', { varyings: Tree.texcoords2 });
  // image source: https://en.wikipedia.org/wiki/HSL_and_HSV#/media/File:Fire_breathing_2_Luc_Viatour.jpg
  img = loadImage('/VisualComputing/sketches/shaders/images/lion.jpg');
}

function setup() {
  createCanvas(290, 290, WEBGL);
  noStroke();
  textureMode(NORMAL);
  shader(lumaShader);
  lumaShader.setUniform('texture', img);
}

function draw() {
  background(0);
  quad(-width / 2, -height / 2, width / 2, -height / 2, width / 2, height / 2, -width / 2, height / 2);
}