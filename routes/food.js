var express = require('express');
var router  = express.Router();
var Food = require('../models/food');

// router.get('/healthapp/users', function(req,res){
//     User.find(function(err,register){
//         if(err){
//             res.send(err);// sends error
//         }
//         res.json(register);
//     });
// });

router.post('/foods', function(req,res,next){
    console.log("==========INSIDE POST========");
    var name = req.body.name;
    var user = new Food({
        name: name
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