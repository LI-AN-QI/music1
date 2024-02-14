import { DirectionalLight } from "three";

export const addLight = () => {
    let light = new DirectionalLight(0xffffff, 5)
    light.position.set(0,1,3)
    return light
}