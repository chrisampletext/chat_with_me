var router = require('express').Router();
var DateLocation = require('../models/dateLocation.model');

router.route('/').get((req,res)=>{
DateLocation.find()
  .then(dateLocation => res.json(dateLocation))
  .catch(err => res.status(400).json("error: "+ err));
});

router.route('/add').post((req,res) => {
  var address = req.body.address;
  var venueName = req.body.venueName;


  var newLocation = new DateLocation({address, venueName});

  newLocation.save()
  .then(()=> res.json('added'))
  .catch(err => res.status(400).json("error: "+ err));


});

module.exports = router;
