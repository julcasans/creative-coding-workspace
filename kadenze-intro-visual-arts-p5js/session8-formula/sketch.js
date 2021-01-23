let scaler = 200;

let c0, c1;

// let m = 2;
// let n1 = 18;
// let n2 = 1;
// let n3 = 1;

function setup() {
  createCanvas(1200, 600);
  noFill();
  stroke(255, 120);
  c0 = new Creature(width / 4, height / 2);
  c1 = new Creature((3 * width) / 4, height / 2);
}

function draw() {
  background(0);
  c0.detect();
  c0.display();
  c1.detect();
  c1.display();
}

function Creature(x, y) {
  this.x = x;
  this.y = y;
  this.m = random(1, 10);
  this.n1 = random(1, 100);
  this.n2 = random(1, 100);
  this.n3 = random(1, 100);
  this.hr = random(0.1, 0.2);
  this.sw = 1;

  this.display = function () {
    stroke(255, 127 + 127 * sin(frameCount * this.hr));
    strokeWeight(this.sw);
    drawShape(this.x, this.y, this.m, this.n1, this.n2, this.n3);
  };

  this.detect = function () {
    if (dist(mouseX, mouseY, this.x, this.y) < scaler) {
      this.sw = 5;
    } else {
      this.sw = 1;
    }
  };
}

function drawShape(x, y, m, n1, n2, n3) {
  push();
  translate(x, y);

  let newScaler = scaler;
  for (let s = 16; s > 0; s--) {
    beginShape();
    let mm = m + s;
    let nn1 = n1 + s;
    let nn2 = n2 + s;
    let nn3 = n3 + s;
    newScaler = newScaler * 0.98;
    let sscaler = newScaler;

    let points = superformula(mm, nn1, nn2, nn3);
    curveVertex(
      points[points.length - 1].x * sscaler,
      points[points.length - 1].y * sscaler
    );
    for (let i = 0; i < points.length; i++) {
      curveVertex(points[i].x * sscaler, points[i].y * sscaler);
    }
    curveVertex(points[0].x * sscaler, points[0].y * sscaler);
    endShape();
  }
  pop();
}

function superformula(m, n1, n2, n3) {
  let numPoints = 360;
  let phi = TWO_PI / numPoints;
  let points = [];
  for (let i = 0; i < numPoints; i++) {
    points[i] = superformulaPoint(m, n1, n2, n3, phi * i);
  }
  return points;
}

function superformulaPoint(m, n1, n2, n3, phi) {
  let r;
  let t1, t2;
  let a = 1,
    b = 1;
  let x = 0;
  let y = 0;

  t1 = cos((m * phi) / 4) / a;
  t1 = abs(t1);
  t1 = pow(t1, n2);

  t2 = sin((m * phi) / 4) / b;
  t2 = abs(t2);
  t1 = pow(t2, n3);

  r = pow(t1 + t2, 1 / n1);
  if (abs(r) == 0) {
    x = 0;
    y = 0;
  } else {
    r = 1 / r;
    x = r * cos(phi);
    y = r * sin(phi);
  }

  return new p5.Vector(x, y);
}
