import React, {useState, useEffect} from 'react'

export default function Api_Get_Method() {
  const [data, setData] = useState([ ])

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users").then((result)=>{
      result.json().then((resp)=>{
        setData(resp)
      })
    })
  },[])

  
  return (
    <div>
       <h4>API Get Method in React JS</h4>
      <table className="table table-bordered">
        <tbody border="1px">
          
          <tr className="table-dark"> 
            <td>Id</td>
            <td>Name</td>
            <td>User Name</td>
            <td>Email</td>
            <td>Phone</td>
            <td>Address</td>
            <td>Suite</td>
            <td>City</td>
            <td>Zipcode</td>
            <td>Geo Lat</td>
            <td>Geo Lang</td>
            <td>Website</td>
            <td>Company Name</td>
            <td>Company CatchPharse</td>
            <td>Company Bs</td>
          </tr>

          {
            data.map((val, i)=>
              <tr key={i}>  
                <td>{val.id}</td>
                <td>{val.name}</td>
                <td>{val.username}</td>
                <td>{val.email}</td>
                <td>{val.phone}</td>
                <td>{val.address.street}</td>
                <td>{val.address.suite}</td>
                <td>{val.address.city}</td>
                <td>{val.address.zipcode}</td>
                <td>{val.address.geo.lat}</td>
                <td>{val.address.geo.lng}</td>
                <td>{val.website}</td>
                <td>{val.company.name}</td>
                <td>{val.company.catchPhrase}</td>
                <td>{val.company.bs}</td>
              </tr>
            )
          }
        </tbody>
      </table>

    </div>
  )
}