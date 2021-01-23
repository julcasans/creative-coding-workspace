function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
}

function draw() {
  background(255);
  var count = 0;
  var color = 0;
  for (var x = 50; x <= width - 50; x += 50) {
    stroke(color);
    strokeWeight(count * 0.5);
    for (var y = 50; y <= height - 50; y += 50) {
      var l = 10;
      // line(x - l, y - l, x + l, y + l);
      // line(x + l, y - l, x - l, y + l);
      //line(x, y, width / 2, height / 2);
      ellipse(x, y, 40, 40);
    }
    count += 1.5;
    color += 11.9;
  }
}
