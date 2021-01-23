let h = 266;
let w = 762;
let drawPositionX = 0;
let center;
let img;

function preload() {
  img = loadImage("smile.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  img.loadPixels();
  background(255);
  stroke(255, 255, 0);
  strokeWeight(2);
  center = width / 2;
}

function draw() {
  background(255);
  let mx = constrain(mouseX, center - w / 2, center + w / 2);

  let x = map(mx, center - w / 2, center + w / 2, w, 0);
  x = floor(x);

  for (let y = 0; y < height; y++) {
    let c = img.get(x, y);
    set(drawPositionX, y, c);
  }
  updatePixels();

  image(img, mx, height - h / 2);
  line(width / 2, height - h, width / 2, height);

  line(drawPositionX, h, width / 2, height - h);

  drawPositionX++;

  if (drawPositionX >= width) {
    drawPositionX = 0;
  }
}
