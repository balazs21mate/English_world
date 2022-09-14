import React, {createContext, useState, useEffect} from 'react';

export const MemoryContext = createContext(true)

export const MemoryProvider = (props) => {
    const [rotateAll, setRotateAll] = useState(false);
    const [memoryIdList, setMemoryIdList] = useState([]);
    const [analogousIdList, setAnalogousIdList] = useState([]);
    const [disabledAllCards, setdisabledAllCards] = useState(false);

    useEffect(()=>{
        if (memoryIdList.length >= 2) {
            setdisabledAllCards(true);
            if (memoryIdList[0] !== memoryIdList[1]) {
                setTimeout(() => {
                    setRotateAll(true);
                    setMemoryIdList([]);
                    setdisabledAllCards(false);
                }, 3000);
            }else{
                setAnalogousIdList(list => [...list, memoryIdList[0]]);
                setMemoryIdList([]);
                setdisabledAllCards(false);
            }
        }
    },[memoryIdList])

    return (
        <MemoryContext.Provider value={{
            rotateAll: rotateAll,
            setRotateAll: setRotateAll,
            memoryIdList: memoryIdList,
            setMemoryIdList: setMemoryIdList,
            analogousIdList: analogousIdList,
            setAnalogousIdList: setAnalogousIdList,
            disabledAllCards: disabledAllCards
        }}>
            {props.children}
        </MemoryContext.Provider>
    )
}