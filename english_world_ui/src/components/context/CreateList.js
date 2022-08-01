import React, {createContext, useState} from 'react';

export const CreateListContext = createContext(true)

export const CreateListProvider = (props) => {
    const [createList, setCreateList] = useState([])

    return (
        <CreateListContext.Provider value={{
            createList: createList,
            setCreateList: setCreateList
        }}>
            {props.children}
        </CreateListContext.Provider>
    )
}