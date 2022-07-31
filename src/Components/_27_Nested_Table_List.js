import { getDefaultNormalizer } from '@testing-library/react'
import React from 'react'

export default function _27_Nested_Table_List() {
    const student = [
        {fname:"Vikrant", lname:"Mulankar", Emp_id: 101, email:"vikrantmulankar@gmail.com", dob: "24/02/1995", contact:9650177426, address: [
            {House_No: 123, city:"Noida", pincode:110033, country: "india"},
            {House_No: 456, city:"Delhi", pincode:110034, country: "india"},
            {House_No: 789, city:"Delhi", pincode:110035, country: "india"},
        ]},

        {fname:"Rahul", lname:"Kumar", Emp_id: 101, email:"rahulkumar@gmail.com", dob: "26/03/1998", contact:9650177426, address: [
            {House_No: 123, city:"Noida", pincode:110033, country: "india"},
            {House_No: 456, city:"Delhi", pincode:110034, country: "india"},
            {House_No: 789, city:"Delhi", pincode:110035, country: "india"},
        ]},
        {fname:"Kishan", lname:"Sharma", Emp_id: 101, email:"rahulkumar@gmail.com", dob: "26/03/1998", contact:9650177426, address: [
            {House_No: 123, city:"Noida", pincode:110033, country: "india"},
            {House_No: 456, city:"Delhi", pincode:110034, country: "india"},
            {House_No: 789, city:"Delhi", pincode:110035, country: "india"},
        ]},
        {fname:"Kishan", lname:"Sharma", Emp_id: 101, email:"rahulkumar@gmail.com", dob: "26/03/1998", contact:9650177426, address: [
            {House_No: 123, city:"Noida", pincode:110033, country: "india"},
            {House_No: 456, city:"Delhi", pincode:110034, country: "india"},
            {House_No: 789, city:"Delhi", pincode:110035, country: "india"},
        ]},
        {fname:"Kishan", lname:"Sharma", Emp_id: 101, email:"rahulkumar@gmail.com", dob: "26/03/1998", contact:9650177426, address: [
            {House_No: 123, city:"Noida", pincode:110033, country: "india"},
            {House_No: 456, city:"Delhi", pincode:110034, country: "india"},
            {House_No: 789, city:"Delhi", pincode:110035, country: "india"},
        ]},
        {fname:"Kishan", lname:"Sharma", Emp_id: 101, email:"rahulkumar@gmail.com", dob: "26/03/1998", contact:9650177426, address: [
            {House_No: 123, city:"Noida", pincode:110033, country: "india"},
            {House_No: 456, city:"Delhi", pincode:110034, country: "india"},
            {House_No: 789, city:"Delhi", pincode:110035, country: "india"},
        ]},
        {fname:"Kishan", lname:"Sharma", Emp_id: 101, email:"rahulkumar@gmail.com", dob: "26/03/1998", contact:9650177426, address: [
            {House_No: 123, city:"Noida", pincode:110033, country: "india"},
            {House_No: 456, city:"Delhi", pincode:110034, country: "india"},
            {House_No: 789, city:"Delhi", pincode:110035, country: "india"},
        ]}
    ]
  return (
    <div>
        <hr />
        <h2>Nested Table List by function Components</h2>

        <table class="table table-info table-bordered">
            <tbody>
            <tr class="table table-primary table-borderless">
                <td>S no</td>
                <td>Emp_id</td>
                <td>FirstName</td>
                <td>LastName</td>
                <td>Email id</td>
                <td>D-O-B</td>
                <td>Contact</td>
                <td>Address</td>
            </tr>
                {
                    student.map((data, index)=>
                    <tr key={index}>
                            <td>{index+1}</td>
                            <td>{data.Emp_id}</td>
                            <td>{data.fname}</td>
                            <td>{data.lname}</td>
                            <td>{data.email}</td>
                            <td>{data.dob}</td>
                            <td>{data.contact}</td>
                            
                        <td>
                        <table class="table table-info table-bordered">
                        <tbody>
                        <tr class="table table-primary table-borderless">
                            <td>House No</td>
                            <td>City</td>
                            <td>Pincode</td>
                            <td>Country</td>
                        </tr>

                            {data.address.map((items)=>
                            <tr>
                            <td>{items.House_No}</td>
                            <td>{items.city}</td>
                            <td>{items.pincode}</td>
                            <td>{items.country}</td>
                            </tr>
                            )}  
                            </tbody>
                            </table>                          
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>

    </div>
  )
}
