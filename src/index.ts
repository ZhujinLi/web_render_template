import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GUI } from "dat.gui";

const canvas = document.createElement("canvas");
document.body.appendChild(canvas);

const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight);
camera.up.set(0, 0, 1);
camera.position.set(-1, -1, 1);
camera.lookAt(0, 0, 0);

const axesHelper = new THREE.AxesHelper(1);
scene.add(axesHelper);

const ctrl = new OrbitControls(camera, renderer.domElement);

const guiOptions = {
    "debug mode": true,
};
const gui = new GUI();
gui.add(guiOptions, "debug mode").onChange((value: boolean) => axesHelper.visible = value);

render();

function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}