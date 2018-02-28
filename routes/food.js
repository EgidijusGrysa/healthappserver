var express = require('express');
var router  = express.Router();
var Meal = require('../models/meal');
var Food = require('../models/food');

// router.get('/healthapp/users', function(req,res){
//     User.find(function(err,register){
//         if(err){
//             res.send(err);// sends error
//         }
//         res.json(register);
//     });
// });

router.post('/healthapp/meals', function(req,res,next){
    console.log(req);
    
        var meal = new Meal({
            name: req.body.name,
            callories: req.body.callories,
                drink: new Food({
                id: req.body.drink.id,
                name: req.body.drink.name,
                quantity: req.body.drink.quantity,
                grams: req.body.drink.grams,
                nutrients: req.body.drink.nutrients
            }),
            veg: new Food({
                id: req.body.veg.id,
                name: req.body.veg.name,
                quantity: req.body.veg.quantity,
                grams: req.body.veg.grams,
                nutrients: req.body.veg.nutrients
            }),
            fruit: new Food({
                id: req.body.fruit.id,
                name: req.body.fruit.name,
                quantity: req.body.fruit.quantity,
                grams: req.body.fruit.grams,
                nutrients: req.body.fruit.nutrients
            }),
            carbs: new Food({
                id: req.body.carbs.id,
                name: req.body.carbs.name,
                quantity: req.body.carbs.quantity,
                grams: req.body.carbs.grams,
                nutrients: req.body.carbs.nutrients
            }),
            protein: new Food({
                id: req.body.protein.id,
                name: req.body.protein.name,
                quantity: req.body.protein.quantity,
                grams: req.body.protein.grams,
                nutrients: req.body.protein.nutrients
            })
        })
        meal.save(function(err,result) {
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