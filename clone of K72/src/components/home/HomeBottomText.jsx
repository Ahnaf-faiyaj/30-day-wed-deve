import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[Lausanne500] flex items-center justify-center gap-5 '>
            <p className='absolute lg:w-[17vw] w-64 lg:right-20 right-0 bottom-28  lg:bottom-45 font-[font1] lg:text-lg text-xs lg:leading-relaxed leading-tight'>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.</p>
      <div className='uppercase lg:h-33 hover:border-[#D3FD50] hover:text-[#D3FD50] flex items-center border-2 lg:border-3 border-white rounded-full px-6 pt-2 lg:px-10 pt-3'>
        <Link className='text-[6.5vw] ' to='/projects'>Project</Link>
      </div>
      <div className='uppercase lg:h-33 hover:border-[#D3FD50] hover:text-[#D3FD50] flex items-center border-2 lg:border-3 border-white rounded-full px-6 pt-2 lg:px-10 pt-3'>
        <Link className='text-[6.5vw] ' to='/agence'>Agence</Link>
      </div>
    </div>
  )
}

export default HomeBottomText
