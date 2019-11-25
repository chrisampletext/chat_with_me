var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var dateLocationSchema = new Schema({
  address:{
    type: String,
  },
  venueName:{
    type: String,
  },

})
var dateLocation = mongoose.model('DateLocation',dateLocationSchema);
module.exports = dateLocation;
