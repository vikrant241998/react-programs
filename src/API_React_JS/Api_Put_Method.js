import React, {useEffect, useState} from 'react'

export default function Api_Put_Method() {
    const [data, setData] = useState([])
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [text, setText] = useState('')

    useEffect(()=>{
        getList ()        
        }, [])

        function getList (){
            fetch('https://jsonplaceholder.typicode.com/posts/1/comments').then((result)=>{
            result.json().then((resp)=>{
                // console.log(resp);
                setData(resp)
                setName(resp[0].name)
                setEmail(resp[0].email)
                setText(resp[0].text)
            })
            })
        }

            function deleteUser(id){
        fetch(`https://jsonplaceholder.typicode.com/posts/1/comments${id}`,
        {
            method:'DELETE'
        }).then((result)=>{
            result.json().then((resp)=>{
                console.log("Result New", resp);
                getList ()
            })
        })
    }
  return (
    <div>
        <hr />
        <h2>Api Update (Put) Method in React JS</h2>
        <hr />

        <table className="table table-bordered">
            <tbody>
                <tr className="table-primary">
                    <td>Id</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Body</td>
                    <td>Delete Record</td>
                    <td>Update Record</td>
                </tr>

                {
                    data.map((items, i)=>
                        <tr key={i}>
                            <td>{items.id}</td>
                            <td>{items.name}</td>
                            <td>{items.email}</td>
                            <td>{items.body}</td>
                            <td><button onClick={()=>deleteUser(items.id)}>Delete</button> </td>
                            <td><button>Update</button> </td>
                        </tr>
                    )
                }
            </tbody>
        </table>

        <input type="text" value={name} placeholder='Enter Name'/> <br />
        <input type="text" value={email} placeholder='Enter Email'/> <br />
        <input type="text" value={text}/> <br />
        <button>Update User</button>

    </div>
  )
}
