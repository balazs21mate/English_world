import React, {useContext, useEffect, useState} from "react";

import {CreateListContext} from '../../context/CreateList';

import {PlusIcon} from '@heroicons/react/solid'

function Form() {

    const [title, setTitle] = useState('');
    const [english, setEnglish] = useState('');
    const [hungarian, setHungarian] = useState('');
    const [error, setError] = useState(false);
    
    const {createList, setCreateList} = useContext(CreateListContext);

    useEffect(()=>{
        JSON.parse(localStorage.getItem('Items'))&&setCreateList(JSON.parse(localStorage.getItem('Items')));
    }, [setCreateList])

    useEffect(()=>{
        createList?.length !== 0&&localStorage.setItem('Items', JSON.stringify(createList));
    }, [createList])

    const handleInput = (setItem)=>(event) => {
        setItem(event.target.value);
    }

    const handleTitle = (e) => setTitle(e.target.value);

    const handleForm = () =>{
        setEnglish('');
        setHungarian('');

        if (title.length > 0 && english.length > 0 && hungarian.length > 0) {
            if (createList.length > 0) {
                const filteredList = createList.filter(item => item.title === title)
                if (filteredList.length > 0) {
                    filteredList[0].list.push({english: english,hungarian: hungarian})
                    setCreateList(list =>[...list]);
                } else {
                    const Item = {
                        list: [{english: english,hungarian: hungarian}],
                        title: title
                    }
                    setCreateList(list =>[...list, Item]);
                }
            }
        } else {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 3000);
        }
    }

    return (
        <div className="flex flex-col md:w-[60%] mx-auto">
            <p className={`${error?'block':'hidden'} bg-red-600 text-white rounded self-center px-1`}>Please, fill in all fields!</p>
            <label className="text-xl">Title:
                <input type='text' className="w-full  mt-2 border outline-none border-secondary_color rounded p-2" placeholder="Title..." onChange={handleTitle} value={title}/>
            </label>
            <hr className='w-[80%] mt-10 mb-2 border-b-solid self-center border-secondary_color'></hr>
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex flex-col">
                    <label className="text-xl mt-1">English:
                        <input type='text' className="w-full outline-none mt-2 border border-secondary_color rounded p-2" placeholder="English..." onChange={handleInput(setEnglish)} value={english}/>
                    </label>
                    <label className="text-xl mt-1">Hungarian:
                        <input type='text' className="w-full outline-none mt-2 border border-secondary_color rounded p-2" placeholder="Hungarian..." onChange={handleInput(setHungarian)} value={hungarian}/>
                    </label>
                </div>
                <button type="button" className={`hidden lg:block text-center w-20 p-1 bg-button text-white border-none rounded-xl shadow-button outline-none`} onClick={handleForm}>Add new word</button>
                <button type="button" className={`lg:hidden text-center w-12 mt-2 p-1 bg-button text-white border-none rounded-xl shadow-button outline-none`} onClick={handleForm}><PlusIcon /></button>
            </div>
            <hr className='w-[80%] mt-6 border-b-solid self-center border-secondary_color'></hr>
            <button type="button" className="text-center max-w-[25rem] mt-6 mx-auto p-1 text-3xl bg-button text-white border-none rounded-xl shadow-button outline-none mb-8 tracking-[0.3rem]" onClick={()=>{setTitle('');handleForm()}}>Send</button>
        </div>
    );
}

export default Form;