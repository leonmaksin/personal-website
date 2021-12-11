var crystals = [];

function setup() {
  createCanvas(document.documentElement.clientWidth, document.documentElement.clientHeight, WEBGL);
  // for (let i=0; i<40; ++i) {
  //   let newCrystal = new noiseCrystal(map(random(1),0,1,-width/2,width/2),map(random(1),0,1,-height/2,height/2),map(random(1),0,1,0,-10,10),5+map(random(1),0,1,0,15),'#f59ff5');
  //   crystals.push(newCrystal);
  // }
  const radius = width;
  for (let i=0; i<60; ++i) {
    let newCrystal = new noiseCrystal(map(random(1),0,1,-1,1)*radius,map(random(1),0,1,-1,1)*radius,-600+map(random(1),0,1,0,-1,1)*radius,30+map(random(1),0,1,0,30),'#f59ff5');
    crystals.push(newCrystal);
  }
  // let newCrystal = new noiseCrystal(width/2,height/2,0,20,'#e19ef5');
  // crystals.push(newCrystal);
  noiseSeed(millis());

  for (let i=0; i<3; ++i) {
    crystals.forEach(crystal => {
      crystal.refine();
    });
  }

  colorMode(HSB, 360, 100, 100);
  // background(HEXtoHSB('#8A9994'));
  // normalMaterial();
  // crystals.forEach(crystal => crystal.drawTris());
}

// function mouseClicked() {
//   normalMaterial();
//   crystals.forEach(crystal => {
//     crystal.refine();
//     crystal.drawTris();
//   });
// }

function draw() {
  orbitControl();

  background(HEXtoHSB('#8A9994'));
  normalMaterial();
  crystals.forEach(crystal => crystal.drawTris());

  // const camDist = (height/2)/ tan(PI/6);
  // let camX = camDist*cos(map(mouseX,0,width,0,2*PI));
  // let camY = camDist*sin(map(mouseY,height,0,0,2*PI));
  // let camZ = (camDist**2 - camX**2 - camY**2)**0.5;
  // camera(camX,camY,camZ);
  // const eyeZ = ((height/2) / tan(PI/6));
  // perspective(PI/3, width/height, 0.01, eyeZ*1000);
}

const HEXtoHSB = (hex) => {
  var aRgbHex = hex.slice(1).match(/.{1,2}/g);
  let r = parseInt(aRgbHex[0], 16)/255;
  let g = parseInt(aRgbHex[1], 16)/255;
  let b = parseInt(aRgbHex[2], 16)/255;
  // console.log(r,g,b);
  const v = Math.max(r, g, b);
  const n = v - Math.min(r, g, b);
  const h = n === 0 ? 0 : n && v === r ? (g - b) / n : v === g ? 2 + (b - r) / n : 4 + (r - g) / n;
  let HSB = [60 * (h < 0 ? h + 6 : h), v && (n / v) * 100, v * 100];
  // console.log(HSB);
  return HSB;
};

class noiseCrystal {
  constructor(x,y,z,size,color) {
    this.xcoord = x;
    this.ycoord = y;
    this.zcoord = z;
    this.scalar = size;
    this.color = HEXtoHSB(color);
    this.verts = [];
    this.orig = [];
    this.tris = [];
    this.offx = random(3);
    this.offy = random(3);
    this.offz = random(3);
    this.reset();
  }

  reset() {
    var t = (1.0 + sqrt(5.0)) / 2.0;
  
    this.addVert(createVector(-1, t, 0));
    this.addVert(createVector( 1, t, 0));
    this.addVert(createVector(-1, -t, 0));
    this.addVert(createVector( 1, -t, 0));
  
    this.addVert(createVector( 0, -1, t));
    this.addVert(createVector( 0, 1, t));
    this.addVert(createVector( 0, -1, -t));
    this.addVert(createVector( 0, 1, -t));
  
    this.addVert(createVector( t, 0, -1));
    this.addVert(createVector( t, 0, 1));
    this.addVert(createVector(-t, 0, -1));
    this.addVert(createVector(-t, 0, 1));
  
    this.addTri(0, 11, 5);
    this.addTri(0, 5, 1);
    this.addTri(0, 1, 7);
    this.addTri(0, 7, 10);
    this.addTri(0, 10, 11);
  
    //5 adjacent faces 
    this.addTri(1, 5, 9);
    this.addTri(5, 11, 4);
    this.addTri(11, 10, 2);
    this.addTri(10, 7, 6);
    this.addTri(7, 1, 8);
  
    // 5 faces around point 3
    this.addTri(3, 9, 4);
    this.addTri(3, 4, 2);
    this.addTri(3, 2, 6);
    this.addTri(3, 6, 8);
    this.addTri(3, 8, 9);
  
    // 5 adjacent faces 
    this.addTri(4, 9, 5);
    this.addTri(2, 4, 11);
    this.addTri(6, 2, 10);
    this.addTri(8, 6, 7);
    this.addTri(9, 8, 1);
  }

  addVert(p) {
    var m = 1;
    var length = ((p.x**2+p.y**2+p.z**2)**0.5) * noise( p.x*m + this.offx, p.y*m + this.offy,  p.z*m + this.offz  );
    this.verts.push(createVector(p.x/length, p.y/length, p.z/length));
    //this.verts.push(createVector(p.x*length, p.y*length, p.z*length));
  }
  
  addTri(A, B, C) {
    this.tris.push(createVector(A, B, C));
  }
  
  getMiddlePoint(p1, p2) {
  
    var point1 = this.verts[p1];
    var point2 = this.verts[p2];
    var middle = createVector(
    (point1.x + point2.x) / 2.0, 
    (point1.y + point2.y) / 2.0, 
    (point1.z + point2.z) / 2.0);
  
    this.addVert(middle);
  
    return this.verts.length-1;
  }
  
  refine() {
    // refine triangles
    for (var i = 0; i < 1; i++) {
      var tris2 = [];
      for (var j=0; j<this.tris.length; j++) {
        var tri = this.tris[j];
  
        // replace triangle by 4 triangles
        var a = this.getMiddlePoint( (int)(tri.x), (int)(tri.y) );
        var b = this.getMiddlePoint( (int)(tri.y), (int)(tri.z) );
        var c = this.getMiddlePoint( (int)(tri.z), (int)(tri.x) );
  
        tris2.push(createVector(tri.x, a, c));
        tris2.push(createVector(tri.y, b, a));
        tris2.push(createVector(tri.z, c, b));
        tris2.push(createVector(a, b, c));
      }
      this.tris = tris2;
    }
  }

  drawTris() {
  
    for (var i=0; i<this.tris.length; i++) {
  
      var tri = this.tris[i];
      var a, b, c;
  
      a = this.verts[(int)(tri.x)];
      b = this.verts[(int)(tri.y)];
      c = this.verts[(int)(tri.z)];
  
      beginShape(TESS);
  
      fill(this.color[0], this.color[1] + 10 - sqrt(a.x*a.x + a.y*a.y + a.z*a.z)*10, this.color[2]);

      vertex(a.x*this.scalar+this.xcoord, a.y*this.scalar+this.ycoord, a.z*this.scalar+this.zcoord);
      vertex(b.x*this.scalar+this.xcoord, b.y*this.scalar+this.ycoord, b.z*this.scalar+this.zcoord);
      vertex(c.x*this.scalar+this.xcoord, c.y*this.scalar+this.ycoord, c.z*this.scalar+this.zcoord);
  
      endShape(CLOSE);
    }
  }
}

function saveMeshObj() {


  fileObj = createWriter("mesh" + millis() + ".obj");

  for (var i=0; i<verts.length; i++) {
    var v = verts[i];
    fileObj.println("v " + v.x + " " + v.y + " " + v.z);
  }
  for (var i=0; i<tris.length; i++) {
    var t = tris[i];
    fileObj.println("f " + (t.x+1) + " " + (t.y+1) + " " + (t.z+1));
  }
  fileObj.flush();
  fileObj.close();
}


function mouseMoved() {
  //camera1.arc(radians(mouseY - pmouseY));
  //camera1.circle(radians(1));
  //camera1.look(radians(mouseX - pmouseX) / 2.0, radians(mouseY - pmouseY) / 2.0);
  //camera1.tumble(radians(mouseX - pmouseX), radians(mouseY - pmouseY));
}