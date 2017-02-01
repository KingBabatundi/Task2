function setup () {
  var myCanvas = createCanvas(400, 580);
  myCanvas.position(CENTER);
}

var rocket = new Rocket ();

//actually draw the triangles (rocket)
function draw () {
  
background (0);
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

rocket.update();
rocket.draw();

resetMatrix();
  
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

function Rocket () {
  
  this.position = new p5.Vector();
  this.vector = new p5.Vector();
  this.rocketToMouse = new p5.Vector();
  
  this.draw = function() {
    noStroke ();
    fill (255);
    
    translate(this.position.x, this.position.y);
    
    // heading will now calculate the vector between position and mouse
    var heading =this.rocketToMouse.heading();
    // now can rotate the object i.e triangle to move towards its tip towards the mouse position
    rotate (heading - PI / 2);
    
    // set triangle around (0,0) as it's not object that rotates but the canvas
    
//The ROCKET
//reverse the numbers
  triangle (-30, 0, 30, 0, 0, 65);
  triangle (22, -14, -22, -14, 0, 30 );
  
   fill (0);
   ellipse (0, 20, 14, 14);
  
   fill (0);
   ellipse (0, 5, 9, 9);
  
  
}

 this.update = function() {

 //get position of mouse
 var mouse = new p5.Vector(mouseX, mouseY);
 // get the vector of the distances and direction
 this.rocketToMouse = mouse.sub(this.position);
 //makes the length of the vector = 1
// this.rocketToMouse.normalize();
 
 //multiply that unit 1 length by a number to speed up movement
this.rocketToMouse.mult(0.05);
 this.position.add(this.rocketToMouse);
 
 }
}
