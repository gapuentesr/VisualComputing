let lumaShader;
let img;
let tool;

function preload() {
  lumaShader = readShader('/VisualComputing/sketches/shaders/texturing/brightness.frag', { varyings: Tree.texcoords2 });
  // image source: https://en.wikipedia.org/wiki/HSL_and_HSV#/media/File:Fire_breathing_2_Luc_Viatour.jpg
  img = loadImage('/VisualComputing/sketches/shaders/images/fire_breathing.jpg');
}

function setup() {
  createCanvas(700, 500, WEBGL);
  noStroke();
  textureMode(NORMAL);

  selTool = createSelect();
  selTool.option("Ninguno", 0);
  selTool.option("Luma", 1);
  selTool.option("HSL", 2);
  selTool.option("HSV", 3);
  selTool.option("Component avg", 4);
  selTool.changed(changeTool);

  selTool.position(580, 15);

  shader(lumaShader);
  lumaShader.setUniform('texture', img);
}

function draw() {
  background(0);
  quad(-width / 2, -height / 2, width / 2, -height / 2, width / 2, height / 2, -width / 2, height / 2);
}

function changeTool(){
  let tool = selTool.value();
  if(tool == 0){
    lumaShader.setUniform('tool', 0);
  } 
  else if(tool == 1){
    lumaShader.setUniform('tool', 1);
  }
  else if(tool == 2){
    lumaShader.setUniform('tool', 2);
  }
  else if(tool == 3){
    lumaShader.setUniform('tool', 3);
  }
  else if(tool == 4){
    lumaShader.setUniform('tool', 4);
  }
}