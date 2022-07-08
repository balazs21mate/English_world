import React from 'react';
import MemoryCard from './MemoryCard';

function MemoryCards(){
    return(
        <div className="memory-cards-container">
            <h1>Memory Game</h1>
            <div className="memory-cards">
                <MemoryCard/>
                <MemoryCard/>
                <MemoryCard/>
                <MemoryCard/>
                <MemoryCard/>
                <MemoryCard/>
                <MemoryCard/>
                <MemoryCard/>
                <MemoryCard/>
                <MemoryCard/>
                <MemoryCard/>
                <MemoryCard/>
            </div>
        </div>
    )
}

export default MemoryCards