var express = require('express');
var router  = express.Router();
var User = require('../models/user');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');


router.get('/healthapp/users', function (req, res, next) {
    User.find()
        .exec(function (err, messages) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: messages
            });
        });
});

router.post('/healthapp/users', function(req,res,next){
    var name = req.body.name;
    var user = new User({
        name: req.body.name,
        password: bcrypt.hashSync(req.body.password,10),
        email: req.body.email,
        age: req.body.age,
        weight: req.body.weight,
        height: req.body.height,
        favFood: req.body.favFood,
        disFood: req.body.disFood
    });

    console.log(user);
    
    user.save(function(err,result) {
        if(err){
            return res.status(500).json({
                title: 'An Error has occured',
                error: err
            });
        }
        res.status(201).json({
            message: 'Saved',
            obj: result
        });
    });
});

router.post('/signin', function(req,res,next){
    User.findOne({email: req.body.email}, function(err,user){
        if(err){
            return res.status(500).json({
                title: 'An error occured',
                error: err
            });
       }
       if(!user){
           return res.status(401).json({
               title: 'Login failed',
               error: {message: 'Invalid login details'}
           });
       }

       if(!bcrypt.compareSync(req.body.password, user.password)) {
        return res.status(401).json({
            title: 'Login failed',
            error: {message: 'Invalid login details'}
        });
       }
       var token = jwt.sign({user: user}, 'secret', {expiresIn: 7200});//creating token
       res.status(200).json({
           message: 'Successfully logged in!',
           token: token,
           userId: user._id 
       });
    });
});
module.exports = router;