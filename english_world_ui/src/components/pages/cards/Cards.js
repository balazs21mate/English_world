import React, {useContext, useState, useEffect} from 'react';
import Card from './Card';
import {FetchContext} from '../../context/Fetch'

function Cards(){
    const {mostCommonVerbs} = useContext(FetchContext);
    const [titles, setTitles] = useState([]);

    useEffect(()=>{
      if (mostCommonVerbs) {
        mostCommonVerbs.forEach(element => {
          if (titles.length === 0) {
            setTitles(oldArray => [...oldArray,element.title] )
          }
        });
      }
    }, [mostCommonVerbs])

    return(
        <div className="flex flex-col items-center">
          <h1 className='text-4xl font-light mb-2 text-secondary_color'>Study Cards</h1>
          <hr className='w-[60%] mb-12 border-b-solid border-secondary_color'></hr>
          <Card title={mostCommonVerbs[1]?.title} list={mostCommonVerbs[1]?.list}/>
        </div>
    )
}

export default Cards