import React, {createContext, useState} from 'react';

export const FetchContext = createContext(true)

export const FetchProvider = (props) => {
    const [createList, setCreateList] = useState([])

    return (
        <FetchContext.Provider value={{
            createList: createList,
            setCreateList: setCreateList
        }}>
            {props.children}
        </FetchContext.Provider>
    )
}