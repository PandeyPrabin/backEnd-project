var express = require ('express')
var app = express()
var Post = require('../models/post')
var { ensureAuthenticated } = require('../config/auth')




 app.get('/' , ensureAuthenticated, (req, res) => {
    res.render('newpost')
});

app.get('/:id' , (req, res) => {
        Post.findById(req.params.id, function(err, details){
            // console.log(details)
            // return;
             res.render('post',{items: details});
            
        })
});

app.post('/post' , (req, res) => {
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

app.get('/edit/:id', (req, res) => {
    console.log("hello")
    Post.findById(req.params.id, function(err, post){
        console.log(post)
        res.render('edit_post', {
            post:post
        })
    })
});
app.post('/edit/:id' , (req, res) => {
    let post = {};
    post.title = req.body.title
    //post.author = req.user._id
    post.email = req.body.email
    post.phonenumber = req.body.phonenumber
    post.message = req.body.message

    let query = {_id:req.params.id}

    Post.update(query, post, function(err){
        if(err){
            console.log(err)
        }else{
            res.redirect('/')  
        }
    })
});

module.exports = app;
