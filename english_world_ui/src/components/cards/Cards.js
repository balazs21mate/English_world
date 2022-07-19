import React, {useContext} from 'react';
import Card from './Card';
import {FetchContext} from '../context/Fetch'

function Cards(){
    const {learnedWordsList, setLearnedWordsList,newWordsList, setnewWordsList,practiceWordsList, setpracticeWordsList} = useContext(FetchContext);

    return(
        <div className="flex flex-col items-center">
          <h1 className='text-4xl font-light mb-2 text-secondary_color'>Study Cards</h1>
          <hr className='w-[60%] mb-12 border-b-solid border-secondary_color'></hr>
          <Card title="Learned words" list={learnedWordsList} set_list={setLearnedWordsList}/>
          <Card title="New words" list={newWordsList} set_list={setnewWordsList}/>
          <Card title="Practice words" list={practiceWordsList} set_list={setpracticeWordsList}/>
        </div>
    )
}

export default Cards