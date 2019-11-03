var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
  userID:{
    type: Int,
    required: true,
    unique: true,
    trim: true
  },
  username:{
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  Name:{
    type: String,
    required: true,
    unique: true,
    trim: true
  },
})
var User = mongoose.model('User',userSchema);
module.exports = User;
