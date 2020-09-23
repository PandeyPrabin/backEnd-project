var express = require ('express')
var app = express()
var Post = require('../models/post')



 app.get('/' , (req, res) => {
    res.render('newpost')
});

// app.get('/new' , (req, res) => {
//     res.render('newpost')
// });

app.post('/post' , (req, res) => {
    //console.log(req.body)
const post = new Post({
    title: req.body.title,
    email: req.body.email,
    phonenumber: req.body.phonenumber,
    message: req.body.message

})
console.log(post)
post.save();
res.redirect('/');

});

module.exports = app;
