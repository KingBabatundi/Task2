// variable to make Canvas as big as the sreen is

var stars = [],
    w = window.innerWidth,     
    h = window.innerHeight,
    FPS = 10,
    NUMBEROF_STARS = w;

var planet = [];
     
  function setup () {
    var url = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=cgnFzcC6pYQpVST9LNyP5CBzus6DbvlZMEI1cliX';
    loadJSON(url, space);

     createCanvas(w,h);
  
   // Push the stars into shape
   for (var i = 0; i < NUMBEROF_STARS; i++) {
     stars.push({
       x: 0,
       y: 0,
       // math.random creates a random number, where  0 => x < 1.
       offset: Math.random() * 360,
       // the distance from the center the stars will orbit
       orbit: (Math.random() + 0.05) * max(w,h),
       // size of the stars
       radius: Math.random() * 2,
     });
  }
  frameRate(FPS);
  loop();
}

function space(json) {
  
for(var q = 0; q < 1; q++) {
  
    var asteroid = json.near_earth_objects['2015-09-08'][q];
    var asteroid2 = json.near_earth_objects['2015-09-07'][q];
    
    var Distance = asteroid.close_approach_data[0].miss_distance.lunar;
    var Distance2 = asteroid.close_approach_data[0].miss_distance.lunar;
{
for (var r = 0; r < 10; r++) {
      planet.push({
      a: 0,
      b: 0,
      distance:  Distance,
      distance2: Distance2,

      });
   }
  }
 }
 
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
  
  for (var r = 0, b = planet.length; r < b; r++) {
    var p = planet[r];
    // triangle (-30, 0, 30, 0, 0, 65);
    var x2 = map(mouseX, 0, width, 0, 100);
    triangle(p.a-30, p.b, p.a+30, p.b, p.a, p.b+65);
    // triangle (22, -14, -22, -14, 0, 30 )
  }  
  
  // restores settings or original state of the drawing defined by push
    pop();
    update();
//try adding update function to change star position
}    

function update () {
  
  var normalX = w / 2;
  var normalY = h / 2;
  var planetX = w;
  var planetY = h;
   for (var i = 0, x = stars.length; i < x; i++) {
    var s = stars[i];
    
   var rad = (frameCount * (1/(s.orbit*2 + s.offset)) + s.offset) % TAU;
   // has to be a different trig function
   s.x = (normalX + sin(rad)*(s.orbit*2));
   s.y = (normalY + cos(rad)*(s.orbit));
 }
 
 
 for (var r = 0, b = planet.length; r < b; r++) {
    var p = planet[r];
  var ang = (w * (1/(p.distance + p.distance2)));
   // has to be a different trig function
   p.a = (planetX + sin(ang)*(p.distance));
   p.b = (planetY + cos(ang)*(p.distance2));
 }
}


  


//always have the canvas be the size of the browser
function windowResized() {
  w = window.innerWidth,
  h = window.innerHeight,
  resizeCanvas(w,h);
}

