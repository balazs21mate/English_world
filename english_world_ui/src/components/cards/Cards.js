import React, {useEffect, useState} from 'react';
import './cards.css';
import Card from './Card';
import axios from 'axios';

function Cards(){
    const [learnedWordsList, setLearnedWordsList] = useState([]);
    const [newWordsList, setnewWordsList] = useState([]);
    const [practiceWordsList, setpracticeWordsList] = useState([]);

    const baseUrl = process.env.REACT_APP_BASE_URL;
  
    const fetch = () =>{
        axios({
          method: 'get',
          url: `${baseUrl}learned_words/`
        })
        .then(res => setLearnedWordsList(res.data))
        .catch(err => console.log(err))

        axios({
            method: 'get',
            url: `${baseUrl}new_words/`
          })
          .then(res => setnewWordsList(res.data))
          .catch(err => console.log(err))

        axios({
            method: 'get',
            url: `${baseUrl}practice_words/`
          })
          .then(res => setpracticeWordsList(res.data))
          .catch(err => console.log(err))
      };
  
    useEffect(() => {
      fetch();
    },[])

    return(
        <div className="cards-container">
            <Card title="Learned words" list={learnedWordsList}/>
            <Card title="New words" list={newWordsList}/>
            <Card title="Practice words" list={practiceWordsList}/>
        </div>
    )
}

export default Cards