import {memo} from 'react';
import React from 'react'

const CheckChild=memo((props)=>{
    const divStyle = {
        color: 'blue',
      
      };
  return(
      <div>
          <h4>Memoization</h4>
          <h2>Name:<span  style={divStyle}>{props.val}</span></h2>
      </div>
  )
})
export default CheckChild