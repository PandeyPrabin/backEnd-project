var express = require ('express');
var app = express();
var Posts = require('../models/posts');


app.get('/', function (req, res) {

    Posts.find({},function(err, details){
       
        if(err){
            console.log('Cannot fetch data from database!!!');
        }else{
            res.render('index',{
                data: details,
            });
        };
    });

});
app.get('/dashboard',ensureAuthenticated, function (req, res) {
    //console.log('dashboard')
    res.render('dashboard', {name: req.user.name})
})

module.exports = app;

