import React, {createContext, useState, useEffect} from 'react';

export const MemoryContext = createContext(true)

export const MemoryProvider = (props) => {
    const [rotateAll, setRotateAll] = useState(false);
    const [memoryIdList, setMemoryIdList] = useState([]);

    useEffect(()=>{
        if (memoryIdList.length === 2) {
            if (memoryIdList[0] !== memoryIdList[1]) {
                setTimeout(() => {
                    setRotateAll(true);
                    setMemoryIdList([]);
                }, 3000);
            }else{
                setMemoryIdList([]);
            }
        }
    },[memoryIdList])

    return (
        <MemoryContext.Provider value={{
            rotateAll: rotateAll,
            setRotateAll: setRotateAll,
            memoryIdList: memoryIdList,
            setMemoryIdList: setMemoryIdList
        }}>
            {props.children}
        </MemoryContext.Provider>
    )
}