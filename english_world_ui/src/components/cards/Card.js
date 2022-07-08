import React from 'react';
import Button from './Button';
import './cards.css';

function Card(props){

    return(
        <div className='card-container'>
            <h1>{props.title}</h1>
            <div className="Card"></div>
            <Button text="Next"/>
        </div>
    )
}

export default Card