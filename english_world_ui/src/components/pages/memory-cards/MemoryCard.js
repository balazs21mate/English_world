import React, {useState, useContext, useEffect} from 'react';

import {MemoryContext} from '../../context/Memory';

function MemoryCard({item}){
    const {rotateAll, setRotateAll} = useContext(MemoryContext);
    const [rotate, setRotate] = useState(false);
    const [textToCard, setTextToCard] = useState('');

    useEffect(()=>{
        if (rotateAll) {
            setRotate(false);
            setTextToCard('');
        }
    },[rotateAll])

    const handleRotateCard = () => {
        setRotateAll(false);
        setRotate(true);
        setTimeout(() => {
            setTextToCard(item.word + ' ' + item.id);
        }, 1000);
    }

    return(
        <div>
            <div className={`${rotate?'':'rotate_card'} text-xs w-20 h-20 flex text-center justify-center transition-all duration-1000 items-center text-secondary_color cursor-pointer border-solid border border-secondary_color rounded-lg`} onClick={handleRotateCard}>{textToCard}</div>
        </div>
    )
}

export default MemoryCard