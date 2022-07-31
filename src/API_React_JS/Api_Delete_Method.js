import React, {useEffect, useState} from 'react'

export default function Api_Delete_Method() {
    const [data, setData] = useState([])

    useEffect(()=>{
        getList ()        
        }, [])

        function getList (){
            fetch('https://jsonplaceholder.typicode.com/posts').then((result)=>{
            result.json().then((resp)=>{
                // console.log(resp);
                setData(resp)
            })
            })
        }

            function deleteUser(id){
        fetch(`https://jsonplaceholder.typicode.com/posts${id}`,
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
        <h2>Api Delete Method in React JS</h2>
        <hr />

        <table className="table table-bordered">
            <tbody>
                <tr className="table-primary">
                    <td>User ID</td>
                    <td>Id</td>
                    <td>Title</td>
                    <td>Body</td>
                    <td>Delete Record</td>
                </tr>

                {
                    data.map((items, i)=>
                        <tr key={i}>
                            <td>{items.userId}</td>
                            <td>{items.id}</td>
                            <td>{items.title}</td>
                            <td>{items.body}</td>
                            <td><button onClick={()=>deleteUser(items.id)}>Delete</button> </td>
                        </tr>
                    )
                }
            </tbody>
        </table>

    </div>
  )
}
