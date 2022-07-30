import React, {useContext, useState} from 'react';
import Title from './Title';

import {ArrowSmDownIcon} from '@heroicons/react/outline';

import {FetchContext} from '../../context/Fetch';

function SearchBar({set_card_item}) {
    const {wordsList} = useContext(FetchContext);
    const [showTitles, setShowTitles] = useState(false);
    const [inputValue, setInputValue] = useState("");

    return(
        <div className="flex flex-col items-center">
            <div>
                <div className='flex lg:hidden h-7'>
                    <input className='flex border h-full text-secondary_color border-button rounded-l outline-none items-center p-2' type='text' placeholder='Search...' onChange={(e)=>setInputValue(e.target.value)} value={inputValue}/>
                    <button className='text-center h-full bg-button text-white border-none shadow-button cursor-pointer outline-none mb-2 flex items-center' disabled={inputValue?true:false} onClick={()=>setShowTitles(!showTitles)}><ArrowSmDownIcon className='w-6'/></button>
                </div>
                {
                    wordsList.filter((item)=> {
                        const searchTerm = inputValue.toLowerCase();
                        const itemTitle = item.title.toLowerCase();
                        
                        return(
                            searchTerm && itemTitle.startsWith(searchTerm)
                        );
                    })
                    .map((item,index)=>
                    (
                        <Title key={index} set_value={setInputValue} set_card_item={set_card_item} set_list={setShowTitles} item={[item]}/>)
                    )
                }
                <div className={`${showTitles?'flex':'hidden'} lg:flex flex-col`}>
                    {
                        wordsList.map((item, index) => <Title key={index} set_value={setInputValue} set_card_item={set_card_item} set_list={setShowTitles} item={[item]}/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default SearchBar;