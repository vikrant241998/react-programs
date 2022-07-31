import React, { useEffect } from 'react'

export default function _24_UseEffect_With_Props(props) {
    useEffect(()=>{
        console.log("useEffect");
    }, [props.data])

    useEffect(()=>{
        alert("Count is : " + props.count)
    }, [props.count])


  return (
    <div>
        <hr />
        <h2>UseEffect With Props by function Components</h2>
        <h2>Number is : {props.data}</h2>
        <h2>Number is : {props.count}</h2>
    </div>
  )
}
