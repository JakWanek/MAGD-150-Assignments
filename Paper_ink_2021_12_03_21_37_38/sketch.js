let currentColor = 'black'

  function setup() {
    createCanvas(600, 600);
    strokeWeight(1)
  }

  function draw() {
    /*
    Below you can see where I drawed in the borders for the buttons.
    */
    //print('x:' + mouseX + 'y:' + mouseY);
    //the button
    fill('no fill');
    rect(1, 20, 590, 202)
    rect(25,25,60,40)
    fill(255, 0, 0);
    rect(100, 100, 50, 50)
    fill(0, 255, 0);
    rect(300, 100, 50, 50)
    fill(0, 0, 255);
    rect(500, 100, 50, 50)
    fill(255)
   
     /*
   This makes it so when you click it will draw a line where you drag.
    */
    
    //make the button can switch the color
    if (mouseIsPressed == true) {
      stroke(currentColor);
      line(mouseX, mouseY, pmouseX, pmouseY);
    }

    if (mouseIsPressed) {
      if (mouseX > 100 && mouseX < 150 && mouseY > 100 && mouseY < 150) {
        print('switching to color red');
        currentColor = 'red';
      } else if (mouseX > 300 && mouseX < 350 && mouseY > 100 && mouseY < 150) {
        print('switching to color green');
        currentColor = 'green';
      } else if (mouseX > 500 && mouseX < 550 && mouseY > 100 && mouseY < 150) {
        print('switching to blue');
        currentColor = 'blue';
      } else if (mouseX > 32 && mouseX < 80 && mouseY > 33 && mouseY < 50) {
        print('clearing the bg');
        background(255);
        currentColor = 'black';

      }
    }
    
    /*
    In the section below you will see where the buttons are located and what color they are the buttons are connecteds to the text.
    */

    //name the button
    textSize(20);
    text('Red', 108, 132);
    textSize(15);
    text('Green', 302, 132);
    textSize(20);
    text('blue', 508, 132);
    fill('black');
    textSize(12);
    text('clear', 40,45)
    text('Press S to save drawing', 120,55)

  }
/*
Here I made the function where if you press S it will save the canvas in the area decided.
*/

  function keyPressed() {
    if (key == 's') {  
    
 let to_save = get(1,203, 599, 398);
 to_save.save("myart.png");
  
  }
  }