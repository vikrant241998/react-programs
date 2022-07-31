import React, {useState, useEffect} from 'react'

export default function _23_UseEffect_With_State() {
    const [data, setData] = useState(10)
    const [count, setCount] = useState(100)
    useEffect(() => {
      console.log("Called with data state");
    }, [data])

    useEffect(() => {
        alert("count is : "+ count)
      }, [count])
    
  return (
    <div>
        <hr />
        <h2>UseEffect With State by function Components</h2>
        <h2>Number is:- {data}</h2>
        <h2>Number is:- {count}</h2>
        <button onClick={()=> setData(data+1)}>Update Data</button>
        &nbsp;&nbsp;&nbsp;
        <button onClick={()=> setCount(count+1)}>Update Count</button>
    </div>
  )
}
