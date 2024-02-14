import { BoxGeometry,  SphereGeometry, Mesh, MeshPhysicalMaterial, MeshPhongMaterial,TextureLoader } from "three";


const loader = new TextureLoader()

export const jumpbox1 = () =>{

    const color = loader.load('textures/box_color.jpg')

    const jumpGeometry = new BoxGeometry(15,0.1,15)
    const jumpMaterial = new MeshPhysicalMaterial({ 
        map:color,
        roughness:0,
        metalness:0,
        reflectivity:1

    })
    const jumpMesh = new Mesh(jumpGeometry,jumpMaterial)
    jumpMesh.position.set(0,0,3)
    return jumpMesh
}

export const ground = () =>{
  
    const color = loader.load('/textures/Abstract_011_basecolor.jpg')
    //const normal = loader.load('/textures/Abstract_011_normal.jpg')

    const groundGeometry = new BoxGeometry(200,1,200)
    const groundMaterial = new MeshPhysicalMaterial({ 
        map:color,

     })
    const groundMesh = new Mesh(groundGeometry,groundMaterial)
    groundMesh.position.set(0,-2,0)
    return groundMesh
}


export const ball1 = () =>{
    const color = loader.load('/textures/disco_1.jpg')

    const ballGeometry = new SphereGeometry(4, 32, 16)
    const ballMaterial = new MeshPhysicalMaterial({
        map:color,
    })
    const ballMesh = new Mesh(ballGeometry,ballMaterial)
    ballMesh.position.set(-10,4,-4)
    return ballMesh
}

export const ball2 = () =>{
    const color = loader.load('/textures/disco_1.jpg')

    const ballGeometry = new SphereGeometry(4, 32, 16)
    const ballMaterial = new MeshPhysicalMaterial({
        map:color,
    })
    const ballMesh = new Mesh(ballGeometry,ballMaterial)
    ballMesh.position.set(10,4,-4)
    return ballMesh
}


