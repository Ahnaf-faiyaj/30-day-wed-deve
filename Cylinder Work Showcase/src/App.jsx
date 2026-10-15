import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing'
import Scene from './Scene'

const App = () => {

  return (
    <>
      <Canvas camera={{ fov: 60 }}>
        <ambientLight />
        <Scene />
        <EffectComposer>

          <Bloom
            mipmapBlur
            intensity={2.0}
            luminanceThreshold={0}
            luminanceSmoothing={0}
          />
          {/* <ToneMapping adaptive/> */}

        </EffectComposer>
      </Canvas >

      <div className='w-full  bg-black py-32'>
        <h1 className='text-white '>Welcome to my portfolio.</h1>
      </div>
    </>
  )
}

export default App
