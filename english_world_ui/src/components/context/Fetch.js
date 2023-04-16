import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const FetchContext = createContext(true)

export const FetchProvider = (props) => {
    const [wordsList, setWordsList] = useState([]);
    const [grammarList, setGrammarList] = useState([]);

    const baseUrl = "http://localhost:3001/";
  
    useEffect(() => {

      const fetch = async () =>{
        const data = await axios.get(`${baseUrl}words_list/`).catch(err => console.log(err));
  
        setWordsList(data.data);

        const grammar_data = await axios.get(`${baseUrl}grammar/`).catch(err => console.log(err));
  
        setGrammarList(grammar_data.data);
        };

      fetch();
    },[baseUrl])
    return (
        <FetchContext.Provider value={{
            wordsList: wordsList,
            setWordsList: setWordsList,
            grammarList: grammarList
        }}>
            {props.children}
        </FetchContext.Provider>
    )
}