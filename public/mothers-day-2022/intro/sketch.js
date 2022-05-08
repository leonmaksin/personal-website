let turtles = [];
let nturtles = 100;
let sizex;
let sizey;
let selected = "circle";
let speed = 1.6;
let color = 330;
let sat = 0;

class turtle {
  constructor(x,y,angle,size) {
    this.x = x;
    this.y = y;
    this.angle = angle;
    this.size = size;
  }
  
  draw() {
    let xdist = this.x-sizex/2.0;
    let ydist = -1*(this.y-sizey/2.0);

    let hsize = 0.005;
    let xdistc = hsize*xdist;
    let ydistc = hsize*ydist;

    let brightness;
    if (selected = "diamond") {
      brightness = 100-0.4*200/400*((abs((this.x-sizex/2.0)^2))
                       +(abs((sizey/2.0-this.y)^2)))^0.5;
    }
    if (selected = "circle") {
      brightness = 100-0.4*200/400*pow(xdist*xdist+ydist*ydist,0.5);
    };
    if (pow((xdistc*xdistc+ydistc*ydistc-1),3) > xdistc*xdistc*ydistc*ydistc*ydistc) stroke(0,0,100);
    else stroke(color,25,brightness);
    strokeWeight(this.size);
    point(this.x,this.y);
  }
  
  move() {
    this.x += speed*cos(this.angle);
    this.y += speed*sin(this.angle);
    this.angle += (Math.random()-0.5)*2*PI/360*60;
  }
}

function createTurtles(x,y) {
  for (let i=0; i<100; ++i) {
    let newTurtle = new turtle(x,y,2.0*i*PI/nturtles,2);
    turtles.push(newTurtle);
  }
}

function heart(x, y, size) {
  beginShape();
  vertex(x, y);
  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  endShape(CLOSE);
}

function mouseClicked() {
  let xdist = abs(mouseX-sizex/2);
  let ydist = abs(mouseY-sizey/2.19);
  if (xdist*xdist+ydist*ydist < 960) {
    // circle(sizex/2,sizey/2.19,62);
    redirectPage('https://mothers-day-puzzle.netlify.app/');
  }
}

function redirectPage(link) {
  open(link)
}

function setup() {
  sizex = document.documentElement.clientWidth;
  sizey = document.documentElement.clientHeight;
  createCanvas(sizex, sizey);
  createTurtles(sizex/2,sizey/2);
  colorMode(HSB);
  slider = createSlider(0, 360, 330, 1);
  slider.position(sizex-220, sizey-40);
  slider.style('width', '200px');
}

function draw() {
  if (sat < 70) sat += 0.3;
  strokeWeight(0);
  fill(0, sat, 100);
  heart(sizex/2,sizey/2.3,50);
  color = slider.value()
  turtles.forEach(turtle => {
    turtle.draw();
    turtle.move();
  });
  // turtles.forEach(turtle => turtle.move());
}