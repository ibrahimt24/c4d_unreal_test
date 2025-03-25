import * as THREE from 'three';

const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z=3;

const box = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({color:0x8f211a});
const kup = new THREE.Mesh(box, material);
scene.add(kup);




renderer.render(scene, camera);
