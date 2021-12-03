let x;
let y;
function setup() {
  createCanvas(500, 500);
  x=0;
  y=0.25;
}

function draw() {
  background(220);
}

function draw() {
  background('grey');
  fill('red');
  rect(x,100,100,100);
  fill('blue');
  ellipse(y,300,100,100);
  fill('yellow');
  rect(mouseX,mouseY,20,30)
  x++;
  y++;
print('The value of x is '+20);
// prints "The value of x is 20"
print(5-3); // 5-3=4
print(3*3); // 3*3=9
print(5/4); // 5/4=1.25
print(9*9); // 9*9=81
  
  let leftWall = 25;
  let rightWall = 75;

  // xm is just the mouseX, while
  // xc is the mouseX, but constrained
  // between the leftWall and rightWall!
  let xm = mouseX;
  let xc = constrain(mouseX, leftWall, rightWall);

  // Draw the walls.
  stroke(150);
  line(leftWall, 0, leftWall, height);
  line(rightWall, 0, rightWall, height);

  // Draw xm and xc as circles.
  noStroke();
  fill(150);
  ellipse(xm, 33, 9, 9); // Not Constrained
  fill('green');
  ellipse(xc, 66, 9, 9); // Constrained
  
  let value = 25;
let m = map(value, 0, 100, 0, width);
fill('purple');
ellipse(m, 50, 10, 10);
  

  let a = 20;
  let b = 80;
  let c = lerp(a, b, 0.2);
  let d = lerp(a, b, 0.5);
  let e = lerp(a, b, 0.8);

  strokeWeight(5);
  stroke('cyan'); // Draw the original points in black
  
  point(a, y);
  point(b, y);

  stroke('cyan'); // Draw the lerp points in gray
  point(c, y);
  point(d, y);
  point(e, y);
}

