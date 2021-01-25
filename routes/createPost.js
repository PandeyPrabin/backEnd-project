var express = require ('express')
var app = express()
const Posts = require ('../models/posts')


app.get('/' , (req, res) => {
    res.render('createPost')
});


app.post('/store' , (req, res) => {
    const post = new Posts({
        title: req.body.title,
        description: req.body.description,
        // author: req.user._id,
        // email: req.body.email,
        // phonenumber: req.body.phonenumber,
        // message: req.body.message
    })
    //console.log(post)
    post.save(function(err){
        if(err){
            console.log(err)
            return;
        }else{
            res.redirect('/')
        }
    });
    });

module.exports = app;


