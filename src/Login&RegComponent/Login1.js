import React, { Component } from 'react'
import './LogReg.css';
class Login extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        email:"",
        password:"" 
      }
    }
    componentWillMount(){
     
    }
    saveRecord=()=>{
       if (this.state.email=="santhosh@gmail.com" && this.state.password=="12345"){
this.props.histroy.push('.../dashboard');
//store the session storage
localStorage.setItem('loginstt',"1");
       }
       else {
           
       }
    }
    
  render() {
    return (
      <div className="container">
       <form className="floating-label">
  <div className="form-group">
   <label>Email</label>
   <input type="text" className="form-control" value={this.state.email} onChange={(evt)=>{this.setState({email:evt.target.value})}} />
  </div>
  <div className="form-group">
      <label>Password</label>
      <input type="password" className="form-control" value={this.state.password} onChange={(evt)=>this.setState({password : evt.target.value})}/>
  </div>
  <div className="form-actions">
  <button type="Cancel" className="btn btn-danger">Cancel</button>
  <button type="submit" className="btn btn-success" onClick={this.saveRecord}>Submit</button>

  </div>
</form>
      </div>
    )
  }
}

export default Login
