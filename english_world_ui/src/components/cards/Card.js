import React, {useState} from 'react'

function Card({title, list}){
    const [counter, setCounter] = useState(0);

    const new_counter = () => {
        setCounter(Math.floor(Math.random()*list.length));
    }

    return(
        <div className='flex flex-col justify-center items-center h-[20rem] max-w-lg w-[90%]'>
            <h1 className='mb-4 text-secondary_color text-[1.5rem] font-light'>{title}</h1>
            <small></small>
            <div className="flex justify-center items-center text-secondary_color w-full h-full border-solid border border-black rounded-lg mb-8 shadow-card">{list[counter]?.english}</div>
            <button className='text-center max-w-[25rem] my-0 mx-auto p-1 text-3xl bg-[rgba(163,133,158,0.5)] text-white border-none rounded-xl shadow-button cursor-pointer outline-none mb-8 tracking-[0.3rem]' onClick={new_counter}>Next</button>
        </div>
    )
}

export default Card