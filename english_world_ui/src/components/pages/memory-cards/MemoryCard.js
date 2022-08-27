import React, {useState} from 'react'

function MemoryCard({text}){
    const [rotate, setRotate] = useState(false);
    const [textToCard, setTextToCard] = useState('');

    const handleRotateCard = () => {
        setRotate(true);
        setTimeout(() => {
            setTextToCard(text);
            setTimeout(() => {
                setTextToCard('');
                setRotate(false);
            }, 2000);
        }, 1000);
    }

    return(
        <div>
            <div className={`${rotate?'rotate':'rotate_card'} text-sm w-28 h-28 flex transform-scale scale-150 text-center justify-center transition-all duration-1000 items-center text-secondary_color cursor-pointer border-solid border border-black rounded-lg shadow-card`} onClick={handleRotateCard}>{textToCard}</div>
        </div>
    )
}

export default MemoryCard