import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
    return (
        <div className='font-[Lausanne300] lg:mt-0 md:mt-26 mt-36 pt-2 text-center'>
            <div className='lg:text-[6.5vw] text-[11.5vw] flex items-center justify-center  uppercase lg:leading-[10vw] leading-[13vw] '>
                L'étincelle
            </div>
            <div className='lg:text-[6.5vw] text-[11.5vw] flex items-center justify-center uppercase lg:leading-[10vw] leading-[13vw] '>
                qui <div className='h-[6vw] w-[13vw] rounded-full mt-3 overflow-hidden'> <Video/> </div> génère
            </div>
            <div className='lg:text-[6.5vw] text-[11.5vw] flex items-center justify-center  uppercase lg:leading-[10vw] leading-[13vw] '>
                la créativité
            </div>
        </div>
    )
}

export default HomeHeroText
