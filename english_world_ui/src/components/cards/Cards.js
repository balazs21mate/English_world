import React, {useEffect, useState} from 'react';
import Card from './Card';
import axios from 'axios';

function Cards(){
    const [learnedWordsList, setLearnedWordsList] = useState([]);
    const [newWordsList, setnewWordsList] = useState([]);
    const [practiceWordsList, setpracticeWordsList] = useState([]);

    const baseUrl = process.env.REACT_APP_BASE_URL;
  
    useEffect(() => {
      const fetch = async () =>{
        const learned_data = await axios.get(`${baseUrl}learned_words/`).catch(err => console.log(err));
  
        setLearnedWordsList(learned_data.data);

        const new_data = await axios.get(`${baseUrl}new_words/`).catch(err => console.log(err));
  
        setnewWordsList(new_data.data);

        const practice_data = await axios.get(`${baseUrl}practice_words/`).catch(err => console.log(err));
  
        setpracticeWordsList(practice_data.data);
        };
      fetch();
    },[baseUrl])

    return(
        <div className="flex flex-col items-center">
          <h1 className='text-4xl font-light mb-2 text-secondary_color'>Study Cards</h1>
          <hr className='w-[60%] mb-12 border-b-solid border-secondary_color'></hr>
          <Card title="Learned words" list={learnedWordsList}/>
          <Card title="New words" list={newWordsList}/>
          <Card title="Practice words" list={practiceWordsList}/>
        </div>
    )
}

export default Cards