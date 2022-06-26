let easycam;
let uvShader;
let blue;

function preload() {
  // Define geometry in world space (i.e., matrices: Tree.pmvMatrix).
  // The projection and modelview matrices may be emitted separately
  // (i.e., matrices: Tree.pMatrix | Tree.mvMatrix), which actually
  // leads to the same gl_Position result.
  // Interpolate only texture coordinates (i.e., varyings: Tree.texcoords2).
  // see: https://github.com/VisualComputing/p5.treegl#handling
  uvShader = readShader('/VisualComputing/sketches/shaders//texturing/blue_uv.frag', { matrices: Tree.pmvMatrix, varyings: Tree.texcoords2 });
}

function setup() {
  createCanvas(276, 276, WEBGL);
  textureMode(NORMAL);
  // use custom shader
  shader(uvShader);
  //Slider
  blue = createSlider(0, 1, 0.5, 0.01);
  blue.style('width', '276px');
  blue.position(6, 290);
}

function draw() {
  background(200);
  orbitControl();
  axes();
  push();
  noStroke();
  // world-space quad (i.e., p5 world space definition: https://shorturl.at/dhCK2)
  //quad(-width / 2, -height / 2, width / 2, -height / 2, width / 2, height / 2, -width / 2, height / 2);
  circle(0, 0, 245);
  //triangle(-100, 100, 100, 100, 0, -100);
  pop();
  uvShader.setUniform('blue', blue.value());
}

function mouseWheel(event) {
  //comment to enable page scrolling
  return false;
}