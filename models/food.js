var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var foodSchema = new Schema ({
    
    id: {type: String, required: true},
    name: {type: String, required: true},
    quantity: {type: Number, required:false},
    grams: {type: Number, required: false},
    nutrients: {type: Array,required: true}
    
});

//Schema.plugin(mongooseVal);
module.exports = mongoose.model('Food',foodSchema);