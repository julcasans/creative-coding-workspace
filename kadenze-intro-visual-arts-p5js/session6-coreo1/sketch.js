let angle = 0.0;
let speed = 0.05;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(0);
  strokeWeight(20);
}

function draw() {
  let l0 = map(mouseX, 0, width, 10, 300);
  let l1 = map(mouseX, 0, width, 10, 300);
  background(220);

  translate(width / 2, height / 2);
  rotate(angle);
  line(0, 0, 0, l0);

  translate(0, l0);
  rotate(angle);
  line(0, 0, 0, l1);

  translate(0, l1);
  rotate(angle);
  line(0, 0, 0, 50);

  angle += speed;
}
