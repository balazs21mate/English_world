import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const FetchContext = createContext(true)

export const FetchProvider = (props) => {
    const [learnedWordsList, setLearnedWordsList] = useState([]);

    const baseUrl = process.env.REACT_APP_BASE_URL;
  
    useEffect(() => {
      const fetch = async () =>{
        const learned_data = await axios.get(`${baseUrl}learned_words/`).catch(err => console.log(err));
  
        setLearnedWordsList(learned_data.data);
        };
      fetch();
    },[baseUrl])
    return (
        <FetchContext.Provider value={{
            learnedWordsList: learnedWordsList,
            setLearnedWordsList: setLearnedWordsList,
        }}>
            {props.children}
        </FetchContext.Provider>
    )
}