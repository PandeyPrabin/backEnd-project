var express = require ('express');
const { ensureAuthenticated } = require('../config/auth');
var app = express()
var Post = require('../models/post')


app.get('/show', function (req, res) {
        console.log('hello')

    Post.find({}, function(err, details){
       
        if(err){
            console.log('Cannot fetch data from database!!!');
        }else{
            details.forEach(Post);
            res.render('posts',{items: details});
        }
    })
});

module.exports = app;
