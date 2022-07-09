import React, {useState, useEffect} from 'react';
import './cards.css';

function Card({title, list}){
    const [counter, setCounter] = useState(0);
    const [text, setText] = useState("English world");

    const new_counter = () => {
        setCounter(Math.floor(Math.random()*list.length));
        setText(list[counter].english);
    }

    return(
        <div className='card-container'>
            <h1>{title}</h1>
            <div className="Card">{text}</div>
            <button className='button' onClick={new_counter}>Next</button>
        </div>
    )
}

export default Card