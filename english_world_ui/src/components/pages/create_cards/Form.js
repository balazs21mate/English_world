import React, {useEffect, useState} from "react";

function Form() {
    const [title, setTitle] = useState('');
    const [english, setEnglish] = useState('');
    const [hungarian, setHungarian] = useState('');
    const [createList, setCreateList] = useState([])

    useEffect(()=>{
        JSON.parse(localStorage.getItem('Items'))&&setCreateList(JSON.parse(localStorage.getItem('Items')));
    }, [])

    useEffect(()=>{
        createList.length !== 0&&localStorage.setItem('Items', JSON.stringify(createList));
    }, [createList])

    const set_title = (event) => {
        setTitle(event.target.value);
    }
    const set_english = (event) => {
        setEnglish(event.target.value);
    }
    const set_hungarian = (event) => {
        setHungarian(event.target.value);
    }

    const create_local_storage = () =>{
        let Item = {
            list: [{english: english,hungarian: hungarian}],
            title: title
        }

        setCreateList(list =>[...list, Item]);
    }

    return (
        <div className="flex flex-col">
            <label className="text-xl">Title:
                <input type='text' className="w-full ml-2 mt-2 border border-secondary_color rounded p-2" placeholder="Text..." onChange={set_title} value={title}/>
            </label>
            <div className="flex justify-around mt-10">
                <label className="text-xl">English:
                    <input type='text' className="w-full ml-2 mt-2 border border-secondary_color rounded p-2" placeholder="Text..." onChange={set_english} value={english}/>
                </label>
                <label className="text-xl">Hungarian:
                    <input type='text' className="w-full ml-2 mt-2 border border-secondary_color rounded p-2" placeholder="Text..." onChange={set_hungarian} value={hungarian}/>
                </label>
            </div>
            <button className="text-center max-w-[25rem] mt-6 mx-auto p-1 text-3xl bg-button text-white border-none rounded-xl shadow-button cursor-pointer outline-none mb-8 tracking-[0.3rem]" onClick={create_local_storage}>Send</button>
        </div>
    );
}

export default Form;