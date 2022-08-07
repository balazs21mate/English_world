import React, {useContext, useEffect, useState} from "react";

import {CreateListContext} from '../../context/CreateList';

function Form() {

    const [title, setTitle] = useState('');
    const [english, setEnglish] = useState('');
    const [hungarian, setHungarian] = useState('');
    const [error, setError] = useState(false);
    const [errorText, setErrorText] = useState('');
    
    const {createList, setCreateList} = useContext(CreateListContext);

    useEffect(()=>{
        createList&&localStorage.setItem('Items', JSON.stringify(createList));
    }, [createList])

    const set_error = (text) =>{
        setErrorText(text)
        setError(true);
        setTimeout(() => {
            setError(false);
        }, 3000);
    } 

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
                    filteredList[0].list.push({id: filteredList[0].list.length + 1,english: english,hungarian: hungarian})
                    setCreateList(list =>[...list]);
                } else {
                    const Item = {
                        id:createList.length + 1,
                        list: [{id: 1, english: english,hungarian: hungarian}],
                        title: title
                    }
                    setCreateList(list =>[...list, Item]);
                }
            }   else {
                const Item = {
                    id:createList.length + 1,
                    list: [{id: 1,english: english,hungarian: hungarian}],
                    title: title
                }
                setCreateList(list =>[...list, Item]);
            }
        } else {
            set_error('Please, fill in all fields!');
        }
    }

    const handleDelete = () => {
        if (title.length > 0 && english.length === 0 && hungarian.length === 0) {
            if (createList.length > 0) {
                setTitle('')
                setCreateList(createList.filter(item => item.title === title?item.title !== title:set_error('This title not exist!')));
            }
        }
    }

    return (
        <div className="flex flex-col md:w-[60%] mx-auto">
            <p className={`${error?'block':'hidden'} bg-red-600 text-white rounded self-center px-1`}>{errorText}</p>
            <label className="text-xl">Title:
                <input type='text' className="w-full  mt-2 border outline-none border-secondary_color rounded p-2" placeholder="Title..." onChange={handleTitle} value={title}/>
            </label>
            <button type="button" className={`text-center w-25 h-14 mt-2 p-2 bg-button text-white border-none rounded-xl shadow-button outline-none`} onClick={handleDelete}>Delete list</button>
            <hr className='w-[80%] mt-10 mb-2 border-b-solid self-center border-secondary_color'></hr>
            <div className="flex flex-col xl:flex-row justify-between items-center">
                <div className="flex flex-col">
                    <label className="text-xl mt-1">English:
                        <input type='text' className="w-full outline-none mt-2 border border-secondary_color rounded p-2" placeholder="English..." onChange={handleInput(setEnglish)} value={english}/>
                    </label>
                    <label className="text-xl mt-1">Hungarian:
                        <input type='text' className="w-full outline-none mt-2 border border-secondary_color rounded p-2" placeholder="Hungarian..." onChange={handleInput(setHungarian)} value={hungarian}/>
                    </label>
                </div>
                <button type="button" className={`text-center w-25 h-14 mt-2 p-2 bg-button text-white border-none rounded-xl shadow-button outline-none`} onClick={handleForm}>Add new word</button>
            </div>
            <hr className='w-[80%] mt-6 border-b-solid self-center border-secondary_color'></hr>
            <button type="button" className="text-center max-w-[25rem] mt-6 mx-auto p-1 text-3xl bg-button text-white border-none rounded-xl shadow-button outline-none mb-8 tracking-[0.3rem]" onClick={()=>{setTitle('');handleForm()}}>Send</button>
        </div>
    );
}

export default Form;