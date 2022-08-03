import React, {useContext} from "react";

import {CreateListContext} from '../../context/CreateList';

function InputWords(){
    const {english, hungarian, setEnglish, setHungarian} = useContext(CreateListContext)

    const handleInput = (setItem)=>(event) => {
        setItem(event.target.value);
    }

    return(
        <>
            <div className="flex">
                <label className="text-xl mt-1">English:
                    <input type='text' className="w-full outline-none ml-2 mt-2 border border-secondary_color rounded p-2" placeholder="English..." onChange={handleInput(setEnglish)} value={english}/>
                </label>
                <label className="text-xl mt-1">Hungarian:
                    <input type='text' className="w-full outline-none ml-2 mt-2 border border-secondary_color rounded p-2" placeholder="Hungarian..." onChange={handleInput(setHungarian)} value={hungarian}/>
                </label>
            </div>
        </>
    )
}

export default InputWords;