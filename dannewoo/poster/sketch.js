var _width = 600;
var _height = 800;
function setup() {
  createCanvas(_width, _height);
  colorMode(HSB);
}

function drawPoster2() {
  var i = 0;
  var gapPillar = 30;
  var pillars = int((width/gapPillar)/2) - 1;
  var mainPillarHeight = 95;
  var pillarHeight = 25;
  var leftMainPillar = gapPillar*(pillars-1);
  var rightMainPillar = gapPillar*(pillars+3);
  var pillarWeight = 3;
  var cableWeight = 1;

  strokeWeight(pillarWeight);
  line(0, height / 3, width, height / 3);
  for(i=0; i<pillars; i++) {
    line(i*gapPillar, height / 3, i*gapPillar, height / 3 + pillarHeight);
  }
  for(i=0; i<pillars; i++) {
    line(rightMainPillar + i*gapPillar, height / 3, rightMainPillar + i*gapPillar, height / 3 + pillarHeight);
  }

  line(leftMainPillar, height/3 - mainPillarHeight, leftMainPillar, height/3 + pillarHeight);
  line(rightMainPillar, height/3 - mainPillarHeight, rightMainPillar, height/3 + pillarHeight);

  strokeWeight(cableWeight);
  line(leftMainPillar, height/3 - 60, leftMainPillar - 60, height / 3);
  line(rightMainPillar, height/3 - 60, rightMainPillar + 60, height / 3);

}

function draw() {
  var bColor = color(0, 0, 60);
  var fColor = color(0, 0, 90);  
  background(bColor);
  fill(fColor);
  drawPoster2();
  translate(10, 0);
  drawPoster2();
  noLoop();
}
