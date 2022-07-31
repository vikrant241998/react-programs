import { useState } from 'react'

export default function _07_PropsFunc(props) {
    const [data, setData] = useState("Mumbai")
    function updateData(){
        setData("Mumbai in Maharashtra")
        // alert("Hello")
    }
  return (
    <div style={{backgroundColor: "cadetblue", color: "white"}}>
        <h2>This is a Props Function Base</h2>
        <h3>My Name is : {props.Details.name}</h3>
        <h3>My Age is : {props.Details.age}</h3>
        <h3>My Address is : {props.Details.address}</h3>
        <h3>My Email id is : {props.Details.email}</h3>
        <h2>{data}</h2>

        {/* <button onClick={()=>{setData(updateData)}}>Click Here</button> */}
    </div>
  )
}
