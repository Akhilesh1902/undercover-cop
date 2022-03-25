import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { Suspense } from "react"
import Model2 from "./Model2"

export default function ModelWrapper({ anim }) {
  return (
    <>
      <Canvas className="Canvas">
        <OrbitControls
          enableZoom={false}
          enableDamping={true}
          enablePan={false}
        />
        <ambientLight intensity={0.2} />
        <directionalLight intensity={0.7} position={[3, 1, 3]} />
        <Suspense fallback={null}>
          <Model2 anim={anim} />
        </Suspense>
      </Canvas>
    </>
  )
}
