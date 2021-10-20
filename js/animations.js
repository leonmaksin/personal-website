import {OrbitControls} from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/examples/jsm/controls/OrbitControls.js';

const cursor = {
    x: 0,
    y: 0
}
window.addEventListener('mousemove', (event) =>
{
    cursor.x = event.clientX / window.innerWidth - 0.5;
    cursor.y = event.clientY / window.innerHeight - 0.5;
})

const canvas = document.querySelector('canvas.webgl');
const scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 55, window.innerWidth / window.innerHeight, 0.1, 100 );

//Controls
const controls = new OrbitControls(camera, canvas);
controls.damping = true;

//Renderer
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var cube_geometry = new THREE.BoxGeometry( 1, 1, 1, 2, 2, 2 );
var cube_material = new THREE.MeshBasicMaterial( { color: 0xE6E6FA } );
var cube = new THREE.Mesh( cube_geometry, cube_material );
scene.add( cube );
cube.position.x = 1;
cube.position.y = 1;

var sphere_geometry = new THREE.SphereGeometry( 3 );
var sphere_material = new THREE.MeshBasicMaterial( { color: 0xE6E6FA } );
var sphere = new THREE.Mesh( sphere_geometry, sphere_material );
// scene.add( sphere );
sphere.position.x = 0;
sphere.position.y = 2;

// const material_line = new THREE.LineBasicMaterial( { color: 0x0000ff } );

// const points = [];
// points.push( new THREE.Vector3( - 10, 5, 5 ) );
// points.push( new THREE.Vector3( 5, 10, 5 ) );
// points.push( new THREE.Vector3( 10, 5, 5 ) );

// const geometry_line = new THREE.BufferGeometry().setFromPoints( points );
// const line = new THREE.Line( geometry_line, material_line );

// scene.add( line );

const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)

camera.position.set(1,1,5);

renderer.render( scene, camera );
// camera.position.x = 1;
// camera.position.y = 1;
// camera.position.z = 5;

const clock = new THREE.Clock();

var animate = function () {

    const elapsedTime = clock.getElapsedTime();

    //Update controls
    controls.update();

    // Update camera
    // camera.position.x = cursor.x * -10;
    // camera.position.y = cursor.y * 10;
    // camera.lookAt(cube.position);

    renderer.render( scene,camera );    
	requestAnimationFrame( animate );
};

animate();
