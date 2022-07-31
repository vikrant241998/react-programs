import React, { Component } from 'react'

export default class _06_StateHookClass extends Component {
    constructor(){
        super()
        this.state ={
            // data: "Vicky"
            data: 0
        }
    }
    updateData(){
        // alert("Data")
        // this.setState ({data:"Vikrant Mulankar"})
        this.setState ({data:this.state.data+1})
    }
  render() {
    return (
      <div>
          <h2>This is a Class Base State Hook</h2>
          <h1>{this.state.data}</h1>
          <button onClick={()=> this.updateData()}>Clicke Here</button>
      </div>
    )
  }
}