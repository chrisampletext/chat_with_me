import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class MyProfile extends Component{



  constructor(props){
    super(props);

    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeSex = this.onChangeSex.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeBio = this.onChangeBio.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name:"",
      username:"",
      sex:"",
      age: 0,
      bio:"",
    }


  }


  onChangeName(e){
    this.setState({
      name: e.target.value
    });
  }

  onChangeUserName(e){
    this.setState({
      username: e.target.value
    });
  }

  onChangeSex(e){
    this.setState({
      sex: e.target.value
    });
  }

  onChangeAge(e){
    this.setState({
      age: e.target.value
    });
  }


  onChangeBio(e){
    this.setState({
      bio: e.target.value
    });
  }

  onSubmit(e){
    e.preventDefault();
    const profile = {
      username : this.state.username,
      name : this.state.name,
      sex : this.state.sex,
      age : this.state.age,
      bio : this.state.bio
    }

    axios.post("http://localhost:3000/user/add", profile)
      .then(response=>console.log(response.data));

    window.location = '/';
  }

  render(){
    return(
      <form onSubmit={this.onSubmit}>

        <div className="form-group">
          <label>Username</label>
          <input type="text" className="form-control" id="email" value={this.state.username}  onChange= {this.onChangeUserName}/>
        </div>

        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" id="email" value={this.state.name}  onChange= {this.onChangeName}/>
        </div>

        <div className="form-group">
          <label>Age</label>
          <input type="text" className="form-control"  id="age" value={this.state.age}  onChange= {this.onChangeAge}/>
        </div>

        <div className="form-group">
          <label>Bio</label>
          <input type="text" className="form-control" id="bio" value={this.state.bio}  onChange= {this.onChangeBio}/>
        </div>

        <div className="form-group">
          <label>Gender</label>
          <br/>
          <select value = {this.state.sex} onChange = {this.onChangeSex}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}
