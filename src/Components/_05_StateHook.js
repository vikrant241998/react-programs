import { useState } from "react"
import React from 'react'

export default function _05_StateHook() {
    const [data, setdata] = useState(0)

    function updateData() {
        setdata(data+1)
    }
  return (
    <div>
        <h2>This is a State Hook</h2>
        <h1>{data}</h1>
        <button onClick={updateData}>Increment Number</button>
    </div>
  )
}