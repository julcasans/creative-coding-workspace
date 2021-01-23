let _option = 0;
let _drawing = [];
let _title = "Option #1";
let _lastTimeMessageShowedUp = 0;

_drawing.push((density) => {
  for (let x = 50; x <= width - 50; x += density) {
    for (let y = 50; y <= height - 50; y += density) {
      line(x - 5, y - 5, x + 5, y + 5);
      line(x + 5, y - 5, x - 5, y + 5);
    }
  }
});

_drawing.push((density) => {
  for (let x = 50; x <= width - 50; x += density) {
    for (let y = 50; y <= height - 50; y += density) {
      line(x, y, width / 2, height / 2);
    }
  }
});

_drawing.push((density) => {
  let count = 0;
  noFill();
  for (let x = 50; x <= width - 50; x += density) {
    for (let y = 50; y <= height - 50; y += density) {
      ellipse(x, y, 40, 40);
    }
  }
  fill(255);
});

_drawing.push((density) => {
  let count = 0;
  for (let x = 50; x <= width - 50; x += density) {
    for (let y = 50; y <= height - 50; y += density) {
      strokeWeight(count * 0.005);
      ellipse(x, y, 20, 20);
      count++;
    }
  }
  strokeWeight(1);
});

_drawing.push((density) => {
  for (let x = 50; x < width - 50; x += density) {
    for (let y = 50; y < height - 50; y += density) {
      for (let i = 0; i < 16; i += 4) {
        line(x + i, y, x + i, y + 12);
      }
      line(x, y, x + 12, y + 12);
    }
  }
});

let _font;
function preload() {
  _font = loadFont("CascadiaMono-Regular.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //textFont("Secular One"); // use web webfont
  textFont(_font); // loads local font file
  textSize(90);
}

function draw() {
  background(220);
  let density = map(mouseX, 0, width, 20, 50);

  _drawing[_option](density);
  if (_lastTimeMessageShowedUp < 20) {
    fill(0, 0, 255);
    text(_title, width - 550, height - 180, 550, 2500);
    noFill();
  }
  _lastTimeMessageShowedUp++;
}

function mousePressed() {
  _option = (_option + 1) % 5;
  _title = "Option #" + (_option + 1);
  _lastTimeMessageShowedUp = 0;
}
