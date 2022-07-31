import React from 'react'

export default function _04_EventComp() {
    let message = ()=>{
        alert("This is a Alert")
    }

  return (
    <div>
        <h2>This is a Event Components</h2>
        <button onClick={message}>Alert Message</button> <br/>
    </div>
  )
}
