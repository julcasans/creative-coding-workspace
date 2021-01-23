let angle = 0;
let offset = 400;
let scalar = 40;
let speed = 0.05;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(0);
}

function draw() {
  background(255);

  let y1 = offset + sin(angle) * scalar;
  let y2 = offset + sin(angle + 0.4) * scalar;
  let y3 = offset + sin(angle + 0.18) * scalar;

  ellipse(50, y1, 100, 100);
  ellipse(150, y2, 100, 100);
  ellipse(250, y3, 100, 100);

  angle += speed;
}
