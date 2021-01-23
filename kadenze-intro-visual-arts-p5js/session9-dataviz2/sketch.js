let mouseXPositions = [];
let current = 0;
let total = 10;

function setup() {
  createCanvas(900, 600);
}

function draw() {
  background(0);
  stroke(255);
  for (let i = 0; i < mouseXPositions.length; i++) {
    line(mouseXPositions[i], 0, mouseXPositions[i], height);
  }

  mouseXPositions[current] = mouseX;
  current = (current + 1) % total;
}
