import React, { Component } from 'react'

export default class _15_1st_Constructor_Life extends Component {

    constructor()
    {
        super()
        this.state ={
            name : "Vikrant Mulankar",
            Age : 22,
            Address : "New Delhi"            
        }
        // console.log("Constructor")
    }
    
    render() {
        // console.log("Render")
    return (
        <div>
          <h2>1st Constructor Life Cycle Method</h2>
          <h1>Name:- {this.state.name}</h1>
          <h1>Age:- {this.state.Age}</h1>
          <h1>Address:- {this.state.Address}</h1>
      </div>
    )
  }
}