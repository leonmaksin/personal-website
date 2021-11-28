var camera;

var verts = [];
var orig = [];
var tris = [];

var offx = 0;
var offy = 0;
var offz = 0;

var strt = true;

const scalar = 20;
var xcoord = 0;
var ycoord = 0;
var zcoord = 0;

var crystals = [];

function setup() {
  createCanvas(700, 700, WEBGL);
  let newCrystal = new noiseCrystal(0,0,0,20);
  newCrystal.reset();
  crystals.push(newCrystal);
  mouseClicked();
  noiseSeed(millis());
  reset();
}

function mouseClicked() {
  crystals.forEach(crystal => crystal.refine());
  // refine();
  // console.log("Verts: " + verts.length);
}

function draw() {
  background(50,25,50);

  // xcoordd = sin(mouseX);
  // ycoord = (mouseY-height/2)/2;
  // console.log(mouseX-width/2,mouseY-height/2);

  const camDist = (height/2)/ tan(PI/6);

  // let camX = camDist*cos(map(mouseX,0,width,0,2*PI));
  // let camY = camDist*sin(map(mouseY,height,0,0,2*PI));
  // let camZ = (camDist**2 - camX**2 - camY**2)**0.5;
  const eyeZ = ((height/2) / tan(PI/6));
  perspective(PI/3, width/height, 0.01, eyeZ*1000);
  // camera(camX,camY,camZ);
  perspective(PI/6, width/height, (height/2)/ tan(PI/6)/1000, (height/2)/ tan(PI/6)*10);
  // camera1.tumble(radians(mouseX - pmouseX), radians(mouseY - pmouseY));
  
  noStroke();
  // stroke(0);

  normalMaterial();
  crystals.forEach(crystal => crystal.drawTris());
}

// function keyReleased() {
//   if ( key == 's') {
//     console.log("saving...");
//     saveMeshObj();
//     console.log("done.");
//   } else if ( key == 'r' ) {
//     reset();
//   } else if (key == 't'){
//     strt = !strt;
//   }
// }

class noiseCrystal {
  constructor(x,y,z,size) {
    this.xcoord = x;
    this.ycoord = y;
    this.zcoord = y;
    this.scalar = size;
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
    //float a = atan2(p.y, p.x);
    //float b = atan2(p.z, p.x);
    //float c = atan2(p.z, p.y);
    var m = 1;
    var length = ((p.x**2+p.y**2+p.z**2)**0.5) * noise( p.x*m + offx, p.y*m + offy,  p.z*m + offz  );
    this.verts.push(createVector(p.x/length, p.y/length, p.z/length));
    // verts.push(createVector(p.x*length, p.y*length, p.z*length));
    //orig.push(createVector(p.x/length, p.y/length, p.z/length));
  }
  
  addTri(A, B, C) {
    this.tris.push(createVector(A, B, C));
  }
  
  getMiddlePoint(p1, p2) {
  
    var point1 = this.verts[p1];//(PVector)orig.get(p1);
    var point2 = this.verts[p2];//(PVector)orig.get(p2);
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
    
    colorMode(HSB, 360, 100, 100);
  
    for (var i=0; i<this.tris.length; i++) {
  
      var tri = this.tris[i];
      var a, b, c;
  
      a = this.verts[(int)(tri.x)];
      b = this.verts[(int)(tri.y)];
      c = this.verts[(int)(tri.z)];
  
      beginShape(TESS);
  
      // fill(20, 100 - sqrt(a.x*a.x + a.y*a.y + a.z*a.z)*10, 100);
      fill(sqrt(a.x*a.x + a.y*a.y + a.z*a.z)/10 + 20*(abs(a.x)+abs(a.y)+abs(a.z)), 100, 100);//abs(a.x)*100, abs(a.y)*100, abs(a.z)*100);
  
      vertex(a.x*scalar+xcoord, a.y*scalar+ycoord, a.z*scalar+zcoord);
      vertex(b.x*scalar+xcoord, b.y*scalar+ycoord, b.z*scalar+zcoord);
      vertex(c.x*scalar+xcoord, c.y*scalar+ycoord, c.z*scalar+zcoord);
  
      endShape(CLOSE);
    }
  }
}

function reset() {
  console.log("reseting...");

  verts = [];
  orig = [];
  tris = [];

  var t = (1.0 + sqrt(5.0)) / 2.0;

  addVert(createVector(-1, t, 0));
  addVert(createVector( 1, t, 0));
  addVert(createVector(-1, -t, 0));
  addVert(createVector( 1, -t, 0));

  addVert(createVector( 0, -1, t));
  addVert(createVector( 0, 1, t));
  addVert(createVector( 0, -1, -t));
  addVert(createVector( 0, 1, -t));

  addVert(createVector( t, 0, -1));
  addVert(createVector( t, 0, 1));
  addVert(createVector(-t, 0, -1));
  addVert(createVector(-t, 0, 1));

  addTri(0, 11, 5);
  addTri(0, 5, 1);
  addTri(0, 1, 7);
  addTri(0, 7, 10);
  addTri(0, 10, 11);

  //5 adjacent faces 
  addTri(1, 5, 9);
  addTri(5, 11, 4);
  addTri(11, 10, 2);
  addTri(10, 7, 6);
  addTri(7, 1, 8);

  // 5 faces around point 3
  addTri(3, 9, 4);
  addTri(3, 4, 2);
  addTri(3, 2, 6);
  addTri(3, 6, 8);
  addTri(3, 8, 9);

  // 5 adjacent faces 
  addTri(4, 9, 5);
  addTri(2, 4, 11);
  addTri(6, 2, 10);
  addTri(8, 6, 7);
  addTri(9, 8, 1); 


  //float yo = random(10);
  offx = random(3);
  offy = random(3);
  offz = random(3);
}

function addVert(p) {
  //float a = atan2(p.y, p.x);
  //float b = atan2(p.z, p.x);
  //float c = atan2(p.z, p.y);
  var m = 1;
  var length = ((p.x**2+p.y**2+p.z**2)**0.5) * noise( p.x*m + offx, p.y*m + offy,  p.z*m + offz  );
  verts.push(createVector(p.x/length, p.y/length, p.z/length));
  // verts.push(createVector(p.x*length, p.y*length, p.z*length));
  //orig.push(createVector(p.x/length, p.y/length, p.z/length));
}

function updateVerts() {
  for (var i=0; i<verts.length; i++) {
    var v = orig[i];
    var v2 = verts[i];
    
    // var a = atan2(v.y,v.x);
    // var b = atan2(v.x,v.z)
    // var c = atan2(v.y,v.z);
    var x = v.x, y = v.y, z = v.z; //cos(a*.5 + offx), y = cos(b*.5), z = sin(c*.5);
    
    v2.normalize();
    
    var m = millis()*.0005;
    var n = noise( x*2 + m,y*2 + m,z*2 + m);//sin(noise(x*1+m,y*1+m,z*1+m)*PI);
    
    v2.mult( n*4 );
  }
}

function addTri(A, B, C) {
  tris.push(createVector(A, B, C));
}

function getMiddlePoint(p1, p2) {

  var point1 = verts[p1];//(PVector)orig.get(p1);
  var point2 = verts[p2];//(PVector)orig.get(p2);
  var middle = createVector(
  (point1.x + point2.x) / 2.0, 
  (point1.y + point2.y) / 2.0, 
  (point1.z + point2.z) / 2.0);

  addVert(middle);

  return verts.length-1;
}

function refine() {
  // refine triangles
  for (var i = 0; i < 1; i++) {
    var tris2 = [];
    for (var j=0; j<tris.length; j++) {
      var tri = tris[j];

      // replace triangle by 4 triangles
      var a = getMiddlePoint( (int)(tri.x), (int)(tri.y) );
      var b = getMiddlePoint( (int)(tri.y), (int)(tri.z) );
      var c = getMiddlePoint( (int)(tri.z), (int)(tri.x) );

      tris2.push(createVector(tri.x, a, c));
      tris2.push(createVector(tri.y, b, a));
      tris2.push(createVector(tri.z, c, b));
      tris2.push(createVector(a, b, c));
    }
    tris = tris2;
  }
}

function drawTris() {
    
  colorMode(HSB, 360, 100, 100);

  for (var i=0; i<tris.length; i++) {

    var tri = tris[i];
    var a, b, c;

    a = verts[(int)(tri.x)];
    b = verts[(int)(tri.y)];
    c = verts[(int)(tri.z)];

    beginShape(TESS);

    // fill(20, 100 - sqrt(a.x*a.x + a.y*a.y + a.z*a.z)*10, 100);
    fill(sqrt(a.x*a.x + a.y*a.y + a.z*a.z)/10 + 20*(abs(a.x)+abs(a.y)+abs(a.z)), 100, 100);//abs(a.x)*100, abs(a.y)*100, abs(a.z)*100);

    vertex(a.x*scalar+xcoord, a.y*scalar+ycoord, a.z*scalar+zcoord);
    vertex(b.x*scalar+xcoord, b.y*scalar+ycoord, b.z*scalar+zcoord);
    vertex(c.x*scalar+xcoord, c.y*scalar+ycoord, c.z*scalar+zcoord);

    endShape(CLOSE);
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