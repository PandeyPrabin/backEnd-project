var express = require ('express')
var app = express()
var Post = require('../models/post')



// app.get('/' , (req, res) => {
//     res.render('post')
// });

app.get('/new' , (req, res) => {
    res.render('newpost')
});

app.post('/post' , (req, res) => {
    console.log(req.body)
const post = new Post({
    title: req.body.title,
    email: req.body.email

})
console.log(post)
res.redirect('/')
});

module.exports = app;
