import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';



const profileStyle = {
  width: '50px',
  height: '125px',
  color: 'red',
  border: '5px solid green'

};

//add onlcick
const Profile = ({user})=> (

  <div className="col-sm" style={profileStyle}>
  {user.username}
  <br/>
  {user.name}
  <br/>
  {user.age}
  <br/>
  {user.bio}
  <br/>
  {user.gender}

  </div>

);



export default class ViewProfiles extends Component{
  constructor(props){
    super(props);


    //this.userList = this.userList.bind(this);

    this.state = {users:[] };

  }

componentDidMount(){
    axios.get("http://localhost:3000/user")
    .then(response=>this.setState({users : response.data}))

}

userList(){
  return this.state.users.map(currentuser=>{
    return <Profile user={currentuser}/>;
  })
}



  render(){
    return(
      <div>
        <h3>Profiles</h3>
        <div className="row">
          {this.userList()}
        </div>
      </div>
    );
  }
}
