import React from 'react'

export default function _25_Array_Listing_With_Map_function() {
    const student =[
        {name:"Vicky", email:"vicky@gmail.com", contact: 9685741236, address: "old Delhi"},
        {name:"Aman", email:"aman@gmail.com", contact: 9685741236, address: "New Delhi"},
        {name:"Rahul", email:"rahul@gmail.com", contact: 9685741236, address: "old Delhi"},
        {name:"Peter", email:"peter@gmail.com", contact: 9685741236, address: "New Delhi"},
        {name:"Sam", email:"sam@gmail.com", contact: 9685741236, address: "old Delhi"},
    ]

    return (
        <div>
        <hr />        
        <h2>Array Listing With Map function</h2>
        
        <table border="1">
            <tbody>
        <tr>
            <td>Name</td>
            <td>Email</td>
            <td>contact</td>
            <td>Address</td>
        </tr>   
        {
            student.map((data, index)=>
                <tr key={index}>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.contact}</td>
                    <td>{data.address}</td>
                </tr>

                // console.log(data.name, data.email, data.contact, data.address);
            )
        }
        </tbody>
        </table>
    </div>
  )
}
