let angleOffsetA;
let angleOffsetB;
let dotSize = 9;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  fill(0);
  frameRate(1);

  angleOffsetA = radians(1.5);
  angleOffsetB = radians(50);
}

function draw() {
  background(220);
  seed1(dotSize, radians(270), width / 2, height / 2);
}

function seed1(dotSize, angle, x, y) {
  if (dotSize > 1.0) {
    let r = random(0, 1.0);
    if (r >= 0.02) {
      ellipse(x, y, dotSize, dotSize);
      let newX = x + cos(angle) * dotSize;
      let newY = y + sin(angle) * dotSize;
      seed1(dotSize * 0.99, angle - angleOffsetA, newX, newY);
    } else {
      ellipse(x, y, dotSize, dotSize);
      let newX = x + cos(angle);
      let newY = y + sin(angle);
      seed2(dotSize * 0.99, angle + angleOffsetA, newX, newY);
      seed1(dotSize * 0.6, angle + angleOffsetB, newX, newY);
      seed2(dotSize * 0.5, angle - angleOffsetB, newX, newY);
    }
  }
}

function seed2(dotSize, angle, x, y) {
  if (dotSize > 1.0) {
    let r = random(0, 1.0);

    if (r > 0.05) {
      ellipse(x, y, dotSize, dotSize);
      let newX = x + cos(angle) * dotSize;
      let newY = y + sin(angle) * dotSize;
      seed2(dotSize * 0.99, angle + angleOffsetA, newX, newY);
    } else {
      ellipse(x, y, dotSize, dotSize);
      let newX = x + cos(angle) * dotSize;
      let newY = y + sin(angle) * dotSize;
      seed1(dotSize * 0.99, angle + angleOffsetA, newX, newY);
      seed2(dotSize * 0.6, angle + angleOffsetB, newX, newY);
      seed1(dotSize * 0.5, angle - angleOffsetB, newX, newY);
    }
  }
}

function mousePressed() {
  background(255, 45);
  seed1(dotSize, radians(270), mouseX, height);
}
