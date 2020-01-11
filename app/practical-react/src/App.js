import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//import PickLocation from "./views/picklocation";
import Navbar from "./views/navbar";
import MyProfile from "./views/myprofile";
import ViewProfiles from "./views/viewprofiles"
import Chat from "./views/chat"

function App() {
  return (
    <Router>
      <Navbar/>
      <Route path ="/myprofile" component = {MyProfile}/>
      <Route path ="/view" component = {ViewProfiles}/>
      <Route path ="/chat/:id" component = {Chat}/>
    </Router>
  );
}

export default App;
