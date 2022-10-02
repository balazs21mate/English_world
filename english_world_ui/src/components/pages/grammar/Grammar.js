import React, { useContext } from 'react'
import { FetchContext } from '../../context/Fetch'
import PagesTitle from '../PagesTitle'

function Grammar(){
  const {grammarList} = useContext(FetchContext);

  console.log(grammarList)

    return(
        <div className="flex flex-col items-center">
          <PagesTitle title="Grammar"/>
        </div>
    )
}

export default Grammar