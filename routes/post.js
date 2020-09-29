var express = require ('express')
var app = express()
var Post = require('../models/post')
var { ensureAuthenticated } = require('../config/auth')




 app.get('/' , ensureAuthenticated, (req, res) => {
    res.render('newpost')
});

// app.get('/new' , (req, res) => {
//     res.render('newpost')
// });

app.post('/post' , (req, res) => {
    //console.log(req.body)
const post = new Post({
    title: req.body.title,
    author: req.user._id,
    email: req.body.email,
    phonenumber: req.body.phonenumber,
    message: req.body.message
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
