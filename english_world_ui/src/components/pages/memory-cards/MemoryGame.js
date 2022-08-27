import React from 'react';
import PagesTitle from '../PagesTitle';
import MemoryCard from './MemoryCard';

function MemoryGame(){

    return(
        <div className="flex flex-col items-center text-secondary_color mb-6">
            <PagesTitle title='Memory Game'/>
            <div className='grid grid-cols-3 md:grid-cols-4 gap-1 relative'>
                <MemoryCard text='english fdfdsfds fdsferw rewrew rewrwe fdsfds fdwrewrewrw rewrwerew rewrwerwerwerew rewrwerwerewrew rewrwerew'/>
                <MemoryCard text='english'/>
                <MemoryCard text='english'/>
                <MemoryCard text='english'/>
                <MemoryCard text='english'/>
                <MemoryCard text='english'/>
                <MemoryCard text='english'/>
                <MemoryCard text='english'/>
                <MemoryCard text='english'/>
                <MemoryCard text='english'/>
                <MemoryCard text='english'/>
                <MemoryCard text='english'/>
                <MemoryCard text='english'/>
                <MemoryCard text='english'/>
                <MemoryCard text='english'/>
                <MemoryCard text='english'/>
            </div>
        </div>
    )
}

export default MemoryGame