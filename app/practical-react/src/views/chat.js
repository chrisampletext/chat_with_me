import React, {Component,  useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import io from 'socket.io-client';

const ENDPOINT = "http://localhost:3000";

export default class Chat extends Component{
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.onChangeMyName = this.onChangeMyName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {user: "", text:"", myname:""}

  }

  onChangeText(e){
    this.setState({
      text: e.target.value
    });
  }

  onChangeMyName(e){
    this.setState({
    myname: e.target.value
    });
  }

handleClick(e) {
      e.preventDefault();
      document.getElementById('name').value = this.state.user.username;
      this.state.myname = this.state.user.username;
    }


componentDidMount(){

    axios.get("http://localhost:3000/user/"+this.props.match.params.id)
    .then(response=>this.setState({user : response.data}))

    var socket = io.connect(ENDPOINT);
    socket.on('new message', function(data){
      var text  = document.createElement('label');
      var br = document.createElement('br');
      text.innerHTML = `${data.name}: ${data.text}`;
      document.getElementById('chat').appendChild(text);
      document.getElementById('chat').appendChild(br);

      socket.on('disconnect', function(data){

      });
    });

}

onSubmit(e){
  e.preventDefault();
  var socket = io.connect(ENDPOINT);

  const data = {
    text : this.state.text,
    name : this.state.myname
  }

  socket.emit('chat message', data);

}

  render(){

    return(

      <form onSubmit={this.onSubmit}>
        <div>

          <h3>Chat With {this.state.user.username}</h3>
          <button className= 'btn btn-info' onClick={this.handleClick}>I am {this.state.user.username}</button>
          <div>

          <label><h5>My Name:</h5></label>
          <input id="name" type="text" className="form-control"  value={this.state.myname}  onChange= {this.onChangeMyName}/>
          </div>
          <br/>
          <label><h5>Text:</h5></label>
          <input type="text" className="form-control"  value={this.state.text}  onChange= {this.onChangeText}/>
          <button type="submit" className="btn btn-primary">Submit</button>

          <div id = "chat">
          </div>
        </div>
      </form>

    );
  }
}
