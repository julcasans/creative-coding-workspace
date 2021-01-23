let angle = 0;
let bgColor = 0;
let timer = 200;
let nextTime = timer;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(bgColor);
  if (millis() > nextTime) {
    bgColor += 20;
    nextTime = millis() + timer;
  }
  push();
  translate(mouseX, mouseY);
  rotate(radians(angle));
  scale(map(mouseX, 0, windowWidth, 0, 5));
  line(-50, -50, 50, 50);
  line(50, -50, -50, 50);
  angle++;
  pop();
}
