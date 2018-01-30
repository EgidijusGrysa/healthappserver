var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var mongooseVal = require('mongoose-unique-validator');

console.log("========INSIDE USER==========");
var schema = new Schema ({
    
    name: {type: String, required: true}
    // password: {type: String, required: true},
    // age: {type: Number, required: true},
    // height: {type: Number,required: true},
    // email: { type:String, required: true,unique: true}
});

//schema.plugin(mongooseVal);
module.exports = mongoose.model('Food',schema);