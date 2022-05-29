import"./style.css";import*as THREE from"three";import{GLTFLoader}from"three/examples/jsm/loaders/GLTFLoader.js";import{PointLight}from"three";const gltfLoader=new GLTFLoader;let mixer0=null;gltfLoader.load("columnaDerBk.gltf",(e=>{console.log("success"),console.log(e),e.scene.scale.set(2,2,2),e.scene.position.set(50,-45,300),e.scene.rotation.set(.2,-2.5,0),mixer0=new THREE.AnimationMixer(e.scene),mixer0.clipAction(e.animations[0]).play(),scene.add(e.scene)}));let mixer00=null;gltfLoader.load("bandera2.gltf",(e=>{console.log("success"),console.log(e),e.scene.scale.set(2,2,2),e.scene.position.set(49,75,330),e.scene.rotation.set(.2,-2.5,0),mixer00=new THREE.AnimationMixer(e.scene),mixer00.clipAction(e.animations[0]).play(),scene.add(e.scene)}));let mixer1=null;gltfLoader.load("columnaIzBk.gltf",(e=>{mixer1=new THREE.AnimationMixer(e.scene),mixer1.clipAction(e.animations[0]).play(),console.log("success"),console.log(e),e.scene.scale.set(2,2,2),e.scene.position.set(-50,-45,700),scene.add(e.scene)}));let mixer2=null;gltfLoader.load("columnaDerBk.gltf",(e=>{mixer2=new THREE.AnimationMixer(e.scene),mixer2.clipAction(e.animations[0]).play(),console.log("success"),console.log(e),e.scene.scale.set(2,2,2),e.scene.position.set(50,-45,1100),scene.add(e.scene)}));const canvas=document.querySelector("canvas.webgl"),scene=new THREE.Scene,geometry=new THREE.TorusGeometry(.7,.2,16,100),material=new THREE.MeshStandardMaterial;material.color=new THREE.Color(16777215);const sphere=new THREE.Mesh(geometry,material),ambientLight=new THREE.AmbientLight(15287029,.1);scene.add(ambientLight);const sizes={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",(()=>{sizes.width=window.innerWidth,sizes.height=window.innerHeight,camera.aspect=sizes.width/sizes.height,camera.updateProjectionMatrix(),renderer.setSize(sizes.width,sizes.height),renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))}));const camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,1e3);function moveCamera(){const e=document.body.getBoundingClientRect().top;camera.position.z=-.5*e}camera.position.x=0,camera.position.y=50,camera.position.z=100,scene.add(camera),document.body.onscroll=moveCamera;const renderer=new THREE.WebGLRenderer({canvas});renderer.setSize(sizes.width,sizes.height),renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));const loader=new THREE.TextureLoader;loader.load("https://ivanmartinezcarpio.github.io/distorsionLoop.gif",(function(e){scene.background=e}));const clock=new THREE.Clock;let previousTime=0;const tick=()=>{const e=clock.getElapsedTime(),i=e-previousTime;previousTime=e,null!==mixer0&&mixer0.update(i),null!==mixer00&&mixer00.update(i),null!==mixer1&&mixer1.update(i),null!==mixer2&&mixer2.update(i),sphere.rotation.y=.5*e,renderer.render(scene,camera),window.requestAnimationFrame(tick)};tick();