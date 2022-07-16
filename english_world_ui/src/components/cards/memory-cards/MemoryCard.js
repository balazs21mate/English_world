import React from 'react'

function MemoryCard(){
    return(
        <div className="grid grid-cols-2 w-full px-1 gap-2 mb-2">
            <div className="flex justify-center items-center text-secondary_color w-full h-40 border-solid border border-black rounded-lg shadow-card ">
                <p></p>
            </div>
            <div className="flex justify-center items-center text-secondary_color w-full h-40 border-solid border border-black rounded-lg shadow-card ">
                <p></p>
            </div>
        </div>
    )
}

export default MemoryCard