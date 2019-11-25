import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import PickLocation from "./views/picklocation";
import Navbar from "./views/navbar";
import MyProfile from "./views/myprofile";

function App() {
  return (
    <Router>
      <Navbar/>
      <Route path ="/myprofile" component = {MyProfile}/>
    </Router>
  );
}

export default App;
