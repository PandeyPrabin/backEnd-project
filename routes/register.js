var express = require ('express')
var app = express()


app.get('/' , (req, res) => {
    res.render('register')
});

module.exports = app;
