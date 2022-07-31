import React, { Component } from 'react'

export default class _08_PropsClass extends Component {
    constructor(){
        super();
        this.state = {
            // data: "Hello"
            data: 0
        }
    }
  render() {
    return (
      <div>
          <h2>This is a Props Class Base components</h2>
          <h3> Student Name : {this.props.student.name}</h3>
          <h3> Student Roll No : {this.props.student.roll_no}</h3>
          <h3> Student Contact No : {this.props.student.contact}</h3>
          <h1>{this.state.data}</h1>
          {/* <button onClick={()=> this.setState({data:"Vikrant"})}>Click Here</button> */}
          <button onClick={()=> this.setState({data:this.state.data+1})}>Click Here</button>
      </div>
    )
  }
}
