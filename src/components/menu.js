import React, { Component} from 'react';
import {BrowserRouter,Route , Switch, NavLink} from "react-router-dom";

class Menu extends Component {
  render() {
    return (
      <div >
        <h5 className="text-center"  style={{border:'1px solid black',cursor:"pointer"}}><NavLink to={{pathname: '/create_incident'}}>Create Incident</NavLink></h5>
        {/* <h5 className="text-center"  style={{border:'1px solid black',cursor:"pointer"}}><NavLink to={{pathname: '/dashboard'}}>List</NavLink></h5>
        <h5 className="text-center" style={{border:'1px solid black',cursor:"pointer"}}>Edit</h5> */}
      </div>
    );
  }
}

export default Menu;
