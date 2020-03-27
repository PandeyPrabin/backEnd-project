var express = require ('express')
var app = express()
var Post = require('../models/post')

app.get('/' , (req, res) => {
    console.log('hello')

var post = Post.find(function (err, result) {
    if (err) throw err;
    res.render('posts', {
        data: result
    });
});
//console.log(post)

    res.redirect('/')
});

module.exports = app;
