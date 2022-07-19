import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const FetchContext = createContext(true)

export const FetchProvider = (props) => {
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
    return (
        <FetchContext.Provider value={{
            learnedWordsList: learnedWordsList,
            setLearnedWordsList: setLearnedWordsList,
            newWordsList: newWordsList,
            setnewWordsList: setnewWordsList,
            practiceWordsList: practiceWordsList,
            setpracticeWordsList: setpracticeWordsList
        }}>
            {props.children}
        </FetchContext.Provider>
    )
}