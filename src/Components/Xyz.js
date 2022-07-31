import { useState } from 'react'

export default function Xyz() {
  const [name, setName] = useState("")
  const [tnc, setTnc] = useState(false)
  const [intrest, setIntrest] = useState("")

  function getFormData(e){
    console.log(name, tnc, intrest);
    e.preventDefault()
    
  }

  function handleCng (e){
    setName(e.target.value)
    console.log(e.target.value);
  }
  
  function slcHandle (e){
    setIntrest(e.target.value)
    console.log(e.target.value);
  }

  function chkHandle (e){
    setTnc(e.target.checked)
    
    console.log(e.target.value);
  }
  return (
    <div>
      <hr />
      <h2>Fill This Form</h2>
      <form onSubmit={getFormData}>
        {/* <input type="text" placeholder='Enter the name here' onChange={(e)=>setName(e.target.value)}/>  <br /><br /> */}
        <input type="text" placeholder='Enter the name here' onChange={handleCng}/>  <br /><br />
        
        {/* <select onChange={(e)=>setIntrest(e.target.value)}> */}
        <select onChange={slcHandle}>
          <option>Select items</option>
          <option>Maruti</option>
          <option>Verna</option>
        </select><br /><br />
        {/* <input type="checkbox" name="" id="" onChange={(e)=>setTnc(e.target.checked)}/> <span>Accept term and Conditions</span> <br /><br /> */}
        <input type="checkbox" name="" id="" onChange={chkHandle}/> <span>Accept term and Conditions</span> <br /><br />
        <button type='submit' >Submit</button>
      </form>
    </div>
  )
}
