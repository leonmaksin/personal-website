let pxoffset;
let pyoffset;
let mode = 0;
let bound = 10;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(255);

  pxoffset = (2 + random(0,3));
  pyoffset = (2 + random(0,3));
  mode = 1;
  
  let button = createButton("toggle off");
  button.position(0, 0);
  
  button.mousePressed(() => {
    mode = (mode + 1) % 2;
    if (mode == 1) button.html("toggle off");
    else button.html("toggle on");
  });
  
  let clearButton = createButton("clear");
  clearButton.position(0, 20);
  
  clearButton.mousePressed(() => {
    background(255);
  });
}

function draw() {
  if (mouseIsPressed) {
    let distScale = (((pmouseX - mouseX) ** 2) + ((pmouseY - mouseY) ** 2)) ** 0.5 / 3;
    console.log(dist);
    
    let xoffset = pxoffset + distScale * random(-2, 2);
    let yoffset = pyoffset + distScale * random(-2, 2);
    
    if (xoffset > bound) xoffset = bound;
    if (xoffset < -bound) xoffset = -bound;
    if (yoffset > bound) yoffset = bound;
    if (yoffset < -bound) yoffset = -bound;
    
    if (mode == 0) {
      xoffset = 0;
      yoffset = 0;
    }
    
    line(
      mouseX + xoffset, 
      mouseY + yoffset, 
      pmouseX + pxoffset, 
      pmouseY + pyoffset
    );
    pxoffset = xoffset;
    pyoffset = yoffset;
  }
}