import React from "react";
import {ArrowSmDownIcon} from '@heroicons/react/outline';

function CardsButton({lists, set_lists}) {
  return (
    <div>
        <button className="text-center h-full bg-button text-white border-none shadow-button cursor-pointer outline-none mb-2 flex items-center" onClick={()=>set_lists(!lists)}><ArrowSmDownIcon className='w-8'/></button>
    </div>
  );
}

export default CardsButton;