import "./style.css";
import * as THREE from "three";

// Scene
const scene = new THREE.Scene();

// Objects
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
// const mesh = new THREE.Mesh(geometry, material);
const group = new THREE.Group();
group.position.y = 1;
group.scale.y = 0.2;
group.rotation.y = 1;
scene.add(group);

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);
cube2.position.x = -1;
const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xffff00 })
);
cube3.position.x = 1.5;
group.add(cube1, cube2, cube3);
// Positioning
// mesh.position.set(1, 0, 1);

// Scale
// mesh.scale.set(2, 0.5, 0.5);

// Rotation (Euler). There's also Quaternion but it's mathematically more difficult and visualize, to be learned later
// mesh.rotation.reorder("YXZ"); // important in order to keep the rotation as I expect it
// mesh.rotation.x = Math.PI * 0.25; // PI is half a rotation
// mesh.rotation.y = Math.PI * 0.25;

// Axes helper
const axesHelper = new THREE.AxesHelper(3);
scene.add(axesHelper);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// camera.lookAt(mesh.position);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("canvas.webgl"),
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
