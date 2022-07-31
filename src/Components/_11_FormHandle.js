import { useState } from 'react'

export default function _11_FormHandle() {
    const [name, setname] = useState("")
    const [tnc, setTnc] = useState(false)
    const [intrest, setintrest] = useState("")
    function getFormData (e) 
    {
        e.preventDefault()
        console.log(name, tnc, intrest)
    }
  return (
    <div>
        <hr />
         <h2>This is a Form Handle</h2>
         <h3>Fill This Student Form</h3>

            <form onSubmit={getFormData}>
                <input type="text" placeholder='enter the name'  onChange={(e)=> setname(e.target.value)}/> <br /><br />

                <select onChange={(e)=> setintrest(e.target.value)}>
                    <option>select Class</option>
                    <option>10th</option>
                    <option>11th</option>
                    <option>12th</option>
                </select> <br /><br />

                <input type="checkbox" onChange={(e)=> setTnc(e.target.checked)}/> <span>Accept Term and Conditions</span> <br /><br />
                <button type='submit'>Submit</button>

            </form>
    </div>
  )
}