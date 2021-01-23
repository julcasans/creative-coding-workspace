var capture;

function setup() {
  createCanvas(710, 400);
  capture = createCapture();
  capture.hide();
  noStroke();
  fill(0);
}

function draw() {
  background(255);
  capture.loadPixels();

  var stepSize = 12;
  for (var y = 0; y < capture.height; y += stepSize) {
    for (var x = 0; x < capture.width; x += stepSize) {
      var i = y * capture.width + x;
      var darkness = (255 - capture.pixels[i * 4]) / 255;
      var radius = stepSize * darkness;
      ellipse(x, y, radius, radius);
    }
  }
}
