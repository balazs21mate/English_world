import React, {useState, useEffect} from 'react';

function Card({title, list}){
    const [localList, setLocalList] = useState([]) 
    const [counter, setCounter] = useState(0)
    const [english_text, setEnglish_text] = useState("")
    const [hungarian_text, setHungarian_text] = useState("")
    const [rotate, setRotate] = useState(false)
    const [display, setDisplay] = useState(false)
    const [disabledAll, setDisabledAll] = useState(false)

    useEffect(()=>{
        setCounter(Math.floor(Math.random()*list.length))
        setLocalList(list)
    },[list])

    useEffect(()=>{
        setEnglish_text(localList[counter]?.english)
        setHungarian_text(localList[counter]?.hungarian)
    },[localList,counter])

    const new_counter = () => {
        if (localList.length === 1) {
            setLocalList(list)
        } else {
            setLocalList(localList.filter(item=>item.id!==localList[counter].id))
            setCounter(Math.floor(Math.random()*(localList.length-1)))
        }
    }

    const set_rotate=()=>{
        setDisabledAll(true)
        setHungarian_text("")
        setEnglish_text("")
        setRotate(!rotate)
        setTimeout(() => {
            setDisplay(!display)
            rotate?setEnglish_text(localList[counter]?.english):setHungarian_text(localList[counter]?.hungarian)
            setDisabledAll(false)
        }, 1000);
    }

    return(
        <div className='flex flex-col justify-center items-center h-[20rem] max-w-lg w-[90%]'>
            <h1 className='mb-4 text-secondary_color text-[1.5rem] font-light'>{title}</h1>
            <div className={`${rotate? 'rotate_card':''} cursor-pointer text-lg md:text-xl shadow-card ${display? 'hidden':'flex'} justify-center items-center text-secondary_color w-full h-full border-solid border border-black rounded-lg mb-8`} onClick={disabledAll?null:set_rotate}>{english_text}</div>
            <div className={`${rotate? '':'rotate_card'} cursor-pointer text-lg md:text-xl shadow-card_negative ${display? 'flex':'hidden'} justify-center items-center text-secondary_color w-full h-full border-solid border border-black rounded-lg mb-8`} onClick={disabledAll?null:set_rotate}>{hungarian_text}</div>
            <button className="text-center max-w-[25rem] my-0 mx-auto p-1 text-3xl bg-button text-white border-none rounded-xl shadow-button cursor-pointer outline-none mb-8 tracking-[0.3rem]" onClick={new_counter} disabled={disabledAll || display?true:false}>Next</button>
        </div>
    )
}

export default Card