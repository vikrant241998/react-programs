import React, {useState} from 'react'

export default function _30_State_WIth_Object() {
    const [data, setData] = useState({name:"Vikrant", age:22, email:"vikrant@gmail.com", city:"Delhi"})
  return (
    <div>
        <h3>This is a State With Object</h3>
        <input type="text" placeholder='Enter the name' value={data.name} onChange={((e)=>{setData({...data,name:e.target.value})})}/> &nbsp;
        <input type="text" placeholder='Enter the age' value={data.age} onChange={((e)=>{setData({...data,age:e.target.value})})}/> &nbsp;
        <input type="text" placeholder='Enter the email' value={data.email} onChange={((e)=>{setData({...data,email:e.target.value})})}/> &nbsp;
        <input type="text" placeholder='Enter the city' value={data.city} onChange={((e)=>{setData({...data,city:e.target.value})})}/>
        <h4>Name is: {data.name}</h4>
        <h4>Age is: {data.age}</h4>
        <h4>Email is: {data.email}</h4>
        <h4>City is: {data.city}</h4>
    </div>
  )
}
