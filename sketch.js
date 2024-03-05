let upperSky
let lowerSky

  function setup() {
    createCanvas(800, 600);
    background(220);
    angleMode(DEGREES);
      upperSky = color(135, 206, 235);
      lowerSky = color(78, 173, 255);
      for(let y = 0 ; y < 400; y++) {
          range = map(y, 0, 400, 0, 1);
          let sky = lerpColor(upperSky, lowerSky, range)
          stroke(sky);
          line(0, y, width, y);
      }
}

function draw() {
 noLoop();
 noStroke();
 fill(124, 252, 0);
 rect(0, 400, width, 200);

 stroke(245, 187, 87);
 fill(244, 128, 55);
 ellipse(100, 90, 100, 100);

    push(); // saves the current drawing state 
    translate(100, 90); // moves the origin to the centre of the ellipse (sun) so the lines can be rotated around it 
    for (let i = 0; i < 8; i++) { // for loop to draw 8 lines each rotated by 45 degrees around the ellipse (sun)
      strokeWeight(3); // sets a stroke weight of 3 for the lines
      rotate(45); // rotates each line by 45 degrees 
      line(0, -80, 0, -60); // draws the first line at this position using the translated coordinates established by translate (100, 90)
      }
    pop(); // restores the previous drawing state 
}

