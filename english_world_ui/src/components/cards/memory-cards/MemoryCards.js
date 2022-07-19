import React from 'react'
import MemoryCard from './MemoryCard'

function MemoryCards(){
    return(
        <div className="flex flex-col items-center text-secondary_color mb-6">
            <h1 className='text-4xl font-light mb-2'>Memory Game</h1>
            <hr className='w-[60%] mb-12 border-b-solid border-secondary_color'></hr>
            <MemoryCard/>
            <MemoryCard/>
            <MemoryCard/>
            <MemoryCard/>
        </div>
    )
}

export default MemoryCards