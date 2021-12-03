function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  
 //Pond
  push();
  noStroke();
  fill(240);
  ellipse(300,250,250,150);
  pop();
  
  
  //Right building
  push();
  strokeJoin(BEVEL);
  strokeWeight(8);
  rect(50,100,100,200);
  pop();
  
  //windowpane left
  line(50,200,150,200);
  line(50,240,150,240);
  line(50,220,150,220);
  
  point(60, 120);
  point(140, 120);
  point(60, 150);
  point(140, 150);
  
  //Left building
  push();
  strokeJoin(BEVEL);
  strokeWeight(8);
  rect(450,100,100,200);
  pop();
  
  //windowpane right
  line(550,200,450,200);
  line(550,240,450,240);
  line(550,220,450,220);
  
  point(460, 120);
  point(540, 120);
  point(460, 150);
  point(540, 150);
  
  //Sun
  push();
  noStroke();
  fill(270);
  ellipse(300,80,80,80);
  pop();
  
  
  
}