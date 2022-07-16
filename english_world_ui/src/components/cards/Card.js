import React, {useState, useEffect} from 'react'

function Card({title, list}){
    const [counter, setCounter] = useState(0)
    const [english_text, setEnglish_text] = useState("")
    const [hungarian_text, setHungarian_text] = useState("")
    const [rotate, setRotate] = useState(false)
    const [display, setDisplay] = useState(false)
    const [disabledEnglishCard, setDisabledEnglishCard] = useState(false)
    const [disabledHungarianCard, setDisabledHungarianCard] = useState(false)
    const [disabledAll, setDisabledAll] = useState(false)

    useEffect(()=>{
        setCounter(Math.floor(Math.random()*list.length))
        setEnglish_text(list[counter]?.english)
        setHungarian_text(list[counter]?.hungarian)
    },[list,counter])

    const new_counter = () => {
        setCounter(Math.floor(Math.random()*list.length))
    }

    const set_rotate=()=>{
        setDisabledEnglishCard(!disabledEnglishCard)
        setDisabledHungarianCard(!disabledEnglishCard)
        setDisabledAll(true)
        setHungarian_text("")
        setEnglish_text("")
        setRotate(!rotate)
        setTimeout(() => {
            setDisplay(!display)
            display?setEnglish_text(list[counter]?.english):setHungarian_text(list[counter]?.hungarian)
            setDisabledAll(false)
        }, 1000);
    }

    return(
        <div className='flex flex-col justify-center items-center h-[20rem] max-w-lg w-[90%]'>
            <h1 className='mb-4 text-secondary_color text-[1.5rem] font-light'>{title}</h1>
            <small></small>
            <div className={`${rotate? 'rotate_card':''} shadow-card ${display? 'hidden':'flex'} justify-center items-center text-secondary_color w-full h-full border-solid border border-black rounded-lg mb-8`} onClick={disabledHungarianCard?null:set_rotate}>{english_text}</div>
            <div className={`${rotate? '':'rotate_card'} shadow-card_negative ${display? 'flex':'hidden'} justify-center items-center text-secondary_color w-full h-full border-solid border border-black rounded-lg mb-8`} onClick={disabledEnglishCard?set_rotate:null}>{hungarian_text}</div>
            <button className="text-center max-w-[25rem] my-0 mx-auto p-1 text-3xl bg-[rgba(163,133,158,0.5)] text-white border-none rounded-xl shadow-button cursor-pointer outline-none mb-8 tracking-[0.3rem]" onClick={new_counter} disabled={disabledAll&&true}>Next</button>
        </div>
    )
}

export default Card