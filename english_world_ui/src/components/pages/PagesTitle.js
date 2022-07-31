import React from 'react'

function PagesTitle({title}){
    return(
        <div className='w-full flex flex-col mt-2 items-center'>
            <h1 className='text-4xl font-light mb-2 text-secondary_color'>{title}</h1>
            <hr className='w-[80%] mb-12 border-b-solid border-secondary_color'></hr>
        </div>
    )
}

export default PagesTitle