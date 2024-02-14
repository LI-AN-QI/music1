import './style.css'
import * as THREE from 'three'
import { addLight } from './addLights'
import { jumpbox1,ground,ball1,ball2 } from './addMeshes'

const renderer = new THREE.WebGL1Renderer()
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,100)
const scene = new THREE.Scene()
const meshes = {} 
const clock = new THREE.Clock()


const listener = new THREE.AudioListener();
camera.add( listener );

const sound = new THREE.Audio( listener );

const audioLoader = new THREE.AudioLoader();
audioLoader.load( 'sounds/music1.mp3', function( buffer ) {
	sound.setBuffer( buffer );
	sound.setLoop( true );
	sound.setVolume( 0.5 );
	sound.play();
});


init()

//setup
function init(){
    renderer.setSize(window.innerWidth,window.innerHeight)
    document.body.appendChild(renderer.domElement)

    meshes.jumpbox1 = jumpbox1()
    meshes.ground = ground()
    meshes.ball1 = ball1()
    meshes.ball2 = ball2()
 
    lights.default = addLight()

    scene.add(lights.default)
    scene.add(meshes.jumpbox1)
    scene.add(meshes.ground)
    scene.add(meshes.ball1)
    scene.add(meshes.ball2)
    
    
    camera.position.set(0,2,7)
 
    resize()
    animate()
}

function resize(){
    window.addEventListener('resize',()=>{
        renderer.setSize(window.innerWidth,window.innerHeight)
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
    })
}

//animation
function animate(){
    requestAnimationFrame(animate)
    const tick = clock.getElapsedTime()

    meshes.jumpbox1.rotation.y += 0.07
    meshes.ground.rotation.y -= 0.05
    meshes.ball1.rotation.y += 0.03
    meshes.ball1.rotation.x += 0.03
    meshes.ball2.rotation.y -= 0.03
    meshes.ball2.rotation.x -= 0.03

    // meshes.jumpbox1.position.x = Math.sin(tick) * 1.2 
    meshes.jumpbox1.position.y = Math.cos(tick*8)*0.5
    meshes.ball1.position.y = Math.cos(tick*8)*0.3+4.5
    meshes.ball2.position.y = Math.cos(tick*8)*0.3+4.5

    
    // meshes.default.rotation.x += 0.01
    // meshes.default.rotation.y -= 0.01

    // meshes.standard.rotation.x -= 0.01
    // meshes.standard.rotation.y -= 0.01
    // mesh.rotation.x += 0.01
    // mesh.rotation.y += 0.01
    renderer.render(scene,camera)//scene+camera->renderer
}