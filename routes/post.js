var express = require ('express');
var app = express();
var Posts = require('../models/posts');


app.get('/', function (req, res) {

    Posts.find({},function(err, details){
       
        if(err){
            console.log('Cannot fetch data from database!!!');
        }else{
            res.render('post',{
                data: details,
            });
        };
    });
});

module.exports = app;
