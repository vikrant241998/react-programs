import React, { Component } from 'react'

export default class _17_ComponentDidMount_Life extends Component {
    constructor () {
        super()
        this.state = {
            name : "Hello"
        }
        // console.log("This is a Constructor");
    }

    componentDidMount() { 
        // console.log("This is a componentDidMount");
     }

  render() {
    //   console.log("This is s Render Method");
      
    return (
      <div>
          <hr />
          <h2>ComponentDidMount Life Cycle by Class Components</h2>
            <h2>{this.state.name}</h2>
            <button onClick={()=> this.setState({name: "Hi i am Vikrant Mulankar"})}>Update CDM</button>
      </div>
    )
  }
}
