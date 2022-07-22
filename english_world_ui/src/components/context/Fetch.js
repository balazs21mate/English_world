import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const FetchContext = createContext(true)

export const FetchProvider = (props) => {
    const [mostCommonVerbs, setMostCommonVerbs] = useState([]);

    const baseUrl = process.env.REACT_APP_BASE_URL;
  
    useEffect(() => {
      const fetch = async () =>{
        const data = await axios.get(`${baseUrl}most_common_verbs/`).catch(err => console.log(err));
  
        setMostCommonVerbs(data.data);
        };
      fetch();
    },[baseUrl])
    return (
        <FetchContext.Provider value={{
            mostCommonVerbs: mostCommonVerbs
        }}>
            {props.children}
        </FetchContext.Provider>
    )
}