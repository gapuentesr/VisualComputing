let angle = 0;

function setup() {
  createCanvas(500, 500, WEBGL);
}

function draw() {
  background(255, 255, 255);
  
  rectMode(CENTER);
  noStroke();

  "Rojo: Rotación eje X"
  push();
  fill(255, 0, 0);
  rotateX(angle);
  rect(0, 0, 80, 80);
  pop();

  "Azul: Rotación eje Y"
  push();
  fill(0, 0, 255);
 
  rotateY(angle);
  rect(-100, 0, 80, 80);
  pop();

  "Amarillo: Rotación eje Z"
  push();
  fill(255, 255, 0);
  rotateZ(angle);
  rect(-200, 0, 80, 80);
  pop();

  angle += 0.07
}