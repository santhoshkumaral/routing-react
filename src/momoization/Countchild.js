import React from 'react';
import {memo} from 'react'
const Countchild=memo((props)=>{
    return(
<div>
   <h2>Count is :{props.value}</h2> 
</div>
    )
})
export default Countchild