import React, {useContext, useState, useEffect} from 'react';
import PagesTitle from '../PagesTitle';
import MemoryCard from './MemoryCard';

import {FetchContext} from '../../context/Fetch';

function MemoryGame(){
    const {memoryWordsList} = useContext(FetchContext);
    const [localList, setLocalList] = useState([]);

    useEffect(()=>{
        const list=[]
        const shuffledArray = memoryWordsList.sort(function(){return 0.5 - Math.random()}).slice(0,8);
        for (let index = 0; index < shuffledArray.length; index++) {
            list.push({id: shuffledArray[index].id, word: shuffledArray[index].english});
            list.push({id: shuffledArray[index].id, word: shuffledArray[index].hungarian});
        }

        setLocalList(list);
    },[memoryWordsList])

    return(
        <div className="flex flex-col items-center text-secondary_color mb-6">
            <PagesTitle title='Memory Game'/>
            <div className='grid grid-cols-3 md:grid-cols-4 gap-1 relative'>
                {
                    localList.sort(function(){return 0.5 - Math.random()}).map((item,index) => <MemoryCard key={index} item={item}/>)
                }
            </div>
        </div>
    )
}

export default MemoryGame