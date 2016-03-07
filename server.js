var connect = require('connect');
var http = require('http');
var app = connect();
var express = require('express');
var http= require('http');
var path= require('path');
var mongoose=require('mongoose');
var app = express();




//all environments

app.set('port',process.env.PORT || 3000);
app.set('view',__dirname+'/views');
app.set('vew engine','jade');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());


var methodOverride = require('method-override')
app.use(methodOverride('X-HTTP-Method-Override'))


app.use(express.static(path.join(__dirname,'public')));

mongoose.connect('mongodb://localhost/Company');

var Schema = new mongoose.Schema({

 _id   :String,
name:String,
age:Number


});

var user=mongoose.model('emp',Schema);

app.post('/new',function(req,res){

new user({
_id: req.body.email,
name:req.body.name,
age:req.body.age

}).save(function(err,doc){

if(err)res.json(err);
else res.send('Sucessfully inserted');

});


});



var server = http.createServer(app).listen(app.get('port'),function(){
  console.log('Express server listening on port' + app.get('port'));
});