var mongoose = require('mongoose');
var express = require('express');
var path = require('path');
var logger = require('morgan');
//var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');

var appRoutes = require('./routes/app');
var userRoutes = require('./routes/app');
var foodRoute = require('./routes/food');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
mongoose.connect('mongodb://localhost:27017/healthapp');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

console.log("==================");

app.use('/', appRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.listen(8080);
 console.log("app listening on port 8080");
module.exports = app;











// //set up
// var express = require('express');
// var app = express(); //create the app
// var mongoose = require('mongoose'); //mongoose for mongodb

// var morgan = require('morgan'); //log request to console
// var bodyParser = require('body-parser');
// var methodOverride = require('method-override'); //simulate delete and put
// var cors = require('cors');
// var appRoutes = require('./routes/app');

// //config
// mongoose.connect('mongodb://localhost:27017');

// app.use(express.static(__dirname +'/public'));
// app.use(morgan('dev'));
// app.use(bodyParser.urlencoded({'extended':'true'}));
// app.use(bodyParser.json());
// app.use(bodyParser.json({type: 'application/vnd.api+json'}));
// app.use(methodOverride());
// app.use(cors());

// app.use(function(req,res,next){
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header('Access-Control-Allow-Methods', 'DELETE, PUT','GET','POST');
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

// //lisen
// app.listen(8080);
// console.log("app listening on port 8080");

// app.use('/', appRoutes);

//error 404


// var Register = mongoose.model('User', {
//     name: String,
//     age: Number
// });

// app.get('/api/Users',function(error,res){
//     Register.find(function(err,register){
//         if(err){
//             res.send(err);// sends error
//         }
//         res.json(register);
//     });
// });

// app.post('/api/users', function(req,res){
//     Register.create({
//         name: req.body.text,
//         age: req.body.text
//     }, function(err,register) {
//         if(err){
//             res.send(err);
//         }

//             Register.find(function(err,register){
//                 if(err){
//                     res.send(err);
//                 }
//                 res.json(register);
//             });
        
//     });
// });

