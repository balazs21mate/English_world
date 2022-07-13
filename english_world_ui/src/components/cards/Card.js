import React, {useState} from 'react';
import './cards.css';

function Card({title, list}){
    const [counter, setCounter] = useState(0);

    const new_counter = () => {
        setCounter(Math.floor(Math.random()*list.length));
    }

    return(
        <div className='card-container'>
            <h1>{title}</h1>
            <small></small>
            <div className="Card">{list[counter]?.english}</div>
            <button className='button' onClick={new_counter}>Next</button>
        </div>
    )
}

export default Card