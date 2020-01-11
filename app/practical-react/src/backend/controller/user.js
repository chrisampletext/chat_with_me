var router = require('express').Router();
var User = require('../models/user.model');

router.route('/').get((req,res)=>{
User.find()
  .then(user => res.json(user))
  .catch(err => res.status(400).json("error: "+ err));

});

router.route('/:id').get((req,res)=>{
User.findById(req.params.id)
  .then(user => res.json(user))
  .catch(err => res.status(400).json("error: "+ err));

});


router.route('/add').post((req,res) => {
  var username = req.body.username;
  var name = req.body.name;
  var gender = req.body.sex;
  var age = req.body.age;
  var bio = req.body.bio;

  var newUser = new User({username,name,gender,age,bio});

  newUser.save()
  .then(()=> res.json('added'))
  .catch(err => res.status(400).json("error: "+ err));

});

module.exports = router;
