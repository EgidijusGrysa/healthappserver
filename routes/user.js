var express = require('express');
var router  = express.Router();
var User = require('../models/user');
var bcrypt = require('bcryptjs');


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
        favFoods: req.body.favFoods,
        disFood: req.body.disFood
    });
    
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

module.exports = router;