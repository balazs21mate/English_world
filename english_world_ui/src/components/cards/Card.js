import React, {useState, useEffect} from 'react'

function Card({title, list}){
    const [counter, setCounter] = useState(0)
    const [text, setText] = useState("")
    const [rotate, setRotate] = useState(false)
    const [buttonDisabled, setButtonDisabled] = useState(false)
    const [mirrorText, setMirrorText] = useState(false)
    const [mirrorTextReturn, setMirrorTextReturn] = useState(true)

    useEffect(()=>{
        setText(rotate?list[counter]?.hungarian:list[counter]?.english)
    },[list,counter])

    const new_counter = () => {
        setCounter(Math.floor(Math.random()*list.length));
    }

    const set_rotate=()=>{
        if (rotate === false) {
            setButtonDisabled(true)
            setMirrorTextReturn(!mirrorTextReturn)
            setText("")
            setRotate(!rotate)
            setTimeout(()=>{
                setMirrorText(!mirrorText)
                setText(rotate?list[counter]?.english:list[counter]?.hungarian)
                setButtonDisabled(false)
            },1000)
        }else{
            setButtonDisabled(true)
            setText("")
            setMirrorTextReturn(!mirrorTextReturn)
            setTimeout(() => {
                setMirrorText(!mirrorText)
                setRotate(!rotate)
                setTimeout(() => {
                    setText(rotate?list[counter]?.english:list[counter]?.hungarian)
                }, 1000);
            },0);
            setTimeout(() => {
                setButtonDisabled(false)
            }, 1000);
        }
    }

    return(
        <div className='flex flex-col justify-center items-center h-[20rem] max-w-lg w-[90%]'>
            <h1 className='mb-4 text-secondary_color text-[1.5rem] font-light'>{title}</h1>
            <small></small>
            <div className={`${rotate? 'rotate_card':'rotate_card_origin'} ${mirrorText&&'rotate_card_null'} ${mirrorTextReturn&&'rotate_card_180'} shadow-card flex justify-center items-center text-secondary_color w-full h-full border-solid border border-black rounded-lg mb-8`} onClick={buttonDisabled?null:set_rotate}>{text}</div>
            <button className="text-center max-w-[25rem] my-0 mx-auto p-1 text-3xl bg-[rgba(163,133,158,0.5)] text-white border-none rounded-xl shadow-button cursor-pointer outline-none mb-8 tracking-[0.3rem]" onClick={new_counter} disabled={buttonDisabled}>Next</button>
        </div>
    )
}

export default Card