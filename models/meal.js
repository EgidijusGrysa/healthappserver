var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Food = require('../models/food').schema;
//var mongooseVal = require('mongoose-unique-validator');

console.log("========INSIDE USER==========");
var mealSchema = new Schema ({
    
    name: {type: String, required: true},
    callories: {type: Number, required: true},
    drink: Food,
    veg: Food,
    fruit: Food,
    carbs: Food,
    protein: Food
});

//schema.plugin(mongooseVal);
module.exports = mongoose.model('Meal',mealSchema);