import React from "react";

function CardsInput({value, set_value}) {
  return (
    <div>
        <input className='flex border h-full text-secondary_color border-button rounded-l outline-none items-center p-2' type='text' placeholder='Lists...' onChange={(e)=>set_value(e.target.value)} value={value}></input>
    </div>
  );
}

export default CardsInput;