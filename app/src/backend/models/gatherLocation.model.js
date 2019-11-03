var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var clubSchema = new Schema({
  clubName:{
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  rating:{
    type: true,
    required: true,
    unique: true,
    trim: true
  },
  address:{
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  dressCode:{
    type: String,
    required: true,
    unique: true,
    trim: true
  },
})
var Club = mongoose.model('Club',clubSchema);
module.exports = Club;
