let movPoints = []
let psizex;
let psizey;
let grid = 10;
let stepSync = 1;
let speed = 1;
let color = 75;

class movPoint {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.steps = speed;
    this.direction = (int)(4*Math.random());
  }
  
  draw(x,y) {
    stroke('white');
    strokeWeight(10);
    point(this.x,this.y);
  }
  
  move() {
    if (this.steps>20) {
      this.steps = speed;
      this.direction = (int)(4*Math.random());
    }
    else {
      this.x += Math.cos(this.direction*PI/2)*this.steps;
      this.y += Math.sin(this.direction*PI/2)*this.steps;
      this.steps *= 1.5;
    }
  }
}

// function mousePressed() {
//   let newPoint = new movPoint(mouseX,mouseY);
//   movPoints.push(newPoint);
// }

function mouseDragged() {
  if ((mouseX<psizex-220 || mouseX>psizex-20) || (mouseY<psizey-45 || mouseY>psizey-20)) {
    let newPoint = new movPoint(mouseX,mouseY);
    movPoints.push(newPoint);
  }
}

function setup() {
  psizex = document.documentElement.clientWidth;
  psizey = document.documentElement.clientHeight;
  createCanvas(psizex,psizey);
  colorMode(HSB,100);
  slider = createSlider(0.01, 1, 0.1, 0.01);
  slider.position(psizex-220, psizey-40);
  slider.style('width', '200px');
}

function draw() {
  background(color,25,50);
  color = (color+0.1)%100;
  speed = slider.value();
  movPoints.forEach (point => point.draw());
  movPoints.forEach (point => point.move());
}