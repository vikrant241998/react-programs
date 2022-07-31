import React from 'react'

export default function _26_List_With_bootstrap_Table() {
  const student = [
      {name:"Rahul", Roll_No:101, class: "10th", email: "rahul@gmail.com", address:"New Delhi" },
      {name:"Aman", Roll_No:101, class: "11th", email: "rahul@gmail.com", address:"New Delhi" },
      {name:"Sam", Roll_No:101, class: "12th", email: "rahul@gmail.com", address:"New Delhi" },
      {name:"Vasu", Roll_No:101, class: "9th", email: "rahul@gmail.com", address:"New Delhi" },
      {name:"Vikrant", Roll_No:101, class: "8th", email: "rahul@gmail.com", address:"New Delhi" },
      {name:"Sahil", Roll_No:101, class: "12th", email: "rahul@gmail.com", address:"New Delhi" }
  ]
    return (
    <div>
        <hr />
        <h2>List With Bootstrap Table by function Components</h2>
        
        <table className="table table-light">
        <tbody>
            <tr className="table table-dark">
                <td>Name</td>
                <td>Roll_No</td>
                <td>Class</td>
                <td>Email id</td>
                <td>Address</td>
            </tr>

            {
                student.map((data, index)=>
                <tr key={index} className="table-active">
                    <td>{data.name}</td>
                    <td>{data.Roll_No}</td>
                    <td>{data.class}</td>
                    <td>{data.email}</td>
                    <td>{data.address}</td>
                </tr>
                )
            }
        </tbody>
        </table>


    </div>
  )
}
