import React, {useState, useEffect, useContext} from 'react';
import Card from './Card';
import SearchBar from './SearchBar';
import {FetchContext} from '../../context/Fetch';

function Cards(){
    const {wordsList} = useContext(FetchContext);
    const [cardItem, setCardItem] = useState({});

    useEffect(()=>{
      setCardItem(wordsList[0]);
    },[wordsList]);

    return(
        <div className="flex flex-col items-center">
          <h1 className='text-4xl font-light mb-2 text-secondary_color'>Study Cards</h1>
          <hr className='w-[60%] mb-2 border-b-solid border-secondary_color'></hr>
          <div className='w-full lg:w-[80%] flex flex-col lg:flex-row justify-around items-center lg:items-start'>
            <SearchBar set_card_item={setCardItem}/>
            <Card title={cardItem?.title} list={cardItem?.list}/>
          </div>
        </div>
    )
}

export default Cards