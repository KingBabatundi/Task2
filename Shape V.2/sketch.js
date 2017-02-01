
function setup() {
  createCanvas (400, 580);
}

var position = new p5.Vector (10,10);

function draw() {
  
  if (mouseIsPressed) {
    background (0);
    
     s = "R Ø C K E T";
  fill(242,255,170);
  textSize(55);
    textFont ('Copperplate');
  text (s, 47, 450, 1000, 65);
  
   s = "L A U N C H";
  fill(242,255,170);
  textSize(25);
    textFont ('Copperplate');
  text (s, 128, 503, 1000, 65);
  
  noStroke ();
  fill (26, 174, 226);
  rect (0,0, 400, 250);
  ellipse (199, 250, 402, 350);

//background ellipse  
  fill (0);
  ellipse (200, 220, 295, 295);
  
 //big right top arc 
  fill (204, 0, 112);
  arc (200, 220, 295, 295, PI+HALF_PI, TWO_PI);

//small circle 1
  fill(26, 174, 226);
  ellipse (268, 120, 25, 25);

//small circle 2

 fill(26, 174, 226);
 ellipse (295, 140, 20, 20);
 
//small circle 3

 fill(26, 174, 226);
 ellipse (282, 163, 12, 12);
  
//right top arc 
  fill (26, 174, 226);
  arc (200, 220, 160, 160, PI+HALF_PI, TWO_PI);
  
//left top arc 
  fill (204,0, 112);
  arc (200, 220, 160, 160, PI, PI+HALF_PI);
  
//right bottom arc
  fill (204, 0, 112);
  //(x, y, width, height, angle start, angle stop)
  arc (200, 220, 240, 240, 0, HALF_PI);
  
//left bottom arc 
  fill (26, 146, 226);
  arc (200, 220, 240, 240, HALF_PI, PI);
  
//left triangle
  fill (26, 174, 226);
  triangle (80, 220, 200, 220, 200, 340 );

// right triangle
  fill (26, 146, 226);
  triangle (320, 220, 200, 220, 200, 340 );
  
// //top triangle white
//   fill (255);
//   //(x, y, x, y, x, y)
//   triangle (235, 220, 165, 220, 200, 140 );
    
    var mouse = new p5.Vector(mouseX, mouseY);
    var difference = mouse.sub(position);
    difference.mult(0.1);
    
    position.add(difference);
    
 noStroke ();
  fill (255);
  // //(x, y, x, y, x, y)
  triangle (position.x-35, position.y, position.x+35, position.y, position.x, position.y-80);
  // //(x, y, x, y, x, y)
  // triangle (235, 220, 165, 220, 200, 140 );
  // //(x, y, x, y, x, y)
  triangle (position.x-22, position.y+14, position.x+22, position.y+14, position.x, position.y-40 );
  
  fill (0);
  ellipse (position.x, position.y-20, 14, 14);
  
  fill (0);
  ellipse (position.x, position.y-5, 9, 9);
 
 

// fill (255);
//   // //(x, y, x, y, x, y)
//   triangle (mouseX-35, mouseY, mouseX+35, mouseY, mouseX, mouseY-80);
//   // //(x, y, x, y, x, y)
//   // triangle (235, 220, 165, 220, 200, 140 );
//   // //(x, y, x, y, x, y)
//   triangle (mouseX-22, mouseY+14, mouseX+22, mouseY+14, mouseX, mouseY-40 );
  
//   fill (0);
//   ellipse (mouseX, mouseY-20, 14, 14);
  
//   fill (0);
//   ellipse (mouseX, mouseY-5, 9, 9);
    
  } else {
    
  background (250, 243, 224);

  s = "P Y R ∆ M I D";
  fill(0,0,85);
  textSize(55);
    textFont ('Copperplate');
  text (s, 25, 450, 1000, 65);
  
   s = "A R C A D E";
  fill(0,0,85);
  textSize(25);
    textFont ('Copperplate');
  text (s, 128, 503, 1000, 65);
  
  noStroke ();
  fill (229, 51, 29);
  rect (0,0, 400, 250);
  ellipse (199, 250, 402, 350);

//background ellipse  
  fill (251, 242, 222);
  ellipse (200, 220, 295, 295);
  
 //big right top arc 
  fill (238, 128, 31);
  arc (200, 220, 295, 295, PI+HALF_PI, TWO_PI);

//small circle 1
  fill(229, 51, 29);
  ellipse (268, 120, 25, 25);

//small circle 2

 fill(229, 51, 29);
 ellipse (295, 140, 20, 20);
 
//small circle 3

 fill(229, 51, 29);
 ellipse (282, 163, 12, 12);
  
//right top arc 
  fill (229, 51, 29);
  arc (200, 220, 160, 160, PI+HALF_PI, TWO_PI);
  
//left top arc 
  fill (238, 128, 31);
  arc (200, 220, 160, 160, PI, PI+HALF_PI);
  
//right bottom arc
  fill (238, 128, 31);
  //(x, y, width, height, angle start, angle stop)
  arc (200, 220, 240, 240, 0, HALF_PI);
  
//left bottom arc 
  fill (229, 51, 29);
  arc (200, 220, 240, 240, HALF_PI, PI);
  
//left triangle
  fill (218, 52, 27);
  triangle (80, 220, 200, 220, 200, 340 );

// right triangle
  fill (229, 80, 29);
  triangle (320, 220, 200, 220, 200, 340 );
  
//top triangle black
  fill (0);
  //(x, y, x, y, x, y)
  triangle (235, 220, 165, 220, 200, 140 );
}

}

