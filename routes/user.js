var express = require('express');
var router  = express.Router();
var User = require('../models/user');


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
    console.log("==========INSIDE POST========");
    var name = req.body.name;
    var user = new User({
        name: req.body.name
    });
    console.log(req.body);
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

module.exports = router;