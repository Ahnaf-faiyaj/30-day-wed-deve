import React from 'react'

const ProjectCard = (props) => {
    return (
        <>
            <div className='w-full h-[400px]  mb-4 flex gap-5 '>
                <div
                    className=' lg:w-1/2 group h-full transition-all relative rounded-none hover:rounded-[70px] overflow-hidden bg-green-500'>
                    <img className='h-full w-full object-cover' src={props.image1} alt="" />
                    <div className='opacity-0 transition-all group-hover:opacity-100 absolute h-full w-full top-0 left-0 bg-black/10 flex items-center justify-center'>
                        <h2 className='uppercase p-2 text-4xl pt-2 px-3 font-[Lausanne300] border-4 rounded-full'>Vior le Projet</h2>
                    </div>
                </div>
                <div
                    className=' lg:w-1/2 group h-full transition-all relative rounded-none hover:rounded-[70px] overflow-hidden bg-green-500'>
                    <img className='h-full w-full object-cover' src={props.image2} alt="" />
                    <div className='opacity-0 transition-all group-hover:opacity-100 absolute h-full w-full top-0 left-0 bg-black/10 flex items-center justify-center'>
                        <h2 className='uppercase p-2 text-4xl pt-2 px-3 font-[Lausanne300] border-4 rounded-full'>Vior le Projet</h2>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ProjectCard
