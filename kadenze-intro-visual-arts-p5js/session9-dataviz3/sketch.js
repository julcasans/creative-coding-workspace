var cities;

function preload() {
  cities = loadTable("cities.csv", "header");
}

function setup() {
  createCanvas(960, 480);
  fill(255, 60);
  noStroke();
}

function draw() {
  background(0);
  translate(0, -100);
  scale(2.5);
  for (let i = 0; i < cities.getRowCount(); i++) {
    let latitude = cities.getNum(i, "lat");
    let longitude = cities.getNum(i, "lng");
    setXY(latitude, longitude);
  }
  noLoop();
}

function setXY(lat, lng) {
  let x = map(lng, -180, 180, 0, width);
  let y = map(lat, 90, -90, 0, height);
  ellipse(x, y, 0.5, 0.5);
}
