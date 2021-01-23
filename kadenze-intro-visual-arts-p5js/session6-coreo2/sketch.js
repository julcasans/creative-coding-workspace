let angle = 0.0;
let speed = 0.005;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
}

function draw() {
  let l0 = map(mouseX, 0, width, 10, 300);
  let l1 = map(mouseX, 0, width, 10, 300);

  background(130);

  translate(width / 2, height / 2);
  rotate(angle);
  for (let i = 0; i < 5; i++) {
    push();
    rotate((i * TWO_PI) / 5);
    translate(0, l0);
    ellipse(0, 0, 20, 20);

    rotate(angle);
    for (let j = 0; j < 5; j++) {
      push();
      rotate((j * TWO_PI) / 5);
      translate(0, l1);
      ellipse(0, 0, 20, 20);

      rotate(angle);
      for (let k = 0; k < 5; k++) {
        push();
        rotate((k * TWO_PI) / 5);
        translate(0, l1);
        ellipse(0, 0, 20, 20);
        pop();
      }
      pop();
    }
    pop();
  }
  angle += speed;
}
