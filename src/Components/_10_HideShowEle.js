import React, {useState} from 'react'
import "./_10_HideShowEle.css";
// import "./App.css";

export default function _10_HideShowEle() {
    const [data, setData] = useState(false)
    
  return (
    <div className='text-menu'>
      <button onClick={()=>setData(!data)}>Toggle</button>
        {
            // data?<h2>Vikrant Mulankar</h2>:null 
            data?
            
            <ul>
              <li> <a href='#'> One  Two</a> </li>

              <li>
                <a href='#'>
                  Two
                </a>
              </li>
              <li>
                <a href='#'>
                  Three
                </a>
              </li>
              <li>
                <a href='#'>
                  Four
                </a>
              </li>
              <li>
                <a href='#'>
                  Five
                </a>
              </li>
            </ul>
            :null 
        }
        {/* <button onClick={()=>setData(true)}> Show</button>
        <button onClick={()=>setData(false)}> Hide</button> */}

    </div>
  )
}
