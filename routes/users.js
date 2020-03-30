var express = require ('express')
var app = express()

//Login Page
app.get('/login' , (req, res) => {
    res.send('login')
});

//Register Page
app.get('/register' , (req, res) => {
    res.send('register')
});


module.exports = app;
