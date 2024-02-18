let pxoffset;
let pyoffset;
let bound = 10;
let queue = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(255);

  pxoffset = (2 + random(0,3));
  pyoffset = (2 + random(0,3));
  
  let clearButton = createButton("clear");
  clearButton.position(0, 0);
  
  clearButton.mousePressed(() => {
    background(255);
  });
  
  frameRate(60);
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
    
    line(
      mouseX, 
      mouseY, 
      pmouseX, 
      pmouseY
    );
    queue.push([
      mouseX + xoffset, 
      mouseY + yoffset, 
      pmouseX + pxoffset, 
      pmouseY + pyoffset,
      mouseX,
      mouseY,
      pmouseX,
      pmouseY
    ]
              )
    
    pxoffset = xoffset;
    pyoffset = yoffset;
  } else {
    queue.forEach((items) => {
      const [xo, yo, pxo, pyo, x, y, px, py] = items;
      
      // hide the old line
      stroke(color(255,255,255));
      strokeWeight(2);
      line(x,y,px,py);
    })
    
    
    queue.forEach((items) => {
      const [xo, yo, pxo, pyo, x, y, px, py] = items;
      
      // put the new one
      stroke(color(0,0,0));
      strokeWeight(1);
      line(xo,yo,pxo,pyo);
    })
    
    stroke(color(0));
    frameRate(60);
    
    queue = [];
  }
}