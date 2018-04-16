

var express = require('express');
var router  = express.Router();
var Meal = require('../models/meal');
var Food = require('../models/food');
var DayMeal = require('../models/dayMeals');
var UserMeal = require('../models/userMeal');

// router.get('/healthapp/usermeals', function (req, res, next) {
//     UserMeal.find()
//         .exec(function (err, messages) {
//             if (err) {
//                 return res.status(500).json({
//                     title: 'An error occurred',
//                     error: err
//                 });
//             }
//             res.status(200).json({
//                 message: 'Success',
//                 obj: messages
//             });
//         });
// });

router.post('/healthapp/meals', function(req,res,next){
    console.log(req.body.dayMeal.eveMeal);
        var userMeal = new UserMeal({
            _id: req.body.userID,
            dayMeals: {
                day: req.body.dayMeal.date,
                breakfast: req.body.dayMeal.breakfast,
                lunch: req.body.dayMeal.lunch,
                dinner: req.body.dayMeal.dinner,
                eveMeal: req.body.dayMeal.eveMeal
            }
        });
    
    userMeal.save(function(err,result) {
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

router.get('/healthapp/usermeals/:userID',function(req,res,next){
    UserMeal.findById(req.params.userID, function(err,user){
        console.log(req.params.userID);
        if(err){
            return res.status(500).json({
                title: 'Error has occured',
                error: err
            });
        }

        if(!res){
            return res.status(500).json({
                title:'No set of meals found for this user',
                error:err
            });
        }else {
            res.status(200).json({
                obj: user
            });
        }
        console.log(user);
       
    });
});

router.put('/healthapp/usermeals/:id', function(req,res,next){
    UserMeal.findById(req.params.id, function(err,item) {
        if(err){
            return res.status(500).json({
                title: 'An Error has occured',
                error: err
            });
        }
        if(!res){
            return res.status(500).json({
                title:'No Meal found for that user',
                error: {
                    message: 'Meal not found'
                }
            });
        }
        res.dayMeals = {
            day: req.body.dayMeal.date,
            breakfast: req.body.dayMeal.breakfast,
            lunch: req.body.dayMeal.lunch,
            dinner: req.body.dayMeal.dinner,
            eveMeal: req.body.dayMeal.eveMeal
        };
        item.save(function(err,result){
            if(err){
                return res.status(500).json({
                    title: 'An Error has occured',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Updated message',
                obj: result
            });
        });
    });
});

        
        
    
    
   

module.exports = router;