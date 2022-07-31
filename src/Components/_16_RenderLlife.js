import React, { Component } from 'react'

export default class _16_RenderLlife extends Component {
  constructor() 
  {
    super()
    this.state ={
      name : "Vicky"
    }
  }
  render() {
    // console.log("Render Method");
    return (
      <div>
          <hr />
          <h2>Render Life Cycle Method by Class Components</h2>
          <h2>{this.state.name}</h2>
          <button onClick={()=> this.setState({name: "Vikrant Mulankat"})}>Update Name</button>
      </div>
    )
  }
}