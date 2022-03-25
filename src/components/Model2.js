import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import * as THREE from "three"
import { useFrame, useLoader } from "@react-three/fiber"

export default function Model2({ anim }) {
  const model = useLoader(GLTFLoader, "/scene.gltf")
  model.scene.position.set(0, -1, 0)
  let mixer
  if (model.animations.length) {
    mixer = new THREE.AnimationMixer(model.scene)
    const action = mixer.clipAction(model.animations[anim])
    action.play()
  }
  useFrame((state, delta) => {
    mixer?.update(delta)
  })

  return <primitive object={model.scene}></primitive>
}
