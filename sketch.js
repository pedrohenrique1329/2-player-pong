function setup() {
  createCanvas(700, 700);
   background('white');
}

function draw() {
 
  fill('black')
  
  // console.log(mouseIsPressed);
  
  if(mouseIsPressed)
  rect(mouseX, mouseY, 50, 50)
}
