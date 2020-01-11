import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class PickLocation extends Component{


  render(){
    return(
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link to = "/" className="navbar-brand">Chat Rooms</Link>
    <span className="navbar-toggler-icon"></span>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link to = "/myprofile" className="navbar-link">New Profile</Link>
        </li>
        <li className="nav-item active">
          <Link to = "/view" className="navbar-link">View Profiles</Link>
        </li>

      </ul>
    </div>

</nav>
    );
  }
}
