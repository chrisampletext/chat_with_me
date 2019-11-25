var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
  username:{type: String},
  name:{ type: String },
  sex:{ type: String },
  age:{type: Number},
  bio:{ type: String },
  //picture:{ type: String }
}

);
var user = mongoose.model('User',userSchema);
module.exports = user;
