import React, {createContext, useState} from 'react';

export const CreateListContext = createContext(true)

export const CreateListProvider = (props) => {
    const [createList, setCreateList] = useState([]);
    const [english, setEnglish] = useState('');
    const [hungarian, setHungarian] = useState('')

    return (
        <CreateListContext.Provider value={{
            createList: createList,
            setCreateList: setCreateList,
            english: english,
            setEnglish: setEnglish,
            hungarian: hungarian,
            setHungarian: setHungarian
        }}>
            {props.children}
        </CreateListContext.Provider>
    )
}