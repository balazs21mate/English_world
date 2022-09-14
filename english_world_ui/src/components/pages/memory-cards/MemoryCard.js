import React, {useState, useContext, useEffect} from 'react';

import {MemoryContext} from '../../context/Memory';

function MemoryCard({item}){
    const {rotateAll, setRotateAll, setMemoryIdList, analogousIdList, disabledAllCards} = useContext(MemoryContext);
    const [rotate, setRotate] = useState(false);
    const [textToCard, setTextToCard] = useState('');
    const [disableCard, setDisableCard] = useState(false);
    const [disabledColor, setDisabledColor] = useState(false);

    useEffect(()=>{
        if(!rotate){
            setDisableCard(false);
        }
    }, [rotate, setDisableCard])

    useEffect(()=>{
        if (analogousIdList.includes(item.id)) {
            setDisableCard(true);
            setDisabledColor(true);
        }else{
            setDisableCard(false);
            setDisabledColor(false);
        }
    },[analogousIdList, item.id])

    useEffect(()=>{
        if (rotateAll) {
            if (!analogousIdList.includes(item.id)) {
                setRotate(false);
                setTextToCard('');
            }
        }
    },[rotateAll,analogousIdList,item.id])

    const handleRotateCard = () => {
        setDisableCard(true);
        setRotateAll(false);
        setMemoryIdList(list => [...list, item.id]);
        setRotate(true);
        setTimeout(() => {
            setTextToCard(item.word);
        }, 1000);
    }

    return(
        <div>
            <div className={`${rotate?'':'rotate_card'} text-xs w-20 h-20 flex text-center justify-center transition-all duration-1000 items-center text-secondary_color cursor-pointer border-solid border ${disabledColor?'border-green-600':'border-secondary_color'} rounded-lg`} onClick={disabledAllCards || disableCard?undefined:handleRotateCard}>{textToCard}</div>
        </div>
    )
}

export default MemoryCard