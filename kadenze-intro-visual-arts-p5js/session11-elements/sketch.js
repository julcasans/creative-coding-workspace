var rslider;
var gslider;
var bslider;
var positions = [];

function setup() {
  createCanvas(640, 480);

  rslider = createSlider(0, 255, 100);
  gslider = createSlider(0, 255, 100);
  bslider = createSlider(0, 255, 100);
}

function draw() {
  var r = rslider.value();
  var g = gslider.value();
  var b = bslider.value();
  background(r, g, b);
  textAlign(CENTER);
  textSize(100);
  stroke(0);
  strokeWeight(12);
  fill(g, b, r);
  if (frameCount % 100 === 0) {
    generatePositions();
  }
  writeText("you cum first");
}

function generatePositions() {
  positions = [];
  for (var i = 0; i < 80; i++) {
    positions.push({ x: random(width), y: random(height), a: random(TWO_PI) });
  }
}

function writeText(msg) {
  positions.forEach((p) => {
    push();
    translate(p.x, p.y);
    rotate(p.a);
    text(msg, 0, 0);
    pop();
  });
}

function mouseClicked() {
  generatePositions();
}
