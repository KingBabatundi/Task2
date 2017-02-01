// P_1_1_1_01
// Generative Gestaltung, ISBN: 978-3-87439-759-9
// First Edition, Hermann Schmidt, Mainz, 2009
// Hartmut Bohnacker, Benedikt Gross, Julia Laub, Claudius Lazzeroni
// Copyright 2009 Hartmut Bohnacker, Benedikt Gross, Julia Laub, Claudius Lazzeroni
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
 * draw the color spectrum by moving the mouse
 *      
 * MOUSE
 * position x/y        : resolution
 * 
 * KEYS
 * s                   : save png
 */


var stepX;
var stepY;
var stepZ;
var angle = 0;


function setup(){
  createCanvas(710, 400, WEBGL);
}

function draw(){
  
 var img = new Img ();
 var box = new Box ();

  box.draw();
  img.draw();

  
}

function Box()  {
  
  this.draw = function () {
  noStroke();
  rotateX(angle);
  rotateY(angle);
  box(80);
  
  angle += 0.07;
  
 }
}

function Img() {
  
  this.draw = function() {
  
  noStroke();
  colorMode(HSB, width, height, 100);

  this.stepX = mouseX+2;
  this.stepY = mouseY+2;
  this.stepZ = (mouseY, mouseX);
  for (var gridY=0; this.gridY<height; this.gridY+=stepY){
    for (var gridX=0; this.gridX<width; this.gridX+=stepX){
      for (var gridZ=0; gridX<WEBGL; gridZ+=0){
      fill(this.gridX, height-this.gridY, 100);
      rect(this.gridX, this.gridY, this.stepX, this.stepY);
    
      }
   }
  }
}
}

function keyPressed() {
  if (key=='s' || key=='S') save("P_1_1_1_01.png");
}

  

  

