var express = require ('express')
var app = express()
var Post = require('../models/post')

// app.get('/' , (req, res) => {
//     console.log('hello')

// var post = Post.find(function (err, result) {
//     if (err) throw err;
//     res.render('posts', {
//         data: result
//     });
// });
// //console.log(post)

//     res.redirect('/')
// });

app.get('/', function (req, res) {
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
