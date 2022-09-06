import React, {createContext, useState} from 'react';

export const MemoryContext = createContext(true)

export const MemoryProvider = (props) => {
    const [rotateAll, setRotateAll] = useState(false);

    return (
        <MemoryContext.Provider value={{
            rotateAll: rotateAll,
            setRotateAll: setRotateAll
        }}>
            {props.children}
        </MemoryContext.Provider>
    )
}