let p5random = [];
let humanrandom = [];

function preload() {
  humanrandom = loadStrings("numbers.txt");
}

function setup() {
  createCanvas(1000, 500);

  for (let i = 0; i < humanrandom.length; i++) {
    p5random.push(random(0, 100));
  }
}

function draw() {
  background(0);
  noStroke();

  for (let i = 0; i < p5random.length; i++) {
    let rnd = p5random[i];
    let x = 5 + rnd * 10;
    fill(255, 10);
    ellipse(x, height / 2, 10, 10);
  }
}
