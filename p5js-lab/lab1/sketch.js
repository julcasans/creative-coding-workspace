// let angle = 0;
// const TOTAL = 300 * 2;

// function setup() {
//   createCanvas(800, 800, WEBGL);
//   angleMode(DEGREES);
//   colorMode(HSB, 255);
//   noStroke();
// }

// function draw() {
//   background(0);

//   for (let i=0; i<TOTAL; i++) {
//     let r = map(i, 0, TOTAL, 10, 180);
//     let x = map(sin((i + angle) / 4), -1, 1, -200, 200);
//     let y = tan((angle + i) * 3) * i / 8;
//     let z = tan((angle + i) * 3) * i / 8;
//     emissiveMaterial(map(i, 0, TOTAL, 90, 0), 255, 255);
//     push();
//     translate(x, y, z);
//     rotateY(-r*5);
//     sphere(sin(r) * 5);
//     pop();
//   }
//   angle -= 10;
// }

var _lines = [];
var _colors = [];
var _maxSize = 50;
var _width = 600;
var _height = 600;
var _x1;
var _y1;

function setup() {
  let x2, y2;
  createCanvas(_width, _height);
  background(0);
  _x1 = int(random(0, _width));
  _y1 = int(random(0, _height));
  for (let i = 0; i < _maxSize; i++) {
    x2 = sin(radians(i * 10)) * 10 + int(random(0, _width));
    y2 = int(random(0, _height));
    _lines.push({ _x1, _y1, x2, y2 });
    _x1 = x2;
    _y1 = y2;
    _colors.push(map(i, 0, _maxSize - 1, 0, 255));
  }
  strokeWeight(2);
  frameRate(10);
}

function draw() {
  background(0);
  var i = 0;
  let x2, y2;

  for (let i = 0; i < _maxSize; i++) {
    let { _x1, _y1, x2, y2 } = _lines[i];
    strokeWeight(map(i, 0, _maxSize, 1, 5));
    stroke(_colors[i], 200, 100, _colors[i]);
    //stroke(_colors[i], _colors[i]);
    line(_x1, _y1, x2, y2);
  }
  x2 = sin(radians(frameCount)) * 10 + int(random(0, _width));
  y2 = cos(radians(frameCount)) * 10 + int(random(0, _height));
  _lines.shift(1);
  _lines.push({ _x1, _y1, x2, y2 });
  _x1 = x2;
  _y1 = y2;
}
