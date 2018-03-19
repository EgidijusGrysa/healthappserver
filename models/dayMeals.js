var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Food = require('../models/food').schema;
var Meal = require('../models/meal').schema;
//var mongooseVal = require('mongoose-unique-validator');


var dayMeals = new Schema ({
    
    day: {type: Date,required:true},
    breakfast: Meal,
    lunch: Meal,
    dinner: Meal,
    eveMeal: Meal
});

//schema.plugin(mongooseVal);
module.exports = mongoose.model('dayMeals',dayMeals);