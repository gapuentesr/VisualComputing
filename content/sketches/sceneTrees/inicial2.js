let angle = 0;

function setup() {
  createCanvas(500, 500, WEBGL);
}

function draw() {
  background(255, 255, 255);

  fill(91, 51, 18);
  translate(mouseX - width/2, mouseY - height/2);

  rotateX(angle * 0.4);
  rotateY(angle * 0.9);
  rotateZ(angle);

  torus(90, 45);

  angle += 0.07
}