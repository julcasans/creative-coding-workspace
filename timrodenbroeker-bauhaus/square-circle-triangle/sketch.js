let bcolor = 240;
let fcolor = 1;
let tcolor = 1;
let ccolor = 1;
let scolor = 1;

let bsound;
let fsound;
function preload() {
  fsound = loadSound("s1.mp3");
  bsound = loadSound("t2.mp3");
}

function setup() {
  createCanvas(900, 900);
  noStroke();
}

function getColor(
  currentColor,
  cadence,
  percent,
  primaryColor,
  secondaryColor,
  sound
) {
  let color = currentColor;
  if (frameCount % cadence == 0) {
    color = random(0, 1) < percent ? primaryColor : secondaryColor;
    if (color != currentColor) {
      sound.play();
    }
  }
  return color;
}

function draw() {
  bcolor = getColor(bcolor, 57, 0.1, 240, 1, bsound);
  background(bcolor);

  tcolor = getColor(tcolor, 37, 0.5, 1, 240, fsound);
  fill(tcolor);
  rect(width * 0.12, height * 0.12, width * 0.76, height * 0.76);

  let tl = width * 0.65;

  let th = tl * (sqrt(5) / 2);
  let tx1 = width * 0.02;
  let ty1 = height * 0.75;
  let tx2 = tx1 + tl;
  let ty2 = ty1;
  let tx3 = tx1 + tl / 2;
  let ty3 = ty1 - tl * sqrt(3 / 4);

  scolor = getColor(scolor, 41, 0.5, 240, 1, fsound);
  fill(scolor);
  triangle(tx1, ty1, tx2, ty2, tx3, ty3);

  ccolor = getColor(ccolor, 43, 0.5, 240, 1, fsound);
  fill(ccolor);
  ellipse(width * 0.68, height * 0.66, width * 0.5);
}
