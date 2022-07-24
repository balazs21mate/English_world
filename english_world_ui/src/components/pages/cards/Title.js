import React from "react";

function Title({item, set_list, set_card_item}) {
  return (
    <div onClick={()=>{set_list(false); set_card_item(item)}} className='text-xl p-2 cursor-pointer md:p-1 mb-2 border-b border-secondary_color'>
        {item.title}
    </div>
  );
}

export default Title;