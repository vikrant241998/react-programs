import React, { Component } from 'react'

export default class _18_ComponentDidUpdate_Life extends Component {
    constructor() {
        super()
        this.state = {
            count : 0
        }
        // console.log("constructor");
    }

    componentDidUpdate(preProps, preState){
        // console.log("componentDidUpdate", this.state.count,preState);
        // console.log("componentDidUpdate",preState.count, this.state.count);
        // if(preState.count === this.state.count)
        // {
        //     alert("Data is Already Exist Here . . . . . ")
        // }
    }

  render() {
      // console.log("Remder");
    return (
      <div>
          <hr />
          <h2>ComponentDidUpdate Life Cycle by Class Components</h2>
          <h2>Number:- {this.state.count}</h2>
          <button onClick={()=> this.setState({count: this.state.count+1})}>Update Name</button>
          {/* <button onClick={()=> this.setState({count:1})}>Update Name</button> */}
      </div>
    )
  }
}
