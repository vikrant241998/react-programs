import React, { Component } from 'react'

export default class _20_ComponentWillUnmount extends Component {
    constructor(){
        super()
        this.state = {
            show : true
        }
        console.log("constructor");        
    }

    componentWillUnmount() {
        alert("componentWillUnmount Called")
    }
  render() {
      console.log("Render");
    return (
      <div>
          <hr />
          <h2>ComponentWillUnmount Life Cycle by Class Components</h2>
          {
              this.state.show?<h1>Child components</h1>: <h1>Child components Removed</h1>
          }
        
          <button onClick={()=> this.setState({show: !this.state.show})}>Toggle Button</button>
      </div>
    )
  }
}
