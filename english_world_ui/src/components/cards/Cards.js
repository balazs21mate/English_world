import React, {useContext} from 'react';
import Card from './Card';
import {FetchContext} from '../context/Fetch'

function Cards(){
    const {learnedWordsList} = useContext(FetchContext);

    return(
        <div className="flex flex-col items-center">
          <h1 className='text-4xl font-light mb-2 text-secondary_color'>Study Cards</h1>
          <hr className='w-[60%] mb-12 border-b-solid border-secondary_color'></hr>
          <Card title="Most Common Verbs" list={learnedWordsList}/>
        </div>
    )
}

export default Cards