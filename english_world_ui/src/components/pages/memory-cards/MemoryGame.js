import React, {useContext, useState, useEffect} from 'react';
import PagesTitle from '../PagesTitle';
import MemoryCard from './MemoryCard';

import {FetchContext} from '../../context/Fetch';
import {MemoryContext} from '../../context/Memory';

function MemoryGame(){
    const {memoryWordsList} = useContext(FetchContext);
    const {setRotateAll} = useContext(MemoryContext);
    const [localList, setLocalList] = useState([]);
    const [numberOfCards, setNumberOfCards] = useState(8);
    const [numberOfCols, setNumberOfCols] = useState(4);
    const [gridCols, setGridCols] = useState({});

    useEffect(()=>{
        const cols = {
            2:'grid-cols-2',
            4:'grid-cols-4',
            5:'grid-cols-5',
            6:'grid-cols-6',
            7:'grid-cols-7'
        };

        setGridCols(cols);
    }, [setGridCols])

    useEffect(()=>{
        const list=[]
        const shuffledArray = memoryWordsList.sort(function(){return 0.5 - Math.random()}).slice(0,numberOfCards);
        for (let index = 0; index < shuffledArray.length; index++) {
            list.push({id: shuffledArray[index].id, word: shuffledArray[index].english});
            list.push({id: shuffledArray[index].id, word: shuffledArray[index].hungarian});
        }

        setLocalList(list);
    },[memoryWordsList, numberOfCards])

    const handleLayout = (numCol, numCards) => {
        setNumberOfCards(numCards);
        setNumberOfCols(numCol);
    }

    const handleNewGame = () => {
        setRotateAll(true);

        const list=[]
        const shuffledArray = memoryWordsList.sort(function(){return 0.5 - Math.random()}).slice(0,numberOfCards);
        for (let index = 0; index < shuffledArray.length; index++) {
            list.push({id: shuffledArray[index].id, word: shuffledArray[index].english});
            list.push({id: shuffledArray[index].id, word: shuffledArray[index].hungarian});
        }

        setLocalList(list);
    }

    return(
        
        <div className="flex flex-col items-center text-secondary_color mb-6">
            <PagesTitle title='Memory Game'/>
            <h1 className='text-3xl'>Level:</h1>
            <div className='hidden md:flex'>
                <button className="text-center max-w-[25rem] mt-6 mr-2 mx-auto p-1 text-lg text-button border border-button rounded-lg outline-none mb-8 tracking-[0.3rem]" onClick={()=>{handleLayout(4,6);handleNewGame()}}>4x3</button>
                <button className="text-center max-w-[25rem] mt-6 mr-2 mx-auto p-1 text-lg text-button border border-button rounded-lg outline-none mb-8 tracking-[0.3rem]" onClick={()=>{handleLayout(4,8);handleNewGame()}}>4x4</button>
                <button className="text-center max-w-[25rem] mt-6 mr-2 mx-auto p-1 text-lg text-button border border-button rounded-lg outline-none mb-8 tracking-[0.3rem]" onClick={()=>{handleLayout(5,10);handleNewGame()}}>5x4</button>
                <button className="text-center max-w-[25rem] mt-6 mr-2 mx-auto p-1 text-lg text-button border border-button rounded-lg outline-none mb-8 tracking-[0.3rem]" onClick={()=>{handleLayout(6,15);handleNewGame()}}>6x5</button>
                <button className="text-center max-w-[25rem] mt-6 mr-2 mx-auto p-1 text-lg text-button border border-button rounded-lg outline-none mb-8 tracking-[0.3rem]" onClick={()=>{handleLayout(6,18);handleNewGame()}}>6x6</button>
                <button className="text-center max-w-[25rem] mt-6 mx-auto p-1 text-lg text-button border border-button rounded-lg outline-none mb-8 tracking-[0.3rem]" onClick={()=>{handleLayout(7,21);handleNewGame()}}>7x6</button>
            </div>
            <div className='flex md:hidden'>
                <button className="text-center max-w-[25rem] mt-6 mr-2 mx-auto p-1 text-lg text-button border border-button rounded-lg outline-none mb-8 tracking-[0.3rem]" onClick={()=>{handleLayout(2,2);handleNewGame()}}>2x2</button>
                <button className="text-center max-w-[25rem] mt-6 mr-2 mx-auto p-1 text-lg text-button border border-button rounded-lg outline-none mb-8 tracking-[0.3rem]" onClick={()=>{handleLayout(4,6);handleNewGame()}}>4x3</button>
                <button className="text-center max-w-[25rem] mt-6 mr-2 mx-auto p-1 text-lg text-button border border-button rounded-lg outline-none mb-8 tracking-[0.3rem]" onClick={()=>{handleLayout(4,8);handleNewGame()}}>4x4</button>
            </div>
            <div className={`grid ${numberOfCols?gridCols[numberOfCols]:'grid-cols-4'} gap-1`}>
                {
                    localList.map((item,index) => <MemoryCard key={index} item={item}/>)
                }
            </div>
            <button className="text-center max-w-[25rem] mt-6 mx-auto p-1 text-lg text-white bg-button rounded-lg outline-none mb-8 tracking-[0.3rem]" onClick={handleNewGame}>New Game</button>
        </div>
    )
}

export default MemoryGame