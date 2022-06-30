let pg;
let bicicleta;

function preload() {
  shaderOne = readShader('/VisualComputing/sketches/shaders/procedural_texturing/shader1.frag', { matrices: Tree.NONE, varyings: Tree.NONE});
  shaderTwo = readShader('/VisualComputing/sketches/shaders/procedural_texturing/shader2.frag', { matrices: Tree.NONE, varyings: Tree.NONE});
  shaderThree = readShader('/VisualComputing/sketches/shaders/procedural_texturing/shader3.frag', { matrices: Tree.NONE, varyings: Tree.NONE});
  shaderFour = readShader('/VisualComputing/sketches/shaders/procedural_texturing/shader4.frag', { matrices: Tree.NONE, varyings: Tree.NONE});
  shaderFive = readShader('/VisualComputing/sketches/shaders/procedural_texturing/shader5.frag', { matrices: Tree.NONE, varyings: Tree.NONE});
  shaderSix = readShader('/VisualComputing/sketches/shaders/procedural_texturing/shader6.frag', { matrices: Tree.NONE, varyings: Tree.NONE});
  shaderSeven = readShader('/VisualComputing/sketches/shaders/procedural_texturing/shader7.frag', { matrices: Tree.NONE, varyings: Tree.NONE});
  bicicleta = loadModel('/VisualComputing/sketches/shaders/procedural_texturing/Bicicleta.obj', true);

}

function setup() {
  createCanvas(380, 380, WEBGL);
  pg = createGraphics(380, 380, WEBGL);
  textureMode(NORMAL);
  noStroke();

  // select Shader
  selShader = createSelect();
  selShader.option('Maze');
  selShader.option('Mosaic');
  selShader.option('Circles');
  selShader.option('Truchet1');
  selShader.option('Noise1');
  selShader.option('Truchet2');
  selShader.option('Noise2');
  selShader.changed(changeShader);

  let val = selShader.value();

  pg.noStroke();
  pg.textureMode(NORMAL);

  pg.shader(shaderOne);
  pg.emitResolution(shaderOne);
  shaderOne.setUniform('u_zoom', 3);

  pg.quad(-1, -1, 1, -1, 1, 1, -1, 1);
  texture(pg);
}

function draw() {
  orbitControl();
  background(200);
  scale(0.7);

  //rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  rotateZ(frameCount * 0.01);

  model(bicicleta);
}

function changeShader(){
  let val = selShader.value();
  if(val == 'Maze'){
    pg.shader(shaderOne);
    pg.emitResolution(shaderOne);
    shaderOne.setUniform('u_zoom', 3);
    pg.quad(-1, -1, 1, -1, 1, 1, -1, 1);
    texture(pg);
  } 
  else if(val == 'Mosaic'){
    pg.shader(shaderFive);
    pg.emitResolution(shaderFive);
    shaderFive.setUniform('u_zoom', 3);
    pg.quad(-1, -1, 1, -1, 1, 1, -1, 1);
    texture(pg);
  }
  else if(val == 'Circles'){
    pg.shader(shaderTwo);
    pg.emitResolution(shaderTwo);
    shaderTwo.setUniform('u_zoom', 3);
    pg.quad(-1, -1, 1, -1, 1, 1, -1, 1);
    texture(pg);
  }
  else if(val == 'Truchet1'){
    pg.shader(shaderThree);
    pg.emitResolution(shaderThree);
    shaderThree.setUniform('u_zoom', 3);
    pg.quad(-1, -1, 1, -1, 1, 1, -1, 1);
    texture(pg);
  } 

  else if(val == 'Noise1'){
    pg.shader(shaderSix);
    pg.emitResolution(shaderSix);
    shaderSix.setUniform('u_zoom', 3);
    pg.quad(-1, -1, 1, -1, 1, 1, -1, 1);
    texture(pg);
  } 

  else if(val == 'Truchet2'){
    pg.shader(shaderFour);
    pg.emitResolution(shaderFour);
    shaderFour.setUniform('u_zoom', 3);
    pg.quad(-1, -1, 1, -1, 1, 1, -1, 1);
    texture(pg);
  }

  else if(val == 'Noise2'){
    pg.shader(shaderSeven);
    pg.emitResolution(shaderSeven);
    shaderSeven.setUniform('u_zoom', 3);
    pg.quad(-1, -1, 1, -1, 1, 1, -1, 1);
    texture(pg);
  }
}