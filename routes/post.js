var express = require ('express')
var app = express()
var Post = require('../models/post')



// app.get('/' , (req, res) => {
//     res.render('post')
// });

app.get('/' , (req, res) => {
    res.render('newpost')
});
app.get('/show' , (req, res) => {
    console.log('hello')
    res.redirect('/')
});

app.post('/post' , (req, res) => {
    console.log(req.body.name)
const post = new Post({
    name: req.body.name,
    email: req.body.email

})
console.log(post)
res.redirect('/')
});

module.exports = app;
