import { useState } from 'react'

export default function _12_if_else () {
  const [loggedin, setloggedin] = useState(true)   
  const [count, setcount] = useState(1)   
  return (
    <div>
      <h2>Conditional_Rendering if else</h2>

      {/* if else conditions */}
      {
        loggedin?<h1>Welcome Vikrant</h1>:<h1>Welcome Guest</h1> 
      }

      {/* if elseif else conditions */}
      {
        count==1?  <h1>User 1</h1>  :count==2?<h1>User 2</h1>  :<h1>User 3</h1> 
      }
      
    </div>
  )
}
