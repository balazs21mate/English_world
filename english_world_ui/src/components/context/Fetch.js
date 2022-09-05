import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const FetchContext = createContext(true)

export const FetchProvider = (props) => {
    const [wordsList, setWordsList] = useState([]);
    const [memoryWordsList, setMemoryWordsList] = useState([]);

    const baseUrl = process.env.REACT_APP_BASE_URL;
  
    useEffect(() => {
      const fetch = async () =>{
        const data = await axios.get(`${baseUrl}words_list/`).catch(err => console.log(err));
  
        setWordsList(data.data);

        const memory_data = await axios.get(`${baseUrl}memory_words/`).catch(err => console.log(err));
  
        setMemoryWordsList(memory_data.data);
        };
      fetch();
    },[baseUrl])
    return (
        <FetchContext.Provider value={{
            wordsList: wordsList,
            setWordsList: setWordsList,
            memoryWordsList: memoryWordsList,
            setMemoryWordsList: setMemoryWordsList
        }}>
            {props.children}
        </FetchContext.Provider>
    )
}