import React from "react";

function Title({item, set_list, set_card_item, set_value}) {
  return (
    <div onClick={()=>{set_list(false); set_value(""); set_card_item(item[0])}} className='text-secondary_color text-xl p-2 cursor-pointer md:p-1 mb-2 border-b border-secondary_color'>
        {item[0].title}
    </div>
  );
}

export default Title;