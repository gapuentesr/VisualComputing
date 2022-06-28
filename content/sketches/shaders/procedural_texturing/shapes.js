let pg;
let truchetShader;

function preload() {
  shaderOne = readShader('/VisualComputing/sketches/shaders/procedural_texturing/shader1.frag', { matrices: Tree.NONE, varyings: Tree.NONE});
  shaderTwo = readShader('/VisualComputing/sketches/shaders/procedural_texturing/shader2.frag', { matrices: Tree.NONE, varyings: Tree.NONE});
  shaderThree = readShader('/VisualComputing/sketches/shaders/procedural_texturing/shader3.frag', { matrices: Tree.NONE, varyings: Tree.NONE});
  shaderFour = readShader('/VisualComputing/sketches/shaders/procedural_texturing/shader4.frag', { matrices: Tree.NONE, varyings: Tree.NONE});
  shaderFive = readShader('/VisualComputing/sketches/shaders/procedural_texturing/shader5.frag', { matrices: Tree.NONE, varyings: Tree.NONE});
  shaderSix = readShader('/VisualComputing/sketches/shaders/procedural_texturing/shader6.frag', { matrices: Tree.NONE, varyings: Tree.NONE});
  shaderSeven = readShader('/VisualComputing/sketches/shaders/procedural_texturing/shader7.frag', { matrices: Tree.NONE, varyings: Tree.NONE});
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

  //Select 3D Shape
  selShape= createSelect();
  selShape.option('Box');
  selShape.option('Sphere');
  selShape.option('Cylinder');
  selShape.option('Cone');
  selShape.option('Ellipsoid');
  selShape.option('Torus');

  pg.noStroke();
  pg.textureMode(NORMAL);

  let val = selShader.value();

  pg.shader(shaderOne);
  pg.emitResolution(shaderOne);
  shaderOne.setUniform('u_zoom', 3);

  pg.quad(-1, -1, 1, -1, 1, 1, -1, 1);
  texture(pg);
}

function draw() {
  orbitControl();
  let shape = selShape.value();

  background(255,255,100);

  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);

  if (shape == 'Box'){
    box(150);
  }
  else if (shape == 'Sphere'){
    sphere(120);
  }
  else if (shape == 'Cylinder'){
    cylinder(80, 170);
  }
  else if (shape == 'Cone'){
    cone(100, 190);
  }
  else if (shape == 'Ellipsoid'){
    ellipsoid(90, 120, 120);
  }
  else if (shape == 'Torus'){
    torus(90, 45);
  }
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