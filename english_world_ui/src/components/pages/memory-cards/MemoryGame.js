import React, {useContext, useState, useEffect} from 'react';
import PagesTitle from '../PagesTitle';
import MemoryCard from './MemoryCard';

import {FetchContext} from '../../context/Fetch';

function MemoryGame(){
    const {memoryWordsList} = useContext(FetchContext);
    const [localList, setLocalList] = useState([]);
    const [numberOfCards, setNumberOfCards] = useState(8);

    useEffect(()=>{
        const list=[]
        console.log(memoryWordsList.length);
        const shuffledArray = memoryWordsList.sort(function(){return 0.5 - Math.random()}).slice(0,numberOfCards);
        for (let index = 0; index < shuffledArray.length; index++) {
            list.push({id: shuffledArray[index].id, word: shuffledArray[index].english});
            list.push({id: shuffledArray[index].id, word: shuffledArray[index].hungarian});
        }

        setLocalList(list);
    },[memoryWordsList, numberOfCards])

    return(
        <div className="flex flex-col items-center text-secondary_color mb-6">
            <PagesTitle title='Memory Game'/>
            <h1 className='text-3xl'>Level:</h1>
            <div>
                <button className="text-center max-w-[25rem] mt-6 mr-2 mx-auto p-1 text-lg text-button border border-button rounded-lg outline-none mb-8 tracking-[0.3rem]" onClick={()=>{setNumberOfCards(6)}}>4x3</button>
                <button className="text-center max-w-[25rem] mt-6 mr-2 mx-auto p-1 text-lg text-button border border-button rounded-lg outline-none mb-8 tracking-[0.3rem]" onClick={()=>{setNumberOfCards(8)}}>4x4</button>
                <button className="text-center max-w-[25rem] mt-6 mr-2 mx-auto p-1 text-lg text-button border border-button rounded-lg outline-none mb-8 tracking-[0.3rem]" onClick={()=>{setNumberOfCards(10)}}>5x4</button>
                <button className="text-center max-w-[25rem] mt-6 mr-2 mx-auto p-1 text-lg text-button border border-button rounded-lg outline-none mb-8 tracking-[0.3rem]" onClick={()=>{setNumberOfCards(15)}}>6x5</button>
                <button className="text-center max-w-[25rem] mt-6 mr-2 mx-auto p-1 text-lg text-button border border-button rounded-lg outline-none mb-8 tracking-[0.3rem]" onClick={()=>{setNumberOfCards(18)}}>6x6</button>
                <button className="text-center max-w-[25rem] mt-6 mx-auto p-1 text-lg text-button border border-button rounded-lg outline-none mb-8 tracking-[0.3rem]" onClick={()=>{setNumberOfCards(21)}}>7x6</button>
            </div>
            <div className='grid grid-cols-3 md:grid-cols-4 gap-1 relative'>
                {
                    localList.sort(function(){return 0.5 - Math.random()}).map((item,index) => <MemoryCard key={index} item={item}/>)
                }
            </div>
        </div>
    )
}

export default MemoryGame