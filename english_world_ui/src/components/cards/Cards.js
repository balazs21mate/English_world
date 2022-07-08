import React from 'react';
import './cards.css';
import Card from './Card';

function Cards(){
    return(
        <div className="cards-container">
            <Card title="Learned words"/>
            <Card title="New words"/>
            <Card title="Practice words"/>
        </div>
    )
}

export default Cards