import React, {useContext, useState, useEffect} from 'react';
import Card from './Card';
import Title from './Title';
import {FetchContext} from '../../context/Fetch';

import {ArrowSmDownIcon} from '@heroicons/react/outline';

function Cards(){
    const {wordsList} = useContext(FetchContext);
    const [lists, setLists] = useState(false);
    const [cardItem, setCardItem] = useState({});

    useEffect(()=>{setCardItem(wordsList[0])},[wordsList]);

    return(
        <div className="flex flex-col items-center">
          <h1 className='text-4xl font-light mb-2 text-secondary_color'>Study Cards</h1>
          <hr className='w-[60%] mb-2 border-b-solid border-secondary_color'></hr>
          <div className='w-full lg:w-[80%] flex flex-col lg:flex-row justify-around items-center lg:items-start'>
            <div>
              <div className='flex lg:hidden h-7'>
                <input className='flex border text-secondary_color border-button rounded-l outline-none items-center p-2' type='text' placeholder='Lists...'></input>
                <button className="text-center h-full bg-button text-white border-none shadow-button cursor-pointer outline-none mb-2 flex items-center" onClick={()=>setLists(!lists)}><ArrowSmDownIcon className='w-8'/></button>
              </div>
              <div className={`${lists?'flex':'hidden'} lg:flex flex-col text-secondary_color`}>
                {
                  wordsList.map((item, index) => <Title key={index} set_card_item={setCardItem} set_list={setLists} item={item}/>)
                }
              </div>
            </div>
              <Card title={cardItem?.title} list={cardItem?.list}/>
          </div>
        </div>
    )
}

export default Cards