import React, {useEffect, useState} from 'react'

export default function _22_UseEffect() {
    const [count, setcount] = useState (0)

    useEffect(()=>
    {
        console.log("useEffect");
    })
    
  return (
    <div>
        <hr />
        <h2>UseEffect in React by function Components</h2>
        <h2>Hello {count}</h2>
        <button onClick={()=> setcount(1)}>Update UseEffect One Time</button> <br /> <br />
        <button onClick={()=> setcount(count+1)}>Update UseEffect</button>
    </div>
  )
}


// UseEffect 
/*
1st jab bhi hara hook banega tabh call hoga.
2nd jab koi state update hogi ye tabh call hoga
3rd UseEffect use ko hum similerli life cycle method ki trah use kr skte hai
Like:- ComponentsDidMount, ComponentsDidUpdate, ComponentsDidUnmount 
*/