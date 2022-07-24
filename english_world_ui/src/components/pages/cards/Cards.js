import React, {useContext, useState, useEffect} from 'react';
import Card from './Card';
import Title from './Title';
import {FetchContext} from '../../context/Fetch';

import CardsInput from './CardsInput';
import CardsButton from './CardsButton';

function Cards(){
    const {wordsList} = useContext(FetchContext);
    const [lists, setLists] = useState(false);
    const [cardItem, setCardItem] = useState({});
    const [cardItemTitle, setCardItemTitle] = useState([]);
    const [inputValue, setInputValue] = useState("");

    useEffect(()=>{
      setCardItem(wordsList[0]);
      for (let index = 0; index < wordsList.length; index++) {
        setCardItemTitle(list => [...list, wordsList[index].title])
      }
    },[wordsList]);

    return(
        <div className="flex flex-col items-center">
          <h1 className='text-4xl font-light mb-2 text-secondary_color'>Study Cards</h1>
          <hr className='w-[60%] mb-2 border-b-solid border-secondary_color'></hr>
          <div className='w-full lg:w-[80%] flex flex-col lg:flex-row justify-around items-center lg:items-start'>
            <div>
              <div className='flex lg:hidden h-7'>
                <CardsInput value={inputValue} set_value={setInputValue}/>
                <CardsButton lists={lists} set_lists={setLists}/>
              </div>
              {
                cardItemTitle.includes(inputValue)?
                <div className={`flex flex-col`}>
                  <Title set_value={setInputValue} set_card_item={setCardItem} set_list={setLists} item={wordsList.filter(item => item.title === inputValue)}/>
                </div>
                :
                <div className={`${lists?'flex':'hidden'} lg:flex flex-col`}>
                {
                  wordsList.map((item, index) => <Title key={index} set_value={setInputValue} set_card_item={setCardItem} set_list={setLists} item={[item]}/>)
                }
                </div>
              }
            </div>
              <Card title={cardItem?.title} list={cardItem?.list}/>
          </div>
        </div>
    )
}

export default Cards