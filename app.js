var connect = require('connect');                      //nesaary for middleware.
var http = require('http');
var app = connect();
var express = require('express');                       //express node.js framework (server side scipting).
var http= require('http');
var path= require('path');
var mongoose=require('mongoose');                       //mongoose module.
var app = express();




//all environments

       
app.set('view',__dirname+'/views');
app.set('vew engine','jade');

var bodyParser = require('body-parser');                        //middleware.
var urlencodedParser = bodyParser.urlencoded({ extended: false })




var methodOverride = require('method-override')              //middleware.
app.use(methodOverride('X-HTTP-Method-Override'))


app.use(express.static(path.join(__dirname,'public')));


mongoose.connect('mongodb://localhost/empdetails');             // Company is the database name.

var Schema = new mongoose.Schema({                          //Form data's  schema.
 _id   :String,
name:String,
age:Number


});

var user=mongoose.model('emp',Schema);
app.use(express.static('public'));

app.get('/index.htm', function (req, res) {                    //routing.
   res.sendFile( __dirname + "/" + "index.htm" );
})



app.post('/process_post',urlencodedParser,function(req,res){                //app.post (data from form to database).

new user({
_id: req.body.email,
name:req.body.name,
age:req.body.age

}).save(function(err,doc){

if(err)res.json(err);
else res.send('Sucessfully inserted');

});


});

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})

