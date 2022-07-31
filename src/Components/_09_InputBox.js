import { useState } from 'react'

export default function _09_InputBox() {
    const [data, setData] = useState(null)
    const [print, sePrint] = useState(false)
    
  return (
    <div>
        <h2>This is a input Box Functional Components</h2>
        Enter the Text: <input type="text" onChange={(e)=>setData(e.target.value)}/>
        <button onClick={()=>sePrint(true)}>Click Here</button>
        
       { 
            print? <h1>{data}</h1>: null
       }
    </div>
  )
}
