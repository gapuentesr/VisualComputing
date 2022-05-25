let img, 
colorFG = '#111111',
colorBG = '#f1f1f1';

function preload(){
	img = loadImage('/VisualComputing/sketches/rendering/images/star.png');
}

function setup() {
	createCanvas(300, 300);
	background(colorBG);
}

function draw() {
 background(colorBG);
 fill(colorFG);
 noStroke();
  const ratio = 300/300;
  let coefZ = (mouseX/width)*200;
  console.log(coefZ)
  console.log(mouseX)
  const tilesX = map(coefZ, 0, 300, 10, 100);
  const tilesY = ratio * tilesX;
  const tileSize = width / tilesX;
  for (let y = 0; y < img.height; y += tileSize) {
    for (let x = 0; x < img.width; x += tileSize) {
      let c = img.get(x, y);
      let b = map(brightness(c), 0, 255, 1, 0);
      push();
      translate(x, y);
      
      rect(0, 0, b * tileSize, b * tileSize);
      pop();
    }
  }
}