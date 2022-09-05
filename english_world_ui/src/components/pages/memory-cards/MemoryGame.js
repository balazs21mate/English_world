import React, {useContext, useState, useEffect} from 'react';
import PagesTitle from '../PagesTitle';
import MemoryCard from './MemoryCard';

import {FetchContext} from '../../context/Fetch';

function MemoryGame(){
    const {memoryWordsList} = useContext(FetchContext);
    const [localList, setLocalList] = useState([]);

    useEffect(()=>{
        const list=[]
        for (let index = 0; index < memoryWordsList.length; index++) {
            list.push({id: memoryWordsList[index].id, word: memoryWordsList[index].english});
            list.push({id: memoryWordsList[index].id, word: memoryWordsList[index].hungarian});
        }

        setLocalList(list);
    },[memoryWordsList])

    return(
        <div className="flex flex-col items-center text-secondary_color mb-6">
            <PagesTitle title='Memory Game'/>
            <div className='grid grid-cols-3 md:grid-cols-4 gap-1 relative'>
                {
                    localList.sort(function(){return 0.5 - Math.random()}).map((item,index) => <MemoryCard key={index} text={item.word}/>)
                }
            </div>
        </div>
    )
}

export default MemoryGame