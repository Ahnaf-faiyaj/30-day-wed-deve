import { Canvas } from '@react-three/fiber'
import React from 'react'
import "./App.css"
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei'
import Macontainer from './Macontainer'

const App = () => {
  return (
    <div className="w-full h-screen ">
      <div className="navber line flex gap-10 pt-10 pb-10 absolute top-0 left-1/2 -translate-x-1/2 ">
        {["iphone" , "ipad" , "services" , "ios" , "Mac"].map(e => <a href="" className="text-white font-[500] text-sm capitalize">
          {e}
        </a>)}
      </div>
      <div className="absolute flex flex-col items-center text-white top-40 left-1/2 -translate-x-1/2 font-['Helvetica_Now_Display']">
        <h3 className="masked text-7xl tracking-tighter font-[700]">MacBook Pro.</h3>
        <h5>Oh so pro!</h5>
        <p className="text-center w-3/4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, mollitia. Doloribus natus, odit numquam voluptatibus quod accusamus praesentium magni.</p>
      </div>
      <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
        <OrbitControls />
        <Environment files={[
          "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/pav_studio_03_4k.exr"
        ]} />
        <ScrollControls />
        <Macontainer />
      </Canvas>
    </div>
  )
}

export default App
