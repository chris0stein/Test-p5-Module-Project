// You can create custom variables here
let sunY = 125;

/* 
EVERYTHING in the SETUP() function only happens once when the page is first loaded.
This is also an example of a multiline comment. Single Line comments start with //
*/
function setup() {
  createCanvas(500, 350); //set to 500px by 600px
  //below is anther example that creates a canvas the heigth and width of the browser window
  //createCanvas(windowWidth, windowHeight);


} //end setup()

/*
All of the code inside of the DRAW() function runs multiple times per second (usually 60 times per second on most computers).
*/
function draw() {
  //putting the backround function here means there is a fresh screen drawn each time. This is needed if you want to make things look like they're moving across the screen
  background('lightblue');

  // Add the sun 
  fill('yellow');
  circle(150, sunY, 75);


  //Add the clouds
  fill('white'); //color clouds white
  ellipse(25, 25, 100, 50);
  ellipse(100, 25, 100, 50);
  ellipse(175, 25, 100, 50);
  ellipse(250, 25, 100, 50);
  ellipse(325, 25, 100, 50);
  ellipse(400, 25, 100, 50);
  ellipse(475, 25, 100, 50);

  //Add the grass
  fill('DarkGreen');
  rect(0, 250, 500, 100);

  //respond to up an down arrow keys to move the sun
  if (keyIsPressed === true) {
    if (keyCode === UP_ARROW) {
      sunY = sunY - 3;
    } else if (keyCode === DOWN_ARROW) {
      sunY = sunY + 3;
    }//end if keyCode
  }//end if keyIsPressed



}//end draw()


