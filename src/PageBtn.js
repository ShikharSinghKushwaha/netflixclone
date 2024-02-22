import React from 'react'
import './Movies.css'
import { useState } from 'react'

function PageBtn( { onClick , type }) {
 // const [ page ,setPage] = useState();
 
    return (
    <div>
        <button  onClick={onClick} className="btn-primary">{type}</button>
    </div>
  )
}

export default PageBtn
