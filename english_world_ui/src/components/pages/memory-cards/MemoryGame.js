import React from 'react';
import PagesTitle from '../PagesTitle';
import MemoryCard from './MemoryCard';

function MemoryGame(){
    return(
        <div className="flex flex-col items-center text-secondary_color mb-6">
            <PagesTitle title='Memory Game'/>
            <MemoryCard/>
            <MemoryCard/>
            <MemoryCard/>
            <MemoryCard/>
        </div>
    )
}

export default MemoryGame