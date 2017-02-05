// variable to make Canvas as big as the sreen is

var stars = [],
    w = window.innerWidth,     
    h = window.innerHeight,
    FPS = 10,
    NUMBEROF_STARS = w;
     
  function setup () {
   
     createCanvas(w,h);
  
   // Push the stars into shape
   for (var i = 0; i < NUMBEROF_STARS; i++) {
     stars.push({
       x: 0,
       y: 0,
       // math.random creates a random number, where  0 => x < 1.
       offset: Math.random() * 360,
       // the distance from the center the stars will orbit
       orbit: (Math.random() + 0.03) * max(w,h),
       // size of the stars
       radius: Math.random() * 2,
     });
  }
  frameRate(FPS);
  loop();
   
}

// drawing the stars from the list [] stars
function draw() {
  background(0);
  // saves the settings 
  push();
  noFill();
  colorMode(RGB, 255, 255, 255, 1);
  stroke(240, 240, 240, 1);
  strokeCap(ROUND);
  strokeWeight(2);
  
  
  for (var i = 0, x = stars.length; i < x; i++) {
    var s = stars[i];
    ellipse(s.x, s.y, s.radius, 0);
  }  
  // restores settings or original state of the drawing defined by push
    pop();
    update();
//try adding update function to change star position
}    

function update () {
  
  var normalX = w / 2;
  var normalY = h / 2;
   for (var i = 0, x = stars.length; i < x; i++) {
    var s = stars[i];
    
   var rad = (frameCount * (1/(s.orbit*2 + s.offset)) + s.offset) % TAU;
   // has to be a different trig function
   s.x = (normalX + sin(rad)*(s.orbit*2));
   s.y = (normalY + cos(rad)*(s.orbit));
 }
}

//always have the canvas be the size of the browser

function windowResized() {
  w = window.innerWidth,
  h = window.innerHeight,
  resizeCanvas(w,h);
}

