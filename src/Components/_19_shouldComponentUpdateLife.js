import React, { Component } from 'react'

export default class _19_shouldComponentUpdateLife extends Component {
    constructor() {
        super()
        this.state ={
            count : 0
        }
        // console.log("constructor");
    }

    shouldComponentUpdate() {
        // console.log("shouldComponentUpdate", this.state.count);
        if(this.state.count>5 && this.state.count<10){
            return true            
        }
    }

    render() {
        // console.log("Render");
    return (
      <div>
          <hr />
          <h2>shouldComponentUpdate Life Cycle by Class Components</h2>
           <h2>increment Number:- {this.state.count}</h2>
          <button onClick={()=> this.setState({count:this.state.count+1})}>Update Count</button>
      </div>
    )
  }
}
