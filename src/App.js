import React from 'react';

import './App.css';
import Login from './mainComponents/Login';
import Navbar from './mainComponents/Navbar';
import Dashboard from './mainComponents/Dashboard';
import About from './mainComponents/About';
import Blog from './mainComponents/Blog';
import Contact from './mainComponents/Contact'
import{Route,Redirect,BrowserRouter} from 'react-router-dom'
import Checkparent from './momoization/Checkparent';
import CountParent from './momoization/CountParent';


class App extends React.Component{

  componentDidMount(){
    console.log("*****",localStorage.getItem('loginstt'));
  }
  render(){
    
    

  return (
    <div className="container">
     
      <BrowserRouter>
      {
      (localStorage.getItem('loginstt')==='1')?<Redirect to="/dashboard"/>:<Redirect to="/"/>
      
    }
      <switch>
      
      <Navbar/><br/>
 <Route exact path="/" component={Login}/>  
<Route path="/dashboard" component={Dashboard}/>
<Route path="/about" component={About}/>
<Route path="/blog" component={Blog}/>
<Route path="/contact" component={Contact}/>
</switch>

</BrowserRouter>
<Checkparent/>
<CountParent/>

    </div>
  );
} 
  
}

export default App;
