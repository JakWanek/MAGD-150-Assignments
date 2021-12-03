function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(24, 109, 202);
  ellipseMode(CENTER);
  rectMode(CENTER)
  
  // Body
  push();
  fill(0, 255, 0)
  rect(240, 145, 20, 100);
  pop();
  
  // Head
  push();
  fill(0, 255, 0)
  ellipse(240, 115, 60, 60);
  pop();
  
  // Eyes
  push();
  let c = color('Black')
  fill(c);
  ellipse(221, 115, 16, 32);
  ellipse(259, 115, 16, 32);
  pop();
  
  // Ship
  push();
  fill('silver')
  ellipse(250, 200, 200, 80)
  line(175, 200, 353, 200)
  pop();
  
  //window
   push();
  noFill()
  arc(250, 140, 200, 200, -27, PI + QUARTER_PI, CHORD);
  pop();

  //Planets
  push();
  fill('orange')
   noStroke();
  quad(38, 31, 86, 20, 69, 63, 30, 76);
  pop();
  
  push();
  fill('purple')
  noStroke();
  triangle(130, 300, 158, 400, 186, 275);
  pop();
}

