import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './style.css';


export class Navbar extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
  render() {
    return (
     
         <div className="container">
<nav class="navbar navbar-expand-sm  bg-primary">
  <ul class="navbar-nav">
  <Link className="nav" to="/dashboard">Home</Link>
  <Link  className="nav" to="/about">About</Link>
  <Link className="nav" to="/blog">Blog</Link>
  <Link  className="nav" to="/contact">Contact</Link>
  <Link  className="nav" to="/">Logout</Link>
  </ul>
</nav>



{/* <Link to="/home">Home</Link> | 
<Link to="/about">About</Link> | 
<Link to="/contact">Contact</Link> | 
<Link to="/users">Useers</Link> |  */}

  </div>
     
    )
  }
}

export default Navbar
