import React, {createContext, useState, useEffect} from 'react';

export const CreateListContext = createContext(true)

export const CreateListProvider = (props) => {
    const [createList, setCreateList] = useState([]);

    useEffect(()=>{
        JSON.parse(localStorage.getItem('Items'))&&setCreateList(JSON.parse(localStorage.getItem('Items')));
    }, [setCreateList])

    return (
        <CreateListContext.Provider value={{
            createList: createList,
            setCreateList: setCreateList,
        }}>
            {props.children}
        </CreateListContext.Provider>
    )
}