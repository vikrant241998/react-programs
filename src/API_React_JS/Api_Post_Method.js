import React, {useEffect, useState} from 'react'

export default function Api_Post_Method() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [body, setBody] = useState("")
    
    function submitHandle () {
        console.warn({name, email, body});   
        const data = {name, email, body};
        // fetch('https://jsonplaceholder.typicode.com/posts/1/comments', {
        fetch('.//Data.JSON', {
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        }).then((result)=>{
            console.warn("result", result)
        })     
    }
  return (
    <div>
        <hr />
        <hr />
        <h3>API Post Method in React Js</h3>
        <hr />

        <input type="text" name='name' value={name} onChange={(e)=>{setName(e.target.value)}}  /> <br />
        <input type="text" name='email'value={email}onChange={(e)=>{setEmail(e.target.value)}} /> <br />
        <input type="text" name='body' value={body} onChange={(e)=>{setBody(e.target.value)}} /> <br />
        <button type='submit' onClick={submitHandle}>Submit</button>
    </div>
  )
}
