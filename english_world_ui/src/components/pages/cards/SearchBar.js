import React, {useContext, useState, useEffect} from 'react';
import Title from './Title';
import {FetchContext} from '../../context/Fetch';

import CardsInput from './CardsInput';
import CardsButton from './CardsButton';

function SearchBar({set_card_item}) {
    const {wordsList} = useContext(FetchContext);
    const [lists, setLists] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [cardItemTitle, setCardItemTitle] = useState([]);

    useEffect(()=>{
        set_card_item(wordsList[0]);
        for (let index = 0; index < wordsList.length; index++) {
            setCardItemTitle(list => [...list, wordsList[index].title.toLowerCase()])
        }
    },[wordsList,set_card_item]);

    return(
        <div className="flex flex-col items-center">
            <div>
                <div className='flex lg:hidden h-7'>
                    <CardsInput value={inputValue} set_value={setInputValue}/>
                    <CardsButton lists={lists} set_lists={setLists}/>
                </div>
                {
                cardItemTitle.includes(inputValue)?
                <div className={`flex flex-col`}>
                    <Title set_value={setInputValue} set_card_item={set_card_item} set_list={setLists} item={wordsList.filter(item => item.title.toLowerCase() === inputValue)}/>
                </div>
                :
                <div className={`${lists?'flex':'hidden'} lg:flex flex-col`}>
                {
                    wordsList.map((item, index) => <Title key={index} set_value={setInputValue} set_card_item={set_card_item} set_list={setLists} item={[item]}/>)
                }
                </div>
                }
            </div>
        </div>
    )
}

export default SearchBar;