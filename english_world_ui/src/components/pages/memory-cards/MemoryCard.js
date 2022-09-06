import React, {useState} from 'react'

function MemoryCard({item}){
    const [rotate, setRotate] = useState(false);
    const [textToCard, setTextToCard] = useState('');

    const handleRotateCard = () => {
        setRotate(true);
        setTimeout(() => {
            setTextToCard(item.word + ' ' + item.id);
        }, 1000);
    }

    return(
        <div>
            <div className={`${rotate?'':'rotate_card'} text-sm w-28 h-28 flex text-center justify-center transition-all duration-1000 items-center text-secondary_color cursor-pointer border-solid border border-secondary_color rounded-lg`} onClick={handleRotateCard}>{textToCard}</div>
        </div>
    )
}

export default MemoryCard