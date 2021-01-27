var express = require ('express');
var app = express();
var Posts = require('../models/posts');


app.get('/:id', function (req, res) {

    Posts.findById(req.params.id)
    .exec(function(err, details){
       
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
