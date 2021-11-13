let turtles = [];
let nturtles = 100;
let sizex;
let sizey;
let selected = "circle";

class turtle {
  constructor(x,y,angle,size) {
    this.x = x;
    this.y = y;
    this.angle = angle;
    this.size = size;
  }
  
  draw() {
    let xdist = abs(this.x-sizex/2.0);
    let ydist = abs(this.y-sizey/2.0);
    let brightness;
    if (selected = "diamond") {
      brightness = 200/400*((abs((this.x-sizex/2.0)^2))
                       +(abs((sizey/2.0-this.y)^2)))^0.5;
    }
    if (selected = "circle") {
      brightness = 200/400*pow(pow(xdist,2)+pow(ydist,2),0.5);
    };
    stroke(200,25,brightness);
    strokeWeight(this.size);
    point(this.x,this.y);
  }
  
  move() {
    this.x += cos(this.angle);
    this.y += sin(this.angle);
    this.angle += (Math.random()-0.5)*2*PI/360*60;
  }
}

function createTurtles(x,y) {
  for (let i=0; i<100; ++i) {
    let newTurtle = new turtle(x,y,2.0*i*PI/nturtles,1);
    turtles.push(newTurtle);
  }
}

// function mouseClicked() {
//   createTurtles(mouseX,mouseY);
// }

function setup() {
  sizex = document.documentElement.clientWidth;
  sizey = document.documentElement.clientHeight;
  createCanvas(sizex, sizey);
  createTurtles(sizex/2,sizey/2);
  colorMode(HSB);
}

function draw() {
  turtles.forEach(turtle => turtle.draw());
  turtles.forEach(turtle => turtle.move());
}