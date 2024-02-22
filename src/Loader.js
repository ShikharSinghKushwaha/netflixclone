import React from 'react'
import { TailSpin } from 'react-loader-spinner'

function Loader() {
  return (
    <div style={{width:'100%',position:'absolute',top:'0',height:'100%',border:'2px solid yellow',display:'flex',alignItems:'center',justifyContent:'center'}}>
       <TailSpin  color="red" radius={"5px"}  strokeWidth='5' border='2px solid red'  />
    </div>
  )
}

export default Loader
