import React, { Component } from 'react';
import Checkchild from './Checkchild'

export class Checkparent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        //  namesq:["santhosh","sandesh","shashank","pradeep"],
        //  name:"",

         names :["Peter", "Bruce", "Clark"],
  state : { name: "Anonymous" }
      }
    }
    componentDidMount(){
setInterval(()=>{
    // let nm=this.state.names(Math.floor[Math.random(0,1)*this.state.names.length])
    let nm=this.state.names[Math.floor(Math.random(0,1) * this.state.names.length)];
    this.setState({
        name:nm
    })
    console.log(nm);

},1000)
    }
  render() {
    return (
      <div>
        <Checkchild val={this.state.name}/>
      </div>
    )
  }
}

export default Checkparent
