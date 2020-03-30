var express = require ('express')
var app = express()
var Post = require('../models/post')



app.get('/' , (req, res) => {

    Post.find({}, function(err, details){
   
        if(err){
            console.log('Cannot fetch data from database!!!');
        }else{
            details.forEach(Post);
            res.render('index',{items: details});
        }
    })     //res.render('index')
});

module.exports = app;
app.get('/', function (req, res) {
    console.log('hello')

});
