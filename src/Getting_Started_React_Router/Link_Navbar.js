import React from 'react'
import { Link } from 'react-router-dom'

export default function Link_Navbar() {
  return (
    <div>
        <Link to="/">Home</Link>  &nbsp;&nbsp;&nbsp;
    <Link to="/about">About</Link> &nbsp;&nbsp;&nbsp;
    <Link to="/services">Services</Link> &nbsp;&nbsp;&nbsp;
    <Link to="/contact">Contact</Link> &nbsp;&nbsp;&nbsp;
    {/* <Link to="/user/Vicky">Vicky</Link> &nbsp;&nbsp;&nbsp;
    <Link to="/user/Rahul">Rahul</Link> */}
    </div>
  )
}
