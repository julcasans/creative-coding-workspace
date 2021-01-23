// P_1_0_01
//
// Generative Gestaltung – Creative Coding im Web
// ISBN: 978-3-87439-902-9, First Edition, Hermann Schmidt, Mainz, 2018
// Benedikt Groß, Hartmut Bohnacker, Julia Laub, Claudius Lazzeroni
// with contributions by Joey Lee and Niels Poldervaart
// Copyright 2018
//
// http://www.generative-gestaltung.de
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * changing colors and size by moving the mouse
 *
 * MOUSE
 * position x          : size
 * position y          : color
 *
 * KEYS
 * s                   : save png
 */
'use strict';
// Grid
var _padding = 2;
var _lengthX = 80;
var _lengthY = 80;
var _maxInteriorSize = 95*_lengthX/100;
var _cols = 6;
var _rows = 6;
var _width = _cols * (_padding + _lengthX) + _padding;
var _height = _rows * (_padding + _lengthY) + _padding;
var _tick = 0;
var _tickIncrement = 0.1;
var _tickX = 0;
var _tickY = 0;
var s = 1;
var _cells = new Array(_rows *_cols);

function setup() {
  console.log(_width, _height)
  createCanvas(_width, _height);
  noCursor();

  colorMode(HSB, 360, 100, 100);
  noStroke();
  _maxInteriorSize = int(_maxInteriorSize);
}

function draw() {
  var xj;
  var yi;
  var cellIdx;
  for (var i=0; i<_rows; i++) {
    for (var j=0; j<_cols; j++) {
      _tick = _tick + _tickIncrement;
      xj = _lengthX*j + _padding*(j+1);
      yi = _lengthY*i + _padding*(i+1);
      cellIdx = (i*_cols)+j;
      rectangle(xj, yi, _lengthX, _lengthY, cellIdx);
    }
  }
}

function rectangle(x, y, lx, ly, i) {
  if (!_cells[i]) {
    _cells[i] = { 
      lx: lx, 
      ly: ly, 
      colorOffset: i * 2, 
      size: int(random(10, 50)) /*i*10*/ % _maxInteriorSize, 
      growing: true }
  }
  var colorOffset = _cells[i].colorOffset;
  if (_cells[i].growing) {
    _cells[i].size = _cells[i].size + 1;
  } else {
    _cells[i].size = _cells[i].size - 1;
  }
  if (_cells[i].size === _maxInteriorSize || _cells[i].size === 0) {
    _cells[i].growing = !_cells[i].growing;
  }
  var size = _cells[i].size;
  
  fill((colorOffset+_tick) % 360, 80, 80);
  rect(x, y, lx, ly);
  fill( 360 - ((colorOffset+_tick) % 360) , 100, 100);
  var k = size;
  
  rect((x+lx/2)-(k/2), (y+lx/2)-(k/2), k, k);
}

function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}
