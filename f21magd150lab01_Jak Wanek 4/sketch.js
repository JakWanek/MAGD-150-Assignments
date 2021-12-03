let x=0;
let y;
function setup() {
  createCanvas(500, 500);
  x=0;
  y=0.25;
}

function draw() {
  background('white');
}

function draw() {
  fill('yellow');
  rect(mouseX,mouseY,20,30)
  x++;
  y++;
  
  if (keyIsPressed === true) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(25, 25, 50, 50);
}
function draw() {
  background('white');
  fill(0);

  if (mouseIsPressed) {
    fill('tan');
    ellipse(220, 250, 350, 150);
    fill('yellow');
    ellipse(220, 240, 280, 120);
  } else {
    ellipse(250, 250, 350, 150);
  }

  print(mouseIsPressed);
  
    if (keyIsPressed === true) {
    fill('red');
  } else {
    fill('black');
  }
  
push();
  textSize(16);
strokeWeight(0.5);

textAlign(CENTER, TOP);
text('Its', 0, 12, width);

textAlign(CENTER, CENTER);
text('Pizza', 0, 37, width);

textAlign(CENTER, BASELINE);
text('Pizza', 0, 57, width);

textAlign(CENTER, BOTTOM);
text('Pizza!', 0, 90, width);
  
pop();

let x = 0;
function setup() {
  createCanvas(100, 100);
  noLoop();
}
function draw() {
  background(200);
  ellipse(x, height/2, 20, 20);
  x ++;
}
function keyPressed() {
  loop();
} 
  fill('orange');
  ellipse(mouseX,mouseY,30,30)
  x++;
  y++;

}

