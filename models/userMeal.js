var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Food = require('../models/food').schema;
var Meal = require('../models/meal').schema;
var DayMeal = require('../models/dayMeals').schema;
//var mongooseVal = require('mongoose-unique-validator');


var userMeal = new Schema ({
    
    _id: {type: String, required:true},
    dayMeals: [{type:DayMeal, required: true}]
});

//schema.plugin(mongooseVal);
module.exports = mongoose.model('userMeal',userMeal);