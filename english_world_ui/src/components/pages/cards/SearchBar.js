import React, {useContext, useState} from 'react';
import Title from './Title';

import {ArrowSmDownIcon} from '@heroicons/react/outline';

import {FetchContext} from '../../context/Fetch';
import {CreateListContext} from '../../context/CreateList';

function SearchBar({set_card_item}) {
    const {wordsList} = useContext(FetchContext);
    const {createList} = useContext(CreateListContext);
    const [showTitles, setShowTitles] = useState(false);
    const [inputValue, setInputValue] = useState("");

    return(
        <div className="flex flex-col items-center lg:mt-6">
            <div className='relative'>
                <div className='flex h-7'>
                    <input className='flex border h-full text-secondary_color border-button rounded-l outline-none items-center p-2' type='text' placeholder='Search...' onChange={(e)=>setInputValue(e.target.value)} value={inputValue}/>
                    <button className='text-center h-full bg-button text-white border-none shadow-button cursor-pointer outline-none mb-2 flex items-center' disabled={inputValue?true:false} onClick={()=>setShowTitles(!showTitles)}><ArrowSmDownIcon className='w-6'/></button>
                </div>
                <div className='flex w-full absolute flex-col'>
                    {
                        wordsList.filter((item) => inputValue&&item.title.toLowerCase().includes(inputValue.toLowerCase()))
                        .map((item, index)=>
                        (
                            <Title key={index} set_value={setInputValue} set_card_item={set_card_item} set_list={setShowTitles} item={item}/>)
                        )
                    }
                    {
                        createList.filter((item) => inputValue&&item.title.toLowerCase().includes(inputValue.toLowerCase()))
                        .map((item, index)=>
                        (
                            <Title key={index} set_value={setInputValue} set_card_item={set_card_item} set_list={setShowTitles} item={item}/>)
                        )
                    }
                </div>
                <div className={`${showTitles?'flex':'hidden'} w-full absolute flex-col`}>
                    {
                        wordsList.map((item, index) => <Title key={index} set_value={setInputValue} set_card_item={set_card_item} set_list={setShowTitles} item={item}/>)
                    }
                    {
                        createList.map((item, index) => <Title key={index} set_value={setInputValue} set_card_item={set_card_item} set_list={setShowTitles} item={item}/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default SearchBar;