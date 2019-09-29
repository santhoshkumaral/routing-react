import React, { Component } from 'react'
import Countchild from './Countchild'

export class CountParent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:1   
      }
    }
    componentDidMount(){
       
setInterval(()=>{
    let abc=Math.floor(Math.random(0,1)*9)
    this.setState({
        count:abc
    })
},1000)
    }
    
  render() {
    return (
      <div>
        <Countchild value={this.state.count}/>
      </div>
    )
  }
}

export default CountParent
