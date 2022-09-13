import React, {useState, useContext, useEffect} from 'react';

import {MemoryContext} from '../../context/Memory';

function MemoryCard({item}){
    const {rotateAll, setRotateAll, setMemoryIdList, analogousIdList, disabledAllCards} = useContext(MemoryContext);
    const [rotate, setRotate] = useState(false);
    const [textToCard, setTextToCard] = useState('');
    const [disableCard, setDisableCard] = useState(false);

    useEffect(()=>{
        if (analogousIdList.includes(item.id)) {
            setDisableCard(true);
        }else{setDisableCard(false);}
    },[analogousIdList, item.id])

    useEffect(()=>{
        if (rotateAll) {
            if (analogousIdList.includes(item.id)) {
                
            } else {
                setRotate(false);
                setTextToCard('');
            }
        }
    },[rotateAll,analogousIdList,item.id])

    const handleRotateCard = () => {
        setRotateAll(false);
        setMemoryIdList(list => [...list, item.id]);
        setRotate(true);
        setTimeout(() => {
            setTextToCard(item.word + ' ' + item.id);
        }, 1000);
    }

    return(
        <div>
            <div className={`${rotate?'':'rotate_card'} text-xs w-20 h-20 flex text-center justify-center transition-all duration-1000 items-center text-secondary_color cursor-pointer border-solid border ${disableCard?'border-green-600':'border-secondary_color'} rounded-lg`} disabled={disableCard?true:false} onClick={handleRotateCard}>{textToCard}</div>
        </div>
    )
}

export default MemoryCard