import React, {useState} from 'react'

export default function _21_Hooks_in_React() {
  
  const [data, setData] = useState("Vicky")

  return (
    <div>
      <hr />
      <h2>Hooks in React by Function Components</h2>
      <h2>Hello {data}</h2>
      <button onClick={()=> setData("Vikrant Mulankar")}>Update Hook</button>
    </div>
  )
}
