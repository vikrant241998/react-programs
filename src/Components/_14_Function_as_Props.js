import React from 'react'

export default function _14_Function_as_Props(props) {
  return (
    <div>
        <hr />
        <h2>Function Pass as a Props</h2>
        <button onClick={props.data}>Click Here</button>
    </div>
  )
}
